import styles from './styles.module.css';

export interface ISettingHeadingProps {
  headerText: string;
  subtext: string;
}

export default function SettingHeading({
  headerText,
  subtext,
}: ISettingHeadingProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.headingThree}>{headerText}</h3>
      <p className={styles.subheading}>{subtext}</p>
    </div>
  );
}
