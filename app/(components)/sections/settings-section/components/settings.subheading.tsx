export interface ISettingSubheadingProps {
  headerText: string;
  subText: string;
}

export default function SettingsSubheading({
  headerText,
  subText,
}: ISettingSubheadingProps) {
  return (
    <div>
      <h4 className="font-semibold text-[.8rem] text-[--primary-foreground]">
        {headerText}
      </h4>
      <p className="font-normal text-[.8rem] mt-[.25rem] mb-[.25rem]">
        {subText}
      </p>
    </div>
  );
}
