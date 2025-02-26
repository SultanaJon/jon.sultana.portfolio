import { JSX } from 'react';
import { Button } from '../../../components/ui/button';
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
      {text}
    </Button>
  );
};

export { GhostIconButton };
