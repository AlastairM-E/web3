const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  console.log(collection);
  client.close();
});
