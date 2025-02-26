'use client';

import { GhostIconButton } from '../ghost-icon-button';
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
import styles from './styles.module.css';
import { usePaneStore } from '@/stores/pane-store';
import { useAccentStore } from '@/stores/accent-store';

export default function Footer() {
  const { toggleIsNavPaneExpanded, toggleIsWorkspacePaneExpanded } =
    usePaneStore();
  const { accentColor } = useAccentStore();

  return (
    <div className={styles.footer}>
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
      <div className={styles.signature}>
        <span>Made with</span>
        <span>
          <Heart stroke={accentColor.color} size={'17px'} />
        </span>
        <span>
          by <span className={styles.name}>Jon Sultana</span>
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
