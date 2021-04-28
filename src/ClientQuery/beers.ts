import { FieldResolveInput } from 'stucco-js';
import { connectDB } from '../db';
import { BeerModel } from '../models/BeerModel';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('ClientQuery', 'beers', async (args) => {
    const database = await connectDB();
    return database.collection<BeerModel>('Beers').find({}).toArray();
  })(input.arguments);
