'use client';

import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { GhostIconButton } from './ghost-icon-button';
import { userSocialLinks } from '@/config/user.config';

const SocialLinks = () => {
  return (
    <>
      <Link target={`_blank`} href={userSocialLinks.github}>
        <GhostIconButton size={'icon'} onClick={() => {}} icon={<Github />} />
      </Link>
      <Link target={`_blank`} href={userSocialLinks.linkedin}>
        <GhostIconButton size={'icon'} onClick={() => {}} icon={<Linkedin />} />
      </Link>
    </>
  );
};

export default SocialLinks;
