'use client';

import { useEffect, useState } from 'react';
import ClientTabSection from './components/client-tab-section';
import LoadingSpinner from '../../ui/loading-indicator';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import ResponseSection from './components/response-section';
import RequestEditorSection from './components/request-editor-section';
import { useRequestStore } from '@/stores/request-store';

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
          <ResizablePanel defaultSize={30}>
            <RequestEditorSection />
          </ResizablePanel>
          <ResizableHandle className="hover:bg-[--primary] hover:!h-[.2rem] cursor-ew-resize" />
          <ResizablePanel
            defaultSize={70}
            className="flex flex-col overflow-hidden"
          >
            <ResponseSection />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default RestClientSection;
