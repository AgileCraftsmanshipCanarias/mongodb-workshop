import { MongoClient } from "mongodb";
import { uri } from "../exercises/utils/url.ts";

const client = new MongoClient(uri);

await client.connect();

const db = client.db("store");

const collection = db.collection("products")

// Create a change stream to monitor insert and update operations
const changeStream = collection.watch([
  {
    $match: {
      operationType: { $in: ["insert", "update", "replace"] }
    }
  }
]);

// Listen for changes
changeStream.on("change", (change) => {
  console.log("Operation type:", change.operationType);
  
  // Handle different operation types
  if (change.operationType === "insert") {
    console.log("Document inserted:", change.fullDocument);
  } else if (change.operationType === "update") {
    console.log("Document updated:", change.fullDocument);
    console.log("Updated fields:", change.updateDescription?.updatedFields);
  } else if (change.operationType === "replace") {
    console.log("Document replaced:", change.fullDocument);
  }
});

console.log("Change stream is active. Monitoring for insert/update operations...");

// Keep the connection alive to monitor changes
// Comment out the client.close() line below to keep monitoring
// await client.close();
