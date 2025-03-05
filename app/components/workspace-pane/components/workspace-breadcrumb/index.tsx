import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ChevronRight } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { useWorkspacesStore } from '@/stores/workspaces';

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
    <Breadcrumb className={styles.breadcrumb}>
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
