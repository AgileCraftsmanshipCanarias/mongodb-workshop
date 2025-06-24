import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca los productos que empiezen por G",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products.find({ name: /^G/i }).toArray();

    t.assert.snapshot(result);
  }),
);
