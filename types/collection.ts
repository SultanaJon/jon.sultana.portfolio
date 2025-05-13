import { Request } from './request';

export interface Collection {
  name: string;
  requests: Request[];
}
