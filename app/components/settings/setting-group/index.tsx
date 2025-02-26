import { ReactNode } from 'react';
import styles from './styles.module.css';

export interface ISettingGroupProps {
  children: ReactNode;
}

export default function SettingGroup({ children }: ISettingGroupProps) {
  return <div className={styles.group}>{children}</div>;
}
