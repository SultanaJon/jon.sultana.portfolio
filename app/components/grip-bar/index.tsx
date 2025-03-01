import styles from './styles.module.css';

export default function GripBar() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        <span className={styles.minimize} />
        <span className={styles.maximize} />
        <span className={styles.close} />
      </div>
    </div>
  );
}
