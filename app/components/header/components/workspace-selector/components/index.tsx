import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { JSX } from 'react';

export interface IWorkspacePopoverButton {
  displayText: string;
  isChecked: boolean;
  icon: JSX.Element;
}

const WorkspacePopoverButton = ({
  displayText,
  isChecked,
  icon,
}: IWorkspacePopoverButton) => {
  return (
    <Button
      variant="ghost"
      className="flex hover:bg-[--divider-dark-color] w-full justify-start"
    >
      {icon}
      <span className="text-[.8rem]">{displayText}</span>
      {isChecked && <Check className="ml-auto" color="green" />}
    </Button>
  );
};

export default WorkspacePopoverButton;
