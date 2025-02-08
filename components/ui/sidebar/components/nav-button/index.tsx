import { JSX, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cx from 'classnames';
import styles from './styles.module.css';

export interface INavButtonProps {
  path: string;
  text: string;
  icon: JSX.Element;
}

export default function NavButton({ path, text, icon }: INavButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname == path) setIsActive(true);
  }, [pathname, path]);

  return (
    <Link
      href={path}
      className={cx(styles.link, isActive ? styles.active : '')}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
