import { ReactNode } from 'react';
import styles from './styles.module.css';

export interface ISettingSectionProps {
  children: ReactNode;
}

export default function SettingSection({ children }: ISettingSectionProps) {
  return <div className={styles.section}>{children}</div>;
}
