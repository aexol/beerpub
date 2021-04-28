import { FieldResolveInput } from 'stucco-js';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('Mutation', 'pubMutation', async (args) => {
    // Check if user has correct rights
    return {} as any;
  })(input.arguments);
