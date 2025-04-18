import { ReactNode } from 'react';
import GripBar from './grip-bar';

export interface ICodeEditor {
  tabs?: string[];
  children: ReactNode;
}

const CodeEditor = ({ tabs, children }: ICodeEditor) => {
  return (
    <div className="rounded overflow-hidden">
      <GripBar tabs={tabs} />
      {children}
    </div>
  );
};

export default CodeEditor;
