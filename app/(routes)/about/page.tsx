'use client';

import CodeBlock from '@/app/(components)/ui/code-block';
import * as React from 'react';
import CodeEditor from '@/app/(components)/ui/code-editor';
import cx from 'classnames';

const AboutPage = () => {
  const code = `import { hire } from 'hire';

// Initialize the package with your developer details
const developer = new hire({
  name: "Jon Sultana",
  role: "Senior Software Engineer",
  skills: ["JavaScript", "TypeScript", "React", "Node.js", "Mountain Biking"],
  passion: "Building user-centric applications that solve real-world problems.",
});

// Start working with your new developer!
developer.startBuilding();`;

  return (
    <div className={cx('flex overflow-auto flex-col', 'lg:flex-row')}>
      <section
        className={cx(
          'w-full flex flex-col gap-[1.5rem] py-[2rem] px-[5rem]',
          'lg:w-[50%] lg:py-[5rem] lg:ps-[5rem] lg:pe-[2.5rem]'
        )}
      >
        <div>
          <h1 className="text-6xl font-bold mb-2 text-[--primary]">
            Hi, I&apos;m Jon Sultana
          </h1>
          <h3 className="text-2xl font-medium">
            A web developer based in Michigan
          </h3>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <p className="text-xl font-light">
            I am a Senior Software Engineer who enjoys building both frontend
            and backend applications that are fast, intuitive, and thoughtfully
            designed. Whether it&apos;s crafting user interfaces or architecting
            scalable APIs, I take pride in solving problems through clean,
            maintainable code. When I&apos;m not deep in a code editor,
            you&apos;ll likely find me spending time with my family, exploring
            the natural beauty of Northern Michigan, or tearing through the
            trails on my mountain bike. Thanks for stopping by. Before you go,
            be sure to check out my REST client for more information about me
            and any recent projects I&apos;ve been working on!
          </p>
        </div>
      </section>
      <section
        className={cx(
          'w-full py-[2rem] px-[5rem]',
          'lg:w-[50%] lg:py-[5rem] lg:ps-[2.5rem] lg:pe-[5rem]'
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
