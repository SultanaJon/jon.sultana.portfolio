import { Request } from '@/types/Request';
import { create } from 'zustand';
import requests from '@/data/requests.json';

export type RequestState = {
  isLoading: boolean;
  requests: Request[];
  selectedRequest: Request | undefined;
};

export type RequestActions = {
  loadRequests: (collectionId: number) => void;
  setSelectedRequest: (requestId: number) => void;
};

const initialState = {
  isLoading: false,
  requests: [],
  selectedRequest: undefined,
} as RequestState;

export const useRequestStore = create<RequestState & RequestActions>(
  (set, get) => ({
    ...initialState,
    loadRequests: async (collectionId: number) => {
      set({ ...initialState, isLoading: true });

      setTimeout(() => {
        const loadedRequests =
          requests.length > 0
            ? requests.filter((r) => r.collectionId === collectionId)
            : [];

        set({
          ...initialState,
          selectedRequest: loadedRequests[0] ?? undefined,
          requests: loadedRequests,
        });
      }, 300);
    },
    setSelectedRequest: (requestId: number) => {
      var request = get().requests.find((r) => r.id === requestId);
      set({ selectedRequest: request });
    },
  })
);
