'use client';

import { useEffect, useState } from 'react';
import ClientTabSection from './components/client-tab-section';
import { useRequestStore } from '@/stores/request-store';
import LoadingSpinner from '../../ui/loading-indicator';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import RequestTabSection from './components/request-editor-tab-section';
import RequestEditorTabSection from './components/request-parameters-section';
import RequestBar from './components/request-bar';

const RestClientSection = () => {
  const [componentRendering, setComponentRendering] = useState<boolean>(true);

  const { requests, isLoading } = useRequestStore();

  useEffect(() => {
    if (requests.length > 0 || !isLoading) setComponentRendering(false);
  }, [requests, isLoading]);

  if (componentRendering) return <LoadingSpinner />;

  return (
    <div className="flex flex-col h-full">
      <ClientTabSection />
      <div className="h-full">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="h-full">
              <RequestBar />
              <RequestTabSection />
              <RequestEditorTabSection />
            </div>
          </ResizablePanel>
          <ResizableHandle className="hover:bg-[--primary] hover:!h-[.2rem] cursor-ew-resize" />
          <ResizablePanel defaultSize={50}>
            <span>Response</span>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default RestClientSection;
