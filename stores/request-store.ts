import { getRequests } from '@/app/(lib)/supabase/queries';
import { Request } from '@/types/Request';
import { create } from 'zustand';

export type RequestState = {
  isLoading: boolean;
  error: boolean;
  errorMessage: string | undefined;
  requests: Request[];
  activeRequest: Request | undefined;
};

export type RequestActions = {
  fetchRequests: (collectionId: string) => void;
  setActiveRequest: (requestId: string) => void;
};

const initialState = {
  isLoading: false,
  error: false,
  errorMessage: undefined,
  requests: [],
  activeRequest: undefined,
} as RequestState;

export const useRequestStore = create<RequestState & RequestActions>(
  (set, get) => ({
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

        let requests = response?.data ?? [];

        set({
          ...initialState,
          activeRequest: requests[0] ?? undefined,
          requests: requests,
        });
      } catch (error) {
        set({
          ...initialState,
          error: true,
          errorMessage: (error as Error).message,
        });
      }
    },
    setActiveRequest: (requestId: string) => {
      var request = get().requests.find((r) => r.id === requestId);
      set({ activeRequest: request });
    },
  })
);
