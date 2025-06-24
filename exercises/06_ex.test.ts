import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca los productos con un precio entre 130 y 250",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products.find({ price: { $gt: 130, $lt: 250 } }).toArray();

    t.assert.snapshot(result);
  }),
);
