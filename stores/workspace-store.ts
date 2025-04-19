import { Workspace } from '@/types/Workspace';
import { create } from 'zustand';
import workspaces from '@/data/workspaces.json';

export type WorkspaceState = {
  isLoading: boolean;
  workspaces: Workspace[];
  selectedWorkspace: Workspace | undefined;
};

export type WorkspaceActions = {
  loadWorkspaces: () => void;
};

const initialState = {
  isLoading: false,
  workspaces: [],
  selectedWorkspace: undefined,
} as WorkspaceState;

export const useWorkspacesStore = create<WorkspaceState & WorkspaceActions>(
  (set) => ({
    ...initialState,
    loadWorkspaces: async () => {
      set({ ...initialState, isLoading: true });

      setTimeout(() => {
        const loadedWorkspaces = workspaces.length > 0 ? workspaces : [];

        // Just grab the first one. Maybe we will support the ability to swtich workspaces in the future.
        let selectedWorkspace =
          loadedWorkspaces?.length > 0 ? workspaces[0] : undefined;

        set({
          ...initialState,
          workspaces: loadedWorkspaces,
          selectedWorkspace: selectedWorkspace,
        });
      }, 1500);
    },
  })
);
