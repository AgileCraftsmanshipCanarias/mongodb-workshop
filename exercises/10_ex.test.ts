import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca los productos que no sean el 5 y el 9",
  withMongo(async (t, db) => {
    const products = db.collection<{ _id: number }>("products");
    const result = await products.find({ _id: { $nin: [5, 9] } }).toArray();

    t.assert.snapshot(result);
  }),
);
