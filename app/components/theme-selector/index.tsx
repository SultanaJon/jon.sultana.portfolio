'use client';

import { useEffect, useState } from 'react';
import { GhostIconButton } from '../ghost-icon-button';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState(<Moon />);

  useEffect(() => {
    if (theme == 'light') setThemeIcon(<Moon />);
    else setThemeIcon(<Sun />);
  }, [setThemeIcon, theme]);

  const handleThemeChange = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <GhostIconButton
      size={'icon'}
      onClick={handleThemeChange}
      icon={themeIcon}
    />
  );
};

export default ThemeSelector;
