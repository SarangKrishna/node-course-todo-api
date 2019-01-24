const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c495bef05e7a5de6a5946f711';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({_id:id}).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({_id:id}).then((todo)=>{
//   console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if (!todo) {
//     return console.log('ID not found.');
//   }
//   console.log('Todo by Id',todo);
// }).catch((e)=>console.log(e));

User.findById('5c4846f46e270fc3522a44e2').then((user)=>{
  if (!user) {
    return console.log('Unable to find user.');
  }
  console.log(JSON.stringify(user,undefined,2));
},(e)=>{
  console.log(e);
});
