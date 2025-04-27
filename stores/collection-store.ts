import { Collection } from '@/types/Collection';
import { create } from 'zustand';
import { portfolioConfig } from '@/config/porfolio.config';

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
          portfolioConfig.collections.length > 0
            ? portfolioConfig.collections.filter(
                (c) => c.workspaceId === workspaceId
              )
            : [];

        set({
          ...initialState,
          collections: loadedCollections,
        });
      }, 700);
    },
  })
);
