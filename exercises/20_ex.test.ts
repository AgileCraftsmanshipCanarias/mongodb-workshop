import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "agrupa los productos por rango de precio (menos de 200, entre 200 y 500, más de 500)",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
