import { Construction } from 'lucide-react';
import * as React from 'react';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-[10px] m-auto w-[400px]">
      <div className="flex flex-col items-center justify-center">
        <Construction size={100} />
        <h3 className="text-lg font-extrabold">
          This page is currently under construction
        </h3>
      </div>
      <div>
        <p>
          Check back soon! In the meantime, feel free to explore the rest of the
          site.
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
