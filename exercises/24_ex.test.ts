import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "muestra un informe con los productos caros y baratos",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
