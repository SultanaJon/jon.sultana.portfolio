'use client';

import * as React from 'react';
import styles from './styles.module.css';
import { useTheme } from 'next-themes';
import { useAccentStore } from '@/stores/accent-store';
import SettingSection from '@/components/ui/settings/setting-section';
import SettingHeading from '@/components/ui/settings/setting-heading';
import SettingContent from '@/components/ui/settings/setting-content';
import SettingSubheading from '@/components/ui/settings/setting-subheading';
import BackgroundToggle from '@/components/ui/settings/background-toggle';
import AccentToggle from '@/components/ui/settings/accent-toggle';
import { useEffect, useState } from 'react';
import SettingGroup from '@/components/ui/settings/setting-group';

export default function Projects() {
  const [selectedTheme, setSelectedTheme] = useState<string>('');

  const { theme, themes } = useTheme();
  const { accentColor, accentColors } = useAccentStore();

  useEffect(() => {
    // I think we have to do this specifically because theme is string | undefined.
    setSelectedTheme(theme!);
  }, [theme]);

  return (
    <div className={styles.container}>
      <SettingSection>
        <SettingHeading
          headerText="Theme"
          subtext="Customize your application theme."
        />
        <SettingContent>
          <SettingGroup>
            <SettingSubheading
              headerText="Background"
              subText={selectedTheme}
            />
            <BackgroundToggle theme={selectedTheme} themes={themes} />
          </SettingGroup>
          <SettingGroup>
            <SettingSubheading
              headerText="Accent color"
              subText={accentColor.name}
            />
            <AccentToggle
              selectedAccent={accentColor}
              availableAccents={accentColors}
            />
          </SettingGroup>
        </SettingContent>
      </SettingSection>
    </div>
  );
}
