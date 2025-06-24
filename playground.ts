import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/store");

await client.connect();

const db = client.db("store");

await client.close();
