import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "muestra el precio medio, mínimo y máximo de los productos por fabricante",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products
      .aggregate([
        {
          $group: {
            _id: "$manufacturer_id",
            avgPrice: { $avg: "$price" },
            minPrice: { $min: "$price" },
            maxPrice: { $max: "$price" },
            total: { $sum: 1 },
          },
        },
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
            avgPrice: { $round: ["$avgPrice", 2] },
            minPrice: 1,
            maxPrice: 1,
            total: 1,
          },
        },
        { $sort: { avgPrice: -1 } },
      ])
      .toArray();

    t.assert.snapshot(result);
  }),
);
