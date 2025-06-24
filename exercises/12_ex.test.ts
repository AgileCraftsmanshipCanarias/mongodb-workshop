import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "devuelve el producto más caro",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
