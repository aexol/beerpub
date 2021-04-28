import { FieldResolveInput } from 'stucco-js';
import { connectDB } from '../db';
import { OrderModel } from '../models/OrderModel';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('PubMutation', 'cancelOrder', async (args) => {
    const database = await connectDB();
    const result = database.collection<OrderModel>('Orders').deleteOne({
      number: args.orderDetail.number,
    });
    return !!result;
  })(input.arguments);
