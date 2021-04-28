import { FieldResolveInput } from 'stucco-js';
import { connectDB } from '../db';
import { BeerModel } from '../models/BeerModel';
import { OrderModel } from '../models/OrderModel';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('Order', 'orderedBeers', async (args, source: OrderModel) => {
    console.log(JSON.stringify(source, null, 2));
    const database = await connectDB();
    const beersInOrder = await database.collection<BeerModel>('Beers').find({}).toArray();
    return source.orderedBeers.map((s) => ({
      quantity: s.quantity,
      beer: beersInOrder.find((bio) => bio.SKU === s.SKU)!,
    }));
  })(input.arguments, input.source);
