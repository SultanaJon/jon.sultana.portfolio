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
        'flex flex-col gap-[.4rem] grow items-center justify-center w-auto py-[1.3rem] px-[1rem] *:text-[.8rem] hover:bg-[--accent-secondary] [&_*]:hover:text-[--accent-foreground] border-solid border-l-[0px] border-t-[3px] border-transparent',
        'md:border-l-[3px] md:border-t-[0px]',
        isActive &&
          '!border-[--primary] bg-[--accent] [&_*]:text-[--accent-foreground]'
      )}
    >
      {icon}
      {isExpanded && <span>{text}</span>}
    </Link>
  );
}
