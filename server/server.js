var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  // console.log(req.body);
  var todo = new Todo({text:req.body.text});
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos',(req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});

app.listen(3000,()=>{
  console.log('started on port 3000');
});

module.exports = {app};


// // var otherTodo = new Todo({
// //   text:'hello world',
// //   completed:true,
// //   completedAt:123
// // });
// var otherTodo = new Todo({
//   text:true
// });
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//   console.log('Unable.save other todo',e);
// });
//
//
//
//
// var user = new User({
//   email:'   sarangkrishna04@gmail.com  '
// });
// user.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//   console.log('Unable..',e);
// });
