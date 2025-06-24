import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "devuelve la página 2 de productos (tamaño de página 5) ordenados por nombre, con el nombre del fabricante",
  withMongo(async (t, db) => {
    const result = null;
    t.assert.snapshot(result);
  }),
);
