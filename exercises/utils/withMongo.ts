import { type TestContext } from "node:test";
import { Db, MongoClient } from "mongodb";
import { uri } from "./url.ts";

export function withMongo(fn: (t: TestContext, db: Db) => Promise<void>) {
  return (t: TestContext) => {
    let client: MongoClient;
    t.before(async () => {
      client = new MongoClient(uri);
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
