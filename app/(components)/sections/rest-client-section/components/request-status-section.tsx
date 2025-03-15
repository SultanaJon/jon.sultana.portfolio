import { useEffect, useState } from 'react';
import RequestStatusIndicator from './request-status-indicator';

export interface IRequestStatusSection {
  responseId: string;
  code: number;
  codeDescription: string;
}

const RequestStatusSection = ({
  responseId,
  code,
  codeDescription,
}: IRequestStatusSection) => {
  const [color, setColor] = useState<string>('green');
  const [time, setTime] = useState<string>('0');
  const [size, setSize] = useState<string>('0');

  useEffect(() => {
    setColor(code == 200 ? 'green' : 'indianred');
  }, [code]);

  useEffect(() => {
    setTime((Math.random() * 200).toFixed(2));
    setSize((Math.random() * 200).toFixed(2));
  }, [responseId]);

  return (
    <div className="flex gap-[1.5rem] p-[1.2rem]">
      <RequestStatusIndicator
        label="Status:"
        value={`${code} - ${codeDescription}`}
        color={color}
      />
      <RequestStatusIndicator
        label="Time:"
        value={`${time} ms`}
        color={color}
      />
      <RequestStatusIndicator
        label="Size:"
        value={`${size} KB`}
        color={color}
      />
    </div>
  );
};

export default RequestStatusSection;
