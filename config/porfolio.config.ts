const personalLinks = {
  email: 'jon.michael.sultana@gmail.com',
  github: 'https://github.com/SultanaJon',
  linkedin: 'https://www.linkedin.com/in/jonathan-sultana-29b56558/',
};

// config/site.config.ts
export const portfolioConfig = {
  // Primary data sources
  workspaces: [
    {
      id: 1,
      name: 'Portfolio Workspace',
    },
  ],
  collections: [
    {
      id: 1,
      workspaceId: 1,
      name: 'Portfolio Collection',
    },
  ],
  requests: [
    {
      id: 1,
      collectionId: 1,
      name: 'Contact Information',
      method: 'GET',
      endpoint:
        'https://portfolio.com/api/v1/user/3202c5ba-348b-4956-8193-8fdd91f891a9/contact',
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
        'https://portfolio.com/api/v1/user/3202c5ba-348b-4956-8193-8fdd91f891a9/experience',
      response: {
        id: 2,
        code: 200,
        status: 'OK',
        body: [
          {
            company: 'Service Lane eAdvisor',
            position: 'Senior Software Engineer',
            location: 'Troy, MI',
            start_year: '2024',
            end_year: null,
            isCurrentPosition: true,
          },
          {
            company: 'Service Lane eAdvisor',
            position: 'Software Engineer',
            location: 'Troy, MI',
            start_year: '2018',
            end_year: '2024',
            isCurrentPosition: false,
          },
          {
            company: 'Comau',
            position: 'Computer Science Intern - Purchasing Project Lead',
            location: 'Royal Oak, MI',
            start_year: '2017',
            end_year: '2018',
            isCurrentPosition: false,
          },
          {
            company: 'Service Lane eAdvisor',
            position: 'Support Technician',
            location: 'Troy, MI',
            start_year: '2015',
            end_year: '2017',
            isCurrentPosition: false,
          },
          {
            company: 'The Compassionate Cookie',
            position: 'Web Developer',
            location: 'Royal Oak, MI',
            start_year: '2016',
            end_year: '2017',
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
        'https://portfolio.com/api/v1/user/3202c5ba-348b-4956-8193-8fdd91f891a9/weaknesses',
      response: {
        id: 3,
        code: 404,
        status: 'Not Found',
        body: { status: 404, error: 'The resource was not found :)' },
      },
    },
  ],

  // Personal information
  name: 'Jon Sultana',
  links: personalLinks,

  // Site metadata
  metadata: {
    title: 'Jon Sultana | Software Engineer',
    description:
      'Portfolio of Jon Sultana — Senior Software Engineer passionate about building intuitive, user-friendly applications.',
    keywords: [
      'REST Client',
      'HTTP Client',
      'Portfolio',
      'Open Source',
      'Developer Tools',
    ],
  },

  // About page content
  about: {
    header: "Hi, I'm Jon Sultana",
    subheader: 'A web developer based in Michigan',
    description: `I am a Senior Software Engineer who enjoys building both frontend
            and backend applications that are fast, intuitive, and thoughtfully
            designed. Whether it's crafting user interfaces or architecting
            scalable APIs, I take pride in solving problems through clean,
            maintainable code. When I'm not deep in a code editor,
            you'll likely find me spending time with my family, exploring
            the natural beauty of Northern Michigan, or tearing through the
            trails on my mountain bike. Thanks for stopping by. Before you go,
            be sure to check out my REST client for more information about me
            and any recent projects I've been working on!`,
    codeSnippet: {
      name: 'Jon Sultana',
      role: 'Senior Software Engineer',
      skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'Mountain Biking',
      ],
      passion:
        'Building user-centric applications that solve real-world problems.',
    },
  },
};
