import { userSocialLinks } from '@/config/user.config';
import { Request } from '@/types/request';

export const contactInformationRequest: Request = {
  id: 1,
  name: 'Contact Information',
  method: 'GET',
  endpoint:
    'https://portfolio.com/api/v1/user/3202c5ba-348b-4956-8193-8fdd91f891a9/contact',
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
};

export const weaknessesRequest: Request = {
  id: 3,
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
};
