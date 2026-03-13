# Social to Sale Hub

A Next.js 14+ catalog application with Supabase integration for social commerce.

## Environment Setup

### Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```

### Getting Supabase Credentials

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Go to Settings → API in your Supabase dashboard
3. Copy the "Project URL" and "anon public" key
4. Add them to your `.env.local` file

### Database Schema

The application expects the following tables in your Supabase database:

- `categories` - Product categories
- `products` - Individual products with relationships to categories
- `product_images` - Product image URLs and metadata
- `product_links` - Affiliate links for different stores
- `collections` - Product collections
- `collection_products` - Many-to-many relationship between collections and products

## Development

```bash
npm install
npm run dev
```

## Architecture

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Supabase** for database and authentication
- **Component-based** architecture with clear separation of concerns

## Features

- Individual product pages with dynamic routing
- Collection pages with multiple products
- Category-based filtering
- Multi-store affiliate links
- Responsive design with dark theme