'use client';

import { Folder, Layers, Clock, Share2, Code } from 'lucide-react';
import styles from './styles.module.css';
import WorkspaceNavButton from './components/workspace-nav-button';

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
    <aside className="bg-[--background]">
      <nav className={styles.nav}>
        {items.map((item, index) => (
          <WorkspaceNavButton
            key={index}
            icon={item.icon}
            isActive={item.isActive}
          />
        ))}
      </nav>
    </aside>
  );
}
