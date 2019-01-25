const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findOneAndRemove({_id:'5c49bb34c72b325f27ebb412'}).then((todo)=>{
  console.log(todo);
});


// Todo.findByIdAndRemove('5c49ba03c72b325f27ebb191').then((todo)=>{
//   console.log(todo);
// });
