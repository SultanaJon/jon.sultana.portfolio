'use client';

import { Link2, Settings, FolderKanban, CircleUserRound } from 'lucide-react';
import NavButton from './components/navigation-button';
import { usePaneStore } from '@/stores/pane-store';
import cx from 'classnames';

export default function NavigationPane() {
  const { isNavPaneExpanded } = usePaneStore();

  const navProps = [
    {
      path: '/about',
      text: 'About',
      icon: <CircleUserRound />,
    },
    {
      path: '/rest',
      text: 'REST',
      icon: <Link2 />,
    },
    {
      path: '/projects',
      text: 'Projects',
      icon: <FolderKanban />,
    },
    {
      path: '/settings',
      text: 'Settings',
      icon: <Settings />,
    },
  ];

  return (
    <aside
      className={cx(
        'w-full',
        'md:h-full',
        isNavPaneExpanded ? 'w-20' : 'w-[3.8rem]'
      )}
    >
      <nav className={cx('flex flex-row', 'md:flex-col')}>
        {navProps.map((prop) => (
          <NavButton
            key={prop.path}
            path={prop.path}
            text={prop.text}
            icon={<span className="*:h-[17px] *:w-[17px]">{prop.icon}</span>}
            isExpanded={isNavPaneExpanded}
          />
        ))}
      </nav>
    </aside>
  );
}
