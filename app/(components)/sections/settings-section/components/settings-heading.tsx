export interface ISettingHeadingProps {
  headerText: string;
  subtext: string;
}

export default function SettingsHeading({
  headerText,
  subtext,
}: ISettingHeadingProps) {
  return (
    <div className="w-[40%] p-4">
      <h3 className="font-bold text-[1.125rem] leading-7 text-(--primary-foreground) tracking-[-0.025rem]">
        {headerText}
      </h3>
      <p className="font-normal text-[.8rem] mt-[.24rem] mb-[.24rem]">
        {subtext}
      </p>
    </div>
  );
}
