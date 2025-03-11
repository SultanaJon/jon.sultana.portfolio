import { getWorkspaces } from '@/app/(lib)/supabase/queries';
import { Workspace } from '@/types/Workspace';
import { create } from 'zustand';

export type WorkspaceState = {
  isLoading: boolean;
  error: boolean;
  errorMessage: string | undefined;
  selectedWorkspace: Workspace | undefined;
  workspaces: Workspace[];
};

export type WorkspaceActions = {
  fetchWorkspaces: () => void;
};

const initialState = {
  isLoading: false,
  error: false,
  errorMessage: undefined,
  selectedWorkspace: undefined,
  workspaces: [],
} as WorkspaceState;

export const useWorkspacesStore = create<WorkspaceState & WorkspaceActions>(
  (set) => ({
    ...initialState,
    fetchWorkspaces: async () => {
      try {
        set({ ...initialState, isLoading: true });
        var response = await getWorkspaces();

        const error = response.error;
        if (error != null) {
          set({
            ...initialState,
            error: true,
            errorMessage: `code: ${error.code}, message: ${error.message}}`,
          });
          return;
        }

        const workspaces = response?.data ?? [];

        // Just grab the first one. Maybe we will support the ability to swtich workspaces in the future.
        let selectedWorkspace =
          workspaces?.length > 0 ? workspaces[0] : undefined;

        set({
          ...initialState,
          workspaces: workspaces,
          selectedWorkspace: selectedWorkspace,
        });
      } catch (error) {
        set({
          ...initialState,
          error: true,
          errorMessage: (error as Error).message,
        });
      }
    },
  })
);
