import { Separator } from '@radix-ui/react-separator';
import BoxedSearch from '../boxed-search';
import CollectionToolbar from './components/collection-toolbar';
import WorkspaceBreadcrumb from '../workspace-breadcrumb';
import styles from './styles.module.css';
import LoadingSpinner from '@/app/components/loading';

export default function CollectionPane() {
  return (
    <div className={styles.content}>
      <WorkspaceBreadcrumb />
      <Separator orientation="horizontal" />
      <BoxedSearch />
      <Separator orientation="horizontal" />
      <CollectionToolbar />
      <Separator orientation="horizontal" />
      <LoadingSpinner />
    </div>
  );
}
