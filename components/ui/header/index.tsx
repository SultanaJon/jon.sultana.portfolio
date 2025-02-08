'use client';

import { Github, Linkedin, Sun, Moon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from 'next-themes';
import cx from 'classnames';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { GhostIconButton } from '../ghost-icon-button';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState(<Moon />);

  useEffect(() => {
    console.log(theme);
    if (theme == 'light') setThemeIcon(<Moon />);
    else setThemeIcon(<Sun />);
  }, [setThemeIcon, theme]);

  const handleThemeChange = () => {
    console.log('changing theme');
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <header className={styles.header}>
      <div className={cx(styles.flex, styles.gap, styles.alignedCenter)}>
        <GhostIconButton onClick={() => {}} icon={<Github />} />
        <GhostIconButton onClick={() => {}} icon={<Linkedin />} />
      </div>
      <div>
        <div
          className={cx(
            styles.flex,
            styles.gap,
            styles.flexEnd,
            styles.alignedCenter
          )}
        >
          <GhostIconButton onClick={handleThemeChange} icon={themeIcon} />
          <Avatar style={{ height: '30px', width: '30px' }}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export { Header };
