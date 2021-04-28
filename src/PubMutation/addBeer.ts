import { FieldResolveInput } from 'stucco-js';
import { connectDB } from '../db';
import { BeerModel } from '../models/BeerModel';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('PubMutation', 'addBeer', async (args) => {
    const database = await connectDB();
    const result = await database.collection<BeerModel>('Beers').insertOne(args.beer);
    return !!result.insertedId;
  })(input.arguments);
