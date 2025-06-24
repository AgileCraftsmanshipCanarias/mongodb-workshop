import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "añade un campo ivaIncluido que sea el precio con el 21% de IVA",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
