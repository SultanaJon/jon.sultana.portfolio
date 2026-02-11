import RequestEditorTab from './request-editor-tab';
import { useRequestStore } from '@/stores/request-store';
import { useEffect, useState } from 'react';
import RequestStatusSection from './request-status-section';
import CodeFrame from '@/app/(components)/ui/code-frame';
import { Response } from '@/types/response';

const ResponseSection = () => {
  const [response, setResponse] = useState<Response | null>(null);

  const { selectedRequest } = useRequestStore();

  useEffect(() => {
    if (selectedRequest != null) {
      setResponse(selectedRequest.response);
    }
  }, [selectedRequest]);

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
            <CodeFrame
              code={response.body ? JSON.stringify(response.body, null, 2) : ''}
              lang="json"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ResponseSection;
