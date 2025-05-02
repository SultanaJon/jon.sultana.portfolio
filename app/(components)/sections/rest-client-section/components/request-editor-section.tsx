import { CheckCircle2Icon, SaveIcon, TrashIcon } from 'lucide-react';
import MenuButton from './menu-button';
import RequestInput from './request-input';
import { useRequestStore } from '@/stores/request-store';
import RequestEditorTab from './request-editor-tab';
import BoxedSearch from '@/app/(components)/ui/boxed-search';
import { GhostIconButton } from '@/app/(components)/ui/ghost-icon-button';
import { useEffect, useState } from 'react';

const RequestEditorSection = () => {
  const [endpoint, setEndpoint] = useState<string>(``);
  const { selectedRequest } = useRequestStore();

  useEffect(() => {
    if (selectedRequest) setEndpoint(selectedRequest.endpoint);
  }, [selectedRequest]);
  return (
    <>
      <div className="flex gap-[1rem] p-[1.2rem]">
        <div className="flex w-full h-[2.5rem]">
          <RequestInput url={endpoint} />
        </div>
        <div className="flex gap-[.5rem] ml-auto h-[2.5rem]">
          <MenuButton colorMode="default">Send</MenuButton>
          <MenuButton colorMode="dark">
            <SaveIcon />
            Save
          </MenuButton>
        </div>
      </div>
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
      <div className="flex w-full *:border-[1px] *:border-[--border]">
        <div className="!border-l-[0]">
          <GhostIconButton onClick={() => {}} icon={<></>} />
        </div>
        <div className="inline-flex flex-[1_1_0]">
          <BoxedSearch placeholder="Key" />
        </div>
        <div className="inline-flex flex-[1_1_0]">
          <BoxedSearch placeholder="Value" />
        </div>
        <div>
          <GhostIconButton
            onClick={() => {}}
            icon={<CheckCircle2Icon />}
            className="[&_*]:text-green-500 [&_*]:hover:text-green-500"
          />
        </div>
        <div className="!border-r-[0]">
          <GhostIconButton
            onClick={() => {}}
            icon={<TrashIcon />}
            className="[&_*]:text-[--destructive] [&_*]:hover:text-[--destructive]"
          />
        </div>
      </div>
    </>
  );
};

export default RequestEditorSection;
