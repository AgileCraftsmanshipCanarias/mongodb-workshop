import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "trae una lista de los productos con el nombre de su manufacturer",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
