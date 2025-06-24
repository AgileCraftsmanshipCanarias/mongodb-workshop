import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "lista todos los productos que hay",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products.find().toArray();

    t.assert.snapshot(result);
  }),
);
