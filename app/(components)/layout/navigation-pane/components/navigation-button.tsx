import { JSX, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cx from 'classnames';

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
      className={cx(
        'flex flex-col gap-[.4rem] grow items-center justify-center w-auto py-[1.3rem] px-4 *:text-[.8rem] hover:bg-(--accent-secondary) hover:**:text-(--accent-foreground) border-solid border-l-0 border-t-[3px] border-transparent',
        'md:border-l-[3px] md:border-t-0',
        isActive &&
          'border-(--primary)! bg-(--accent) **:text-(--accent-foreground)'
      )}
    >
      {icon}
      {isExpanded && <span>{text}</span>}
    </Link>
  );
}
