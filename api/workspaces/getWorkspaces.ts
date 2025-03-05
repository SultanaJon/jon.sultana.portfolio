import supabase from '@/services/supabase/client';
import { Workspace } from '@/types/Workspace';
import { SupabaseResponse } from '@/api/types/SupabaseResponse';

export async function getWorkspaces(): Promise<SupabaseResponse<Workspace[]>> {
  const { data, error } = await supabase
    .schema('api')
    .from('workspaces')
    .select('*');

  if (error) {
    throw error;
  }

  return {
    data: data,
    error: error,
  } as SupabaseResponse<Workspace[]>;
}
