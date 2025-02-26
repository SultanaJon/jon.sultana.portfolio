import {
  ToggleGroup,
  ToggleGroupItem,
} from '../../../../components/ui/toggle-group';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import styles from './styles.module.css';

export interface IBackgroundToggleProps {
  theme: string;
  themes: string[];
}

export default function BackgroundToggle({
  theme,
  themes,
}: IBackgroundToggleProps) {
  const { setTheme } = useTheme();

  const handleBackgroundChange = (selectedTheme: string) => {
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  };

  const getIcon = (themeName: string) => {
    switch (themeName) {
      case 'light':
        return <Sun />;
      case 'dark':
        return <Moon />;
      default:
        throw Error('Invalid theme');
    }
  };

  return (
    <ToggleGroup
      value={theme}
      size={'sm'}
      type="single"
      onValueChange={handleBackgroundChange}
      className={styles.toggleGroup}
    >
      {themes
        .filter((themeName) => themeName !== 'system')
        .map((themeName, index) => (
          <ToggleGroupItem
            key={index}
            value={themeName}
            className={theme === themeName ? styles.active : ''}
          >
            {getIcon(themeName)}
          </ToggleGroupItem>
        ))}
    </ToggleGroup>
  );
}
