import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const publicUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publicAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const adminUrl = process.env.SUPABASE_URL;
const adminServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let hasWarnedPublicConfig = false;
let hasWarnedAdminConfig = false;

function warnMissingSupabaseConfig(kind: 'public' | 'admin') {
  if (process.env.NODE_ENV === 'production') return;

  if (kind === 'public' && !hasWarnedPublicConfig) {
    hasWarnedPublicConfig = true;
    console.warn(
      '[supabase] NEXT_PUBLIC_SUPABASE_URL/NEXT_PUBLIC_SUPABASE_ANON_KEY ausentes. A aplicação exibirá estados vazios sem dados mock.'
    );
  }

  if (kind === 'admin' && !hasWarnedAdminConfig) {
    hasWarnedAdminConfig = true;
    console.warn(
      '[supabase] SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY ausentes. Recursos administrativos de importação ficarão indisponíveis.'
    );
  }
}

export const isSupabaseConfigured = (): boolean => {
  const configured = Boolean(publicUrl && publicAnonKey);
  if (!configured) {
    warnMissingSupabaseConfig('public');
  }
  return configured;
};

export const isSupabaseAdminConfigured = (): boolean => {
  const configured = Boolean(adminUrl && adminServiceRoleKey);
  if (!configured) {
    warnMissingSupabaseConfig('admin');
  }
  return configured;
};

let browserClient: SupabaseClient | null = null;
let adminClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null;

  if (!browserClient) {
    browserClient = createClient(publicUrl as string, publicAnonKey as string, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }

  return browserClient;
}

export function getSupabaseAdmin(): SupabaseClient | null {
  if (typeof window !== 'undefined') return null;
  if (!isSupabaseAdminConfigured()) return null;

  if (!adminClient) {
    adminClient = createClient(adminUrl as string, adminServiceRoleKey as string, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return adminClient;
}