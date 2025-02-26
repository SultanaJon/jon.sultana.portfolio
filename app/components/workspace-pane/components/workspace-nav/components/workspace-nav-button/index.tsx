import { Button } from '@/components/ui/button';
import { JSX } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface IWorkspaceNavButtonProps {
  icon: JSX.Element;
  isActive?: boolean;
}
export default function WorkspaceNavButton({
  icon,
  isActive,
}: IWorkspaceNavButtonProps) {
  return (
    <Button
      variant={`ghost`}
      onClick={() => {}}
      className={cx(
        !isActive ? styles.button : '',
        isActive ? styles.active : ''
      )}
    >
      {icon}
    </Button>
  );
}
