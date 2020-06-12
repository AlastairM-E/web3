const { MongoClient } = require('mongodb');
const express = require('express');
const { url, dbName, collectionName } = require('./server/db.details.ts');

const app = express();
const port = 8080;

app.put('/updateCount', (req, res) => {
  console.log('This is new');
  const client = new MongoClient(url, { useUnifiedTopology: true });

  // Use connect method to connect to the Server
  client.connect(async (err) => {
    if (err) throw err;

    const db = client.db(dbName);
    const testCollection = db.collection(collectionName);
    const findCount = await testCollection.findOne({ accumulator: 1 });

    const { count, accumulator } = findCount;

    await testCollection.updateOne(findCount,
      {
        $set: {
          count: count + accumulator,
          accumulator,
        },
      });
    await client.close();
  });

  res.send('hello world');
});

app.listen(port);
