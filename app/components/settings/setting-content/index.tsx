import { ReactNode } from 'react';
import styles from './styles.module.css';

export interface ISettingContentProps {
  children: ReactNode;
}

export default function SettingContent({ children }: ISettingContentProps) {
  return <div className={styles.settingContent}>{children}</div>;
}
