import { connect } from 'mongodb';

export const connectDB = () => connect('mongodb://localhost:27017/').then((db) => db.db('beer'));
