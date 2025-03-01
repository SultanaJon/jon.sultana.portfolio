import supabase from '@/services/supabaseClient';

export async function getWorkspaces() {
  const { data, error } = await supabase
    .schema('api')
    .from('workspaces')
    .select('*');

  if (error) {
    throw error;
  }

  return data;
}
