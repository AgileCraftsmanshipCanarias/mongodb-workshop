import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "lista los nombres y los precios de todos los productos",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products.find({}, { projection: { name: 1, price: 1 } }).toArray();

    t.assert.snapshot(result);
  }),
);
