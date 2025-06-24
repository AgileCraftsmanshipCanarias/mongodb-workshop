import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "cuenta cuántos productos hay",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
