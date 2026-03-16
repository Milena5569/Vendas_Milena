(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/parse-import-urls.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseImportUrls",
    ()=>parseImportUrls
]);
function parseImportUrls(raw) {
    const input = (raw || '').trim();
    if (!input) return [];
    const unique = new Set();
    const pushIfValid = (value)=>{
        if (typeof value !== 'string') return;
        const trimmed = value.trim();
        if (!trimmed) return;
        try {
            const parsed = new URL(trimmed);
            if (!/^https?:$/i.test(parsed.protocol)) return;
            unique.add(parsed.toString());
        } catch  {
        // ignore invalid urls
        }
    };
    try {
        const parsed = JSON.parse(input);
        if (Array.isArray(parsed)) {
            parsed.forEach(pushIfValid);
            return Array.from(unique);
        }
    } catch  {
    // non-json input, continue
    }
    const normalized = input.replace(/\\n/g, '\n');
    normalized.split(/[\n,]+/g).map((item)=>item.trim()).forEach(pushIfValid);
    return Array.from(unique);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/importar/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminImportPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parse$2d$import$2d$urls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parse-import-urls.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function getErrorMessage(payload, fallback) {
    if (payload && typeof payload === "object" && "message" in payload) {
        const maybeMessage = payload.message;
        if (typeof maybeMessage === "string" && maybeMessage.trim()) {
            return maybeMessage;
        }
    }
    return fallback;
}
function AdminImportPage() {
    _s();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [analyzing, setAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savingAll, setSavingAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [drafts, setDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [globalMessage, setGlobalMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const validUrls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminImportPage.useMemo[validUrls]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parse$2d$import$2d$urls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseImportUrls"])(input)
    }["AdminImportPage.useMemo[validUrls]"], [
        input
    ]);
    function dedupeReasonLabel(reason) {
        if (reason === "link_padrao") return "URL final/padrão já existente";
        if (reason === "normalized_url") return "URL normalizada já existente";
        if (reason === "sku_externo") return "SKU externo já existente";
        return "Sem duplicidade";
    }
    function isDraftValid(draft) {
        return getMissingRequiredFields(draft).length === 0;
    }
    function getMissingRequiredFields(draft) {
        const missing = [];
        if (!draft.form.nome.trim()) missing.push("nome");
        if (!draft.form.link_padrao.trim()) missing.push("link_padrao");
        if (!draft.form.loja_origem.trim()) missing.push("loja_origem");
        if (!draft.form.categoria_id.trim()) missing.push("categoria_id");
        if (typeof draft.form.ativo !== "boolean") missing.push("ativo");
        if (typeof draft.form.disponivel !== "boolean") missing.push("disponivel");
        return missing;
    }
    function isDraftReadyToSave(draft) {
        return Boolean(draft.reviewConfirmed) && isDraftValid(draft) && !draft.isSaving;
    }
    function getDraftStatus(draft, valid) {
        if (draft.isSaving) return {
            label: "Salvando...",
            tone: "text-blue-300"
        };
        if (draft.saveStatus === "failed") return {
            label: "Falhou",
            tone: "text-red-300"
        };
        if (draft.saveStatus === "updated") {
            return {
                label: "Atualizado",
                tone: "text-blue-300"
            };
        }
        if (draft.saveStatus === "created") {
            return {
                label: "Salvo",
                tone: "text-emerald-300"
            };
        }
        if (!valid) return {
            label: "Metadados incompletos",
            tone: "text-yellow-200"
        };
        if (draft.dedupe.exists) return {
            label: "Duplicado detectado",
            tone: "text-yellow-200"
        };
        if (draft.reviewConfirmed && valid) return {
            label: "Pronto para salvar",
            tone: "text-emerald-300"
        };
        return {
            label: "Analisado",
            tone: "text-text-secondary"
        };
    }
    function updateDraft(index, updater) {
        setDrafts((current)=>current.map((item, itemIndex)=>itemIndex === index ? updater(item) : item));
    }
    function updateField(index, field, value) {
        updateDraft(index, (draft)=>({
                ...draft,
                form: {
                    ...draft.form,
                    [field]: value
                },
                reviewConfirmed: false,
                isSaved: false,
                saveStatus: undefined,
                saveMessage: undefined,
                productId: undefined
            }));
    }
    function parseNumber(value) {
        if (!value.trim()) return null;
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : null;
    }
    function formatTags(tags) {
        return tags.join(", ");
    }
    function parseTags(value) {
        return value.split(",").map((tag)=>tag.trim()).filter(Boolean);
    }
    async function handleAnalyze() {
        const normalizedInput = input.replace(/\\n/g, "\n");
        const urls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parse$2d$import$2d$urls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseImportUrls"])(normalizedInput);
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
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "analyze",
                    input: normalizedInput
                })
            });
            const data = await response.json();
            if (!response.ok || !data.success) {
                setGlobalMessage(getErrorMessage(data, "Falha ao analisar links."));
                return;
            }
            setSummary(data);
            setCategories(data.categories || []);
            setDrafts((data.drafts || []).map((draft)=>({
                    ...draft,
                    reviewConfirmed: false,
                    isSaved: false
                })));
        } catch (error) {
            setGlobalMessage(error?.message || "Erro ao analisar links.");
        } finally{
            setAnalyzing(false);
        }
    }
    async function handleSaveDraft(index) {
        const target = drafts[index];
        if (!target || !target.reviewConfirmed || !isDraftValid(target)) return;
        updateDraft(index, (draft)=>({
                ...draft,
                isSaving: true,
                saveMessage: undefined
            }));
        try {
            const response = await fetch("/api/admin/import-products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "save",
                    draft: {
                        draft_id: target.draft_id,
                        source_url: target.source_url,
                        normalized_url: target.normalized_url,
                        dedupe: target.dedupe,
                        form: target.form,
                        allow_update_existing: true
                    }
                })
            });
            const data = await response.json();
            if (!response.ok || !data.success) {
                updateDraft(index, (draft)=>({
                        ...draft,
                        isSaving: false,
                        isSaved: false,
                        saveStatus: "failed",
                        saveMessage: getErrorMessage(data, "Falha ao salvar produto.")
                    }));
                return;
            }
            updateDraft(index, (draft)=>({
                    ...draft,
                    isSaving: false,
                    isSaved: true,
                    saveStatus: data.status,
                    saveMessage: data.message,
                    productId: data.product_id
                }));
        } catch (error) {
            updateDraft(index, (draft)=>({
                    ...draft,
                    isSaving: false,
                    isSaved: false,
                    saveStatus: "failed",
                    saveMessage: error?.message || "Erro ao salvar produto."
                }));
        }
    }
    async function handleSaveAll() {
        if (drafts.length === 0) return;
        const eligibleDrafts = drafts.filter((draft)=>isDraftReadyToSave(draft));
        if (eligibleDrafts.length === 0) {
            setGlobalMessage("Nenhum rascunho elegível para salvar em lote. Revise campos obrigatórios e confirme a revisão.");
            return;
        }
        const skippedCount = drafts.length - eligibleDrafts.length;
        setSavingAll(true);
        setGlobalMessage(skippedCount > 0 ? `${eligibleDrafts.length} item(ns) elegível(is) enviado(s). ${skippedCount} item(ns) inválido(s) ou sem revisão foram mantidos para edição.` : null);
        const eligibleIds = new Set(eligibleDrafts.map((draft)=>draft.draft_id));
        setDrafts((current)=>current.map((draft)=>eligibleIds.has(draft.draft_id) ? {
                    ...draft,
                    isSaving: true,
                    saveMessage: undefined
                } : draft));
        try {
            const response = await fetch("/api/admin/import-products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "saveMany",
                    drafts: eligibleDrafts.map((draft)=>({
                            draft_id: draft.draft_id,
                            source_url: draft.source_url,
                            normalized_url: draft.normalized_url,
                            dedupe: draft.dedupe,
                            form: draft.form,
                            allow_update_existing: true
                        }))
                })
            });
            const data = await response.json();
            if (!response.ok || !data.success) {
                const message = getErrorMessage(data, "Falha ao salvar todos os produtos.");
                setGlobalMessage(message);
                setDrafts((current)=>current.map((draft)=>({
                            ...draft,
                            isSaving: eligibleIds.has(draft.draft_id) ? false : draft.isSaving,
                            isSaved: eligibleIds.has(draft.draft_id) ? false : draft.isSaved,
                            saveStatus: eligibleIds.has(draft.draft_id) ? "failed" : draft.saveStatus,
                            saveMessage: eligibleIds.has(draft.draft_id) ? message || "Falha ao salvar em lote." : draft.saveMessage
                        })));
                return;
            }
            const resultMap = new Map((data.results || []).map((result)=>[
                    result.draft_id,
                    result
                ]));
            setDrafts((current)=>current.map((draft)=>{
                    const result = resultMap.get(draft.draft_id);
                    if (!eligibleIds.has(draft.draft_id)) return draft;
                    return {
                        ...draft,
                        isSaving: false,
                        isSaved: Boolean(result?.success),
                        saveStatus: result?.status,
                        saveMessage: result?.message,
                        productId: result?.product_id
                    };
                }));
        } catch (error) {
            setGlobalMessage(error?.message || "Erro ao salvar todos os produtos.");
            const eligibleIds = new Set(eligibleDrafts.map((draft)=>draft.draft_id));
            setDrafts((current)=>current.map((draft)=>eligibleIds.has(draft.draft_id) ? {
                        ...draft,
                        isSaving: false,
                        saveStatus: "failed",
                        saveMessage: "Erro inesperado no salvamento em lote."
                    } : draft));
        } finally{
            setSavingAll(false);
        }
    }
    const hasInvalidDraft = drafts.some((draft)=>!isDraftValid(draft));
    const hasDraftWithoutReview = drafts.some((draft)=>!draft.reviewConfirmed);
    const eligibleSaveAllCount = drafts.filter((draft)=>isDraftReadyToSave(draft)).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background-primary py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-6xl px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-text-primary",
                    children: "Importar produtos por URL (assistido)"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/importar/page.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-text-secondary",
                    children: "Cole uma ou várias URLs, analise os metadados sugeridos, revise os campos e confirme antes de salvar no Supabase."
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/importar/page.tsx",
                    lineNumber: 388,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 rounded-2xl border border-border-soft bg-surface-card p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-3 text-xs text-text-secondary",
                            children: 'Formatos aceitos: URL única, lista em texto (uma por linha) ou array JSON (ex.: ["https://...", "https://..."]).'
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/importar/page.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: input,
                            onChange: (event)=>setInput(event.target.value),
                            placeholder: "https://s.shopee.com.br/15enzBAUj\\nhttps://s.shopee.com.br/W1vOu9GTq",
                            className: "h-48 w-full resize-y rounded-xl border border-border-soft bg-background-primary p-4 text-sm text-text-primary outline-none transition focus:border-accent-primary/50"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/importar/page.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-xs text-text-secondary",
                            children: [
                                "URLs válidas detectadas: ",
                                validUrls.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/importar/page.tsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleAnalyze,
                            disabled: analyzing || validUrls.length === 0,
                            className: "mt-4 rounded-full bg-accent-primary px-6 py-2.5 text-sm font-semibold text-background-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
                            children: analyzing ? "Analisando..." : "Analisar links"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/importar/page.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/importar/page.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, this),
                globalMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 rounded-2xl border border-red-300/40 bg-red-500/10 p-5 text-sm text-red-200",
                    children: globalMessage
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/importar/page.tsx",
                    lineNumber: 415,
                    columnNumber: 11
                }, this),
                summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 rounded-2xl border border-border-soft bg-surface-card p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-text-secondary",
                            children: [
                                "Fonte: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-text-primary",
                                    children: summary.source || "n/a"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 22
                                }, this),
                                " • Processados: ",
                                summary.processed ?? 0,
                                " • Rascunhos: ",
                                drafts.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/importar/page.tsx",
                            lineNumber: 420,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-text-secondary",
                            children: [
                                "Categorias ativas carregadas: ",
                                categories.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/importar/page.tsx",
                            lineNumber: 423,
                            columnNumber: 13
                        }, this),
                        summary.errors?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 rounded-xl border border-yellow-300/40 bg-yellow-500/10 p-3 text-xs text-yellow-100",
                            children: summary.errors.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        item.source_url || "URL",
                                        ": ",
                                        item.message
                                    ]
                                }, `${item.source_url}-${index}`, true, {
                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                    lineNumber: 428,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/importar/page.tsx",
                            lineNumber: 426,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleSaveAll,
                                    disabled: savingAll || drafts.length === 0 || eligibleSaveAllCount === 0,
                                    className: "rounded-full bg-accent-primary px-5 py-2 text-sm font-semibold text-background-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
                                    children: savingAll ? "Salvando todos..." : "Salvar todos"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                    lineNumber: 434,
                                    columnNumber: 15
                                }, this),
                                hasDraftWithoutReview && drafts.length > 0 && eligibleSaveAllCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-yellow-200",
                                    children: "Itens sem revisão serão ignorados no salvamento em lote."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 17
                                }, this),
                                hasInvalidDraft && drafts.length > 0 && eligibleSaveAllCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-yellow-200",
                                    children: "Itens com metadados incompletos serão mantidos para edição."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 17
                                }, this),
                                eligibleSaveAllCount === 0 && drafts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-yellow-200",
                                    children: "Nenhum item elegível para salvar em lote no momento."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                    lineNumber: 449,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/importar/page.tsx",
                            lineNumber: 433,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 space-y-4",
                            children: drafts.map((draft, index)=>{
                                const valid = isDraftValid(draft);
                                const missingRequiredFields = getMissingRequiredFields(draft);
                                const status = getDraftStatus(draft, valid);
                                const statusColor = draft.saveStatus === "created" ? "text-emerald-300" : draft.saveStatus === "updated" ? "text-blue-300" : draft.saveStatus === "failed" ? "text-red-300" : "text-text-secondary";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-border-soft bg-background-primary p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-text-primary",
                                                            children: [
                                                                "Produto ",
                                                                index + 1,
                                                                ": ",
                                                                draft.form.nome || "Sem nome"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs font-semibold ${status.tone}`,
                                                            children: [
                                                                "Status: ",
                                                                status.label
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-text-secondary",
                                                            children: [
                                                                "URL original: ",
                                                                draft.source_url
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-text-secondary",
                                                            children: [
                                                                "URL normalizada: ",
                                                                draft.normalized_url
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 474,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-text-secondary",
                                                            children: [
                                                                "Sugestões: categoria ",
                                                                draft.suggested_category_slug,
                                                                ", subcategoria ",
                                                                draft.suggested_subcategoria,
                                                                ", gênero ",
                                                                draft.suggested_genero
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-text-secondary",
                                                            children: [
                                                                "Status de deduplicação: ",
                                                                dedupeReasonLabel(draft.dedupe.reason)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 25
                                                        }, this),
                                                        draft.dedupe.exists && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-yellow-200",
                                                            children: [
                                                                "Duplicado detectado (",
                                                                draft.dedupe.reason,
                                                                ")",
                                                                draft.dedupe.existing_product_id ? ` • ID: ${draft.dedupe.existing_product_id}` : "",
                                                                ". Ao salvar, o produto será atualizado."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        draft.saveMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs ${statusColor}`,
                                                            children: draft.saveMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 47
                                                        }, this),
                                                        draft.productId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-text-secondary",
                                                            children: [
                                                                "Produto ID: ",
                                                                draft.productId
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                            lineNumber: 469,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid grid-cols-1 gap-3 md:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Nome *",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: draft.form.nome,
                                                            onChange: (e)=>updateField(index, "nome", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Slug *",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: draft.form.slug,
                                                            onChange: (e)=>updateField(index, "slug", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary md:col-span-2",
                                                    children: [
                                                        "Descrição curta",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: draft.form.descricao_curta,
                                                            onChange: (e)=>updateField(index, "descricao_curta", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary md:col-span-2",
                                                    children: [
                                                        "Descrição completa",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            value: draft.form.descricao_completa,
                                                            onChange: (e)=>updateField(index, "descricao_completa", e.target.value),
                                                            className: "mt-1 h-24 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Loja de origem *",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: draft.form.loja_origem,
                                                            onChange: (e)=>updateField(index, "loja_origem", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary",
                                                            children: [
                                                                "Shopee",
                                                                "Shein",
                                                                "TikTok Shop",
                                                                "Outros"
                                                            ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: option,
                                                                    children: option
                                                                }, option, false, {
                                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Categoria *",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: draft.form.categoria_id,
                                                            onChange: (e)=>updateField(index, "categoria_id", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Selecione uma categoria ativa"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                                    lineNumber: 528,
                                                                    columnNumber: 27
                                                                }, this),
                                                                categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: category.id,
                                                                        children: [
                                                                            category.nome,
                                                                            " (",
                                                                            category.slug,
                                                                            ")"
                                                                        ]
                                                                    }, category.id, true, {
                                                                        fileName: "[project]/src/app/admin/importar/page.tsx",
                                                                        lineNumber: 530,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Subcategoria",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: draft.form.subcategoria,
                                                            onChange: (e)=>updateField(index, "subcategoria", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Gênero / audiência",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: draft.form.genero,
                                                            onChange: (e)=>updateField(index, "genero", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary",
                                                            children: [
                                                                "Geral",
                                                                "Feminino",
                                                                "Masculino",
                                                                "Infantil",
                                                                "Uni",
                                                                "Fem",
                                                                "Masc",
                                                                "Kids"
                                                            ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: option,
                                                                    children: option
                                                                }, option, false, {
                                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                                    lineNumber: 555,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Tipo",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: draft.form.tipo,
                                                            onChange: (e)=>updateField(index, "tipo", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Imagem de capa URL",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: draft.form.imagem_capa_url,
                                                            onChange: (e)=>updateField(index, "imagem_capa_url", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 overflow-hidden rounded-lg border border-border-soft bg-surface-card",
                                                            children: draft.form.imagem_capa_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: draft.form.imagem_capa_url,
                                                                alt: `Preview ${draft.form.nome || "produto"}`,
                                                                className: "h-24 w-full object-cover",
                                                                onError: (event)=>{
                                                                    const target = event.currentTarget;
                                                                    target.style.display = "none";
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/importar/page.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex h-24 items-center justify-center text-[11px] text-text-secondary",
                                                                children: "Sem imagem extraída — use placeholder ou informe URL manualmente."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/importar/page.tsx",
                                                                lineNumber: 582,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 570,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary md:col-span-2",
                                                    children: [
                                                        "Link padrão *",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: draft.form.link_padrao,
                                                            onChange: (e)=>updateField(index, "link_padrao", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 589,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Preço original",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            step: "0.01",
                                                            value: draft.form.preco_original ?? "",
                                                            onChange: (e)=>updateField(index, "preco_original", parseNumber(e.target.value)),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Preço promocional",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            step: "0.01",
                                                            value: draft.form.preco_promocional ?? "",
                                                            onChange: (e)=>updateField(index, "preco_promocional", parseNumber(e.target.value)),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 605,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Moeda *",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: draft.form.moeda,
                                                            onChange: (e)=>updateField(index, "moeda", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Ordem de exibição",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: draft.form.ordem_exibicao ?? "",
                                                            onChange: (e)=>updateField(index, "ordem_exibicao", parseNumber(e.target.value)),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 621,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "Marca",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: draft.form.marca,
                                                            onChange: (e)=>updateField(index, "marca", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 631,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 629,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary",
                                                    children: [
                                                        "SKU externo",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: draft.form.sku_externo,
                                                            onChange: (e)=>updateField(index, "sku_externo", e.target.value),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 636,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-text-secondary md:col-span-2",
                                                    children: [
                                                        "Tags (separadas por vírgula)",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: formatTags(draft.form.tags),
                                                            onChange: (e)=>updateField(index, "tags", parseTags(e.target.value)),
                                                            className: "mt-1 w-full rounded-lg border border-border-soft bg-surface-card px-3 py-2 text-sm text-text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                            lineNumber: 489,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex flex-wrap gap-4 text-xs text-text-secondary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "inline-flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: draft.form.ativo,
                                                            onChange: (e)=>updateField(index, "ativo", e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Ativo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "inline-flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: draft.form.disponivel,
                                                            onChange: (e)=>updateField(index, "disponivel", e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 655,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Disponível"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 654,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "inline-flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: draft.form.destaque,
                                                            onChange: (e)=>updateField(index, "destaque", e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Destaque"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>updateDraft(index, (item)=>({
                                                                ...item,
                                                                reviewConfirmed: true,
                                                                saveStatus: undefined,
                                                                saveMessage: undefined
                                                            })),
                                                    className: "rounded-full border border-emerald-300/40 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20",
                                                    children: draft.reviewConfirmed ? "Revisão confirmada" : "Confirmar revisão"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleSaveDraft(index),
                                                    disabled: draft.isSaving || !valid || !draft.reviewConfirmed,
                                                    className: "rounded-full bg-accent-primary px-5 py-2 text-sm font-semibold text-background-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
                                                    children: draft.isSaving ? "Salvando..." : draft.isSaved ? "Salvar novamente" : "Salvar produto"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 23
                                                }, this),
                                                !draft.reviewConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-yellow-200",
                                                    children: "Confirme a revisão antes de salvar."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 50
                                                }, this),
                                                !valid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-yellow-200",
                                                    children: [
                                                        "Metadados incompletos. Campos obrigatórios: ",
                                                        missingRequiredFields.join(", "),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/importar/page.tsx",
                                            lineNumber: 664,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, draft.draft_id, true, {
                                    fileName: "[project]/src/app/admin/importar/page.tsx",
                                    lineNumber: 468,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/importar/page.tsx",
                            lineNumber: 453,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/importar/page.tsx",
                    lineNumber: 419,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/importar/page.tsx",
            lineNumber: 386,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/importar/page.tsx",
        lineNumber: 385,
        columnNumber: 5
    }, this);
}
_s(AdminImportPage, "PZdCLPQBoDqVGMAdUpRdj2hNc9E=");
_c = AdminImportPage;
var _c;
__turbopack_context__.k.register(_c, "AdminImportPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b92d4f42._.js.map