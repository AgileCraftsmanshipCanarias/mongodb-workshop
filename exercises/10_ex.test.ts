import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca los productos que no sean el 5 y el 9",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
