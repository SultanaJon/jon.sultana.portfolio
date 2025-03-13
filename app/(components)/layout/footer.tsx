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
  Heart,
} from 'lucide-react';
import { usePaneStore } from '@/stores/pane-store';
import { useAccentStore } from '@/stores/accent-store';

export default function Footer() {
  const { toggleIsNavPaneExpanded, toggleIsWorkspacePaneExpanded } =
    usePaneStore();
  const { accentColor } = useAccentStore();

  return (
    <div className="flex mt-auto justify-between">
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
      <div className="flex items-center gap-[.5rem] text-[.8rem]">
        <span>Made with</span>
        <span>
          <Heart stroke={accentColor.primary} size={'17px'} />
        </span>
        <span>
          by <span>Jon Sultana</span>
        </span>
      </div>
      <div>
        <GhostIconButton size={`icon`} onClick={() => {}} icon={<Zap />} />
        <GhostIconButton size={`icon`} onClick={() => {}} icon={<Share2 />} />
        <GhostIconButton size={`icon`} onClick={() => {}} icon={<Columns2 />} />
        <GhostIconButton
          size={`icon`}
          onClick={toggleIsWorkspacePaneExpanded}
          icon={<PanelRightClose />}
        />
      </div>
    </div>
  );
}
