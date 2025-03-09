'use client';

import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { GhostIconButton } from './ghost-icon-button';

const SocialLinks = () => {
  return (
    <>
      <Link target={`_blank`} href={`https://github.com/SultanaJon`}>
        <GhostIconButton size={'icon'} onClick={() => {}} icon={<Github />} />
      </Link>
      <Link
        target={`_blank`}
        href={`https://www.linkedin.com/in/jonathan-sultana-29b56558/`}
      >
        <GhostIconButton size={'icon'} onClick={() => {}} icon={<Linkedin />} />
      </Link>
    </>
  );
};

export default SocialLinks;
