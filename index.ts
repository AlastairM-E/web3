const { MongoClient } = require('mongodb');
const express = require('express');
const fs = require('fs');
const { url, dbName, collectionName } = require('./serve/db.details.ts');

const app = express();
const port = 8080;

function throwError(err) {
  if (err) throw err;
}

app.put('/addToCount', (req, res) => {
  console.log('Recieved response from addToCount');
  const client = new MongoClient(url, { useUnifiedTopology: true });

  // Use connect method to connect to the Server
  client.connect(async (err) => {
    if (err) throw err;

    const db = client.db(dbName);
    const testCollection = db.collection(collectionName);

    const counter = await testCollection.findOne({ type: 'counter' });

    await testCollection.updateOne(counter, {
      $set: { type: counter.type, count: counter.count + 1000 },
    });

    await client.close();
  });

  res.send({ req });
});

app.put('/isMinuteTokenAvailable', (req, res) => {
  console.log('Recieved response from isMinuteTokenAvailable');
  const client = new MongoClient(url, { useUnifiedTopology: true });

  // Use connect method to connect to the Server
  client.connect(async (err) => {
    if (err) throw err;

    const db = client.db(dbName);
    const testCollection = db.collection(collectionName);

    const counter = await testCollection.findOne({ type: 'counter' });
    const { count } = counter;
    if (count >= 60000) {
      const changedTotal = count - 60000;
      await testCollection.updateOne(counter, {
        $set: { type: counter.type, count: changedTotal },
      });
      await fs.writeFile('./public/count.json', '{ "showContentForMinute": true }', 'utf8', throwError);
    }

    await fs.writeFile('./public/count.json', '{ "showContentForMinute": false }', 'utf8', throwError);

    await client.close();
  });

  res.send({ req });
});

app.listen(port);
