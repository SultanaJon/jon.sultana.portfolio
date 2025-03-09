import { getCollections } from '@/app/(lib)/supabase/queries';
import { Collection } from '@/types/Collection';
import { create } from 'zustand';

export type ICollectionStore = {
  isLoading: boolean;
  error: boolean;
  errorMessage: string | undefined;
  collections: Collection[];
  fetchCollections: (workspaceId: string) => void;
};

const initialState = {
  isLoading: false,
  error: false,
  errorMessage: undefined,
  collections: [],
  fetchCollections: (workspaceId: string) => {},
} as ICollectionStore;

export const useCollectionStore = create<ICollectionStore>((set) => ({
  ...initialState,
  fetchCollections: async (workspaceId: string) => {
    try {
      set({ ...initialState, isLoading: true });
      var response = await getCollections(workspaceId);

      const error = response.error;
      if (error != null) {
        set({
          ...initialState,
          error: true,
          errorMessage: `code: ${error.code}, message: ${error.message}}`,
        });
        return;
      }

      set({
        ...initialState,
        collections: response?.data ?? [],
      });
    } catch (error) {
      set({
        ...initialState,
        error: true,
        errorMessage: (error as Error).message,
      });
    }
  },
}));
