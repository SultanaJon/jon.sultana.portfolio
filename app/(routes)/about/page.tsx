'use client';

import CodeBlock from '@/app/(components)/ui/code-block';
import * as React from 'react';
import CodeEditor from '@/app/(components)/ui/code-editor';

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
    <div className="flex gap-[5rem] w-full p-[8rem]">
      <section className="max-w-4xl flex flex-col gap-[1.5rem]">
        <div>
          <h1 className="text-6xl font-bold mb-2 text-[--primary]">
            Hi, I&apos;m Jon Sultana
          </h1>
          <h3 className="text-2xl font-medium">
            I&apos;m a web developer based in Michigan
          </h3>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <p className="text-xl font-light">
            Hey, I’m a senior software engineer who’s all about building apps
            that work smoothly and don’t get in the way. When I’m not in front
            of a screen, you can find me outside—whether it’s hanging by a
            campfire, cruising the trails, or mountain biking through some
            backwoods. Just living life one adventure at a time.
          </p>
          <p className="text-xl font-light">
            Let’s connect and talk about tech, nature, or anything in between.
            Feel free to check out my projects or reach out directly!
          </p>
          <p className="text-xl font-light">
            In the meantime, check out my HTTP client, modeled after Hopscotch,
            to learn a little more about me and my work.
          </p>
        </div>
      </section>
      <section className="w-full">
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
