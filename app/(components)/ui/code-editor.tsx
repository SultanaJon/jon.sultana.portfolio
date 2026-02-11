import GripBar from './grip-bar';
import CodeFrame from './code-frame';
import { userCodeSnippet } from '@/config/user.config';
import Panel from './panel';
import { useTheme } from 'next-themes';

const CodeEditor = () => {
  const { theme } = useTheme();
  const code = userCodeSnippet;

  return (
    <div className={`rounded overflow-hidden ${theme == 'light' ? 'light-plus' : 'bg-(--background-secondary-contrast)'} ${theme == 'light' ? 'border solid border-gray-300': ''}`}>
      <GripBar tabs={['Program.cs']} />
      <div className='h-[300px] max-h-[300px]'>
        <CodeFrame code={code} lang="csharp" />
      </div>
      <Panel />
    </div >
  );
};

export default CodeEditor;
