import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "muestra un informe con los productos caros y baratos",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products
      .aggregate([
        {
          $facet: {
            caros: [
              { $match: { price: { $gte: 500 } } },
              { $project: { name: 1, price: 1, _id: 0 } },
              { $sort: { price: -1 } },
            ],
            baratos: [
              { $match: { price: { $lt: 100 } } },
              { $project: { name: 1, price: 1, _id: 0 } },
              { $sort: { price: 1 } },
            ],
          },
        },
      ])
      .toArray();

    t.assert.snapshot(result);
  }),
);
