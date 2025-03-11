'use client';

import { useEffect, useState } from 'react';
import ClientTabSection from './components/client-tab-section';
import { useRequestStore } from '@/stores/request-store';
import LoadingSpinner from '../../ui/loading-indicator';

const RestClientSection = () => {
  const [componentRendering, setComponentRendering] = useState<boolean>(true);

  const { requests, isLoading } = useRequestStore();

  useEffect(() => {
    if (requests.length > 0 || !isLoading) setComponentRendering(false);
  }, [requests, isLoading]);

  if (componentRendering) return <LoadingSpinner />;

  return (
    <div className="flex flex-col">
      <ClientTabSection />
    </div>
  );
};

export default RestClientSection;
