import JsonView from '@uiw/react-json-view';
import RequestEditorTab from './request-editor-tab';
import { useRequestStore } from '@/stores/request-store';
import { useEffect, useState } from 'react';
import { Response } from '@/types/Response';
import RequestStatusSection from './request-status-section';
import LoadingSpinner from '@/app/(components)/ui/loading-indicator';

const ResponseSection = () => {
  const [response, setResponse] = useState<Response | null>(null);

  const { activeRequest, isLoading } = useRequestStore();

  useEffect(() => {
    if (activeRequest != null) {
      setResponse(activeRequest.responses);
    }
  }, [activeRequest]);

  if (isLoading) return <LoadingSpinner />;

  if (response == null) return <div>No response found</div>;

  return (
    <>
      <RequestStatusSection
        responseId={response.id}
        code={response.code}
        codeDescription={response.status}
      />
      <div className="flex">
        <RequestEditorTab text="HTML" isActive={true} />
        <RequestEditorTab text="Raw" />
        <RequestEditorTab text="Headers" />
        <RequestEditorTab text="Test Results" />
      </div>
      {response && (
        <JsonView
          highlightUpdates={false}
          enableClipboard={false}
          displayObjectSize={false}
          displayDataTypes={false}
          collapsed={false}
          className="p-[1.2rem] overflow-auto h-full"
          value={JSON.parse(response.body ?? '{}')}
        />
      )}
    </>
  );
};

export default ResponseSection;
