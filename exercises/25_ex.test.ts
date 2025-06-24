import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

test(
  "devuelve la página 2 de productos (tamaño de página 5) ordenados por nombre, con el nombre del fabricante",
  withMongo(async (t, db) => {
    const products = db.collection("products");

    const page = 2;
    const pageSize = 5;

    const result = await products
      .aggregate([
        {
          $facet: {
            total: [{ $count: "count" }],
            data: [
              { $sort: { name: 1 } },
              { $skip: (page - 1) * pageSize },
              { $limit: pageSize },
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
                  _id: 0,
                  name: 1,
                  price: 1,
                  manufacturer: "$manufacturer.name",
                },
              },
            ],
          },
        },
      ])
      .toArray();

    t.assert.snapshot(result);
  }),
);
