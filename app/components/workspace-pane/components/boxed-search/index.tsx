import { Input } from '@/components/ui/input';
import cx from 'classnames';
import styles from './styles.module.css';

export default function BoxedSearch() {
  return (
    <div>
      <Input
        className={cx('focus-visible:ring-transparent', styles.input)}
        placeholder="Search"
      />
    </div>
  );
}
