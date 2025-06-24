import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "busca cuántos productos tiene cada fabricante, incluyendo su nombre",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products
      .aggregate([
        {
          $group: {
            _id: "$manufacturer_id",
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
            total: 1,
          },
        },
        {
          $sort: { manufacturer: 1 },
        }
      ])
      .toArray();

    t.assert.snapshot(result);
  }),
);
