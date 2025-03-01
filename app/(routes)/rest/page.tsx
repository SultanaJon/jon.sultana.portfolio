'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import WorkspacePane from '@/app/components/workspace-pane';
import { usePaneStore } from '@/stores/pane-store';
import * as React from 'react';

const RestPage = () => {
  const { isWorkspacePaneExpanded } = usePaneStore();
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={75}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">
            The REST tools will display here
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle disabled={!isWorkspacePaneExpanded} />
      <ResizablePanel
        defaultSize={25}
        style={{ display: !isWorkspacePaneExpanded ? 'none' : '' }}
      >
        <WorkspacePane />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default RestPage;
