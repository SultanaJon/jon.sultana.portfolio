import RequestEditorTab from './request-editor-tab';
import { useRequestStore } from '@/stores/request-store';
import { useEffect, useState } from 'react';
import { Response } from '@/types/Response';
import RequestStatusSection from './request-status-section';
import LoadingSpinner from '@/app/(components)/ui/loading-indicator';
import CodeBlock from '@/app/(components)/ui/code-block';

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
        <div className="p-[1.2rem] overflow-hidden h-full">
          <div className="h-full overflow-hidden rounded">
            <CodeBlock
              code={
                response.body
                  ? JSON.stringify(JSON.parse(response.body), null, 2)
                  : ''
              }
              lang="json"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ResponseSection;
