import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "calcula el precio medio de los productos",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products.aggregate([{ $group: { _id: null, avgPrice: { $avg: "$price" } } }]).toArray();

    t.assert.snapshot(result);
  }),
);
