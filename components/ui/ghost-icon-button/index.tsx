import { JSX } from 'react';
import { Button } from '../button';
import styles from './styles.module.css';

export interface IGhostIconButtonProps {
  onClick: () => void;
  icon: JSX.Element;
  text?: string | '';
  size?: 'icon' | 'default' | 'sm' | 'lg' | null | undefined;
}

const GhostIconButton = ({
  onClick,
  icon,
  text,
  size,
}: IGhostIconButtonProps) => {
  return (
    <Button
      size={size}
      variant={`ghost`}
      onClick={onClick}
      className={styles.button}
    >
      {icon}
      <span>{text}</span>
    </Button>
  );
};

export { GhostIconButton };
