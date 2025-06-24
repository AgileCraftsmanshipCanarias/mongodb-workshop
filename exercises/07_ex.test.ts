import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "obtén los fabricantes ordenados por nombre",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
