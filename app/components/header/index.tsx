import cx from 'classnames';
import styles from './styles.module.css';
import ThemeSelector from '../theme-selector';
import ProfileAvatar from '../profile-avatar';
import SocialLinks from '../social-links';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={cx(styles.flex, styles.gap, styles.alignedCenter)}>
        <SocialLinks />
      </div>
      <div
        className={cx(
          styles.flex,
          styles.gap,
          styles.flexEnd,
          styles.alignedCenter
        )}
      >
        <ThemeSelector />
        <ProfileAvatar />
      </div>
    </header>
  );
};

export default Header;
