import { Input } from '@/components/ui/input';
import React from 'react';
import cx from 'classnames';

export interface IBoxedSearch {
  className?: string;
  placeholder: string;
}

const BoxedSearch = ({ className, placeholder }: IBoxedSearch) => {
  return (
    <Input
      className={cx(
        'focus-visible:ring-transparent rounded-none border-none shadow-none pl-4 placeholder:text-(--muted-secondary-foreground) focus:text-(--foreground) font-medium',
        className
      )}
      placeholder={placeholder}
    />
  );
};

export default BoxedSearch;
