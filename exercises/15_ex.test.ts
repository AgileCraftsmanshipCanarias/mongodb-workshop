import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "calcula el precio medio de los productos",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
