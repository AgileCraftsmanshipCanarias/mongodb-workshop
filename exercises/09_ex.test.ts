import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca los productos 1 y 5",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
