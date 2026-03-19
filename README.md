# ClickVendas — Social to Sale Hub

Aplicação de catálogo em Next.js + Supabase com foco em descoberta de ofertas (Shopee, Shein e TikTok Shop), curadoria e experiência premium mobile-first.

## Setup de ambiente

### Variáveis obrigatórias

Crie um arquivo `.env.local` na raiz com as variáveis abaixo:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```

### Como obter as credenciais do Supabase

1. Crie um projeto no [supabase.com](https://supabase.com)
2. Acesse **Settings → API**
3. Copie **Project URL** e **anon public key**
4. Adicione os valores no `.env.local`

### Schema esperado no banco

A aplicação espera as seguintes tabelas no Supabase:

- `categories` — categorias de produto
- `products` — produtos com relacionamento para categoria
- `product_images` — imagens do produto
- `product_links` — links afiliados por loja
- `collections` — coleções editoriais
- `collection_products` — relação N:N entre coleções e produtos

## Desenvolvimento

```bash
npm install
npm run dev
```

## Arquitetura

- **Next.js (App Router)**
- **TypeScript** para tipagem segura
- **Tailwind CSS** para estilização utilitária
- **Supabase** para banco e integração de dados
- **Arquitetura orientada a componentes** com separação clara de responsabilidades

## Design system e diretrizes visuais

- **Tema ativo:** pink-dark premium commerce
- **Fonte de verdade dos tokens:** `tailwind.config.ts`
- **Governança legada:** `src/constants/ui.ts` (referência histórica, não runtime)
- **Padrões visuais principais:**
  - cantos arredondados (predominância de `rounded-2xl` / `rounded-full`)
  - sombras suaves e consistentes
  - hierarquia clara de CTA, com foco em legibilidade no mobile

## Componentes-chave (uso rápido)

### `FilterBar`
- Arquivo canônico: `src/components/ui/filter-bar.tsx`
- Reexport para domínio de produto: `src/components/product/filter-bar.tsx`
- API atual:
  - `category`, `gender`, `store`, `searchTerm?`
  - `onCategoryChange`, `onGenderChange`, `onStoreChange`, `onSearchChange?`
  - toggles `showSearch`, `showCategory`, `showGender`, `showStore`

### `PublicShell`
- Arquivo: `src/components/layout/public-shell.tsx`
- Responsável por compor páginas públicas com:
  - `StoreHeader`
  - `<main>` com `contentClassName` customizável
  - `StoreFooter`

### States (empty/loading/error)
- Primitivas: `src/components/ui/state-primitives.tsx`
- Wrappers:
  - `empty-state.tsx`
  - `empty-state-server.tsx`
  - `empty-state-wrapper.tsx`
- Convenções atuais de microcopy para ações:
  - `Ver oferta`
  - `Explorar`
  - `Limpar filtros`

## Expectativas de UX

- **Sem quebrar fluxo de descoberta:** ações principais sempre visíveis
- **Empty states acionáveis:** mensagem clara + próximo passo
- **Consistência de nomenclatura:** evitar rótulos concorrentes para mesma ação
- **Mudanças visuais devem ser sutis:** sem redesign e sem refatorações profundas

## Features

- Página de produto com rota dinâmica por slug
- Página de coleções e coleções por slug
- Filtros por categoria/gênero/loja com busca
- Links afiliados multi-loja
- Empty, loading e error states reutilizáveis
- Layout responsivo com tema dark premium