import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca cuántos productos tiene cada fabricante, incluyendo su nombre",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
