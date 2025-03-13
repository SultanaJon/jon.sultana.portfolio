import { SaveIcon } from 'lucide-react';
import MenuButton from './menu-button';
import RequestInput from './request-input';

const RequestBar = () => {
  return (
    <div className="flex gap-[1rem] p-[1.2rem]">
      <div className="flex w-full h-[2.5rem]">
        <RequestInput />
      </div>
      <div className="flex gap-[.5rem] ml-auto h-[2.5rem]">
        <MenuButton colorMode="default">
          <SaveIcon />
          Save
        </MenuButton>
        <MenuButton colorMode="dark">
          <SaveIcon />
          Save
        </MenuButton>
      </div>
    </div>
  );
};

export default RequestBar;
