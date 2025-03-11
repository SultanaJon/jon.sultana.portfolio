'use client';

import { Link2, Settings, FolderKanban, CircleUserRound } from 'lucide-react';
import NavButton from './components/navigation-button';
import { usePaneStore } from '@/stores/pane-store';
import cx from 'classnames';

export default function NavigationPane() {
  const { isNavPaneExpanded } = usePaneStore();

  const navProps = [
    {
      path: '/rest',
      text: 'REST',
      icon: <Link2 />,
    },
    {
      path: '/about',
      text: 'About',
      icon: <CircleUserRound />,
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
        'flex flex-col',
        isNavPaneExpanded ? 'w-[5rem]' : 'w-[3.8rem]'
      )}
    >
      <nav>
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
