'use client';

import { XIcon } from 'lucide-react';
import cx from 'classnames';
import { useRequestStore } from '@/stores/request-store';

export interface IRestRequestTab {
  requestId: number;
  method: string;
  name: string;
  isActive: boolean;
}

const RestRequestTab = ({
  requestId,
  method,
  name,
  isActive,
}: IRestRequestTab) => {
  const setSelectedRequest = useRequestStore(
    (state) => state.setSelectedRequest
  );

  return (
    <button
      onClick={() => setSelectedRequest(requestId)}
      className={cx(
        'group h-[3.8rem] w-52 border-t-[.125rem] border-transparent hover:bg-(--border) border-r-[.025rem] border-r-(--border)',
        isActive
          ? 'border-t-(--primary) bg-(--background) hover:bg-(--background)'
          : ''
      )}
    >
      <div className="h-full w-full ">
        <div className="flex text-left truncate items-center p-[.8rem] h-full">
          <div className="truncate">
            <div className="flex truncate gap-[.5rem]">
              <span className="font-semibold text-(--method-get-color)">
                {method}
              </span>
              <span
                className={cx(
                  'flex w-full text-left truncate',
                  isActive ? '**:text-(--primary-foreground)' : ''
                )}
              >
                <span className="truncate font-medium pl-[.5rem] pr-[.5rem]">
                  {name}
                </span>
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center ml-auto hidden group-hover:flex">
            <span>
              <XIcon size={17} />
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default RestRequestTab;
