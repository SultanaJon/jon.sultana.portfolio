'use client';
import cx from 'classnames';
import styles from './styles.module.css';
import ThemeSelector from '../theme-selector';
import ProfileAvatar from '../profile-avatar';
import SocialLinks from '../social-links';
import WorkspaceSelector from './components/workspace-selector';

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
          styles.alignedCenter,
          'gap-3'
        )}
      >
        <ThemeSelector />
        <WorkspaceSelector />
        <ProfileAvatar />
      </div>
    </header>
  );
};

export default Header;
