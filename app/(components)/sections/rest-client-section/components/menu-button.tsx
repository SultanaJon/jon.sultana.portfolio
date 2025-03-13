import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';
import cx from 'classnames';

export interface IMenuButton {
  children: ReactNode;
  colorMode: 'default' | 'dark';
}

const MenuButton = ({ children, colorMode }: IMenuButton) => {
  let bgColorTheme = {
    foreground: '[&_*]:text-[#fff]',
    background: 'bg-[--primary]',
    hoverBackground: 'hover:bg-[--secondary]',
  };

  if (colorMode == 'dark')
    bgColorTheme = {
      foreground: '[&_*]:text-[--foreground]',
      background: 'bg-[--accent]',
      hoverBackground: 'hover:bg-[--border]',
    };

  return (
    <div
      className={cx(
        `flex [&_*]:bg-transparent [&_*]:shadow-none rounded`,
        bgColorTheme.background,
        bgColorTheme.foreground
      )}
    >
      <Button
        className={cx(
          `h-full w-[6rem] rounded-r-none`,
          bgColorTheme.hoverBackground
        )}
      >
        {children}
      </Button>
      <Button
        className={cx(
          `h-full w-[2rem] rounded-l-none`,
          bgColorTheme.hoverBackground
        )}
      >
        <ChevronDown />
      </Button>
    </div>
  );
};

export default MenuButton;
