import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "obtene los fabricantes con al menos 2 productos caros (precio > 200)",
  withMongo(async (t, db) => {
    const manufacturers = db.collection("manufacturers");
    const result = await manufacturers
      .aggregate([
        {
          $lookup: {
            from: "products",
            localField: "_id",
            foreignField: "manufacturer_id",
            as: "productos",
          },
        },
        {
          $addFields: {
            productosCaros: {
              $filter: {
                input: "$productos",
                as: "prod",
                cond: { $gt: ["$$prod.price", 200] },
              },
            },
          },
        },
        {
          $match: {
            "productosCaros.1": { $exists: true }, // tiene al menos 2 productos caros
          },
        },
        {
          $project: {
            name: 1,
            productosCaros: {
              name: 1,
              price: 1,
            },
          },
        },
      ])
      .toArray();

    t.assert.snapshot(result);
  }),
);
