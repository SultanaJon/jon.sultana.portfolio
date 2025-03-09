import { ReactNode } from 'react';

export interface ISettingSectionProps {
  children: ReactNode;
}

export default function SettingsSection({ children }: ISettingSectionProps) {
  return (
    <div className="h-full w-full pl-[1rem] flex gap-[.8rem]">{children}</div>
  );
}
