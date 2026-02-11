'use client';

import cx from 'classnames';
import {
  userJobTitle,
  userLocation,
  userName,
  userStory,
} from '@/config/user.config';
import GripBar from '@/app/(components)/ui/grip-bar';
import CodeFrame from '@/app/(components)/ui/code-frame';
import Panel from '@/app/(components)/ui/panel';
import { userCodeSnippet } from '@/config/user.config';
import CodeEditor from '@/app/(components)/ui/code-editor';

const AboutPage = () => {
  const code = userCodeSnippet

  return (
    <div className={cx('flex flex-col', 'lg:flex-row')}>
      <section
        className={cx(
          'w-full flex flex-col gap-6 py-8 px-8',
          'md:px-10 lg:w-[50%] lg:py-10 lg:px-10'
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
          'md:px-10 lg:w-[50%] lg:py-10 lg:px-10'
        )}
      >
        <CodeEditor/>
      </section>
    </div>
  );
};

export default AboutPage;
