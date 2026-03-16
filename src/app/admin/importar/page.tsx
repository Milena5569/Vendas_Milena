"use client";

import { useMemo, useState } from "react";
import { parseImportUrls } from "@/lib/parse-import-urls";

type CategoryOption = {
  id: string;
  nome: string;
  slug: string;
};

type ProductImportFormData = {
  nome: string;
  slug: string;
  descricao_curta: string;
  descricao_completa: string;
  loja_origem: string;
  categoria_id: string;
  subcategoria: string;
  genero: string;
  tipo: string;
  imagem_capa_url: string;
  link_padrao: string;
  preco_original: number | null;
  preco_promocional: number | null;
  moeda: string;
  ativo: boolean;
  disponivel: boolean;
  destaque: boolean;
  ordem_exibicao: number | null;
  tags: string[];
  marca: string;
  sku_externo: string;
};

type ProductDraft = {
  draft_id: string;
  source_url: string;
  normalized_url: string;
  suggested_category_slug: string;
  suggested_subcategoria: string;
  suggested_genero: string;
  dedupe: {
    exists: boolean;
    existing_product_id: string | null;
    reason: "link_padrao" | "normalized_url" | "sku_externo" | "none";
  };
  form: ProductImportFormData;
};

type AnalyzeResponse = {
  success: boolean;
  source: string;
  processed: number;
  categories: CategoryOption[];
  drafts: ProductDraft[];
  errors: Array<{
    source_url: string;
    message: string;
  }>;
};

type SaveResponse = {
  success: boolean;
  status: "created" | "updated" | "failed";
  message: string;
  product_id?: string;
  draft_id?: string;
};

type SaveManyResponse = {
  success: boolean;
  processed: number;
  results: SaveResponse[];
};

type DraftState = ProductDraft & {
  reviewConfirmed?: boolean;
  isSaving?: boolean;
  isSaved?: boolean;
  saveStatus?: "created" | "updated" | "failed";
  saveMessage?: string;
  productId?: string;
};

type ApiErrorResponse = {
  success: false;
  message?: string;
};

function getErrorMessage(payload: unknown, fallback: string): string {
  if (payload && typeof payload === "object" && "message" in payload) {
    const maybeMessage = (payload as { message?: unknown }).message;
    if (typeof maybeMessage === "string" && maybeMessage.trim()) {
      return maybeMessage;
    }
  }
  return fallback;
}

export default function AdminImportPage() {
  const [input, setInput] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [savingAll, setSavingAll] = useState(false);
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [drafts, setDrafts] = useState<DraftState[]>([]);
  const [summary, setSummary] = useState<AnalyzeResponse | null>(null);
  const [globalMessage, setGlobalMessage] = useState<string | null>(null);
  const validUrls = useMemo(() => parseImportUrls(input), [input]);

  function dedupeReasonLabel(reason: DraftState["dedupe"]["reason"]): string {
    if (reason === "link_padrao") return "URL final/padrão já existente";
    if (reason === "normalized_url") return "URL normalizada já existente";
    if (reason === "sku_externo") return "SKU externo já existente";
    return "Sem duplicidade";
  }

  function isDraftValid(draft: DraftState): boolean {
    return getMissingRequiredFields(draft).length === 0;
  }

  function getMissingRequiredFields(draft: DraftState): string[] {
    const missing: string[] = [];
    if (!draft.form.nome.trim()) missing.push("nome");
    if (!draft.form.link_padrao.trim()) missing.push("link_padrao");
    if (!draft.form.loja_origem.trim()) missing.push("loja_origem");
    if (!draft.form.categoria_id.trim()) missing.push("categoria_id");
    if (typeof draft.form.ativo !== "boolean") missing.push("ativo");
    if (typeof draft.form.disponivel !== "boolean") missing.push("disponivel");
    return missing;
  }

  function isDraftReadyToSave(draft: DraftState): boolean {
    return Boolean(draft.reviewConfirmed) && isDraftValid(draft) && !draft.isSaving;
  }

  function getDraftStatus(draft: DraftState, valid: boolean): {
    label: string;
    tone: string;
  } {
    if (draft.isSaving) return { label: "Salvando...", tone: "text-blue-300" };
    if (draft.saveStatus === "failed") return { label: "Falhou", tone: "text-red-300" };
    if (draft.saveStatus === "updated") {
      return { label: "Atualizado", tone: "text-blue-300" };
    }
    if (draft.saveStatus === "created") {
      return { label: "Salvo", tone: "text-emerald-300" };
    }
    if (!valid) return { label: "Metadados incompletos", tone: "text-yellow-200" };
    if (draft.dedupe.exists) return { label: "Duplicado detectado", tone: "text-yellow-200" };
    if (draft.reviewConfirmed && valid) return { label: "Pronto para salvar", tone: "text-emerald-300" };
    return { label: "Analisado", tone: "text-text-secondary" };
  }

  function updateDraft(index: number, updater: (draft: DraftState) => DraftState) {
    setDrafts((current) => current.map((item, itemIndex) => (itemIndex === index ? updater(item) : item)));
  }

  function updateField(index: number, field: keyof ProductImportFormData, value: any) {
    updateDraft(index, (draft) => ({
      ...draft,
      form: {
        ...draft.form,
        [field]: value,
      },
      reviewConfirmed: false,
      isSaved: false,
      saveStatus: undefined,
      saveMessage: undefined,
      productId: undefined,
    }));
  }

  function parseNumber(value: string): number | null {
    if (!value.trim()) return null;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  function formatTags(tags: string[]): string {
    return tags.join(", ");
  }

  function parseTags(value: string): string[] {
    return value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  async function handleAnalyze() {
    const normalizedInput = input.replace(/\\n/g, "\n");
    const urls = parseImportUrls(normalizedInput);
    if (normalizedInput !== input) setInput(normalizedInput);
    if (urls.length === 0) {
      setGlobalMessage("Nenhuma URL válida encontrada. Cole links válidos (Shopee, Shein ou TikTok Shop).");
      return;
    }

    setAnalyzing(true);
    setGlobalMessage(null);
    setSummary(null);
    setDrafts([]);

    try {
      const response = await fetch("/api/admin/import-products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "analyze", input: normalizedInput }),
      });

      const data = (await response.json()) as AnalyzeResponse | ApiErrorResponse;
      if (!response.ok || !data.success) {
        setGlobalMessage(getErrorMessage(data, "Falha ao analisar links."));
        return;
      }

      setSummary(data);
      setCategories(data.categories || []);
      setDrafts((data.drafts || []).map((draft) => ({ ...draft, reviewConfirmed: false, isSaved: false })));
    } catch (error: any) {
      setGlobalMessage(error?.message || "Erro ao analisar links.");
    } finally {
      setAnalyzing(false);
    }
  }

  async function handleSaveDraft(index: number) {
    const target = drafts[index];
    if (!target || !target.reviewConfirmed || !isDraftValid(target)) return;

    updateDraft(index, (draft) => ({ ...draft, isSaving: true, saveMessage: undefined }));

    try {
      const response = await fetch("/api/admin/import-products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save",
          draft: {
            draft_id: target.draft_id,
            source_url: target.source_url,
            normalized_url: target.normalized_url,
            dedupe: target.dedupe,
            form: target.form,
            allow_update_existing: true,
          },
        }),
      });

      const data = (await response.json()) as SaveResponse | ApiErrorResponse;
      if (!response.ok || !data.success) {
        updateDraft(index, (draft) => ({
          ...draft,
          isSaving: false,
          isSaved: false,
          saveStatus: "failed",
          saveMessage: getErrorMessage(data, "Falha ao salvar produto."),
        }));
        return;
      }

      updateDraft(index, (draft) => ({
        ...draft,
        isSaving: false,
        isSaved: true,
        saveStatus: data.status,
        saveMessage: data.message,
        productId: data.product_id,
      }));
    } catch (error: any) {
      updateDraft(index, (draft) => ({
        ...draft,
        isSaving: false,
        isSaved: false,
        saveStatus: "failed",
        saveMessage: error?.message || "Erro ao salvar produto.",
      }));
    }
  }

  async function handleSaveAll() {
    if (drafts.length === 0) return;

    const eligibleDrafts = drafts.filter((draft) => isDraftReadyToSave(draft));
    if (eligibleDrafts.length === 0) {
      setGlobalMessage("Nenhum rascunho elegível para salvar em lote. Revise campos obrigatórios e confirme a revisão.");
      return;
    }

    const skippedCount = drafts.length - eligibleDrafts.length;

    setSavingAll(true);
    setGlobalMessage(
      skippedCount > 0
        ? `${eligibleDrafts.length} item(ns) elegível(is) enviado(s). ${skippedCount} item(ns) inválido(s) ou sem revisão foram mantidos para edição.`
        : null
    );
    const eligibleIds = new Set(eligibleDrafts.map((draft) => draft.draft_id));
    setDrafts((current) =>
      current.map((draft) =>
        eligibleIds.has(draft.draft_id)
          ? {
              ...draft,
              isSaving: true,
              saveMessage: undefined,
            }
          : draft
      )
    );

    try {
      const response = await fetch("/api/admin/import-products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "saveMany",
          drafts: eligibleDrafts.map((draft) => ({
            draft_id: draft.draft_id,
            source_url: draft.source_url,
            normalized_url: draft.normalized_url,
            dedupe: draft.dedupe,
            form: draft.form,
            allow_update_existing: true,
          })),
        }),
      });

      const data = (await response.json()) as SaveManyResponse | ApiErrorResponse;
      if (!response.ok || !data.success) {
        const message = getErrorMessage(data, "Falha ao salvar todos os produtos.");
        setGlobalMessage(message);
        setDrafts((current) =>
          current.map((draft) => ({
            ...draft,
            isSaving: eligibleIds.has(draft.draft_id) ? false : draft.isSaving,
            isSaved: eligibleIds.has(draft.draft_id) ? false : draft.isSaved,
            saveStatus: eligibleIds.has(draft.draft_id) ? "failed" : draft.saveStatus,
            saveMessage: eligibleIds.has(draft.draft_id) ? message || "Falha ao salvar em lote." : draft.saveMessage,
          }))
        );
        return;
      }

      const resultMap = new Map((data.results || []).map((result) => [result.draft_id, result]));
      setDrafts((current) =>
        current.map((draft) => {
          const result = resultMap.get(draft.draft_id);
          if (!eligibleIds.has(draft.draft_id)) return draft;
          return {
            ...draft,
            isSaving: false,
            isSaved: Boolean(result?.success),
            saveStatus: result?.status,
            saveMessage: result?.message,
            productId: result?.product_id,
          };
        })
      );
    } catch (error: any) {
      setGlobalMessage(error?.message || "Erro ao salvar todos os produtos.");
      const eligibleIds = new Set(eligibleDrafts.map((draft) => draft.draft_id));
      setDrafts((current) =>
        current.map((draft) =>
          eligibleIds.has(draft.draft_id)
            ? {
                ...draft,
                isSaving: false,
                saveStatus: "failed",
                saveMessage: "Erro inesperado no salvamento em lote.",
              }
            : draft
        )
      );
    } finally {
      setSavingAll(false);
    }
  }

  const hasInvalidDraft = drafts.some((draft) => !isDraftValid(draft));
  const hasDraftWithoutReview = drafts.some((draft) => !draft.reviewConfirmed);
  const eligibleSaveAllCount = drafts.filter((draft) => isDraftReadyToSave(draft)).length;

  return (
    <div className="min-h-screen bg-background-primary py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h1 className="text-3xl font-bold text-text-primary">Importar produtos por URL (assistido)</h1>
        <p className="mt-2 text-text-secondary">
          Cole uma ou várias URLs, analise os metadados sugeridos, revise os campos e confirme antes de salvar no Supabase.
        </p>

        <div className="mt-6 rounded-2xl border border-border-soft bg-surface-card p-5">
          <p className="mb-3 text-xs text-text-secondary">
            Formatos aceitos: URL única, lista em texto (uma por linha) ou array JSON (ex.: ["https://...", "https://..."]).
          </p>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="https://s.shopee.com.br/15enzBAUj\nhttps://s.shopee.com.br/W1vOu9GTq"
            className="h-48 w-full resize-y rounded-xl border border-border-soft bg-background-primary p-4 text-sm text-text-primary outline-none transition focus:border-accent-primary/50"
          />
          <p className="mt-2 text-xs text-text-secondary">URLs válidas detectadas: {validUrls.length}</p>

          <button
            type="button"
            onClick={handleAnalyze}
            disabled={analyzing || validUrls.length === 0}
            className="mt-4 rounded-full bg-accent-primary px-6 py-2.5 text-sm font-semibold text-background-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {analyzing ? "Analisando..." : "Analisar links"}
          </button>
        </div>

        {globalMessage && (
          <div className="mt-6 rounded-2xl border border-red-300/40 bg-red-500/10 p-5 text-sm text-red-200">{globalMessage}</div>
        )}

        {summary && (
          <div className="mt-6 rounded-2xl border border-border-soft bg-surface-card p-5">
            <p className="text-sm text-text-secondary">
              Fonte: <strong className="text-text-primary">{summary.source || "n/a"}</strong> • Processados: {summary.processed ?? 0} • Rascunhos: {drafts.length}
            </p>
            <p className="mt-1 text-sm text-text-secondary">Categorias ativas carregadas: {categories.length}</p>

            {summary.errors?.length > 0 && (
              <div className="mt-3 rounded-xl border border-yellow-300/40 bg-yellow-500/10 p-3 text-xs text-yellow-100">
                {summary.errors.map((item, index) => (
                  <p key={`${item.source_url}-${index}`}>{item.source_url || "URL"}: {item.message}</p>
                ))}
              </div>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleSaveAll}
                disabled={savingAll || drafts.length === 0 || eligibleSaveAllCount === 0}
                className="rounded-full bg-accent-primary px-5 py-2 text-sm font-semibold text-background-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {savingAll ? "Salvando todos..." : "Salvar todos"}
              </button>
              {hasDraftWithoutReview && drafts.length > 0 && eligibleSaveAllCount > 0 && (
                <span className="text-xs text-yellow-200">Itens sem revisão serão ignorados no salvamento em lote.</span>
              )}
              {hasInvalidDraft && drafts.length > 0 && eligibleSaveAllCount > 0 && (
                <span className="text-xs text-yellow-200">Itens com metadados incompletos serão mantidos para edição.</span>
              )}
              {eligibleSaveAllCount === 0 && drafts.length > 0 && (
                <span className="text-xs text-yellow-200">Nenhum item elegível para salvar em lote no momento.</span>
              )}
            </div>

            <div className="mt-6 space-y-4">
              {drafts.map((draft, index) => {
                const valid = isDraftValid(draft);
                const missingRequiredFields = getMissingRequiredFields(draft);
                const status = getDraftStatus(draft, valid);
                const statusColor =
                  draft.saveStatus === "created"
                    ? "text-emerald-300"
                    : draft.saveStatus === "updated"
                    ? "text-blue-300"
                    : draft.saveStatus === "failed"
                    ? "text-red-300"
                    : "text-text-secondary";

                return (
                  <div key={draft.draft_id} className="rounded-2xl border border-border-soft bg-background-primary p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-text-primary">Produto {index + 1}: {draft.form.nome || "Sem nome"}</p>
                        <p className={`text-xs font-semibold ${status.tone}`}>Status: {status.label}</p>
                        <p className="text-xs text-text-secondary">URL original: {draft.source_url}</p>
                        <p className="text-xs text-text-secondary">URL normalizada: {draft.normalized_url}</p>
                        <p className="text-xs text-text-secondary">Sugestões: categoria {draft.suggested_category_slug}, subcategoria {draft.suggested_subcategoria}, gênero {draft.suggested_genero}</p>
                        <p className="text-xs text-text-secondary">Status de deduplicação: {dedupeReasonLabel(draft.dedupe.reason)}</p>
                        {draft.dedupe.exists && (
                          <p className="text-xs text-yellow-200">
                            Duplicado detectado ({draft.dedupe.reason}){draft.dedupe.existing_product_id ? ` • ID: ${draft.dedupe.existing_product_id}` : ""}. Ao salvar, o produto será atualizado.
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        {draft.saveMessage && <p className={`text-xs ${statusColor}`}>{draft.saveMessage}</p>}
                        {draft.productId && <p className="text-xs text-text-secondary">Produto ID: {draft.productId}</p>}
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                      <label className="text-xs text-text-secondary">
                        Nome *
                        <input value={draft.form.nome} onChange={(e) => updateField(index, "nome", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary" />
                      </label>

                      <label className="text-xs text-text-secondary">
                        Slug *
                        <input value={draft.form.slug} onChange={(e) => updateField(index, "slug", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary" />
                      </label>

                      <label className="text-xs text-text-secondary md:col-span-2">
                        Descrição curta
                        <input value={draft.form.descricao_curta} onChange={(e) => updateField(index, "descricao_curta", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary" />
                      </label>

                      <label className="text-xs text-text-secondary md:col-span-2">
                        Descrição completa
                        <textarea value={draft.form.descricao_completa} onChange={(e) => updateField(index, "descricao_completa", e.target.value)} className="mt-1 h-24 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary" />
                      </label>

                      <label className="text-xs text-text-secondary">
                        Loja de origem *
                        <select
                          value={draft.form.loja_origem}
                          onChange={(e) => updateField(index, "loja_origem", e.target.value)}
                          className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                        >
                          {["Shopee", "Shein", "TikTok Shop", "Outros"].map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="text-xs text-text-secondary">
                        Categoria *
                        <select value={draft.form.categoria_id} onChange={(e) => updateField(index, "categoria_id", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary">
                          <option value="">Selecione uma categoria ativa</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.nome} ({category.slug})
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="text-xs text-text-secondary">
                        Subcategoria
                        <input value={draft.form.subcategoria} onChange={(e) => updateField(index, "subcategoria", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary" />
                      </label>

                      <label className="text-xs text-text-secondary">
                        Gênero / audiência
                        <select value={draft.form.genero} onChange={(e) => updateField(index, "genero", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary">
                          {[
                            "Geral",
                            "Feminino",
                            "Masculino",
                            "Infantil",
                            "Uni",
                            "Fem",
                            "Masc",
                            "Kids",
                          ].map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="text-xs text-text-secondary">
                        Tipo
                        <input value={draft.form.tipo} onChange={(e) => updateField(index, "tipo", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary" />
                      </label>

                      <label className="text-xs text-text-secondary">
                        Imagem de capa URL
                        <input value={draft.form.imagem_capa_url} onChange={(e) => updateField(index, "imagem_capa_url", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary" />
                        <div className="mt-2 overflow-hidden rounded-lg border border-border-soft bg-surface-card">
                          {draft.form.imagem_capa_url ? (
                            <img
                              src={draft.form.imagem_capa_url}
                              alt={`Preview ${draft.form.nome || "produto"}`}
                              className="h-24 w-full object-cover"
                              onError={(event) => {
                                const target = event.currentTarget;
                                target.style.display = "none";
                              }}
                            />
                          ) : (
                            <div className="flex h-24 items-center justify-center text-[11px] text-text-secondary">Sem imagem extraída — use placeholder ou informe URL manualmente.</div>
                          )}
                        </div>
                      </label>

                      <label className="text-xs text-text-secondary md:col-span-2">
                        Link padrão *
                        <input value={draft.form.link_padrao} onChange={(e) => updateField(index, "link_padrao", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary" />
                      </label>

                      <label className="text-xs text-text-secondary">
                        Preço original
                        <input
                          type="number"
                          step="0.01"
                          value={draft.form.preco_original ?? ""}
                          onChange={(e) => updateField(index, "preco_original", parseNumber(e.target.value))}
                          className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                        />
                      </label>

                      <label className="text-xs text-text-secondary">
                        Preço promocional
                        <input
                          type="number"
                          step="0.01"
                          value={draft.form.preco_promocional ?? ""}
                          onChange={(e) => updateField(index, "preco_promocional", parseNumber(e.target.value))}
                          className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                        />
                      </label>

                      <label className="text-xs text-text-secondary">
                        Moeda *
                        <input value={draft.form.moeda} onChange={(e) => updateField(index, "moeda", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary" />
                      </label>

                      <label className="text-xs text-text-secondary">
                        Ordem de exibição
                        <input
                          type="number"
                          value={draft.form.ordem_exibicao ?? ""}
                          onChange={(e) => updateField(index, "ordem_exibicao", parseNumber(e.target.value))}
                          className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                        />
                      </label>

                      <label className="text-xs text-text-secondary">
                        Marca
                        <input value={draft.form.marca} onChange={(e) => updateField(index, "marca", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary" />
                      </label>

                      <label className="text-xs text-text-secondary">
                        SKU externo
                        <input value={draft.form.sku_externo} onChange={(e) => updateField(index, "sku_externo", e.target.value)} className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary" />
                      </label>

                      <label className="text-xs text-text-secondary md:col-span-2">
                        Tags (separadas por vírgula)
                        <input
                          value={formatTags(draft.form.tags)}
                          onChange={(e) => updateField(index, "tags", parseTags(e.target.value))}
                          className="mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                        />
                      </label>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-text-secondary">
                      <label className="inline-flex items-center gap-2">
                        <input type="checkbox" checked={draft.form.ativo} onChange={(e) => updateField(index, "ativo", e.target.checked)} />
                        Ativo
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input type="checkbox" checked={draft.form.disponivel} onChange={(e) => updateField(index, "disponivel", e.target.checked)} />
                        Disponível
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input type="checkbox" checked={draft.form.destaque} onChange={(e) => updateField(index, "destaque", e.target.checked)} />
                        Destaque
                      </label>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          updateDraft(index, (item) => ({
                            ...item,
                            reviewConfirmed: true,
                            saveStatus: undefined,
                            saveMessage: undefined,
                          }))
                        }
                        className="rounded-full border border-emerald-300/40 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
                      >
                        {draft.reviewConfirmed ? "Revisão confirmada" : "Confirmar revisão"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveDraft(index)}
                        disabled={draft.isSaving || !valid || !draft.reviewConfirmed}
                        className="rounded-full bg-accent-primary px-5 py-2 text-sm font-semibold text-background-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {draft.isSaving ? "Salvando..." : draft.isSaved ? "Salvar novamente" : "Salvar produto"}
                      </button>
                      {!draft.reviewConfirmed && <span className="text-xs text-yellow-200">Confirme a revisão antes de salvar.</span>}
                      {!valid && (
                        <span className="text-xs text-yellow-200">
                          Metadados incompletos. Campos obrigatórios: {missingRequiredFields.join(", ")}.
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
