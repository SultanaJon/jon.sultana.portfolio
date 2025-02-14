import { ToggleGroup, ToggleGroupItem } from '../../toggle-group';
import { Circle, CircleCheck } from 'lucide-react';
import { useAccentStore } from '@/stores/accent-store';
import styles from './styles.module.css';
import { AccentColor } from '@/types/AccentColor';

export interface IAccentToggleProps {
  selectedAccent: AccentColor;
  availableAccents: AccentColor[];
}

export default function AccentToggle({
  selectedAccent,
  availableAccents,
}: IAccentToggleProps) {
  const { setAccentColor } = useAccentStore();

  const handleAccentColorChange = (newAccent: string) => {
    if (newAccent) {
      const selectedAccent = availableAccents.filter(
        (a) => a.color == newAccent
      )[0];
      setAccentColor(selectedAccent);
    }
  };

  return (
    <ToggleGroup
      value={selectedAccent.color}
      size={'sm'}
      type="single"
      onValueChange={handleAccentColorChange}
      className={styles.toggleGroup}
    >
      {availableAccents.map((ac, index) => (
        <ToggleGroupItem key={index} value={ac.color}>
          {ac.color == selectedAccent.color ? (
            <CircleCheck stroke={ac.color} />
          ) : (
            <Circle stroke={ac.color} />
          )}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
