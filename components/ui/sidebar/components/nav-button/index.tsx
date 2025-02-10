import { JSX, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cx from 'classnames';
import styles from './styles.module.css';

export interface INavButtonProps {
  path: string;
  text: string;
  icon: JSX.Element;
  isExpanded: boolean;
}

export default function NavButton({
  path,
  text,
  icon,
  isExpanded,
}: INavButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsActive(pathname == path);
  }, [pathname, path]);

  return (
    <Link
      href={path}
      className={cx(styles.link, isActive ? styles.active : '')}
    >
      {icon}
      {isExpanded && <span>{text}</span>}
    </Link>
  );
}
