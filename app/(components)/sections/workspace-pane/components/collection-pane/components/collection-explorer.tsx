'use client';

import { useCollectionStore } from '@/stores/collection-store';
import {
  EllipsisVerticalIcon,
  FilePlusIcon,
  FolderOpenIcon,
  FolderPlusIcon,
  SquarePlayIcon,
} from 'lucide-react';
import { GhostIconButton } from '@/app/(components)/ui/ghost-icon-button';
import { useRequestStore } from '@/stores/request-store';
import RequestFile from './request-file';
import LoadingSpinner from '@/app/(components)/ui/loading-indicator';
import { useEffect, useState } from 'react';

const CollectionExplorer = () => {
  const [componentRendering, setComponentRendering] = useState<boolean>(true);
  const { collection } = useCollectionStore();
  const { requests, selectedRequest } = useRequestStore();

  useEffect(() => {
    setComponentRendering(false);
  }, []);

  if (componentRendering) return <LoadingSpinner />;

  return (
    <div>
      <div className="group flex flex-row cursor-pointer">
        <span className="truncate flex flex-row gap-[1rem] items-center">
          <span className="pl-[1rem]">
            <FolderOpenIcon size={16} />
          </span>
          <span className="truncate text-[.875rem] font-medium  group-hover:text-[--primary-foreground]">
            {collection?.name}
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
      <div className="flex flex-row">
        <div className="w-full">
          {requests.map((r) => (
            <RequestFile
              key={r.id}
              requestId={r.id}
              isActive={r.id === selectedRequest?.id}
              name={r.name}
              method={r.method}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionExplorer;
