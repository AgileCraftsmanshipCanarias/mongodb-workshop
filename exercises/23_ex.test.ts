import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "obtene los fabricantes con al menos 2 productos caros (precio > 200)",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
