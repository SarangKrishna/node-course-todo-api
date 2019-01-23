// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //IT IS SAME AS THE ABOVE REQUIRE CODE
var obj = new ObjectID;
console.log(obj);

// var user = {name:'Sarang',age:23};  //ES6 DESTRUCTURING
// var{name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if (err) {
    return console.log('Unable to connect to the Mongodb server');
  }
  console.log('Connected to the MongoDB server');

  // db.collection('Todos').insertOne({
  //   text:'some thing to do',
  //   completed:false
  // },(err, result)=>{
  //   if (err) {
  //     return console.log('Unable to connect to TodoApp',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // // });

  // const db = client.db('Users')
  // db.collection('Users').insertOne({
  //   name:'Sarang',
  //   age:23,
  //   location:'kerala,India'
  // },(err, result)=>{
  //   if (err) {
  //     return console.log('Unable to connect to Users',err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  // });

  client.close();
});
