module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/collection/collection-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollectionCard",
    ()=>CollectionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-rsc] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
function CollectionCard({ collection }) {
    const fallbackImage = collection.products.find((item)=>item.product.images[0]?.url)?.product.images[0]?.url;
    const normalized = {
        featuredProduct: collection.products.find((product)=>product.isFeatured)?.product,
        title: collection.name,
        description: collection.description || `${collection.products.length} produto(s) na coleção`,
        image: collection.image || fallbackImage,
        itemCount: collection.products.length,
        tag: collection.isFeatured ? "Curadoria especial" : undefined,
        ctaHref: `/colecoes/${collection.slug}`,
        ctaLabel: "Ver coleção",
        priceHighlight: undefined
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group relative overflow-hidden rounded-3xl border border-pink-300/20 bg-[#111114] shadow-[0_16px_40px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/40 hover:shadow-[0_20px_46px_rgba(244,175,196,0.16)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] overflow-hidden",
                children: [
                    normalized.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: normalized.image,
                        alt: normalized.title,
                        fill: true,
                        className: "object-cover transition duration-500 group-hover:scale-110",
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
                        priority: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/collection/collection-card.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this) : normalized.featuredProduct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: normalized.featuredProduct.images[0]?.url || "",
                        alt: normalized.featuredProduct.name,
                        fill: true,
                        className: "object-cover transition duration-500 group-hover:scale-110",
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
                        priority: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/collection/collection-card.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-pink-300/12 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/collection/collection-card.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    normalized.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3 rounded-full border border-pink-200/35 bg-pink-200/15 px-3 py-1.5 text-xs font-semibold text-pink-100 shadow-[0_10px_22px_rgba(244,175,196,0.2)] backdrop-blur-sm",
                        children: normalized.tag
                    }, void 0, false, {
                        fileName: "[project]/src/components/collection/collection-card.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80"
                    }, void 0, false, {
                        fileName: "[project]/src/components/collection/collection-card.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-pink-300/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    }, void 0, false, {
                        fileName: "[project]/src/components/collection/collection-card.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/collection/collection-card.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold leading-6 text-text-primary group-hover:text-text-primary transition-colors",
                                children: normalized.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/collection/collection-card.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-text-secondary line-clamp-2",
                                children: normalized.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/collection/collection-card.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/collection/collection-card.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 text-xs text-text-secondary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1 rounded-full border border-pink-300/25 bg-pink-200/10 px-2.5 py-1 text-pink-100/85",
                                        children: [
                                            "📦 ",
                                            normalized.itemCount,
                                            " itens"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/collection/collection-card.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    normalized.priceHighlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-white/75",
                                        children: normalized.priceHighlight
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/collection/collection-card.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/collection/collection-card.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: normalized.ctaHref,
                                className: "inline-flex items-center gap-2 rounded-full border border-pink-200/35 bg-gradient-to-r from-pink-300 to-pink-200 px-4 py-2 text-sm font-semibold text-background-primary transition-all duration-300 hover:from-pink-200 hover:to-pink-100 hover:shadow-[0_12px_28px_rgba(244,175,196,0.3)]",
                                children: [
                                    normalized.ctaLabel,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/collection/collection-card.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/collection/collection-card.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/collection/collection-card.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/collection/collection-card.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/collection/collection-card.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/collection/collection-grid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollectionGrid",
    ()=>CollectionGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$collection$2f$collection$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/collection/collection-card.tsx [app-rsc] (ecmascript)");
;
;
const baseGridColumns = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4"
};
const mdGridColumns = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4"
};
const lgGridColumns = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4"
};
const xlGridColumns = {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4"
};
function CollectionGrid({ collections, columns = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
} }) {
    const nonEmptyCollections = collections.filter((collection)=>collection.products.length > 0);
    if (nonEmptyCollections.length === 0) {
        return null;
    }
    const gridClasses = [
        baseGridColumns[columns.sm ?? 1],
        mdGridColumns[columns.md ?? 2],
        lgGridColumns[columns.lg ?? 3],
        columns.xl ? xlGridColumns[columns.xl] : undefined
    ].join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `grid ${gridClasses} gap-6`,
        children: nonEmptyCollections.map((collection)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$collection$2f$collection$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionCard"], {
                collection: collection
            }, collection.id, false, {
                fileName: "[project]/src/components/collection/collection-grid.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/collection/collection-grid.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/footer.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreFooter",
    ()=>StoreFooter
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StoreFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StoreFooter() from the server but StoreFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/footer.tsx <module evaluation>", "StoreFooter");
}),
"[project]/src/components/layout/footer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreFooter",
    ()=>StoreFooter
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StoreFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StoreFooter() from the server but StoreFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/footer.tsx", "StoreFooter");
}),
"[project]/src/components/layout/footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/layout/footer.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/layout/footer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/layout/header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreHeader",
    ()=>StoreHeader
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StoreHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StoreHeader() from the server but StoreHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/header.tsx <module evaluation>", "StoreHeader");
}),
"[project]/src/components/layout/header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreHeader",
    ()=>StoreHeader
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const StoreHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StoreHeader() from the server but StoreHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/header.tsx", "StoreHeader");
}),
"[project]/src/components/layout/header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/layout/header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/layout/header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/supabase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
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
        browserClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(publicUrl, publicAnonKey, {
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
        adminClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(adminUrl, adminServiceRoleKey, {
            auth: {
                persistSession: false,
                autoRefreshToken: false
            }
        });
    }
    return adminClient;
}
}),
"[project]/src/services/collections.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectionsService",
    ()=>collectionsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-rsc] (ecmascript)");
;
const shouldLog = ("TURBOPACK compile-time value", "development") !== 'production';
function getSupabaseErrorDetails(error) {
    if (!error || typeof error !== 'object') {
        return {
            message: String(error ?? 'unknown_error')
        };
    }
    const value = error;
    return {
        message: value.message ?? 'unknown_error',
        code: value.code,
        details: value.details ?? null,
        hint: value.hint ?? null
    };
}
function logServiceError(message, error, context) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const parsedError = getSupabaseErrorDetails(error);
    console.error(message, {
        ...context ?? {},
        error: parsedError
    });
}
function logCollectionDebug(stage, payload) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    console.info(`[collectionsService] ${stage}`, payload);
}
function isMissingColumnError(error, columnName) {
    const parsed = getSupabaseErrorDetails(error);
    if (parsed.code !== '42703') return false;
    return (parsed.message ?? '').toLowerCase().includes(columnName.toLowerCase());
}
const COLLECTION_PRODUCTS_SELECT = `
  *,
  collection_products(
    *,
    products(
      *,
      categories (
        id,
        name,
        slug
      ),
      stores (
        id,
        name,
        slug
      )
    )
  )
`;
const COLLECTION_PRODUCTS_BY_COLLECTION_SELECT = `
  id,
  collection_id,
  product_id,
  created_at,
  products(
    *,
    categories (
      id,
      name,
      slug
    ),
    stores (
      id,
      name,
      slug
    )
  )
`;
function normalizeCollectionRow(row) {
    return {
        id: String(row.id ?? ''),
        name: String(row.name ?? ''),
        slug: String(row.slug ?? ''),
        description: typeof row.description === 'string' ? row.description : null,
        cover_image: typeof row.cover_image === 'string' ? row.cover_image : null,
        cover_image_url: typeof row.cover_image_url === 'string' ? row.cover_image_url : null,
        is_featured: typeof row.is_featured === 'boolean' ? row.is_featured : false,
        is_active: typeof row.is_active === 'boolean' ? row.is_active : true,
        created_at: String(row.created_at ?? new Date().toISOString()),
        updated_at: typeof row.updated_at === 'string' ? row.updated_at : undefined
    };
}
async function getCollectionProductsMap(collectionIds) {
    const mapped = new Map();
    if (!collectionIds.length) return mapped;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) return mapped;
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
    if (!supabase) return mapped;
    const { data, error } = await supabase.from('collection_products').select(COLLECTION_PRODUCTS_BY_COLLECTION_SELECT).in('collection_id', collectionIds);
    if (error) {
        logServiceError('Error fetching collection_products for collections', error, {
            collectionIdsCount: collectionIds.length,
            stage: 'collection_products_join'
        });
        return mapped;
    }
    logCollectionDebug('collection_products_fetched', {
        fetchedRows: (data ?? []).length,
        requestedCollectionIds: collectionIds
    });
    for (const item of data ?? []){
        const existing = mapped.get(item.collection_id) ?? [];
        existing.push(item);
        mapped.set(item.collection_id, existing);
    }
    return mapped;
}
function sanitizeSlug(value) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').slice(0, 120);
}
function buildUniqueSlugCandidate(baseSlug, suffix) {
    if (suffix <= 0) return baseSlug;
    const maxBaseLength = 120 - `-${suffix}`.length;
    return `${baseSlug.slice(0, maxBaseLength)}-${suffix}`;
}
async function ensureUniqueCollectionSlug(name) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        return sanitizeSlug(name) || `colecao-${Date.now()}`;
    }
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
    if (!supabase) {
        return sanitizeSlug(name) || `colecao-${Date.now()}`;
    }
    const baseSlug = sanitizeSlug(name) || `colecao-${Date.now()}`;
    const { data, error } = await supabase.from('collections').select('slug').ilike('slug', `${baseSlug}%`);
    if (error) {
        logServiceError('Error checking slug uniqueness', error, {
            baseSlug
        });
        return baseSlug;
    }
    const existingSlugs = new Set((data ?? []).map((item)=>item.slug));
    if (!existingSlugs.has(baseSlug)) {
        return baseSlug;
    }
    let suffix = 1;
    while(existingSlugs.has(buildUniqueSlugCandidate(baseSlug, suffix))){
        suffix += 1;
    }
    return buildUniqueSlugCandidate(baseSlug, suffix);
}
function mapGender(value) {
    const normalized = (value || '').toLowerCase();
    if (normalized.includes('masc')) return 'Masc';
    if (normalized.includes('fem')) return 'Fem';
    if (normalized.includes('inf') || normalized.includes('kid')) return 'Kids';
    return 'Uni';
}
function mapStoreOrigin(value) {
    const normalized = (value || '').toLowerCase();
    if (normalized.includes('shopee')) return 'Shopee';
    if (normalized.includes('shein')) return 'Shein';
    if (normalized.includes('tiktok')) return 'TikTok Shop';
    return 'Outros';
}
function mapCategory(row) {
    const createdAt = row.created_at || new Date().toISOString();
    const updatedAt = row.updated_at || createdAt;
    return {
        id: row.categories?.id || row.category_id || 'sem-categoria',
        name: row.categories?.name || 'Categoria',
        slug: row.categories?.slug || 'categoria',
        isActive: true,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt)
    };
}
function mapProduct(row) {
    const store = mapStoreOrigin(row.stores?.name || row.source_platform);
    const price = Number(row.price ?? 0);
    const compare = Number(row.compare_at_price ?? row.price ?? 0);
    const primaryUrl = row.product_url || row.original_url;
    const links = primaryUrl ? [
        {
            id: `${row.id}-primary-link`,
            url: primaryUrl,
            store,
            isActive: true,
            createdAt: new Date(row.created_at)
        }
    ] : [];
    const images = row.image_url ? [
        {
            id: `${row.id}-primary-image`,
            url: row.image_url,
            isPrimary: true
        }
    ] : [];
    return {
        id: row.id,
        name: row.name || row.title || 'Produto',
        slug: row.slug || row.id,
        description: row.description || undefined,
        shortDescription: row.short_description || undefined,
        price: Number.isFinite(compare) ? compare : 0,
        discountPrice: Number.isFinite(price) ? price : 0,
        category: mapCategory(row),
        gender: mapGender(row.gender),
        type: 'Individual',
        images,
        links,
        isFeatured: Boolean(row.is_featured),
        isHot: false,
        viewCount: 0,
        isActive: Boolean(row.is_active),
        createdAt: new Date(row.created_at),
        updatedAt: new Date(row.updated_at)
    };
}
function mapCollection(row) {
    const collectionProducts = (row.collection_products ?? []).map((item)=>{
        const productRow = Array.isArray(item.products) ? item.products[0] : item.products;
        if (!productRow || !productRow.is_active) return null;
        return {
            id: item.id,
            product: mapProduct(productRow),
            order: 0,
            isFeatured: false,
            createdAt: new Date(item.created_at)
        };
    }).filter((item)=>Boolean(item));
    return {
        id: row.id,
        name: row.name,
        slug: row.slug,
        description: row.description || undefined,
        image: row.cover_image || row.cover_image_url || undefined,
        products: collectionProducts,
        isFeatured: Boolean(row.is_featured),
        isActive: row.is_active ?? true,
        createdAt: new Date(row.created_at),
        updatedAt: new Date(row.updated_at || row.created_at)
    };
}
const collectionsService = {
    async createCollection (input) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) return null;
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
        if (!supabase) return null;
        const trimmedName = input.name.trim();
        if (!trimmedName) return null;
        const slug = await ensureUniqueCollectionSlug(trimmedName);
        let { data, error } = await supabase.from('collections').insert({
            name: trimmedName,
            slug,
            description: input.description?.trim() || null,
            cover_image: input.coverImage || null,
            is_featured: Boolean(input.isFeatured)
        }).select(COLLECTION_PRODUCTS_SELECT).single();
        if (error && isMissingColumnError(error, 'cover_image')) {
            const fallbackInsert = await supabase.from('collections').insert({
                name: trimmedName,
                slug,
                description: input.description?.trim() || null,
                cover_image_url: input.coverImage || null,
                is_featured: Boolean(input.isFeatured)
            }).select(COLLECTION_PRODUCTS_SELECT).single();
            data = fallbackInsert.data;
            error = fallbackInsert.error;
        }
        if (error) {
            logServiceError('Error creating collection', error, {
                name: trimmedName,
                slug
            });
            return null;
        }
        return mapCollection(data);
    },
    async addProductToCollection (collectionId, productId) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) return false;
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
        if (!supabase) return false;
        const { error } = await supabase.from('collection_products').upsert({
            collection_id: collectionId,
            product_id: productId
        }, {
            onConflict: 'collection_id,product_id'
        });
        if (error) {
            logServiceError('Error adding product to collection', error, {
                collectionId,
                productId
            });
            return false;
        }
        return true;
    },
    async removeProductFromCollection (collectionId, productId) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) return false;
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
        if (!supabase) return false;
        const { error } = await supabase.from('collection_products').delete().eq('collection_id', collectionId).eq('product_id', productId);
        if (error) {
            logServiceError('Error removing product from collection', error, {
                collectionId,
                productId
            });
            return false;
        }
        return true;
    },
    async getAllCollections (limit) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) return [];
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
        if (!supabase) return [];
        let queryWithFilters = supabase.from('collections').select('*').eq('is_active', true).order('created_at', {
            ascending: false
        });
        if (typeof limit === 'number') queryWithFilters = queryWithFilters.limit(limit);
        let { data, error } = await queryWithFilters;
        if (error && isMissingColumnError(error, 'is_active')) {
            let baselineQuery = supabase.from('collections').select('*').order('created_at', {
                ascending: false
            });
            if (typeof limit === 'number') baselineQuery = baselineQuery.limit(limit);
            const fallbackResult = await baselineQuery;
            data = fallbackResult.data;
            error = fallbackResult.error;
        }
        if (error) {
            logServiceError('Error fetching all collections', error, {
                limit,
                stage: 'collections_baseline_select'
            });
            return [];
        }
        const baseRows = (data ?? []).map(normalizeCollectionRow);
        logCollectionDebug('collections_fetched', {
            totalCollections: baseRows.length,
            collectionIds: baseRows.map((row)=>row.id),
            collectionNames: baseRows.map((row)=>row.name)
        });
        const productsByCollection = await getCollectionProductsMap(baseRows.map((row)=>row.id));
        const mappedCollections = baseRows.map((row)=>mapCollection({
                ...row,
                collection_products: productsByCollection.get(row.id) ?? []
            }));
        logCollectionDebug('collections_mapped', {
            productCountsByCollection: mappedCollections.map((collection)=>({
                    id: collection.id,
                    name: collection.name,
                    productCount: collection.products.length
                })),
            nonEmptyCollections: mappedCollections.filter((collection)=>collection.products.length > 0).map((collection)=>({
                    id: collection.id,
                    name: collection.name
                }))
        });
        return mappedCollections;
    },
    async getFeaturedCollections (limit = 6) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) return [];
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
        if (!supabase) return [];
        let featuredQuery = supabase.from('collections').select('*').eq('is_active', true).eq('is_featured', true).order('created_at', {
            ascending: false
        }).limit(limit);
        let { data, error } = await featuredQuery;
        if (error && isMissingColumnError(error, 'is_active')) {
            const retryWithoutIsActive = await supabase.from('collections').select('*').eq('is_featured', true).order('created_at', {
                ascending: false
            }).limit(limit);
            data = retryWithoutIsActive.data;
            error = retryWithoutIsActive.error;
        }
        if (error && isMissingColumnError(error, 'is_featured')) {
            return [];
        }
        if (error) {
            logServiceError('Error fetching featured collections', error, {
                limit,
                stage: 'featured_collections_baseline_select'
            });
            return [];
        }
        const baseRows = (data ?? []).map(normalizeCollectionRow);
        const productsByCollection = await getCollectionProductsMap(baseRows.map((row)=>row.id));
        return baseRows.map((row)=>mapCollection({
                ...row,
                collection_products: productsByCollection.get(row.id) ?? []
            }));
    },
    async getCollectionBySlug (slug) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) return null;
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
        if (!supabase) return null;
        let query = supabase.from('collections').select(COLLECTION_PRODUCTS_SELECT).eq('slug', slug).eq('is_active', true).maybeSingle();
        let { data, error } = await query;
        if (error && isMissingColumnError(error, 'is_active')) {
            const fallback = await supabase.from('collections').select(COLLECTION_PRODUCTS_SELECT).eq('slug', slug).maybeSingle();
            data = fallback.data;
            error = fallback.error;
        }
        if (error) {
            logServiceError('Error fetching collection by slug', error, {
                slug
            });
            return null;
        }
        if (!data) return null;
        const mapped = mapCollection(data);
        logCollectionDebug('collection_by_slug_mapped', {
            slug,
            collectionId: mapped.id,
            productCount: mapped.products.length,
            productIds: mapped.products.map((item)=>item.product.id)
        });
        return mapped.products.length > 0 ? mapped : null;
    },
    async getProductsByCollection (collectionId) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) return [];
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
        if (!supabase) return [];
        const { data, error } = await supabase.from('collection_products').select(`
        *,
        products(
          *,
          categories (
            id,
            name,
            slug
          ),
          stores (
            id,
            name,
            slug
          )
        )
      `).eq('collection_id', collectionId);
        if (error) {
            logServiceError('Error fetching collection products', error, {
                collectionId
            });
            return [];
        }
        return (data ?? []).map((item)=>Array.isArray(item.products) ? item.products[0] : item.products).filter((item)=>Boolean(item && item.is_active)).map(mapProduct);
    },
    async getCollectionProducts (collectionId) {
        return this.getProductsByCollection(collectionId);
    },
    sanitizeCollectionSlug (name) {
        return sanitizeSlug(name);
    },
    async generateUniqueCollectionSlug (name) {
        return ensureUniqueCollectionSlug(name);
    }
};
}),
"[project]/src/app/colecoes/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$collection$2f$collection$2d$grid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/collection/collection-grid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$collections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/collections.ts [app-rsc] (ecmascript)");
;
;
;
;
;
async function CollectionsPage() {
    const collections = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$collections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectionsService"].getAllCollections(24);
    const collectionsWithProducts = collections.filter((collection)=>collection.products.length > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StoreHeader"], {}, void 0, false, {
                fileName: "[project]/src/app/colecoes/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative overflow-hidden py-16 md:py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-pink-300/10 blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/colecoes/page.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute -bottom-24 right-8 h-64 w-64 rounded-full bg-pink-200/10 blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/colecoes/page.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-3 rounded-full border border-pink-300/25 bg-pink-200/10 px-5 py-2.5 shadow-[0_8px_24px_rgba(244,175,196,0.12)] backdrop-blur-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium tracking-[0.12em] text-pink-100/90",
                                            children: "COLEÇÕES CURADAS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/colecoes/page.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/colecoes/page.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-6 text-4xl md:text-6xl font-bold tracking-tight text-text-primary",
                                        children: "Curadorias editoriais"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/colecoes/page.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-5 max-w-3xl mx-auto text-lg text-text-secondary/90 leading-relaxed",
                                        children: "As coleções funcionam como grupos promocionais opcionais para campanhas estratégicas como Reels, carrosséis e ações sazonais. Para navegação permanente, continue explorando pelas categorias."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/colecoes/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 flex flex-wrap justify-center gap-3",
                                        children: [
                                            "Reels de campanha",
                                            "Carrosséis curados",
                                            "Sazonais",
                                            "Campanhas de produto"
                                        ].map((highlight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-pink-300/25 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-pink-100/90",
                                                children: highlight
                                            }, highlight, false, {
                                                fileName: "[project]/src/app/colecoes/page.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/colecoes/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/colecoes/page.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/colecoes/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "pb-16 md:pb-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                            children: collectionsWithProducts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$collection$2f$collection$2d$grid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionGrid"], {
                                collections: collectionsWithProducts,
                                columns: {
                                    sm: 1,
                                    md: 2,
                                    lg: 3,
                                    xl: 3
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/colecoes/page.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-border-soft bg-surface-card/70 p-10 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold text-text-primary",
                                        children: "Sem campanhas editoriais ativas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/colecoes/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-text-secondary",
                                        children: "As coleções aparecem aqui quando houver produtos vinculados."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/colecoes/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/colecoes/page.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/colecoes/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/colecoes/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/colecoes/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StoreFooter"], {}, void 0, false, {
                fileName: "[project]/src/app/colecoes/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/colecoes/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/colecoes/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/colecoes/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6ebd602f._.js.map