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
import { useSidebarStore } from '@/stores/sidebar-store';

export default function Footer() {
  const { toggleIsExpanded } = useSidebarStore();

  return (
    <div className={styles.footer}>
      <div>
        <GhostIconButton
          size={`icon`}
          onClick={toggleIsExpanded}
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
          <Heart size={'17px'} />
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
          onClick={() => {}}
          icon={<PanelRightClose />}
        />
      </div>
    </div>
  );
}
