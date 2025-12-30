import { XIcon } from 'lucide-react';

export interface IGripBar {
  tabs?: string[];
}

export default function GripBar({ tabs }: IGripBar) {
  return (
    <div className="flex bg-(--background-contrast)">
      <div className="flex gap-[.5rem] *:rounded-full *:h-[13px] *:w-[13px] *:cursor-pointer px-[1.2rem] py-[.8rem] ">
        <span className="bg-red-500" />
        <span className="bg-orange-500" />
        <span className="bg-green-500" />
      </div>
      {tabs?.map((t, i) => (
        <div
          key={i}
          className="flex gap-[.8rem] bg-(--background-secondary-contrast) px-[1.2rem] py-[.5rem]"
        >
          <span>{t}</span>
          <XIcon size={17} className="cursor-pointer" />
        </div>
      ))}
    </div>
  );
}
