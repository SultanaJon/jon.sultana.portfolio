'use client';
import { GhostIconButton } from '@/app/(components)/ui/ghost-icon-button';
import { EllipsisVerticalIcon, RotateCcwIcon } from 'lucide-react';
import cx from 'classnames';
import { useRequestStore } from '@/stores/request-store';

export interface IRequestFile {
  requestId: number;
  name: string;
  method: string;
  isActive: boolean;
}

const RequestFile = ({ requestId, name, method, isActive }: IRequestFile) => {
  const { setSelectedRequest } = useRequestStore();

  const handleRequestClick = () => {
    setSelectedRequest(requestId);
  };

  return (
    <div
      className="group flex flex-row cursor-pointer"
      onClick={handleRequestClick}
    >
      <span className="truncate flex flex-row gap-4 items-center font-medium">
        <span className="border-r-2 border-solid border-(--divider-dark-color) pl-6 h-full" />
        <span className="text-(--method-get-color)">{method}</span>
        <span
          className={cx(
            'truncate text-[.875rem] group-hover:text-(--primary-foreground)',
            isActive ? 'text-(--primary-foreground)' : ''
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
