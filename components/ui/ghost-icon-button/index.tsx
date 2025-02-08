import { JSX } from 'react';
import { Button } from '../button';
import styles from './styles.module.css';

export interface IGhostIconButtonProps {
  onClick: () => void;
  icon: JSX.Element;
}

const GhostIconButton = ({ onClick, icon }: IGhostIconButtonProps) => {
  return (
    <Button
      size={`icon`}
      variant={`ghost`}
      onClick={onClick}
      className={styles.button}
    >
      {icon}
    </Button>
  );
};

export { GhostIconButton };
