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
        'relative flex-[3_1_0] p-[1rem] flex flex-col items-center justify-center gap-[.4rem] *:text-[.8rem] hover:bg-[--accent-secondary] [&_*]:hover:text-[--accent-foreground] border-l-[3px] border-transparent',
        isActive
          ? 'border-l-[3px] border-solid !border-[--primary] bg-[--accent] [&_*]:text-[--accent-foreground]'
          : ''
      )}
    >
      {icon}
      {isExpanded && <span>{text}</span>}
    </Link>
  );
}
