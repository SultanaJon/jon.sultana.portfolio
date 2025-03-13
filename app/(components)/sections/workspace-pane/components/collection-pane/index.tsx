import BoxedSearch from '../../../../ui/boxed-search';
import CollectionToolbar from './components/collection-toolbar';
import WorkspaceBreadcrumb from '../workspace-breadcrumb';
import CollectionExplorer from './components/collection-explorer';
import { Separator } from '@/components/ui/separator';

export default function CollectionPane() {
  return (
    <div className="w-full flex flex-col bg-[--background-contrast-color]">
      <WorkspaceBreadcrumb />
      <Separator orientation="horizontal" />
      <BoxedSearch placeholder="Search" />
      <Separator orientation="horizontal" />
      <CollectionToolbar />
      <Separator orientation="horizontal" />
      <CollectionExplorer />
    </div>
  );
}
