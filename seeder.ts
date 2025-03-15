/**
 * ! Executing this script will delete all data in your database and seed it with 10 workspaces.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from '@snaplet/seed';

const main = async () => {
  const seed = await createSeedClient({ dryRun: true });

  // Truncate all tables in the database
  await seed.$resetDatabase();

  // Seed the database with 10 workspaces
  await seed.workspaces([
    {
      name: 'MyWorkspace',
      collections: [
        {
          name: 'MyCollection',
          requests: [
            {
              name: 'Contact Information',
              method: 'GET',
              endpoint:
                'https://portfolio.com/api/v1/user/3202c5ba-348b-4956-8193-8fdd91f891a9/contact',
              auth: [
                {
                  token: '<<auth_token>>',
                  auth_type: 'bearer',
                },
              ],
              responses: [
                {
                  code: 200,
                  status: 'OK',
                  body: '{"email":"jon.michael.sultana@gmail.com","github":"https://github.com/SultanaJon","linkedin":"https://www.linkedin.com/in/jonathan-sultana-29b56558/"}',
                },
              ],
            },
            {
              name: 'Work Experience',
              method: 'GET',
              endpoint:
                'https://portfolio.com/api/v1/user/3202c5ba-348b-4956-8193-8fdd91f891a9/experience',
              auth: [
                {
                  token: '<<auth_token>>',
                  auth_type: 'bearer',
                },
              ],
              responses: [
                {
                  code: 200,
                  status: 'OK',
                  body: '[{"company":"Service Lane eAdvisor","position":"Senior Software Engineer","location":"Troy, MI","start_year":"2024","end_year":null,"isCurrentPosition":true},{"company":"Service Lane eAdvisor","position":"Software Engineer","location":"Troy, MI","start_year":"2018","end_year":"2024","isCurrentPosition":false},{"company":"Comau","position":"Computer Science Intern - Purchasing Project Lead","location":"Royal Oak, MI","start_year":"2017","end_year":"2018","isCurrentPosition":false},{"company":"Service Lane eAdvisor","position":"Support Technician","location":"Troy, MI","start_year":"2015","end_year":"2017","isCurrentPosition":false},{"company":"The Compassionate Cookie","position":"Web Developer","location":"Royal Oak, MI","start_year":"2016","end_year":"2017","isCurrentPosition":false}]',
                },
              ],
            },
            {
              name: 'Weaknesses',
              method: 'GET',
              endpoint:
                'https://portfolio.com/api/v1/user/3202c5ba-348b-4956-8193-8fdd91f891a9/weaknesses',
              auth: [
                {
                  token: '<<auth_token>>',
                  auth_type: 'bearer',
                },
              ],
              responses: [
                {
                  code: 404,
                  status: 'Not Found',
                  body: '{"status": 404, "error": "The resource was not found :)"}',
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  process.exit();
};

main();
