import { MongoClient } from "mongodb";
import { uri } from "../exercises/utils/url.ts";

const client = new MongoClient(uri);

await client.connect();

const db = client.db("store");

const collection = db.collection("products")

collection.insertOne({ name: "Product 1", price: 100 });

console.log("Change stream is active. Monitoring for insert/update operations...");

