import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    name: 'http-client-portfolio',
    link: 'https://github.com/SultanaJon/http-client-portfolio',
    description:
      'A developer portfolio inspired by the Hoppscotch HTTP client UI—built to showcase projects, skills, and a passion for clean, interactive web apps.',
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
