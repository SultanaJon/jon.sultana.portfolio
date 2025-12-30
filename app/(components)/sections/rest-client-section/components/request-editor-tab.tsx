import cx from 'classnames';

export interface IRequestEditorTab {
  text: string;
  isActive?: boolean;
}

const RequestEditorTab = ({ text, isActive }: IRequestEditorTab) => {
  return (
    <div className="flex flex-col px-[1.2rem] py-[5px] text-[.925rem] font-medium cursor-pointer">
      <span
        className={cx(
          'hover:text-(--secondary-foreground) truncate',
          isActive ? 'text-(--secondary-foreground)' : ''
        )}
      >
        {text}
      </span>
      {isActive && (
        <span className="mt-[.5rem] border-b-2 border-b-(--primary)" />
      )}
    </div>
  );
};

export default RequestEditorTab;
