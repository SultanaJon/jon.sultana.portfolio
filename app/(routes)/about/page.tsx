'use client';

import CodeBlock from '@/app/(components)/ui/code-block';
import * as React from 'react';
import CodeEditor from '@/app/(components)/ui/code-editor';
import cx from 'classnames';
import { portfolioConfig } from '@/config/porfolio.config';

const AboutPage = () => {
  const code = `import { hire } from 'hire';

// Initialize the package with your developer details
const developer = new hire(${JSON.stringify(portfolioConfig.about.codeSnippet, null, 2)});

// Start working with your new developer!
developer.startBuilding();`;

  return (
    <div className={cx('flex overflow-auto flex-col', 'lg:flex-row')}>
      <section
        className={cx(
          'w-full flex flex-col gap-[1.5rem] py-[2rem] px-[2rem]',
          'md:px-[5rem] lg:w-[50%] lg:py-[5rem] lg:px-[2.5rem]'
        )}
      >
        <div>
          <h1 className="text-6xl font-bold mb-2 text-[--primary]">
            {portfolioConfig.about.header}
          </h1>
          <h3 className="text-2xl font-medium">
            {portfolioConfig.about.subheader}
          </h3>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <p className="text-xl font-light">
            {portfolioConfig.about.description}
          </p>
        </div>
      </section>
      <section
        className={cx(
          'w-full py-[2rem] px-[2rem]',
          'md:px-[5rem] lg:w-[50%] lg:py-[5rem] lg:px-[2.5rem]'
        )}
      >
        <div className="flex flex-col gap-[2rem]">
          <CodeEditor tabs={['>_terminal']}>
            <CodeBlock code={`npm install hire`} lang="shell" />
          </CodeEditor>
          <CodeEditor tabs={['hire.ts']}>
            <CodeBlock code={code} lang="typescript" />
          </CodeEditor>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
