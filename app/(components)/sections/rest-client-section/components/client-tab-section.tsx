import RestRequestTab from './rest-request-tab';
import { EyeIcon, PlusIcon } from 'lucide-react';
import { GhostIconButton } from '../../../ui/ghost-icon-button';
import { useRequestStore } from '@/stores/request-store';

const ClientTabSection = () => {
  const { requests, selectedRequest } = useRequestStore();

  return (
    <div className="flex flex-row w-full bg-(--accent)">
      <div className="flex flex-1 overflow overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {requests.length > 0 ? (
            requests.map((r) => (
              <RestRequestTab
                key={r.id}
                requestId={r.id}
                method={r.method}
                name={r.name}
                isActive={selectedRequest?.id === r.id}
              />
            ))
          ) : (
            <RestRequestTab
              requestId={1}
              method={'GET'}
              name={'Untitled'}
              isActive={true}
            />
          )}
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
