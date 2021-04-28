import { FieldResolveInput } from 'stucco-js';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('Query', 'clientQuery', async (args) => {
    return {} as any;
  })(input.arguments);
