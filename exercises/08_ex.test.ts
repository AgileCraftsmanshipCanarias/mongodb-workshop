import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "obtén los fabricantes ordenados por nombre, pero solo los 5 primeros",
  withMongo(async (t, db) => {
    const products = db.collection("manufacturers");
    const result = await products.find({}, { sort: { name: 1 }, limit: 5 }).toArray();

    t.assert.snapshot(result);
  }),
);
