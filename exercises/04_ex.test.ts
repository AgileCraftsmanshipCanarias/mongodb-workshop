import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca las impresoras",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products.find({ name: /printer/i }).toArray();

    t.assert.snapshot(result);
  }),
);
