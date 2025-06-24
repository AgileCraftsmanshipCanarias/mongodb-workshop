import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca los productos que empiezen por G",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
