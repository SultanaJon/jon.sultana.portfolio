import { create } from 'zustand';

interface IPaneStore {
  isNavPaneExpanded: boolean;
  isWorkspacePaneExpanded: boolean;
  toggleIsNavPaneExpanded: () => void;
  toggleIsWorkspacePaneExpanded: () => void;
}

export const usePaneStore = create<IPaneStore>((set) => ({
  isNavPaneExpanded: true,
  isWorkspacePaneExpanded: true,
  toggleIsNavPaneExpanded: () =>
    set((state) => ({ isNavPaneExpanded: !state.isNavPaneExpanded })),
  toggleIsWorkspacePaneExpanded: () =>
    set((state) => ({
      isWorkspacePaneExpanded: !state.isWorkspacePaneExpanded,
    })),
}));
