(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/badge-origin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BadgeOrigin",
    ()=>BadgeOrigin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function BadgeOrigin({ origin }) {
    const getBadgeStyle = (store)=>{
        switch(store){
            case "Shopee":
                return {
                    bg: "bg-red-500/15",
                    border: "border-red-400/30",
                    text: "text-red-300",
                    icon: "🛒"
                };
            case "Shein":
                return {
                    bg: "bg-pink-500/15",
                    border: "border-pink-400/30",
                    text: "text-pink-300",
                    icon: "👗"
                };
            case "TikTok Shop":
                return {
                    bg: "bg-blue-500/15",
                    border: "border-blue-400/30",
                    text: "text-blue-300",
                    icon: "🎵"
                };
            default:
                return {
                    bg: "bg-gray-500/15",
                    border: "border-gray-400/30",
                    text: "text-gray-300",
                    icon: "🛒"
                };
        }
    };
    const style = getBadgeStyle(origin);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-flex items-center gap-1.5 rounded-full border ${style.border} ${style.bg} px-2.5 py-1 text-xs font-semibold ${style.text} backdrop-blur-sm`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: style.icon
            }, void 0, false, {
                fileName: "[project]/src/components/ui/badge-origin.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "capitalize",
                children: origin
            }, void 0, false, {
                fileName: "[project]/src/components/ui/badge-origin.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/badge-origin.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = BadgeOrigin;
var _c;
__turbopack_context__.k.register(_c, "BadgeOrigin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ui_badge-origin_tsx_0cc2628d._.js.map