import { Circle, CircleCheck } from 'lucide-react';
import { useAccentStore } from '@/stores/accent-store';
import { AccentColor } from '@/types/AccentColor';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

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
        (a) => a.primary == newAccent
      )[0];
      setAccentColor(selectedAccent);
    }
  };

  return (
    <ToggleGroup
      value={selectedAccent.primary}
      size={'sm'}
      type="single"
      onValueChange={handleAccentColorChange}
      className="justify-start"
    >
      {availableAccents.map((ac, index) => (
        <ToggleGroupItem key={index} value={ac.primary}>
          {ac.primary == selectedAccent.primary ? (
            <CircleCheck stroke={ac.primary} />
          ) : (
            <Circle stroke={ac.primary} />
          )}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
