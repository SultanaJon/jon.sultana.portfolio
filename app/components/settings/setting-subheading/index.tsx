import styles from './styles.module.css';

export interface ISettingSubheadingProps {
  headerText: string;
  subText: string;
}

export default function SettingSubheading({
  headerText,
  subText,
}: ISettingSubheadingProps) {
  return (
    <div>
      <h4 className={styles.headingFour}>{headerText}</h4>
      <p className={styles.subheading}>{subText}</p>
    </div>
  );
}
