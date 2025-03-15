import RestRequestTab from './rest-request-tab';
import { EyeIcon, PlusIcon } from 'lucide-react';
import { GhostIconButton } from '../../../ui/ghost-icon-button';
import { useRequestStore } from '@/stores/request-store';
import { JSX } from 'react';

const ClientTabSection = () => {
  const { requests, activeRequest } = useRequestStore();

  const buildRequestTabs = (): JSX.Element[] | JSX.Element => {
    return requests.length > 0 ? (
      requests.map((r) => (
        <RestRequestTab
          key={r.id}
          requestId={r.id}
          method={r.method}
          name={r.name}
          isActive={activeRequest?.id === r.id}
        />
      ))
    ) : (
      <RestRequestTab
        requestId={'new'}
        method={'GET'}
        name={'Untitled'}
        isActive={true}
      />
    );
  };

  return (
    <div className="flex flex-row w-full bg-[--accent]">
      <div className="flex flex-1">
        <div className="flex">{buildRequestTabs()}</div>
        <div>
          <div className="flex justify-center items-center h-full">
            <GhostIconButton onClick={() => {}} icon={<PlusIcon />} />
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-auto">
        <div>
          <div className="flex justify-center items-center h-full">
            <GhostIconButton onClick={() => {}} icon={<EyeIcon />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTabSection;
