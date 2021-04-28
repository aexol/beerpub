import { FieldResolveInput } from 'stucco-js';
import { connectDB } from '../db';
import { OrderModel } from '../models/OrderModel';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('PubMutation', 'submitOrder', async (args) => {
    const database = await connectDB();
    const result = await database
      .collection<
        Omit<OrderModel, 'orderedBeers'> & {
          orderedBeers: {
            SKU: string;
            quantity: number;
          }[];
        }
      >('Orders')
      .insertOne({
        createdAt: new Date().toISOString(),
        number: Math.random() * 10000,
        orderedBeers: args.order.productInOrder,
      });
    return !!result.insertedId;
  })(input.arguments);
