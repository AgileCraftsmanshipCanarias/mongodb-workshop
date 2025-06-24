import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "crea un campo categoria basado en el nombre del producto",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products
      .aggregate([
        {
          $set: {
            categoria: {
              $cond: [
                { $regexMatch: { input: "$name", regex: /laptop/i } },
                "Portátil",
                {
                  $cond: [{ $regexMatch: { input: "$name", regex: /printer/i } }, "Impresora", "Otro"],
                },
              ],
            },
          },
        },
        {
          $project: {
            name: 1,
            categoria: 1,
          },
        },
      ])
      .toArray();

    t.assert.snapshot(result);
  }),
);
