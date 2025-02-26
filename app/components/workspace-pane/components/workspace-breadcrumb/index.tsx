import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ChevronRight } from 'lucide-react';
import styles from './styles.module.css';

export default function WorkspaceBreadcrumb() {
  return (
    <Breadcrumb className={styles.breadcrumb}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>MyWorkpace</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink>Collection</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
