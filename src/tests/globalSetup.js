import { MongoDBMemoryServer } from 'mongodb-memory-server';

export default async function globalSetup() {
  const instance = await MongoDBMemoryServer.create({
    binary: {
      version: '6.0.4',
    },
  });
  global._MONGOINSTANCE = instance;
  process.env.DATABASE_URL = instance.getUri();
}