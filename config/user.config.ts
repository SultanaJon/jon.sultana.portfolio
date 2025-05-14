export const userName: string = 'John Doe';
export const userJobTitle: string = 'Software Engineer';
export const userLocation: string = 'Michigan';

interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
}

export const userSocialLinks: SocialLinks = {
  email: 'john.doe@example.com',
  github: 'https://github.com/johndoe',
  linkedin: 'https://www.linkedin.com/in/johndoe',
};

const userPassion =
  'Building web applications that improve the user experience.';

const userObject = {
  name: userName,
  role: userJobTitle,
  skills: [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Next.js',
    'React',
    '...',
  ],
  passion: userPassion,
};

export const userCodeSnippet = `import { hire } from 'hire';

// Initialize the package with your developer details
const developer = new hire(${JSON.stringify(userObject, null, 2)});

// Start working with your new developer!
developer.startBuilding();`;

export const userStory = `I am a ${userJobTitle} who enjoys building both frontend
            and backend applications that are fast, intuitive, and thoughtfully
            designed. Whether it's crafting user interfaces or learning
            about new technologies, I take pride in solving problems through clean,
            maintainable code. When I'm not deep in a code editor,
            you'll likely find me exploring new hobbies or enjoying outdoor activities.
            Thanks for stopping by. Before you go,
            be sure to check out my work and recent projects!`;
