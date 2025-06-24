import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "devuelve el producto más caro",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products.findOne({}, { sort: { price: -1 } });

    t.assert.snapshot(result);
  }),
);
