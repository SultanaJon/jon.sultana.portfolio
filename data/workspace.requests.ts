import { userSocialLinks } from '@/config/user.config';
import { Request } from '@/types/request';

export const contactInformationRequest: Request = {
  id: 1,
  name: 'Contact Information',
  method: 'GET',
  endpoint:
    'https://dummy-portfolio.com/api/v1/user/1234abcd-5678-90ef-ghij-klmnopqrst/contact',
  response: {
    id: 1,
    code: 200,
    status: 'OK',
    body: userSocialLinks,
  },
};

export const workHistoryRequest: Request = {
  id: 2,
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
};

export const weaknessesRequest: Request = {
  id: 3,
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
};
