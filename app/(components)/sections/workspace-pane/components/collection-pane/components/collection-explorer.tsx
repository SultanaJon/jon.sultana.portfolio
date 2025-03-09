import LoadingSpinner from '@/app/(components)/ui/loading-indicator';
import { useCollectionStore } from '@/stores/collection-store';
import { useEffect } from 'react';
import { toast } from 'sonner';
import CollectionSection from './collection-section';
import { useWorkspacesStore } from '@/stores/workspace-store';

const CollectionExplorer = () => {
  const { selectedWorkspace } = useWorkspacesStore();
  const { fetchCollections, collections, isLoading, error, errorMessage } =
    useCollectionStore();

  useEffect(() => {
    const fetchData = async () => {
      if (selectedWorkspace != undefined)
        await fetchCollections(selectedWorkspace?.id);
    };
    fetchData();
  }, [fetchCollections, selectedWorkspace]);

  useEffect(() => {
    if (error) {
      toast.error('Uh oh! Something went wrong', { description: errorMessage });
    }
  }, [error, errorMessage]);

  if (isLoading) return <LoadingSpinner />;

  return collections.map((c) => (
    <CollectionSection key={c.id} collectionId={c.id} collectionName={c.name} />
  ));
};

export default CollectionExplorer;
