import { FieldResolveInput } from 'stucco-js';
import { connectDB } from '../db';
import { BeerModel } from '../models/BeerModel';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('PubMutation', 'editBeer', async (args) => {
    const database = await connectDB();
    const result = await database.collection<BeerModel>('Beers').updateOne(
      {
        SKU: args.SKUInput.SKU,
      },
      {
        $set: {
          ...args.editBeer,
        },
      },
    );
    return !!result.result.ok;
  })(input.arguments);
