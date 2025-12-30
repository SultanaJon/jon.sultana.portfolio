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
          'w-full flex flex-col gap-6 py-8 px-8',
          'md:px-20 lg:w-[50%] lg:py-20 lg:px-10'
        )}
      >
        <div>
          <h1 className="text-6xl font-bold mb-2 text-(--primary)">
            {`Hi, I'm ${userName}`}
          </h1>
          <h3 className="text-2xl font-medium">
            {`A ${userJobTitle} based in ${userLocation}`}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-light">{userStory}</p>
        </div>
      </section>
      <section
        className={cx(
          'w-full py-8 px-8',
          'md:px-20 lg:w-[50%] lg:py-20 lg:px-10'
        )}
      >
        <div className="flex flex-col gap-8">
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
