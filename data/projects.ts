import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    name: 'e-commerce-store',
    link: 'https://github.com/AwesomeDev/e-commerce-store',
    description:
      'A fully functional e-commerce platform built with modern web technologies.',
    technologies: ['react', 'redux', 'nodejs', 'express', 'mongodb'],
  },
  {
    name: 'social-media-app',
    link: 'https://gitlab.com/CodeNinja/social-media-app',
    description:
      'A social networking application connecting users through posts and interactions.',
    technologies: ['vuejs', 'vuex', 'firebase'],
  },
  {
    name: 'task-management-tool',
    link: 'https://bitbucket.org/CreativeCoders/task-management-tool',
    description:
      'An application to help users organize and manage their daily tasks and projects.',
    technologies: ['angular', 'typescript', 'nestjs', 'postgresql'],
  },
  {
    name: 'blog-website',
    link: 'https://github.com/WebArtisan/blog-website',
    description:
      'A personal blog website to share thoughts and ideas with the world.',
    technologies: ['nextjs', 'react', 'tailwindcss', 'contentful'],
  },
  {
    name: 'recipe-app',
    link: 'https://github.com/FoodieDev/recipe-app',
    description:
      'A mobile application to discover and save your favorite recipes.',
    technologies: ['react native', 'expo'],
  },
];
