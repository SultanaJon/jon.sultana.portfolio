import { ReactNode } from 'react';

export interface ISettingContentProps {
  children: ReactNode;
}

export default function SettingsContent({ children }: ISettingContentProps) {
  return (
    <div className="w-[60%] p-[1rem] flex flex-col gap-[2rem]">{children}</div>
  );
}
