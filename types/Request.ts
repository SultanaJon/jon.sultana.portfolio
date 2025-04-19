import { Response } from './Response';

export type Request = {
  id: number;
  name: string;
  method: string;
  endpoint: string;
  response: Response;
};
