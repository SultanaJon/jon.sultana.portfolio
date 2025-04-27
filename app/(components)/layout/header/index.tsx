'use client';
import ThemeSelector from '../../ui/theme-selector';
import ProfileAvatar from '../../ui/profile-avatar';
import SocialLinks from '../../ui/social-links';
import WorkspaceSelector from './components/workspace-selector';

const Header = () => {
  return (
    <header className="grid grid-cols-2 p-[.6rem] *:flex *:gap-[1rem] *:items-center">
      <div>
        <SocialLinks />
      </div>
      <div className="justify-end">
        <ThemeSelector />
        <WorkspaceSelector />
        <ProfileAvatar />
      </div>
    </header>
  );
};

export default Header;
