import { Collection } from '@/types/Collection';
import { create } from 'zustand';
import collections from '@/data/collections.json';

export type CollectionState = {
  isLoading: boolean;
  collections: Collection[];
};

export type CollectionActions = {
  loadCollections: (workspaceId: number) => void;
};

const initialState = {
  isLoading: false,
  collections: [],
} as CollectionState;

export const useCollectionStore = create<CollectionState & CollectionActions>(
  (set) => ({
    ...initialState,
    loadCollections: async (workspaceId: number) => {
      set({ ...initialState, isLoading: true });

      setTimeout(() => {
        const loadedCollections =
          collections.length > 0
            ? collections.filter((c) => c.workspaceId === workspaceId)
            : [];

        set({
          ...initialState,
          collections: loadedCollections,
        });
      }, 700);
    },
  })
);
