import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown } from 'lucide-react';

export interface IRequestInput {
  url: string | undefined;
}

const RequestInput = ({ url }: IRequestInput) => {
  return (
    <div className="flex bg-(--accent) w-full rounded border border-(--border)">
      <div className="flex **:bg-transparent bg-(--accent) **:shadow-none rounded-none **:text-(--foreground) border-r border-r-(--border)">
        <Button className="h-full w-24 hover:bg-(--border) rounded-r-none">
          GET
        </Button>
        <Button className="h-full w-8 hover:bg-(--border) rounded-none">
          <ChevronDown />
        </Button>
      </div>
      <Input
        className="bg-transparent focus-visible:ring-transparent border-none shadow-none font-medium placeholder:text-(--muted-secondary-foreground) disabled:text-(--primary-foreground) disabled:cursor-text"
        placeholder="Enter a URL"
        defaultValue={url}
        disabled
      />
    </div>
  );
};

export default RequestInput;
