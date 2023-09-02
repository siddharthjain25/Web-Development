import { MongoClient, ServerApiVersion } from "mongodb";
import assert from "assert";
// Replace the placeholder with your Atlas connection string
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

const dbname = "FruitsDB";

async function run() {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
  
    // Send a ping to confirm a successful connection
    const response = await client.db(dbname).command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = await client.db(dbname);
    findDocuments(db, function() {
        client.close();
    });
};

run();

const InsertData = async function(db){
    const collection = db.collection('fruits');
    collection.insertMany([
        {
            _id: 1,
            name: "Apple",
            stock: 28
        },
        {
            _id: 2,
            name: "Peach",
            stock: 52
        },
        {
            _id: 3,
            name: "Water Melon",
            stock: 12
        },
        {
            _id: 4,
            name: "Dragon Fruit",
            stock: 20
        }
    ]);
}

const findDocuments = function(db) {
    const collection = db.collection('fruits').find({});
    const Json_data = JSON.stringify(collection);
    console.log(Json_data);
  }