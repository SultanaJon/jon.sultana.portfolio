import { PostgresError } from 'postgres';

export type SupabaseResponse<T> = {
  data: T | null;
  error: PostgresError | null;
};
