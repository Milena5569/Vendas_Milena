module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},50645,a=>{a.n(a.i(27572))},43619,a=>{a.n(a.i(79962))},13718,a=>{a.n(a.i(85523))},18198,a=>{a.n(a.i(45518))},62212,a=>{a.n(a.i(66114))},45785,a=>{"use strict";var b=a.i(80494);function c(a,b,c){}function d(a){let b,c,d=(b=(a.stores?.name||a.source_platform||"").toLowerCase()).includes("shopee")?"Shopee":b.includes("shein")?"Shein":b.includes("tiktok")?"TikTok Shop":b.includes("amazon")?"Amazon":b.includes("magalu")?"Magalu":"Outros",e=Number(a.price??0),f=Number(a.compare_at_price??a.price??0),g=[{id:`${a.id}-primary-link`,url:a.product_url||a.original_url||"#",store:d,isActive:!0,createdAt:new Date(a.created_at)}];return{id:a.id,name:a.name,slug:a.slug,description:a.description||void 0,shortDescription:a.short_description||void 0,price:Number.isFinite(f)?f:0,discountPrice:Number.isFinite(e)?e:0,category:{id:a.categories?.id||a.category_id||"sem-categoria",name:a.categories?.name||"Categoria",slug:a.categories?.slug||"categoria",isActive:!0,createdAt:new Date(a.created_at),updatedAt:new Date(a.updated_at)},gender:(c=(a.gender||"").toLowerCase()).includes("masc")?"Masc":c.includes("fem")?"Fem":c.includes("inf")||c.includes("kid")?"Kids":"Uni",type:"Individual",images:[{id:`${a.id}-primary-image`,url:a.image_url||"/images/products/luminaria-led.jpg",isPrimary:!0}],links:g,isFeatured:!!a.is_featured,isHot:!1,viewCount:0,isActive:!!a.is_active,createdAt:new Date(a.created_at),updatedAt:new Date(a.updated_at)}}a.s(["productsService",0,{async getFeaturedProducts(a=12){if(!(0,b.isSupabaseConfigured)())return[];let e=(0,b.getSupabaseClient)();if(!e)return[];let{data:f,error:g}=await e.from("products").select(`
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
      `).eq("is_active",!0).eq("is_featured",!0).order("created_at",{ascending:!1}).limit(a);return g?(c("Error fetching featured products",g),[]):(f??[]).map(d)},async getProductsByCategory(a){if(!(0,b.isSupabaseConfigured)())return[];let e=(0,b.getSupabaseClient)();if(!e)return[];let{data:f,error:g}=await e.from("products").select(`
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
      `).eq("is_active",!0).eq("category_id",a).order("created_at",{ascending:!1});return g?(c("Error fetching products by category",g,{categoryId:a}),[]):(f??[]).map(d)},async getProductBySlug(a){if(!(0,b.isSupabaseConfigured)())return null;let e=(0,b.getSupabaseClient)();if(!e)return null;let{data:f,error:g}=await e.from("products").select(`
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
      `).eq("slug",a).eq("is_active",!0).maybeSingle();return g?(c("Error fetching product by slug",g,{slug:a}),null):f?d(f):null},async getProductImages(a){let b=await this.getProductById(a);return b?.images??[]},async getPrimaryProductLink(a){let b=await this.getProductById(a);return b?.links?.[0]??null},async getProductById(a){if(!(0,b.isSupabaseConfigured)())return null;let e=(0,b.getSupabaseClient)();if(!e)return null;let{data:f,error:g}=await e.from("products").select(`
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
      `).eq("id",a).eq("is_active",!0).maybeSingle();return g?(c("Error fetching product by id",g,{productId:a}),null):f?d(f):null}}])},62384,a=>{"use strict";var b=a.i(80494);function c(a,b,c){}function d(a){return{id:a.id,name:a.name,slug:a.slug,description:a.description??void 0,order:a.sort_order??void 0,isActive:a.is_active,createdAt:new Date(a.created_at),updatedAt:new Date(a.updated_at)}}a.s(["categoriesService",0,{async getAllCategories(){if(!(0,b.isSupabaseConfigured)())return[];let a=(0,b.getSupabaseClient)();if(!a)return[];let{data:e,error:f}=await a.from("categories").select("*").eq("is_active",!0).order("sort_order",{ascending:!0});return f?(c("Error fetching categories",f),[]):(e??[]).map(d)},async getCategoryBySlug(a){if(!(0,b.isSupabaseConfigured)())return null;let e=(0,b.getSupabaseClient)();if(!e)return null;let{data:f,error:g}=await e.from("categories").select("*").eq("slug",a).eq("is_active",!0).single();return g?(c("Error fetching category by slug",g,{slug:a}),null):f?d(f):null}}])},60845,a=>{"use strict";var b=a.i(7997);a.i(70396);var c=a.i(73727),d=a.i(62384),e=a.i(45785),f=a.i(96130);async function g({params:a}){let{slug:g}=await a,h=await d.categoriesService.getCategoryBySlug(g);h||(0,c.notFound)();let i=await e.productsService.getProductsByCategory(h.id);return(0,b.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,b.jsxs)("div",{className:"mb-8",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold text-text-primary mb-2",children:h.name}),(0,b.jsx)("p",{className:"text-text-secondary",children:h.description})]}),(0,b.jsx)(f.ProductGrid,{products:i})]})}a.s(["default",()=>g])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__65d533cb._.js.map