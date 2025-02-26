'use client';

import { Link2, Settings, FolderKanban, CircleUserRound } from 'lucide-react';
import NavButton from './components/nav-button';
import styles from './styles.module.css';
import { usePaneStore } from '@/stores/pane-store';
import cx from 'classnames';

export default function NavigationPane() {
  const { isNavPaneExpanded } = usePaneStore();

  const navProps = [
    {
      path: '/rest',
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
    <aside
      className={cx(styles.sidebar, isNavPaneExpanded ? styles.expanded : '')}
    >
      <nav>
        {navProps.map((prop) => (
          <NavButton
            key={prop.path}
            path={prop.path}
            text={prop.text}
            icon={prop.icon}
            isExpanded={isNavPaneExpanded}
          />
        ))}
      </nav>
    </aside>
  );
}
