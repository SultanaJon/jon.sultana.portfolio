export const userName: string = 'Jonathan Sultana';
export const userJobTitle: string = 'Senior Software Engineer';
export const userLocation: string = 'Michigan';

interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
}

export const userSocialLinks: SocialLinks = {
  email: 'jon.michael.sultana@gmail.com',
  github: 'https://github.com/SultanaJon',
  linkedin: 'https://www.linkedin.com/in/jonathan-sultana-29b56558/',
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
const developer = new hire();

// Start working with your new developer!
developer.startBuilding(${JSON.stringify(userObject, null, 2)});`;

export const userStory = `
  I am a ${userJobTitle} who enjoys building both frontend 
  and backend applications that are fast, intuitive, and
  thoughtfully designed. Whether it's crafting user interfaces
  or architecting scalable APIs, I take pride in solving problems
  through clean, maintainable code. When I'm not deep in a code
  editor, you'll likely find me spending time with my family,
  exploring the natural beauty of Northern Michigan, or tearing
  through the trails on my mountain bike. Thanks for stopping by.
  Before you go, be sure to check out my REST client for more
  information about me and any recent projects I've been working on!`;
