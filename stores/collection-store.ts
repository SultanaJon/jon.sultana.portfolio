import { workspace } from '@/data/workspace';
import { Collection } from '@/types/collection';
import { create } from 'zustand';

export type CollectionState = {
  collection: Collection | null;
};

const initialState = {
  collection: workspace?.collection,
} as CollectionState;

export const useCollectionStore = create<CollectionState>((set) => ({
  ...initialState,
}));
