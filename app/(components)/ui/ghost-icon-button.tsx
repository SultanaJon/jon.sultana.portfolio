import { JSX } from 'react';
import { Button } from '../../../components/ui/button';

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
      className="[&_*]:hover:text-[--accent-foreground]"
    >
      {icon}
      {text}
    </Button>
  );
};

export { GhostIconButton };
