const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');

const User = require('./mongodb');

const app = express();
const port = 4000;

app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render(__dirname + '/templates/main')
})

app.post('', (req, res) => {
  
})

app.get('/login', (req, res) => {
  res.render(__dirname + '/templates/login')
})

app.post('/login', async (req, res) => {

  const uname = req.body.UID;
  const pword = req.body.password;

  const userUID = await User.findOne({username: uname})

  if(userUID === null) {
    res.send("user does not exist")
  } else  {
    console.log()
  }
  
  // if(User.username === uname && User.password === pword){
  //   res.render(__dirname + '/templates/home')
  // } else {
  //   res.send("wrong inputs")
  // }
})

app.get('', (req, res) => {

})

app.post('', (req, res) => {

})


app.get('/signup', (req, res) => {
  res.render(__dirname + '/templates/signup')
})

app.post('/signup', async (req, res) => {

  const userData = new User({
    firstName: req.body.fName,
    lastName: req.body.lName,
    email: req.body.EID,
    username: req.body.UID,
    password: req.body.PID
  });

  const user = await User.findOne({email: userData.email})

  if(user === null) {
    User.insertMany([userData])
    res.render(__dirname + '/templates/login')
  }
  else {
    res.send("user already exists")
  };
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})