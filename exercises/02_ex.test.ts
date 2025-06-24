import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "lista los nombres y los precios de todos los productos",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
