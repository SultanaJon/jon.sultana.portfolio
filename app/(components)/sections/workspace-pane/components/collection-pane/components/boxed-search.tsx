import { Input } from '@/components/ui/input';

export default function BoxedSearch() {
  return (
    <div>
      <Input
        className="focus-visible:ring-transparent rounded-none border-none shadow-none pl-[1rem] placeholder:text-[--muted-secondary-foreground] focus:text-[--foreground]"
        placeholder="Search"
      />
    </div>
  );
}
