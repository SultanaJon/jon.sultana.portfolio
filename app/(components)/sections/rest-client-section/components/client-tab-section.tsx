import RestRequestTab from './rest-request-tab';
import { EyeIcon, PlusIcon } from 'lucide-react';
import { GhostIconButton } from '../../../ui/ghost-icon-button';
import { useRequestStore } from '@/stores/request-store';

const ClientTabSection = () => {
  const { requests, activeRequest } = useRequestStore();

  return (
    <div className="flex flex-row w-full bg-[--accent]">
      <div className="flex flex-1">
        <div className="flex">
          {requests.map((r) => (
            <RestRequestTab
              key={r.id}
              requestId={r.id}
              method={r.method}
              name={r.name}
              isActive={activeRequest?.id === r.id}
            />
          ))}
        </div>
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
