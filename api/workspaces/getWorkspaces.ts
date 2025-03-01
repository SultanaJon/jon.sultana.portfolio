import supabase from '@/services/supabase/client';
import { Workspace } from '@/types/Workspace';

export async function getWorkspaces(): Promise<Workspace[]> {
  const { data, error } = await supabase
    .schema('api')
    .from('workspaces')
    .select('*');

  if (error) {
    throw error;
  }

  return data;
}
