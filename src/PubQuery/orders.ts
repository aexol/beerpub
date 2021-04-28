import { FieldResolveInput } from 'stucco-js';
import { connectDB } from '../db';
import { OrderModel } from '../models/OrderModel';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('PubQuery', 'orders', async (args) => {
    const database = await connectDB();
    const result = database.collection<OrderModel>('Orders').find({}).toArray();
    return result as any;
  })(input.arguments);
