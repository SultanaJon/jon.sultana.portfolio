export default function GripBar() {
  return (
    <div className="flex justify-end p-[.5rem]">
      <div className="flex gap-[.5rem] *:rounded-full *:h-[13px] *:w-[13px] *:cursor-pointer">
        <span className="bg-orange-500" />
        <span className="bg-green-500" />
        <span className="bg-red-500" />
      </div>
    </div>
  );
}
