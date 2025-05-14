import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { useWorkspacesStore } from '@/stores/workspace-store';
import { ChevronDown, Plus, UserRound, Users, UsersRound } from 'lucide-react';
import { useEffect, useState } from 'react';
import WorkspacePopoverItemButton from './workspace-popover-item-button';
import { GhostIconButton } from '@/app/(components)/ui/ghost-icon-button';

const defaultWorkspaceName = 'Personal Workspace';

const WorkspaceSelector = () => {
  const [activeWorkspaceName, setActiveWorkspaceName] =
    useState<string>(defaultWorkspaceName);
  const { workspace } = useWorkspacesStore();

  useEffect(() => {
    if (workspace !== null) setActiveWorkspaceName(workspace.name);
  }, [workspace]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="
          flex
          flex-row
          gap-2
          items-center 
          bg-[#2196F3]/10 
          h-full 
          rounded-md 
          px-4 
          border 
          border-[#2196F3]/50
          hover:bg-[#2196F3]/20
          cursor-pointer"
        >
          <UsersRound size={'15'} color="#2196F3" />
          <span className="text-[#2196F3] font-medium text-[12px]">
            {activeWorkspaceName}
          </span>
          <ChevronDown size={'15'} color="#2196F3" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <WorkspacePopoverItemButton
          displayText={defaultWorkspaceName}
          isChecked={activeWorkspaceName == defaultWorkspaceName}
          icon={<UserRound />}
        />
        <Separator className="my-2" />
        <div className="flex pl-[10px] pt-[10px] pb-[10px]">
          <span className="content-center pl-[8px] text-[.8rem]">
            My Workspaces
          </span>
          <span className="ml-auto">
            <GhostIconButton onClick={() => {}} icon={<Plus />} />
          </span>
        </div>
        {activeWorkspaceName !== defaultWorkspaceName && (
          <WorkspacePopoverItemButton
            displayText={activeWorkspaceName}
            isChecked={true}
            icon={<Users />}
          />
        )}
      </PopoverContent>
    </Popover>
  );
};

export default WorkspaceSelector;
