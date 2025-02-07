import { JSX } from 'react';
import { Button } from '../button';

export interface IGhostIconButtonProps {
  onClick: () => void;
  icon: JSX.Element;
}

const GhostIconButton = ({ onClick, icon }: IGhostIconButtonProps) => {
  return (
    <Button size={`icon`} variant={`ghost`} onClick={onClick}>
      {icon}
    </Button>
  );
};

export { GhostIconButton };
