'use client';

import * as React from 'react';
import styles from './styles.module.css';
import { useTheme } from 'next-themes';
import { useAccentStore } from '@/stores/accent-store';
import SettingSection from '@/app/components/settings/setting-section';
import SettingHeading from '@/app/components/settings/setting-heading';
import SettingContent from '@/app/components/settings/setting-content';
import SettingSubheading from '@/app/components/settings/setting-subheading';
import BackgroundToggle from '@/app/components/settings/background-toggle';
import AccentToggle from '@/app/components/settings/accent-toggle';
import { useEffect, useState } from 'react';
import SettingGroup from '@/app/components/settings/setting-group';

const SettingsPage = () => {
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
};

export default SettingsPage;
