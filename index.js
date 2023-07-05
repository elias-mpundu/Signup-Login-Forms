const express = require('express')
const hbs = require('hbs')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = 4000



app.use(express.json())

app.set('view engine', 'hbs')


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render(__dirname + '/templates/login')
})

// app.post('/login', async (req, res) => {

// })

// app.get('/signup', (req, res) => {
//   res.render('signup')
// })

// app.post('/signup', (req, res) => {

//   const data = {
//     firstName: req.body.fName,
//     lastName: req.body.lName,
//     email: req.body.EID,
//     username: req.body.UID,
//     password: req.body.PID
//   }
  
//   function storage(data) {
//     collection.insertMany([data])
//   }

//   res.render('home')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})