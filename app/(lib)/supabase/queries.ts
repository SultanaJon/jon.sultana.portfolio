import supabase from '@/services/supabase/client';
import { Workspace } from '@/types/Workspace';
import { SupabaseResponse } from './types';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { Collection } from '@/types/Collection';
import { Request } from '@/types/Request';

function processSupabaseResponse<T>(
  response: PostgrestSingleResponse<T>
): SupabaseResponse<T> {
  return {
    data: response.data,
    error: response.error,
  } as SupabaseResponse<T>;
}

const getWorkspaces = async (): Promise<SupabaseResponse<Workspace[]>> => {
  return processSupabaseResponse<Workspace[]>(
    await supabase.schema('api').from('workspaces').select('*')
  );
};

const getCollections = async (
  workspaceId: string
): Promise<SupabaseResponse<Collection[]>> => {
  return processSupabaseResponse<Collection[]>(
    await supabase
      .schema('api')
      .from('collections')
      .select('*')
      .eq('workspace_id', workspaceId)
  );
};

const getRequests = async (
  collectionId: string
): Promise<SupabaseResponse<Request[]>> => {
  return processSupabaseResponse<Request[]>(
    await supabase
      .schema('api')
      .from('requests')
      .select('*')
      .eq('collection_id', collectionId)
  );
};

export { getWorkspaces, getCollections, getRequests };
