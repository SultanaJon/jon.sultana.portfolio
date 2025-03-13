import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown } from 'lucide-react';

const RequestInput = () => {
  return (
    <div className="flex bg-[--accent] w-full rounded border border-[--border]">
      <div className="flex [&_*]:bg-transparent bg-[--accent] [&_*]:shadow-none rounded-none [&_*]:text-[--foreground] border-r-[1px] border-r-[--border]">
        <Button className="h-full w-[6rem] hover:bg-[--border] rounded-r-none">
          GET
        </Button>
        <Button className="h-full w-[2rem] hover:bg-[--border] rounded-none">
          <ChevronDown />
        </Button>
      </div>
      <Input className="bg-transparent focus-visible:ring-transparent border-none shadow-none " />
    </div>
  );
};

export default RequestInput;
