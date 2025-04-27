'use client';

import { useRequestStore } from '@/stores/request-store';
import { useEffect, useState } from 'react';
import CollectionDirectory from './collection-directory';
import LoadingSpinner from '@/app/(components)/ui/loading-indicator';
import RequestFile from './request-file';

export interface ICollectionSection {
  collectionId: number;
  collectionName: string;
}

const CollectionSection = ({
  collectionId,
  collectionName,
}: ICollectionSection) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { loadRequests, requests, selectedRequest, isLoading } =
    useRequestStore();

  useEffect(() => {
    const fetchData = async () => {
      await loadRequests(collectionId);
    };
    if (requests.length === 0) fetchData();
  }, [loadRequests, collectionId, requests]);

  useEffect(() => {
    if (requests.length > 0) setIsOpen(true);
    else setIsOpen(false);
  }, [requests, setIsOpen]);

  const handleCollectionClick = () => setIsOpen(!isOpen);

  const buildCollectionRequests = () => {
    if (isLoading) return <LoadingSpinner />;

    return (
      isOpen && (
        <div className="flex flex-row">
          <div className="ml-[1.5rem] border border-solid border-[--divider-dark-color]" />
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
      )
    );
  };
  return (
    <div>
      <CollectionDirectory
        collectionName={collectionName}
        isOpen={isOpen}
        onClick={handleCollectionClick}
      />
      {buildCollectionRequests()}
    </div>
  );
};

export default CollectionSection;
