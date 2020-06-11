const { MongoClient } = require('mongodb');
const { url, dbName, collectionName } = require('./db.details');

const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(async (err) => {
  if (err) throw err;

  const db = client.db(dbName);
  const testCollection = db.collection(collectionName);

  const findCount = () => testCollection.find({ count: 1, accumulator: 1 });
  const { cmd } = findCount();
  const { query } = cmd;

  console.log({ query });

  await testCollection.updateOne(query,
    {
      $set: {
        count: query.count + query.accumulator,
        accumulator: query.accumulator,
      },
    });
  await client.close();
});
