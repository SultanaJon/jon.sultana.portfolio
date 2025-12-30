import { ReactNode } from 'react';

export interface ISettingSectionProps {
  children: ReactNode;
}

export default function SettingsSection({ children }: ISettingSectionProps) {
  return (
    <div className="h-full w-full pl-4 flex gap-[.8rem]">{children}</div>
  );
}
