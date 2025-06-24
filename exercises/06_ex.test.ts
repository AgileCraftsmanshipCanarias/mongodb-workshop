import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca los productos con un precio entre 130 y 250",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
