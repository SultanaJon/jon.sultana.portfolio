import { GhostIconButton } from '@/app/components/ghost-icon-button';
import { CircleHelp, Import, Plus } from 'lucide-react';
import styles from './styles.module.css';

export default function CollectionToolbar() {
  return (
    <div className={styles.header}>
      <GhostIconButton onClick={() => {}} icon={<Plus />} text={'New'} />
      <span>
        <GhostIconButton onClick={() => {}} icon={<CircleHelp />} />
        <GhostIconButton onClick={() => {}} icon={<Import />} />
      </span>
    </div>
  );
}
