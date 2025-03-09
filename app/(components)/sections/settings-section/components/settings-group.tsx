import { ReactNode } from 'react';

export interface ISettingGroupProps {
  children: ReactNode;
}

export default function SettingsGroup({ children }: ISettingGroupProps) {
  return <div className="flex flex-col gap-[.5rem]">{children}</div>;
}
