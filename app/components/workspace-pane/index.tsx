import WorkspaceNav from './components/workspace-nav';
import { Separator } from '../../../components/ui/separator';
import CollectionPane from './components/collection-pane';
import styles from './styles.module.css';

const WorkspacePane = () => {
  return (
    <div className={styles.workspacePane}>
      <WorkspaceNav />
      <Separator orientation="vertical" />
      <CollectionPane />
    </div>
  );
};

export default WorkspacePane;
