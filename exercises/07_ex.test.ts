import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "obtén los fabricantes ordenados por nombre",
  withMongo(async (t, db) => {
    const products = db.collection("manufacturers");
    const result = await products.find({}, { sort: { name: 1 } }).toArray();

    t.assert.snapshot(result);
  }),
);
