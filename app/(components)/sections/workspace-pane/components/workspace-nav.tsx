'use client';

import { Folder, Layers, Clock, Share2, Code } from 'lucide-react';
import { GhostIconButton } from '@/app/(components)/ui/ghost-icon-button';
import cx from 'classnames';

export default function WorkspaceNav() {
  const items = [
    {
      icon: <Folder />,
      isActive: true,
    },
    {
      icon: <Layers />,
    },
    {
      icon: <Clock />,
    },
    {
      icon: <Share2 />,
    },
    {
      icon: <Code />,
    },
  ];

  return (
    <aside className="bg-(--background)">
      <nav className="flex flex-col gap-[.5rem]">
        {items.map((item, index) => (
          <GhostIconButton
            key={index}
            icon={item.icon}
            onClick={() => {}}
            className={cx(
              !item.isActive ? 'hover:**:text-(--accent-foreground)' : '',
              item.isActive
                ? '**:text-(--primary) hover:**:text-(--primary)'
                : ''
            )}
          />
        ))}
      </nav>
    </aside>
  );
}
