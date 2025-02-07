'use client';

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  CaretDownIcon,
  SunIcon,
  MoonIcon,
} from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from 'next-themes';
import cx from 'classnames';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { GhostIconButton } from '../ghost-icon-button';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState(<MoonIcon />);

  useEffect(() => {
    console.log(theme);
    if (theme == 'light') setThemeIcon(<MoonIcon />);
    else setThemeIcon(<SunIcon />);
  }, [setThemeIcon, theme]);

  const handleThemeChange = () => {
    console.log('changing theme');
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <header className={styles.header}>
      <div className={cx(styles.flex, styles.gap, styles.alignedCenter)}>
        <GhostIconButton onClick={() => {}} icon={<GitHubLogoIcon />} />
        <GhostIconButton onClick={() => {}} icon={<LinkedInLogoIcon />} />
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
          <div className={cx(styles.flex, styles.alignedCenter, styles.gap)}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CaretDownIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
