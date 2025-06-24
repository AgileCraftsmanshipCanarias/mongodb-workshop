import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "muestra el precio medio, mínimo y máximo de los productos por fabricante",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
