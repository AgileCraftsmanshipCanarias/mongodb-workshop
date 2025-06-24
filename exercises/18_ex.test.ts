import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "devuelve el fabricante con el producto más caro",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products
      .aggregate([
        {
          $group: {
            _id: "$manufacturer_id",
            maxPrice: { $max: "$price" },
          },
        },
        { $sort: { maxPrice: -1 } },
        { $limit: 1 },
        {
          $lookup: {
            from: "manufacturers",
            localField: "_id",
            foreignField: "_id",
            as: "manufacturer",
          },
        },
        { $unwind: "$manufacturer" },
        {
          $project: {
            manufacturer: "$manufacturer.name",
            maxPrice: 1,
          },
        },
      ])
      .toArray();

    t.assert.snapshot(result);
  }),
);
