import { workspace } from '@/data/workspace';
import { Workspace } from '@/types/workspace';
import { create } from 'zustand';

export type WorkspaceState = {
  workspace: Workspace | null;
};

const initialState = {
  workspace: workspace,
} as WorkspaceState;

export const useWorkspacesStore = create<WorkspaceState>(() => ({
  ...initialState,
}));
