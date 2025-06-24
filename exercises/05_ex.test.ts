import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca los productos con un precio mayor a 200",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products.find({ price: { $gt: 200 } }).toArray();

    t.assert.snapshot(result);
  }),
);
