import { Response } from './response';

export interface Request {
  id: number;
  name: string;
  method: string;
  endpoint: string;
  response: Response;
}
