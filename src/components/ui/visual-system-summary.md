# Visual System Summary

## Visão geral
- **Tema ativo:** pink-dark premium commerce
- **Direção visual:** clean, feminino-comercial, contraste controlado
- **Prioridade:** legibilidade + conversão em mobile-first

## Fonte de verdade dos tokens
- Tokens ativos: `tailwind.config.ts` (`theme.extend.colors`)
- Referência legada: `src/constants/ui.ts` (não é source runtime)
- Utilitários já validados no sistema:
  - `bg-surface-pink`
  - `bg-gradient-radial`

## Decisões visuais atuais (Phase 4)
- **Spacing rhythm:** base de 8px/16px com consistência entre seções principais.
- **Border radius:** predominância de `rounded-2xl` (cards/painéis) e `rounded-full` (CTAs/chips).
- **Shadows:** suaves e estáveis (`shadow-black/10~15`), sem exagero.
- **Contraste:** textos secundários em níveis consistentes (`text-text-secondary/90`, `white/75~80` em fundos escuros).

## Componentes-chave e uso
- **Button (`src/components/ui/button.tsx`)**
  - Base unificada de altura e peso visual
  - Variantes `default`, `outline`, `ghost` sem mudança de identidade
- **FilterBar (`src/components/ui/filter-bar.tsx`)**
  - campos com foco legível e densidade consistente
  - versão canônica reutilizada via `src/components/product/filter-bar.tsx`
- **States (`state-primitives` + wrappers empty-state)**
  - estrutura consistente para empty/loading/error
  - CTAs de ação normalizadas

## Microcopy de ação (padrão)
- `Ver oferta`
- `Explorar`
- `Limpar filtros`

## Boas práticas para evolução
1. Não criar novo estilo de botão sem necessidade.
2. Reusar classes base antes de adicionar classes locais.
3. Preferir ajuste sutil (spacing/contraste/sombra) a mudanças estruturais.
4. Manter consistência de nomenclatura entre UI e documentação.