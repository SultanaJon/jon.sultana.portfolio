export interface IRequestStatusIndicator {
  label: string;
  value: string;
  color?: string;
}

const RequestStatusIndicator = ({
  label,
  value,
  color,
}: IRequestStatusIndicator) => {
  return (
    <div className="flex gap-[.5rem] **:text-[.8rem] font-bold">
      <span>{label}</span>
      <span style={{ color: color }}>{value}</span>
    </div>
  );
};

export default RequestStatusIndicator;
