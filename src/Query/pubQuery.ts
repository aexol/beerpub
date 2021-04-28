import { FieldResolveInput } from 'stucco-js';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('Query', 'pubQuery', async (args) => {
    return {} as any;
  })(input.arguments);
