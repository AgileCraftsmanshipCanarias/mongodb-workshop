import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "lista todos los productos que hay",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
