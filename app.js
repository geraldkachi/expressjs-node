
// EXPRESS   ejs is a template engine

const express = require('express')
const todoController = require('./controllers/todoController')

const app  = express() 

// set up a template engine
app.set('view engine', 'ejs')

//  static file 
app.use(express.static('./public'))

// fire controllers
todoController(app)

// listen to port 
app.listen(4000)
console.log('You are listening to port 4000');

// const express = require('express')

// const app = express()

// pp.set('view engine', 'ejs')

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + `/index.html`)
// }) 
// app.get('/contact', (req, res) => {
//         res.sendFile(__dirname + '/contact.html')
//     })
// app.get('/profile/:name', (req, res) => {
//     res.render('profile')
//         // res.send(`Your requested to see a profile with the name of  ${req.params.id}`)
//     })

// app.listen(4000, () => {
//         console.log("Server started on port 4000...")
//      })