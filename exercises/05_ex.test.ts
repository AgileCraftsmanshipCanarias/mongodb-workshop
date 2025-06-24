import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca los productos con un precio mayor a 200",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
