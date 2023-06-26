const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;

async function apiExplorer() {
  const url = new URL('https://openapi.its.go.kr:9443/vmsInfo');

  const params = new URLSearchParams({
    apiKey: 'test',
    totalcount: '100',
    type: 'all',
    eventType: 'all',
    minX: '126.800000',
    maxX: '127.890000',
    minY: '34.900000',
    maxY: '35.100000',
    getType: 'json',
  });

  url.search = params;

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'text/xml;charset=UTF-8' },
  });

  console.log('Response code: ' + response.status);

  const text = await response.text();

  console.log(text);

  // Connect to MongoDB
  const mongoClient = new MongoClient('mongodb://localhost:27017/', {
    useUnifiedTopology: true,
  });

  try {
    // Connect to the MongoDB cluster
    await mongoClient.connect();

    // Make the appropriate DB calls
    await insertDocument(mongoClient, text);
  } catch (e) {
    console.error(e);
  } finally {
    // Close the connection to the MongoDB cluster
    await mongoClient.close();
  }
}

async function insertDocument(client, data) {
  const result = await client
    .db('mydb')
    .collection('VMScollection')
    .insertOne({ response: data });
  console.log(
    `New listing created with the following id: ${result.insertedId}`,
  );
}

apiExplorer().catch(console.error);
