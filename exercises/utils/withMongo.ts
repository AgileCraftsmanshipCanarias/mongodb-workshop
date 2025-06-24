import { type TestContext } from "node:test";
import { Db, MongoClient } from "mongodb";

export function withMongo(fn: (t: TestContext, db: Db) => Promise<void>) {
  return (t: TestContext) => {
    let client: MongoClient;
    t.before(async () => {
      client = new MongoClient("mongodb://localhost:27017/store");
      await client.connect();
    });
    t.test("works", async () => {
      const db = client.db("store");
      await fn(t, db);
    });
    t.after(async () => {
      await client.close();
    });
  };
}
