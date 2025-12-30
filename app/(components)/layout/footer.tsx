'use client';

import { GhostIconButton } from '../ui/ghost-icon-button';
import {
  CookieIcon,
  PanelLeftClose,
  PanelRightClose,
  ShieldCheck,
  Zap,
  Share2,
  Columns2,
} from 'lucide-react';
import { usePaneStore } from '@/stores/pane-store';
import { useAccentStore } from '@/stores/accent-store';
import cx from 'classnames';
import { WindowSize, useWindowSize } from '@/hooks/useWindowSize';
import { usePathname } from 'next/navigation';
import { userName } from '@/config/user.config';

export default function Footer() {
  const pathname = usePathname();
  const { toggleIsNavPaneExpanded, toggleIsWorkspacePaneExpanded } =
    usePaneStore();
  const { accentColor } = useAccentStore();
  const windowSize = useWindowSize();

  const displayTools = windowSize >= WindowSize.Medium && pathname === '/rest';

  return (
    <div className="border-solid border-t border-(--border) mt-auto ">
      <div className={cx('flex p-[.5rem]')}>
        {displayTools && (
          <div>
            <GhostIconButton
              size={`icon`}
              onClick={toggleIsNavPaneExpanded}
              icon={<PanelLeftClose />}
            />
            <GhostIconButton
              size={`icon`}
              onClick={() => {}}
              icon={<ShieldCheck />}
            />
            <GhostIconButton
              onClick={() => {}}
              icon={<CookieIcon />}
              text={'Cookies'}
            />
          </div>
        )}
        <div className="flex items-center gap-[.5rem] text-[.8rem] m-auto">
          <span>Made with</span>
          <span className="font-bold" style={{ color: accentColor.primary }}>
            {'</>'}
          </span>
          <span>
            by <span>{userName}</span>
          </span>
        </div>
        {displayTools && (
          <div>
            <GhostIconButton size={`icon`} onClick={() => {}} icon={<Zap />} />
            <GhostIconButton
              size={`icon`}
              onClick={() => {}}
              icon={<Share2 />}
            />
            <GhostIconButton
              size={`icon`}
              onClick={() => {}}
              icon={<Columns2 />}
            />
            <GhostIconButton
              size={`icon`}
              onClick={toggleIsWorkspacePaneExpanded}
              icon={<PanelRightClose />}
            />
          </div>
        )}
      </div>
    </div>
  );
}
