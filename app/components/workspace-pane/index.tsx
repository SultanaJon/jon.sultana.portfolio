import WorkspaceNav from './components/workspace-nav';
import styles from './styles.module.css';
import { Separator } from '../../../components/ui/separator';
import CollectionPane from './components/collection-pane';

export default function WorkspacePane() {
  return (
    <div className={styles.workspacePane}>
      <WorkspaceNav />
      <Separator orientation="vertical" />
      <CollectionPane />
    </div>
  );
}
