import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca el producto con nombre 'SATA3 1TB Hard Drive'",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products.find({ name: "SATA3 1TB Hard Drive" }).toArray();

    t.assert.snapshot(result);
  }),
);
