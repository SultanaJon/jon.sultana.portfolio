import { Workspace } from '@/types/workspace';
import {
  contactInformationRequest,
  weaknessesRequest,
  workHistoryRequest,
} from './workspace.requests';

export const workspace: Workspace = {
  name: 'Dummy Portfolio Workspace',
  collection: {
    name: 'Dummy Portfolio Collection',
    requests: [
      contactInformationRequest,
      workHistoryRequest,
      weaknessesRequest,
    ],
  },
};
