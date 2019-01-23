// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //IT IS SAME AS THE ABOVE REQUIRE CODE

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if (err) {
    return console.log('Unable to connect to the Mongodb server');
  }
  console.log('Connected to the MongoDB server');
  const db = client.db('Users');
  db.collection('Users').findOneAndUpdate(
    {_id:new ObjectID('5c4826f7c72b325f27ea89fd')},
    {$set:{name:'shivakumar p'},$inc:{age:1}},
    {returnOriginal:true }
  ).then((result)=>{
    console.log(result);
  });
  client.close();
});
