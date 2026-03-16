module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabaseAdmin",
    ()=>getSupabaseAdmin,
    "getSupabaseClient",
    ()=>getSupabaseClient,
    "isSupabaseAdminConfigured",
    ()=>isSupabaseAdminConfigured,
    "isSupabaseConfigured",
    ()=>isSupabaseConfigured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const publicUrl = ("TURBOPACK compile-time value", "https://sphgajgxalopgpqwkvkf.supabase.co");
const publicAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwaGdhamd4YWxvcGdwcXdrdmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzM0MzksImV4cCI6MjA4ODkwOTQzOX0.sH_kjWMp67Q8crML33A1AnA7aiU0E8P7e9pcft6CbgQ");
const adminUrl = process.env.SUPABASE_URL;
const adminServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
let hasWarnedPublicConfig = false;
let hasWarnedAdminConfig = false;
function warnMissingSupabaseConfig(kind) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (kind === 'public' && !hasWarnedPublicConfig) {
        hasWarnedPublicConfig = true;
        console.warn('[supabase] NEXT_PUBLIC_SUPABASE_URL/NEXT_PUBLIC_SUPABASE_ANON_KEY ausentes. A aplicação exibirá estados vazios sem dados mock.');
    }
    if (kind === 'admin' && !hasWarnedAdminConfig) {
        hasWarnedAdminConfig = true;
        console.warn('[supabase] SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY ausentes. Recursos administrativos de importação ficarão indisponíveis.');
    }
}
const isSupabaseConfigured = ()=>{
    const configured = Boolean(publicUrl && publicAnonKey);
    if (!configured) {
        warnMissingSupabaseConfig('public');
    }
    return configured;
};
const isSupabaseAdminConfigured = ()=>{
    const configured = Boolean(adminUrl && adminServiceRoleKey);
    if (!configured) {
        warnMissingSupabaseConfig('admin');
    }
    return configured;
};
let browserClient = null;
let adminClient = null;
function getSupabaseClient() {
    if (!isSupabaseConfigured()) return null;
    if (!browserClient) {
        browserClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(publicUrl, publicAnonKey, {
            auth: {
                persistSession: true,
                autoRefreshToken: true,
                detectSessionInUrl: true
            }
        });
    }
    return browserClient;
}
function getSupabaseAdmin() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!isSupabaseAdminConfigured()) return null;
    if (!adminClient) {
        adminClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(adminUrl, adminServiceRoleKey, {
            auth: {
                persistSession: false,
                autoRefreshToken: false
            }
        });
    }
    return adminClient;
}
}),
"[project]/src/lib/detect-store-from-url.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectStoreFromUrl",
    ()=>detectStoreFromUrl
]);
function detectStoreFromUrl(url) {
    const normalized = (url || '').toLowerCase();
    if (!normalized) return null;
    if (normalized.includes('shopee')) return 'shopee';
    if (normalized.includes('shein')) return 'shein';
    if (normalized.includes('tiktok')) return 'tiktok-shop';
    return null;
}
}),
"[project]/src/lib/parse-import-urls.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/services/product-import.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeImportInput",
    ()=>analyzeImportInput,
    "saveReviewedProduct",
    ()=>saveReviewedProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$detect$2d$store$2d$from$2d$url$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/detect-store-from-url.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parse$2d$import$2d$urls$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parse-import-urls.ts [app-route] (ecmascript)");
;
;
;
const FALLBACK_IMAGE = '/images/products/luminaria-led.jpg';
const ALLOWED_CATEGORY_LABELS = [
    'Feminino',
    'Masculino',
    'Casa',
    'Skin Care',
    'Infantil'
];
function slugify(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').slice(0, 90);
}
function normalizeProductUrl(rawUrl) {
    try {
        const parsed = new URL(String(rawUrl || '').trim());
        parsed.hash = '';
        parsed.pathname = parsed.pathname.replace(/\/+$/, '') || '/';
        return parsed.toString();
    } catch  {
        return String(rawUrl || '').trim();
    }
}
function mapStoreSlugToName(slug) {
    if (slug === 'shopee') return 'Shopee';
    if (slug === 'shein') return 'Shein';
    if (slug === 'tiktok-shop') return 'TikTok Shop';
    return 'Outros';
}
function normalizeGender(value) {
    const v = String(value || '').toLowerCase();
    if (v.includes('masc')) return 'Masc';
    if (v.includes('fem')) return 'Fem';
    if (v.includes('inf') || v.includes('kid')) return 'Kids';
    return 'Uni';
}
function pickSuggestedCategory(url, categories) {
    const text = url.toLowerCase();
    const byRule = text.includes('inf') || text.includes('kids') ? 'infantil' : text.includes('skin') || text.includes('beleza') ? 'skin-care' : text.includes('masc') || text.includes('homem') ? 'masculino' : text.includes('casa') ? 'casa' : 'feminino';
    const bySlug = categories.find((category)=>category.slug === byRule);
    if (bySlug) return bySlug;
    return categories[0] ?? null;
}
async function ensureUniqueSlug(db, requested, ignoreId) {
    const base = slugify(requested) || `produto-${Date.now()}`;
    let value = base;
    let i = 1;
    while(i <= 25){
        const { data } = await db.from('products').select('id').eq('slug', value).limit(5);
        const exists = (data || []).some((row)=>row.id !== ignoreId);
        if (!exists) return value;
        i += 1;
        value = `${base}-${i}`;
    }
    return `${base}-${Date.now()}`;
}
function validateRequiredFields(form) {
    const missing = [];
    if (!String(form.nome || '').trim()) missing.push('nome');
    if (!String(form.link_padrao || '').trim()) missing.push('link_padrao');
    if (!String(form.categoria_id || '').trim()) missing.push('categoria_id');
    return missing;
}
async function analyzeImportInput(input) {
    const raw = Array.isArray(input) ? input.join('\n') : input;
    const urls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parse$2d$import$2d$urls$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseImportUrls"])(raw);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        return {
            success: false,
            source: 'supabase',
            processed: urls.length,
            categories: [],
            drafts: [],
            errors: [
                {
                    source_url: '',
                    message: 'Supabase não está configurado.'
                }
            ]
        };
    }
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
    if (!supabase) {
        return {
            success: false,
            source: 'supabase',
            processed: urls.length,
            categories: [],
            drafts: [],
            errors: [
                {
                    source_url: '',
                    message: 'Cliente Supabase indisponível.'
                }
            ]
        };
    }
    const db = supabase;
    const [categoriesResponse, existingProductsResponse] = await Promise.all([
        db.from('categories').select('id,name,slug,is_active').eq('is_active', true).order('sort_order', {
            ascending: true
        }),
        db.from('products').select('id,slug,product_url,original_url,normalized_url').limit(5000)
    ]);
    const categories = (categoriesResponse.data || []).filter((item)=>ALLOWED_CATEGORY_LABELS.includes(item.name));
    const existingProducts = existingProductsResponse.data || [];
    const errors = [];
    if (urls.length === 0) {
        errors.push({
            source_url: '',
            message: 'Nenhuma URL válida encontrada para análise.'
        });
    }
    const drafts = [];
    urls.forEach((url, index)=>{
        const normalized = normalizeProductUrl(url);
        const storeSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$detect$2d$store$2d$from$2d$url$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["detectStoreFromUrl"])(url);
        if (!storeSlug) {
            errors.push({
                source_url: url,
                message: 'Não foi possível identificar uma loja suportada (Shopee, Shein ou TikTok Shop).'
            });
            return;
        }
        const suggestedCategory = pickSuggestedCategory(url, categories);
        const foundByExact = existingProducts.find((item)=>item.product_url === url || item.original_url === url);
        const foundByNormalized = existingProducts.find((item)=>item.normalized_url === normalized);
        const dedupe = foundByExact ? {
            exists: true,
            existing_product_id: foundByExact.id,
            reason: 'link_padrao'
        } : foundByNormalized ? {
            exists: true,
            existing_product_id: foundByNormalized.id,
            reason: 'normalized_url'
        } : {
            exists: false,
            existing_product_id: null,
            reason: 'none'
        };
        const nameFromPath = (()=>{
            try {
                const path = new URL(url).pathname.split('/').filter(Boolean).pop() || 'produto';
                return path.replace(/[-_]+/g, ' ').slice(0, 100).trim();
            } catch  {
                return 'Produto importado';
            }
        })();
        drafts.push({
            draft_id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
            source_url: url,
            normalized_url: normalized,
            suggested_category_slug: suggestedCategory?.slug || 'feminino',
            suggested_subcategoria: 'Outros',
            suggested_genero: 'Geral',
            dedupe,
            form: {
                nome: nameFromPath || 'Produto importado',
                slug: slugify(nameFromPath) || `produto-${Date.now()}-${index}`,
                descricao_curta: '',
                descricao_completa: '',
                loja_origem: mapStoreSlugToName(storeSlug),
                categoria_id: suggestedCategory?.id || '',
                subcategoria: 'Outros',
                genero: 'Geral',
                tipo: 'Produto',
                imagem_capa_url: FALLBACK_IMAGE,
                link_padrao: url,
                preco_original: null,
                preco_promocional: null,
                moeda: 'BRL',
                ativo: true,
                disponivel: true,
                destaque: false,
                ordem_exibicao: null,
                tags: [
                    'importado',
                    `normalized_url:${normalized}`
                ],
                marca: '',
                sku_externo: ''
            }
        });
    });
    return {
        success: drafts.length > 0,
        source: 'supabase',
        processed: urls.length,
        categories: categories.map((item)=>({
                id: item.id,
                nome: item.name,
                slug: item.slug
            })),
        drafts,
        errors
    };
}
async function saveReviewedProduct(payload, dbClient) {
    const form = payload.form;
    const missing = validateRequiredFields(form);
    if (missing.length > 0) {
        return {
            success: false,
            status: 'failed',
            message: `Campos obrigatórios ausentes: ${missing.join(', ')}`
        };
    }
    if (!dbClient && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        return {
            success: false,
            status: 'failed',
            message: 'Supabase não está configurado.'
        };
    }
    const supabase = dbClient ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
    if (!supabase) {
        return {
            success: false,
            status: 'failed',
            message: 'Cliente Supabase indisponível.'
        };
    }
    const db = supabase;
    const normalizedUrl = payload.normalized_url || normalizeProductUrl(form.link_padrao);
    const storeSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$detect$2d$store$2d$from$2d$url$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["detectStoreFromUrl"])(form.link_padrao) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$detect$2d$store$2d$from$2d$url$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["detectStoreFromUrl"])(payload.source_url || '');
    if (!storeSlug) {
        return {
            success: false,
            status: 'failed',
            message: 'Não foi possível identificar a loja da URL. Use apenas Shopee, Shein ou TikTok Shop.'
        };
    }
    const { data: storeData, error: storeError } = await db.from('stores').select('id,slug,name').eq('slug', storeSlug).maybeSingle();
    if (storeError || !storeData?.id) {
        return {
            success: false,
            status: 'failed',
            message: 'Loja detectada, mas não encontrada no banco. Verifique a tabela stores.'
        };
    }
    const { data: categoryData } = await db.from('categories').select('id').eq('id', form.categoria_id).eq('is_active', true).maybeSingle();
    if (!categoryData?.id) {
        return {
            success: false,
            status: 'failed',
            message: 'Categoria inválida. Selecione uma categoria ativa antes de salvar.'
        };
    }
    const { data: existingProducts } = await db.from('products').select('id,slug,product_url,original_url,normalized_url').limit(5000);
    const existingList = existingProducts || [];
    let target = existingList.find((item)=>item.id === payload.dedupe?.existing_product_id);
    if (!target) {
        target = existingList.find((item)=>item.product_url === form.link_padrao || item.original_url === (payload.source_url || form.link_padrao) || item.normalized_url === normalizedUrl);
    }
    const allowUpdateExisting = payload.allow_update_existing !== false;
    if (target && !allowUpdateExisting) {
        return {
            success: false,
            status: 'failed',
            message: 'Produto duplicado encontrado e atualização não autorizada.'
        };
    }
    const baseSlug = slugify(form.slug || form.nome);
    const uniqueSlug = await ensureUniqueSlug(db, baseSlug, target?.id);
    const now = new Date().toISOString();
    const priceCurrent = Number.isFinite(Number(form.preco_promocional)) ? Number(form.preco_promocional) : Number(form.preco_original);
    const priceOriginal = Number.isFinite(Number(form.preco_original)) ? Number(form.preco_original) : null;
    const dbPayload = {
        name: String(form.nome || '').trim(),
        slug: uniqueSlug,
        short_description: String(form.descricao_curta || '').trim() || null,
        description: String(form.descricao_completa || '').trim() || null,
        image_url: String(form.imagem_capa_url || '').trim() || FALLBACK_IMAGE,
        product_url: String(form.link_padrao || '').trim(),
        original_url: String(payload.source_url || form.link_padrao || '').trim(),
        normalized_url: normalizedUrl,
        price: Number.isFinite(priceCurrent) ? Number(priceCurrent) : null,
        compare_at_price: priceOriginal,
        currency: String(form.moeda || 'BRL').trim() || 'BRL',
        gender: normalizeGender(form.genero),
        source_platform: storeData.name,
        category_id: categoryData.id,
        store_id: storeData.id,
        is_featured: Boolean(form.destaque),
        is_active: Boolean(form.ativo),
        updated_at: now
    };
    if (target?.id) {
        const { error } = await db.from('products').update(dbPayload).eq('id', target.id);
        if (error) {
            return {
                success: false,
                status: 'failed',
                message: `Falha ao atualizar produto: ${error.message}`
            };
        }
        return {
            success: true,
            status: 'updated',
            message: 'Produto atualizado com sucesso usando store_id resolvido automaticamente.',
            product_id: target.id
        };
    }
    const { data, error } = await db.from('products').insert({
        ...dbPayload,
        created_at: now
    }).select('id').single();
    if (error || !data?.id) {
        return {
            success: false,
            status: 'failed',
            message: `Falha ao criar produto: ${error?.message || 'erro desconhecido'}`
        };
    }
    return {
        success: true,
        status: 'created',
        message: 'Produto criado com sucesso usando store_id resolvido automaticamente.',
        product_id: data.id
    };
}
}),
"[project]/src/app/api/admin/import-products/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2d$import$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/product-import.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const action = body?.action;
        if (!action || typeof action !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Envie uma ação válida: 'analyze', 'save' ou 'saveMany'."
            }, {
                status: 400
            });
        }
        if (action === "analyze") {
            const input = body?.input;
            if (!input || typeof input !== "string" && !Array.isArray(input)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Envie 'input' como URL única, texto com URLs ou array de URLs."
                }, {
                    status: 400
                });
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2d$import$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["analyzeImportInput"])(input);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
                status: result.success ? 200 : 422
            });
        }
        if (action === "save") {
            const draft = body?.draft;
            if (!draft || typeof draft !== "object" || !draft?.form) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Envie 'draft' com o formulário revisado para salvar."
                }, {
                    status: 400
                });
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSupabaseAdminConfigured"])()) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Configuração ausente para gravação admin (SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY)."
                }, {
                    status: 500
                });
            }
            const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSupabaseAdmin"])();
            if (!supabaseAdmin) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Cliente admin do Supabase indisponível para gravação."
                }, {
                    status: 500
                });
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2d$import$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveReviewedProduct"])(draft, supabaseAdmin);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
                status: result.success ? 200 : 422
            });
        }
        if (action === "saveMany") {
            const drafts = Array.isArray(body?.drafts) ? body.drafts : [];
            if (drafts.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Envie ao menos um draft em 'drafts' para salvar em lote."
                }, {
                    status: 400
                });
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSupabaseAdminConfigured"])()) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Configuração ausente para gravação admin (SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY)."
                }, {
                    status: 500
                });
            }
            const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSupabaseAdmin"])();
            if (!supabaseAdmin) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Cliente admin do Supabase indisponível para gravação."
                }, {
                    status: 500
                });
            }
            const results = await Promise.all(drafts.map(async (draft)=>{
                try {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2d$import$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveReviewedProduct"])(draft, supabaseAdmin);
                    return {
                        ...result,
                        draft_id: draft?.draft_id
                    };
                } catch (error) {
                    return {
                        success: false,
                        status: "failed",
                        message: error?.message || "Falha inesperada ao salvar item do lote.",
                        draft_id: draft?.draft_id
                    };
                }
            }));
            const success = results.some((item)=>item.success);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success,
                processed: drafts.length,
                results
            }, {
                status: success ? 200 : 422
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Ação inválida. Use 'analyze', 'save' ou 'saveMany'."
        }, {
            status: 400
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error?.message || "Falha inesperada ao importar produtos."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__abd9b4f6._.js.map