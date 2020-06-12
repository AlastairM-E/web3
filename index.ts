const { MongoClient } = require('mongodb');
const express = require('express');
const { url, dbName, collectionName } = require('./server/db.details.ts');

const app = express();
const port = 8080;


app.put('/addToCount', (req, res) => {
  console.log('Recived response');
  const client = new MongoClient(url, { useUnifiedTopology: true });

  // Use connect method to connect to the Server
  client.connect(async (err) => {
    if (err) throw err;

    const db = client.db(dbName);
    const testCollection = db.collection(collectionName);
    const counter = testCollection.findOne({ type: 'counter' });

    await testCollection.updateOne(counter, { count: counter + 1000 });
    await client.close();
  });

  res.send({ req });
});

app.listen(port);
