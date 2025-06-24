import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "añade un campo ivaIncluido que sea el precio con el 21% de IVA",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products
      .aggregate([
        {
          $addFields: {
            ivaIncluido: { $round: [{ $multiply: ["$price", 1.21] }, 2] },
          },
        },
        {
          $project: {
            name: 1,
            price: 1,
            ivaIncluido: 1,
          },
        },
      ])
      .toArray();

    t.assert.snapshot(result);
  }),
);
