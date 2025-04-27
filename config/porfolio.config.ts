// Dummy personal links data
const personalLinks = {
  email: 'dummy-email@example.com',
  github: 'https://github.com/dummy-profile',
  linkedin: 'https://www.linkedin.com/in/dummy-profile-1234567/',
};

// config/site.config.ts
export const portfolioConfig = {
  // Primary data sources
  workspaces: [
    {
      id: 1,
      name: 'Dummy Portfolio Workspace',
    },
  ],
  collections: [
    {
      id: 1,
      workspaceId: 1,
      name: 'Dummy Portfolio Collection',
    },
  ],
  requests: [
    {
      id: 1,
      collectionId: 1,
      name: 'Contact Information',
      method: 'GET',
      endpoint:
        'https://dummy-portfolio.com/api/v1/user/1234abcd-5678-90ef-ghij-klmnopqrst/contact',
      response: {
        id: 1,
        code: 200,
        status: 'OK',
        body: personalLinks,
      },
    },
    {
      id: 2,
      collectionId: 1,
      name: 'Work Experience',
      method: 'GET',
      endpoint:
        'https://dummy-portfolio.com/api/v1/user/1234abcd-5678-90ef-ghij-klmnopqrst/experience',
      response: {
        id: 2,
        code: 200,
        status: 'OK',
        body: [
          {
            company: 'Dummy Company A',
            position: 'Junior Software Engineer',
            location: 'Dummy Town, NY',
            start_year: '2023',
            end_year: null,
            isCurrentPosition: true,
          },
          {
            company: 'Dummy Company B',
            position: 'Frontend Developer',
            location: 'Dummy City, CA',
            start_year: '2021',
            end_year: '2023',
            isCurrentPosition: false,
          },
          {
            company: 'Dummy Company C',
            position: 'Intern Developer',
            location: 'Dummyville, TX',
            start_year: '2020',
            end_year: '2021',
            isCurrentPosition: false,
          },
        ],
      },
    },
    {
      id: 3,
      collectionId: 1,
      name: 'Weaknesses',
      method: 'GET',
      endpoint:
        'https://dummy-portfolio.com/api/v1/user/1234abcd-5678-90ef-ghij-klmnopqrst/weaknesses',
      response: {
        id: 3,
        code: 404,
        status: 'Not Found',
        body: { status: 404, error: 'The resource was not found :)' },
      },
    },
  ],

  // Personal information
  name: 'Dummy Name',
  links: personalLinks,

  // Site metadata
  metadata: {
    title: 'Dummy Name | Web Developer',
    description:
      'Portfolio of Dummy Name — Junior Web Developer passionate about building intuitive, user-friendly applications.',
    keywords: [
      'Web Development',
      'Frontend',
      'Backend',
      'Portfolio',
      'Developer Tools',
    ],
  },

  // About page content
  about: {
    header: "Hi, I'm Dummy Name",
    subheader: 'A web developer based in Dummy City',
    description: `I am a Junior Web Developer who enjoys building both frontend
            and backend applications that are fast, intuitive, and thoughtfully
            designed. Whether it's crafting user interfaces or learning
            about new technologies, I take pride in solving problems through clean,
            maintainable code. When I'm not deep in a code editor,
            you'll likely find me exploring new hobbies or enjoying outdoor activities.
            Thanks for stopping by. Before you go,
            be sure to check out my work and recent projects!`,
    codeSnippet: {
      name: 'Dummy Name',
      role: 'Junior Web Developer',
      skills: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'React'],
      passion: 'Building web applications that improve the user experience.',
    },
  },
};
