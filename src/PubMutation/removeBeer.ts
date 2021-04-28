import { FieldResolveInput } from 'stucco-js';
import { connectDB } from '../db';
import { BeerModel } from '../models/BeerModel';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('PubMutation', 'removeBeer', async (args) => {
    const database = await connectDB();
    const result = await database.collection<BeerModel>('Beers').deleteOne({
      SKU: args.SKUInput.SKU,
    });
    return !!result.deletedCount;
  })(input.arguments);
