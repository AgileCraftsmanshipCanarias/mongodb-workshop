import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca el producto con nombre 'SATA3 1TB Hard Drive'",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
