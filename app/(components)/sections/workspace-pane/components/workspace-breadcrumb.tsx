import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useWorkspacesStore } from '@/stores/workspace-store';

export default function WorkspaceBreadcrumb() {
  const [workspaceName, setWorkspaceName] =
    useState<string>(`Personal Workspace`);

  const { selectedWorkspace } = useWorkspacesStore();

  useEffect(() => {
    if (selectedWorkspace) {
      setWorkspaceName(selectedWorkspace.name);
    }
  }, [selectedWorkspace]);

  return (
    <Breadcrumb className="pt-[.5rem] pr-[1rem] pb-[.5rem] pl-[1rem] [&_a]:text-[.7rem] font-medium text-[--muted-secondary-foreground]">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>{workspaceName}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink>Collections</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
