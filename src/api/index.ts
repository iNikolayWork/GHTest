import {Octokit} from '@octokit/rest';
import {API_TOKEN} from 'react-native-dotenv';

export const octokit = new Octokit({
  auth: API_TOKEN,
});
