'use client';

import RestClientSection from '@/app/(components)/sections/rest-client-section';
import WorkspacePane from '@/app/(components)/sections/workspace-pane';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { usePaneStore } from '@/stores/pane-store';
import * as React from 'react';
import cx from 'classnames';

const RestPage = () => {
  const { isWorkspacePaneExpanded } = usePaneStore();

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={75}>
        <RestClientSection />
      </ResizablePanel>
      <ResizableHandle
        className="hover:bg-[--primary] hover:w-[.2rem] cursor-ew-resize"
        disabled={!isWorkspacePaneExpanded}
      />
      {isWorkspacePaneExpanded && (
        <ResizablePanel
          defaultSize={25}
          maxSize={35}
          minSize={15}
          className={cx('hidden', 'md:inline')}
        >
          <WorkspacePane />
        </ResizablePanel>
      )}
    </ResizablePanelGroup>
  );
};

export default RestPage;
