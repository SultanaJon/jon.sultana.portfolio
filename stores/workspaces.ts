import { getWorkspaces } from '@/api/workspaces/getWorkspaces';
import { Workspace } from '@/types/Workspace';
import { create } from 'zustand';

export type IWorkspacesStore = {
  isLoading: boolean;
  error: boolean;
  errorMessage: string | undefined;
  selectedWorkspace: Workspace | undefined;
  workspaces: Workspace[];
  fetchWorkspaces: () => void;
};

const initialState = {
  isLoading: false,
  error: false,
  errorMessage: undefined,
  selectedWorkspace: undefined,
  workspaces: [],
  fetchWorkspaces: () => {},
} as IWorkspacesStore;

export const useWorkspacesStore = create<IWorkspacesStore>((set) => ({
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
        isLoading: false,
      });
    } catch (error) {
      set({
        ...initialState,
        error: true,
        errorMessage: (error as Error).message,
      });
    }
  },
}));
