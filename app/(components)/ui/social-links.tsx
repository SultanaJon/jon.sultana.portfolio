'use client';

import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { GhostIconButton } from './ghost-icon-button';
import { portfolioConfig } from '@/config/porfolio.config';

const SocialLinks = () => {
  return (
    <>
      <Link target={`_blank`} href={portfolioConfig.links.github}>
        <GhostIconButton size={'icon'} onClick={() => {}} icon={<Github />} />
      </Link>
      <Link target={`_blank`} href={portfolioConfig.links.linkedin}>
        <GhostIconButton size={'icon'} onClick={() => {}} icon={<Linkedin />} />
      </Link>
    </>
  );
};

export default SocialLinks;
