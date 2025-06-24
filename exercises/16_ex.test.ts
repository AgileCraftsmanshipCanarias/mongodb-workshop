import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "trae una lista de los productos con el nombre de su manufacturer",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products
      .aggregate([
        {
          $lookup: {
            from: "manufacturers",
            localField: "manufacturer_id",
            foreignField: "_id",
            as: "manufacturer",
          },
        },
        { $unwind: "$manufacturer" },
        {
          $project: {
            name: 1,
            manufacturerName: "$manufacturer.name",
          },
        },
      ])
      .toArray();

    t.assert.snapshot(result);
  }),
);
