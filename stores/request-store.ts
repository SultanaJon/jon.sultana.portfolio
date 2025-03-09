import { getRequests } from '@/app/(lib)/supabase/queries';
import { Request } from '@/types/Request';
import { create } from 'zustand';

export type IRequestStore = {
  isLoading: boolean;
  error: boolean;
  errorMessage: string | undefined;
  requests: Request[];
  fetchRequests: (collectionId: string) => void;
};

const initialState = {
  isLoading: false,
  error: false,
  errorMessage: undefined,
  requests: [],
  fetchRequests: (collectionId: string) => {},
} as IRequestStore;

export const useRequestStore = create<IRequestStore>((set) => ({
  ...initialState,
  fetchRequests: async (collectionId: string) => {
    try {
      set({ ...initialState, isLoading: true });
      var response = await getRequests(collectionId);

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
        requests: response?.data ?? [],
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
