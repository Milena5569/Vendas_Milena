import { NextRequest, NextResponse } from "next/server";
import { analyzeImportInput, saveReviewedProduct } from "@/services/product-import";
import { getSupabaseAdmin, isSupabaseAdminConfigured } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const action = body?.action;

    if (!action || typeof action !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Envie uma ação válida: 'analyze', 'save' ou 'saveMany'.",
        },
        { status: 400 }
      );
    }

    if (action === "analyze") {
      const input = body?.input;
      if (!input || (typeof input !== "string" && !Array.isArray(input))) {
        return NextResponse.json(
          {
            success: false,
            message: "Envie 'input' como URL única, texto com URLs ou array de URLs.",
          },
          { status: 400 }
        );
      }

      const result = await analyzeImportInput(input);
      return NextResponse.json(result, { status: result.success ? 200 : 422 });
    }

    if (action === "save") {
      const draft = body?.draft;
      if (!draft || typeof draft !== "object" || !draft?.form) {
        return NextResponse.json(
          {
            success: false,
            message: "Envie 'draft' com o formulário revisado para salvar.",
          },
          { status: 400 }
        );
      }

      if (!isSupabaseAdminConfigured()) {
        return NextResponse.json(
          {
            success: false,
            message: "Configuração ausente para gravação admin (SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY).",
          },
          { status: 500 }
        );
      }

      const supabaseAdmin = getSupabaseAdmin();
      if (!supabaseAdmin) {
        return NextResponse.json(
          {
            success: false,
            message: "Cliente admin do Supabase indisponível para gravação.",
          },
          { status: 500 }
        );
      }

      const result = await saveReviewedProduct(draft, supabaseAdmin);
      return NextResponse.json(result, { status: result.success ? 200 : 422 });
    }

    if (action === "saveMany") {
      const drafts = Array.isArray(body?.drafts) ? body.drafts : [];
      if (drafts.length === 0) {
        return NextResponse.json(
          {
            success: false,
            message: "Envie ao menos um draft em 'drafts' para salvar em lote.",
          },
          { status: 400 }
        );
      }

      if (!isSupabaseAdminConfigured()) {
        return NextResponse.json(
          {
            success: false,
            message: "Configuração ausente para gravação admin (SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY).",
          },
          { status: 500 }
        );
      }

      const supabaseAdmin = getSupabaseAdmin();
      if (!supabaseAdmin) {
        return NextResponse.json(
          {
            success: false,
            message: "Cliente admin do Supabase indisponível para gravação.",
          },
          { status: 500 }
        );
      }

      const results = await Promise.all(
        drafts.map(async (draft: any) => {
          try {
            const result = await saveReviewedProduct(draft, supabaseAdmin);
            return {
              ...result,
              draft_id: draft?.draft_id,
            };
          } catch (error: any) {
            return {
              success: false,
              status: "failed" as const,
              message: error?.message || "Falha inesperada ao salvar item do lote.",
              draft_id: draft?.draft_id,
            };
          }
        })
      );
      const success = results.some((item) => item.success);

      return NextResponse.json(
        {
          success,
          processed: drafts.length,
          results,
        },
        { status: success ? 200 : 422 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Ação inválida. Use 'analyze', 'save' ou 'saveMany'.",
      },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Falha inesperada ao importar produtos.",
      },
      { status: 500 }
    );
  }
}
