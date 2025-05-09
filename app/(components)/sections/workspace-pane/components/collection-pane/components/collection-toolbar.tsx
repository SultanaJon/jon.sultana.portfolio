'use client';
import { GhostIconButton } from '@/app/(components)/ui/ghost-icon-button';
import { CircleHelp, Import, Plus } from 'lucide-react';

export default function CollectionToolbar() {
  return (
    <div className="flex flex-row justify-between">
      <GhostIconButton onClick={() => {}} icon={<Plus />} text={'New'} />
      <span className="flex">
        <GhostIconButton onClick={() => {}} icon={<CircleHelp />} />
        <GhostIconButton onClick={() => {}} icon={<Import />} />
      </span>
    </div>
  );
}
