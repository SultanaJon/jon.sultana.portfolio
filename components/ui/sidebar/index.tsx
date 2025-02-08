'use client';

import { Link2, Settings, FolderKanban, CircleUserRound } from 'lucide-react';
import NavButton from './components/nav-button';
import styles from './styles.module.css';

export default function Sidebar() {
  const navProps = [
    {
      path: '/',
      text: 'REST',
      icon: <Link2 className={styles.icon} />,
    },
    {
      path: '/about',
      text: 'About',
      icon: <CircleUserRound className={styles.icon} />,
    },
    {
      path: '/projects',
      text: 'Projects',
      icon: <FolderKanban className={styles.icon} />,
    },
    {
      path: '/settings',
      text: 'Settings',
      icon: <Settings className={styles.icon} />,
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <nav>
        {navProps.map((prop) => (
          <NavButton
            key={prop.path}
            path={prop.path}
            text={prop.text}
            icon={prop.icon}
          />
        ))}
      </nav>
    </aside>
  );
}
