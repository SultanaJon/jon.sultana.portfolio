'use client';
import { GhostIconButton } from '@/app/(components)/ui/ghost-icon-button';
import { EllipsisVerticalIcon, RotateCcwIcon } from 'lucide-react';
import cx from 'classnames';
import { useRequestStore } from '@/stores/request-store';

export interface IRequestFile {
  requestId: string;
  name: string;
  method: string;
  isActive: boolean;
}

const RequestFile = ({ requestId, name, method, isActive }: IRequestFile) => {
  const { setActiveRequest } = useRequestStore();

  const handleRequestClick = () => {
    setActiveRequest(requestId);
  };

  return (
    <div
      className="group flex flex-row cursor-pointer"
      onClick={handleRequestClick}
    >
      <span className="flex flex-row gap-[1rem] items-center font-medium">
        <span className="pl-[1rem] text-[--method-get-color]">{method}</span>
        <span
          className={cx(
            'text-[.875rem] group-hover:text-[--primary-foreground]',
            isActive ? 'text-[--primary-foreground]' : ''
          )}
        >
          {name}
        </span>
      </span>
      <span className="flex flex-row ml-auto">
        <span className="hidden group-hover:flex">
          <GhostIconButton
            size={`icon`}
            onClick={() => {}}
            icon={<RotateCcwIcon />}
          />
        </span>
        <GhostIconButton
          size={`icon`}
          onClick={() => {}}
          icon={<EllipsisVerticalIcon />}
        />
      </span>
    </div>
  );
};

export default RequestFile;
