import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

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
      className="justify-start"
    >
      {themes
        .filter((themeName) => themeName !== 'system')
        .map((themeName, index) => (
          <ToggleGroupItem
            key={index}
            value={themeName}
            className={theme === themeName ? '[&_*]:text-[--primary]' : ''}
          >
            {getIcon(themeName)}
          </ToggleGroupItem>
        ))}
    </ToggleGroup>
  );
}
