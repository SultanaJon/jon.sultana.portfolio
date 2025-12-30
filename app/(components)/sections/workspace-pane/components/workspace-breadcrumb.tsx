'use client';

import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useWorkspacesStore } from '@/stores/workspace-store';

export default function WorkspaceBreadcrumb() {
  const [workspaceName, setWorkspaceName] =
    useState<string>(`Personal Workspace`);

  const { workspace } = useWorkspacesStore();

  useEffect(() => {
    if (workspace) {
      setWorkspaceName(workspace.name);
    }
  }, [workspace]);

  return (
    <div className="flex gap-[.2rem] px-[.5rem] py-4 **:text-[.7rem] font-medium text-(--muted-secondary-foreground)">
      <span className="truncate">{workspaceName}</span>
      <ChevronRight size={'17'} />
      <span>Collections</span>
    </div>
  );
}
