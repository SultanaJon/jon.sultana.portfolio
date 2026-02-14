import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    name: 'jon.sultana.portfolio',
    link: 'https://github.com/SultanaJon/jon.sultana.portfolio',
    description:
      'A personal portfolio modeled after the Hopscotch HTTP client.',
    technologies: [
      'nextjs',
      'react',
      'typescript',
      'zustand',
      'shadcn',
      'tailwind',
    ],
  },
  {
    name: 'magic-eight-ball',
    link: 'https://github.com/SultanaJon/magic-eight-ball',
    description:
      'Magic 🎱 web application used for fortune telling and seeking advice.',
    technologies: ['nextjs', 'react', 'typescript', 'shadcn'],
  },
];
