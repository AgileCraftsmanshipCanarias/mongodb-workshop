import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "crea un campo categoria basado en el nombre del producto",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
