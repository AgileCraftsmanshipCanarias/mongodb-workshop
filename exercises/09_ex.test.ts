import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca los productos 1 y 5",
  withMongo(async (t, db) => {
    const products = db.collection<{ _id: number }>("products");
    const result = await products.find({ _id: { $in: [1, 5] } }).toArray();

    t.assert.snapshot(result);
  }),
);
