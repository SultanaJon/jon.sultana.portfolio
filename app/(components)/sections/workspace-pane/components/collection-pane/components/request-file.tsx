import { GhostIconButton } from '@/app/(components)/ui/ghost-icon-button';
import { EllipsisVerticalIcon, RotateCcwIcon } from 'lucide-react';

export interface IRequestFile {
  name: string;
  method: string;
}

const RequestFile = ({ name, method }: IRequestFile) => {
  return (
    <div className="group flex flex-row cursor-pointer">
      <span className="flex flex-row gap-[1rem] items-center font-medium">
        <span className="pl-[1rem] text-[--method-get-color]">{method}</span>
        <span className="text-[.875rem] group-hover:text-[--primary-foreground]">
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
