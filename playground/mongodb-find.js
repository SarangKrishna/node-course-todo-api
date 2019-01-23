// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //IT IS SAME AS THE ABOVE REQUIRE CODE

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if (err) {
    return console.log('Unable to connect to the Mongodb server');
  }
  console.log('Connected to the MongoDB server');
  const db = client.db('Users');
  // db.collection('Users').find({_id:new ObjectID('5c4802614171824772df88b2')}).toArray().then((docs)=>{
  //   console.log('Users');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch User',err);
  // });


  db.collection('Users').find().count().then((count)=>{
    console.log(`number of documents is ${count}`);
    // console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch User',err);
  });


  db.collection('Users').find({name:'Sruthi'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  });
  client.close();
});
