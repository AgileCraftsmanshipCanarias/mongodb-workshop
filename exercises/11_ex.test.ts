import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "cuenta cuántos productos hay",
  withMongo(async (t, db) => {
    const products = db.collection<{ _id: number }>("products");
    const result = await products.countDocuments();

    t.assert.snapshot(result);
  }),
);
