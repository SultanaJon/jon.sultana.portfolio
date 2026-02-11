import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import GripBar from './grip-bar';
import CodeFrame from './code-frame';
import { userCodeSnippet } from '@/config/user.config';
import Panel from './panel';

const CodeEditor = () => {
  const code = userCodeSnippet;

  return (
    <div className="rounded overflow-hidden bg-(--background-secondary-contrast)">
      <GripBar tabs={['Program.cs']} />
      <div className='h-[300px] max-h-[300px]'>
        <CodeFrame code={code} lang="csharp" />
      </div>
      <hr className='bg-(--background-contrast)' />
      <Panel />
    </div >
  );
};

export default CodeEditor;
