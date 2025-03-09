'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { useAccentStore } from '@/stores/accent-store';
import { useEffect, useState } from 'react';
import BackgroundToggle from '@/app/(components)/sections/settings-section/components/background-toggle';
import AccentToggle from '@/app/(components)/sections/settings-section/components/accent-toggle';
import SettingsSection from '@/app/(components)/sections/settings-section';
import SettingsHeading from '@/app/(components)/sections/settings-section/components/settings-heading';
import SettingsContent from '@/app/(components)/sections/settings-section/components/settings-content';
import SettingsGroup from '@/app/(components)/sections/settings-section/components/settings-group';
import SettingsSubheading from '@/app/(components)/sections/settings-section/components/settings.subheading';

const SettingsPage = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('');

  const { theme, themes } = useTheme();
  const { accentColor, accentColors } = useAccentStore();

  useEffect(() => {
    // I think we have to do this specifically because theme is string | undefined.
    setSelectedTheme(theme!);
  }, [theme]);

  return (
    <SettingsSection>
      <SettingsHeading
        headerText="Theme"
        subtext="Customize your application theme."
      />
      <SettingsContent>
        <SettingsGroup>
          <SettingsSubheading headerText="Background" subText={selectedTheme} />
          <BackgroundToggle theme={selectedTheme} themes={themes} />
        </SettingsGroup>
        <SettingsGroup>
          <SettingsSubheading
            headerText="Accent color"
            subText={accentColor.name}
          />
          <AccentToggle
            selectedAccent={accentColor}
            availableAccents={accentColors}
          />
        </SettingsGroup>
      </SettingsContent>
    </SettingsSection>
  );
};

export default SettingsPage;
