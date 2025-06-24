import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca las impresoras",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
