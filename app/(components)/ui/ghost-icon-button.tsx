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
      className={cx(
        'hover:**:text-(--accent-foreground) truncate',
        className
      )}
    >
      {icon}
      <span className=" ">{text}</span>
    </Button>
  );
};

export { GhostIconButton };
