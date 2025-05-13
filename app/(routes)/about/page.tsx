'use client';

import CodeBlock from '@/app/(components)/ui/code-block';
import * as React from 'react';
import CodeEditor from '@/app/(components)/ui/code-editor';
import cx from 'classnames';
import {
  userCodeSnippet,
  userJobTitle,
  userLocation,
  userName,
  userStory,
} from '@/config/user.config';

const AboutPage = () => {
  const code = userCodeSnippet;

  return (
    <div className={cx('flex flex-col', 'lg:flex-row')}>
      <section
        className={cx(
          'w-full flex flex-col gap-[1.5rem] py-[2rem] px-[2rem]',
          'md:px-[5rem] lg:w-[50%] lg:py-[5rem] lg:px-[2.5rem]'
        )}
      >
        <div>
          <h1 className="text-6xl font-bold mb-2 text-[--primary]">
            {`Hi, I'm ${userName}`}
          </h1>
          <h3 className="text-2xl font-medium">
            {`A ${userJobTitle} based in ${userLocation}`}
          </h3>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <p className="text-xl font-light">{userStory}</p>
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
