import RequestEditorTab from './request-editor-tab';

const RequestTabSection = () => {
  return (
    <div className="flex w-full">
      <div className="flex">
        <RequestEditorTab text="Parameters" isActive={true} />
        <RequestEditorTab text="Body" />
        <RequestEditorTab text="Headers" />
        <RequestEditorTab text="Authorization" />
        <RequestEditorTab text="Pre-request Script" />
        <RequestEditorTab text="Test" />
      </div>
      <div className="flex ml-auto">
        <RequestEditorTab text="Variables" />
      </div>
    </div>
  );
};

export default RequestTabSection;
