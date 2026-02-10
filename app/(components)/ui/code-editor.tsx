import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import GripBar from './grip-bar';
import CodeBlock from './code-block';
import { userCodeSnippet } from '@/config/user.config';

export interface ICodeEditor {
  tabs?: string[]
}

const CodeEditor = ({ tabs }: ICodeEditor) => {
  const [command, setCommand] = useState(``)
  const [displayBuildInfo, setDisplayBuildInfo] = useState<boolean>(false)
  const [displayServerInfo, setDisplayServerInfo] = useState<boolean>(false)

  const commandText = "dotnet run",
    buildInfo =
      `Using launch settings from C:\\Users\\jondoe\\Projects\\porfolio-api\\Properties\\launchSettings.json...
Building...`

  const code = userCodeSnippet;

  useEffect(() => {
    setTimeout(typeAndRunCommand, 2000);
  }, [])

  const typeAndRunCommand = () => {
    let currentIndex = 0

    const intervalId = setInterval(() => {
      if (currentIndex < commandText.length) {
        let current = commandText.slice(0, currentIndex + 1)
        setCommand(current);
        currentIndex++;
      } else {
        clearInterval(intervalId)
        // start the buld
        setTimeout(startBuild, 1000)
      }
    }, 200)
  }

  const startBuild = () => {
    setDisplayBuildInfo(true)

    // start the server
    setTimeout(() => setDisplayServerInfo(true), 1000)
  }

  return (
    <div className="rounded overflow-hidden bg-(--background-secondary-contrast)">
      <GripBar tabs={tabs} />
      <CodeBlock code={code} lang="csharp" />
      <hr className='bg-(--background-contrast)' />
      <div className='flex font-sm gap-[1rem] items-center p-3'>
        <span>PROBLEMS</span>
        <span>OUTPUT</span>
        <span>DEBUG CONSOLE</span>
        <span className='text-white border-b border-white'>TERMINAL</span>
        <span>PORTS</span>
      </div>
      <div className='h-[150px] p-[1rem] whitespace-pre h-[300px] overflow-auto max-h-[300px]'>
        <div><span>&gt;</span> <span>{command}</span></div>
        {displayBuildInfo && <div>{buildInfo}</div>}
        {displayServerInfo && (
          <div>
            <div>
              <div><span className='text-green-200'>info</span>{`: Microsoft.Hosting.Lifetime[14]`}</div>
              <div>{`        Now listening on: http://localhost:5186`}</div>
            </div>
            <div>
              <div><span className='text-green-200'>info</span>{`: Microsoft.Hosting.Lifetime[0]`}</div>
              <div>{`        Application started. Press Ctrl+C to shut down.`}</div>
            </div>
            <div>
              <div><span className='text-green-200'>info</span>{`: Microsoft.Hosting.Lifetime[0]`}</div>
              <div>{`       Hosting environment: Development`}</div>
            </div>
            <div>
              <div><span className='text-green-200'>info</span>{`: Microsoft.Hosting.Lifetime[0]`}</div>
              <div>{`        Content root path: C:\\Users\\jondoe\\Projects\\porfolio-api`}</div>
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default CodeEditor;
