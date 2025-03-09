import { GhostIconButton } from '@/app/(components)/ui/ghost-icon-button';
import {
  EllipsisVerticalIcon,
  FilePlusIcon,
  FolderClosedIcon,
  FolderOpenIcon,
  FolderPlusIcon,
  SquarePlayIcon,
} from 'lucide-react';

export interface ICollectionDirectory {
  collectionName: string;
  isOpen: boolean;
  onClick: () => void;
}

const CollectionDirectory = ({
  collectionName,
  isOpen,
  onClick,
}: ICollectionDirectory) => {
  return (
    <div className="group flex flex-row cursor-pointer" onClick={onClick}>
      <span className="flex flex-row gap-[1rem] items-center">
        <span className="pl-[1rem]">
          {isOpen ? (
            <FolderOpenIcon size={16} />
          ) : (
            <FolderClosedIcon size={16} />
          )}
        </span>
        <span className="text-[.875rem] font-medium  group-hover:text-[--primary-foreground]">
          {collectionName}
        </span>
      </span>
      <span className="flex flex-row ml-auto">
        <span className="hidden group-hover:flex">
          <GhostIconButton
            size={`icon`}
            onClick={() => {}}
            icon={<FilePlusIcon />}
          />
          <GhostIconButton
            size={`icon`}
            onClick={() => {}}
            icon={<FolderPlusIcon />}
          />
          <GhostIconButton
            size={`icon`}
            onClick={() => {}}
            icon={<SquarePlayIcon />}
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

export default CollectionDirectory;
