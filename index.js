const express = require('express')
const hbs = require('hbs')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = 4000



// app.use(express.json())

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'hbs')




app.get('/', (req, res) => {
  res.render(__dirname + '/templates/login')
})

// app.post('/login', async (req, res) => {

// })

app.get('/signup', (req, res) => {
  res.render(__dirname + '/templates/signup')
})

app.post('/signup', (req, res) => {

  const data = {
    firstName: req.body.fName,
    lastName: req.body.lName,
    email: req.body.EID,
    username: req.body.UID,
    password: req.body.PID
  }
  
  function storage(data) {
    collection.insertMany([data])
  }

  res.render(__dirname + '/templates/home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})