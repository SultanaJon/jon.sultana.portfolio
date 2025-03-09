import WorkspaceNav from './components/workspace-nav';
import CollectionPane from './components/collection-pane';
import { Separator } from '@/components/ui/separator';

const WorkspacePane = () => {
  return (
    <div className="h-full flex flex-row">
      <WorkspaceNav />
      <Separator orientation="vertical" />
      <CollectionPane />
    </div>
  );
};

export default WorkspacePane;
