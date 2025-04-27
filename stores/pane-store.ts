import { create } from 'zustand';

export type PaneState = {
  isNavPaneExpanded: boolean;
  isWorkspacePaneExpanded: boolean;
};

export type PaneActions = {
  toggleIsNavPaneExpanded: () => void;
  toggleIsWorkspacePaneExpanded: () => void;
};

const initialState = {
  isNavPaneExpanded: true,
  isWorkspacePaneExpanded: true,
} as PaneState;

export const usePaneStore = create<PaneState & PaneActions>((set) => ({
  ...initialState,
  toggleIsNavPaneExpanded: () =>
    set((state) => ({ isNavPaneExpanded: !state.isNavPaneExpanded })),
  toggleIsWorkspacePaneExpanded: () => {
    console.log('hello');
    set((state) => ({
      isWorkspacePaneExpanded: !state.isWorkspacePaneExpanded,
    }));
  },
}));
