import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';
import cx from 'classnames';

export interface IMenuButton {
  children: ReactNode;
  className?: string;
}

const MenuButton = ({ children, className }: IMenuButton) => {
  return (
    <div
      className={cx(
        `flex [&_*]:bg-transparent [&_*]:shadow-none rounded`,
        className
      )}
    >
      <Button
        className={cx(
          `grow h-full w-[6rem] rounded-r-none justify-center items-center`
        )}
      >
        {children}
      </Button>
      <Button className={cx(`h-full w-[2rem] rounded-l-none ml-auto`)}>
        <ChevronDown />
      </Button>
    </div>
  );
};

export default MenuButton;
