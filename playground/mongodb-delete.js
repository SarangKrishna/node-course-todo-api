// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //IT IS SAME AS THE ABOVE REQUIRE CODE

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if (err) {
    return console.log('Unable to connect to the Mongodb server');
  }
  console.log('Connected to the MongoDB server');
  const db = client.db('Users');
  //DELETEMANY()
  // db.collection('Users').deleteMany({name:'shiva'}).then((result)=>{
  //   console.log(result);
  // });
  //DELETEONE()
  // db.collection('Users').deleteOne({name:'shafeek'}).then((result)=>{
  //   console.log(result);
  // });
  //FINDONEANDDELETE()
  // db.collection('Users').findOneAndDelete({age:24}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name:'Sarang'});

  db.collection('Users').findOneAndDelete({_id:new ObjectID('5c47fed49a9ff746a36e9e2b')}).then((result)=>{
    console.log(result);
  });
  client.close();
});
