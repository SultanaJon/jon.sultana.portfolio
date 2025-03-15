import type { Database } from '@/types/database.types';
import { Response } from './Response';
export type Request = Database['api']['Tables']['requests']['Row'];

export type RequestWithResponse = Request & {
  responses: Response | null;
};
