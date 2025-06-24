import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "agrupa los productos por rango de precio (menos de 200, entre 200 y 500, más de 500)",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products
      .aggregate([
        {
          $bucket: {
            groupBy: "$price",
            boundaries: [0, 200, 500, Infinity],
            default: "Desconocido",
            output: {
              count: { $sum: 1 },
              products: { $push: "$name" },
            },
          },
        },
      ])
      .toArray();

    t.assert.snapshot(result);
  }),
);
