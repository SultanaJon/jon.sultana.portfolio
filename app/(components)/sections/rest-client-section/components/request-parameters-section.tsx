import { GhostIconButton } from '@/app/(components)/ui/ghost-icon-button';
import BoxedSearch from '../../workspace-pane/components/collection-pane/components/boxed-search';
import { CheckCircle2Icon, TrashIcon } from 'lucide-react';

const RequestEditorTabSection = () => {
  return (
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
  );
};

export default RequestEditorTabSection;
