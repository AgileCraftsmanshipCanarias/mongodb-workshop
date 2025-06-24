import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "obtén los fabricantes ordenados por nombre, pero solo los 5 primeros",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
