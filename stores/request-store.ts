import { workspace } from '@/data/workspace';
import { Request } from '@/types/request';
import { create } from 'zustand';

export type RequestState = {
  requests: Request[];
  selectedRequest: Request | null;
};

export type RequestActions = {
  setSelectedRequest: (requestId: number) => void;
};

const initialState = {
  requests: workspace?.collection?.requests ?? [],
  selectedRequest: workspace?.collection?.requests[0],
} as RequestState;

export const useRequestStore = create<RequestState & RequestActions>(
  (set, get) => ({
    ...initialState,
    setSelectedRequest: (requestId: number) => {
      var request = get().requests.find((r) => r.id === requestId);
      set({ selectedRequest: request });
    },
  })
);
