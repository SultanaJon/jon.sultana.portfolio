import { create } from 'zustand';

interface ISidebarStore {
  isExpanded: boolean;
  toggleIsExpanded: () => void;
}

export const useSidebarStore = create<ISidebarStore>((set) => ({
  isExpanded: true,
  toggleIsExpanded: () => set((state) => ({ isExpanded: !state.isExpanded })),
}));
