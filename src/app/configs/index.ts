import connectToMongoDb from './databases/mongo';
import appMiddlewares from './middlewares/index';
import type {Express} from 'express';

export default async function appFactory(app: Express): Promise<void> {
	appMiddlewares(app);
	await connectToMongoDb();
}