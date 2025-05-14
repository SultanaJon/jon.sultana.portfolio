import { Workspace } from '@/types/workspace';
import {
  contactInformationRequest,
  weaknessesRequest,
  workHistoryRequest,
} from './workspace.requests';

export const workspace: Workspace = {
  name: 'My Portfolio Workspace',
  collection: {
    name: 'My Portfolio Collection',
    requests: [
      contactInformationRequest,
      workHistoryRequest,
      weaknessesRequest,
    ],
  },
};
