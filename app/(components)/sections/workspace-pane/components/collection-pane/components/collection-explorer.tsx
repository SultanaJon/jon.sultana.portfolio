'use client';

import LoadingSpinner from '@/app/(components)/ui/loading-indicator';
import { useCollectionStore } from '@/stores/collection-store';
import { useEffect } from 'react';
import CollectionSection from './collection-section';
import { useWorkspacesStore } from '@/stores/workspace-store';

const CollectionExplorer = () => {
  const { selectedWorkspace } = useWorkspacesStore();
  const { loadCollections, collections, isLoading } = useCollectionStore();

  useEffect(() => {
    const fetchData = async () => {
      if (selectedWorkspace != undefined)
        await loadCollections(selectedWorkspace?.id);
    };
    if (collections.length === 0) fetchData();
  }, [loadCollections, selectedWorkspace, collections]);

  if (isLoading) return <LoadingSpinner />;

  return collections.map((c) => (
    <CollectionSection key={c.id} collectionId={c.id} collectionName={c.name} />
  ));
};

export default CollectionExplorer;
