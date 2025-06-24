import { test } from "node:test";
import { withMongo } from "./utils/withMongo.ts";

// OJO: Todavía no hemos llegado a este nivel de complejidad, pero hay que ordenar el resultado
// por manufacturer_id para que el snapshot sea correcto
test(
  "saca cuantos productos hay por cada manufacturer_id",
  withMongo(async (t, db) => {
    const products = db.collection("products");
    const result = await products.aggregate([{ $group: { _id: "$manufacturer_id", total: { $sum: 1 } } }]).toArray();

    result.sort((a, b) => a._id - b._id);

    t.assert.snapshot(result);
  }),
);
