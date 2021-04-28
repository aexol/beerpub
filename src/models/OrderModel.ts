import { ModelTypes } from '../zeus';

export type OrderModel = Omit<ModelTypes['Order'], 'orderedBeers'> & {
  orderedBeers: {
    SKU: string;
    quantity: number;
  }[];
};
