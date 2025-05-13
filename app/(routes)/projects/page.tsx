'use client';

import { projects } from '@/data/projects';
import { FolderOpenDot } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import cx from 'classnames';
import { useTheme } from 'next-themes';

const ProjectsPage = () => {
  const { theme } = useTheme();

  if (!projects || projects.length === 0) {
    return (
      <div className="flex flex-col gap-[10px] items-center justify-center w-[400px] h-full w-full">
        <div className="flex flex-col items-center justify-center">
          <FolderOpenDot size={100} />
          <h3 className="text-lg font-extrabold">
            There are currently no projects to view
          </h3>
        </div>
      </div>
    );
  }

  function stringToHSLA(str: string, alpha: number = 0.7): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const hue = Math.abs(hash % 360);
    return `hsla(${hue}, 70%, 60%, ${alpha})`;
  }

  return (
    <div
      className={cx(
        'grid grid-cols-1 w-full gap-[2rem] p-[2rem]',
        'sm:grid-cols-2 lg:grid-cols-3'
      )}
    >
      {projects.map((project, index) => {
        return (
          <Link key={index} href={project.link} target={`_blank`}>
            <div className="flex flex-col h-full w-full">
              <div
                className={cx(
                  'flex flex-col gap-[1.5rem] h-full w-full p-[2.5rem] border-solid border-[--border] border-[1px] rounded-lg bg-[--accent]',
                  'hover:border-[--primary]'
                )}
              >
                <h3 className="text-3xl font-bold text-[--primary]">
                  {project.name}
                </h3>
                <p className="text-xl font-light">{project.description}</p>
                <div className={cx(`flex flex-wrap gap-[.7rem]`)}>
                  {project.technologies.map((technology, index) => {
                    return (
                      <span
                        key={index}
                        style={{
                          backgroundColor: stringToHSLA(
                            technology,
                            theme === 'dark' ? 0.5 : 0.9
                          ),
                          borderColor: stringToHSLA(technology, 1),
                        }}
                        className={`border-solid border-[1px] rounded-full px-[.5rem] py-[.2rem] text-[white]`}
                      >
                        {technology}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectsPage;
