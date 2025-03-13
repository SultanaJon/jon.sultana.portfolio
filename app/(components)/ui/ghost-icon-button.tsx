'use client';

import { JSX } from 'react';
import { Button } from '../../../components/ui/button';
import cx from 'classnames';

export interface IGhostIconButtonProps {
  className?: string;
  icon: JSX.Element;
  text?: string | '';
  size?: 'icon' | 'default' | 'sm' | 'lg' | null | undefined;
  onClick: () => void;
}

const GhostIconButton = ({
  className,
  icon,
  text,
  size,
  onClick,
}: IGhostIconButtonProps) => {
  return (
    <Button
      size={size}
      variant={`ghost`}
      onClick={onClick}
      className={cx('[&_*]:hover:text-[--accent-foreground]', className)}
    >
      {icon}
      {text}
    </Button>
  );
};

export { GhostIconButton };
