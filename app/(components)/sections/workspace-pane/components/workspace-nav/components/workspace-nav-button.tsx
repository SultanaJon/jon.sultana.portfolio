import { Button } from '@/components/ui/button';
import { JSX } from 'react';
import cx from 'classnames';

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
        !isActive ? '[&_*]:hover:text-[--accent-foreground]' : '',
        isActive ? '[&_*]:text-[--primary]' : ''
      )}
    >
      {icon}
    </Button>
  );
}
