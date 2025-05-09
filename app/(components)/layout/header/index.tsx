'use client';
import ThemeSelector from '../../ui/theme-selector';
import ProfileAvatar from '../../ui/profile-avatar';
import SocialLinks from '../../ui/social-links';
import WorkspaceSelector from './components/workspace-selector';
import { useWindowSize, WindowSize } from '@/hooks/useWindowSize';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const windowSize = useWindowSize();

  const displayWorkspaceSelector =
    windowSize > WindowSize.Small && pathname == '/rest';

  return (
    <header className="grid grid-cols-2 p-[.6rem] *:flex *:gap-[1rem] *:items-center border-solid border-b-[1px] border-[--border]">
      <div>
        <SocialLinks />
      </div>
      <div className="justify-end">
        <ThemeSelector />
        {displayWorkspaceSelector && <WorkspaceSelector />}
        <ProfileAvatar />
      </div>
    </header>
  );
};

export default Header;
