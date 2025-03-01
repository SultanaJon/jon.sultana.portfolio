import WorkspaceNav from './components/workspace-nav';
import styles from './styles.module.css';
import { Separator } from '../../../components/ui/separator';
import CollectionPane from './components/collection-pane';
import { useEffect } from 'react';
import { getWorkspaces } from '@/api/workspaces/getWorkspaces';

export default function WorkspacePane() {
  useEffect(() => {
    const fetchWorkspaces = async () => {
      console.log(await getWorkspaces());
    };
    fetchWorkspaces();
  }, []);

  return (
    <div className={styles.workspacePane}>
      <WorkspaceNav />
      <Separator orientation="vertical" />
      <CollectionPane />
    </div>
  );
}
