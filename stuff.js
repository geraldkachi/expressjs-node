///////////////////////////////////////////

// EXPRESS

const express = require('express')

const app = express()

pp.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.sendFile(__dirname + `/index.html`)
}) 
app.get('/contact', (req, res) => {
        res.sendFile(__dirname + '/contact.html')
    })
app.get('/profile/:name', (req, res) => {
    res.render('profile')
        // res.send(`Your requested to see a profile with the name of  ${req.params.id}`)
    })

app.listen(4000, () => {
        console.log("Server started on port 4000...")
     })


////////////////////////////////////////////////////////////////
// const express = require('express')

// const app = express()


// app.get("/", (req, res) => {
//     res.send('Thisn his the HzzaaaaRDFzome Page')
// }) 
// app.get('/contact', (req, res) => {
//         res.send('Hello kachi this is conact')
//     })
// app.get('/profile/:id', (req, res) => {
//         res.send(`Your requested to see a profile with the id of  ${req.params.id}`)
//     })

// app.listen(4000, () => {
//         console.log("Server started on port 4000...")
//      })


// Serving HTML pages  in node

// var http = require('http')
// var fs = require('fs')

// const server = http.createServer((req, res)=> {
//     console.log("require was made: ", + req.url);
//     res.writeHead( 200, {"Content-Type": "text/html"})
//     var myReadStream = fs.createReadStream(__dirname + "/index.html", 'utf8')
//     myReadStream.pipe(res)
// })
// server.listen(4000, '127.0.0.1')
// console.log('yo dawgs now listening to port 4000');



// var http = require('http')
// var fs = require('fs')

// var myReadStream = fs.createReadStream(__dirname + "/readMe.txt")

// myReadStream.on('data', function (chunk){
//     console.log('nameChucnk received');
//     console.log(chunk);
// })
///////////////////////////////////////////

// For Node Only 
// const http = require("http")

// const server = http.createServer((req, res)=> {
//     console.log("require was made: ", + req.url);
//     res.writeHead( 200, {"Content-Type": "text/plain"})
//         res.end("Hey ninjas")
// })


// server.listen(4000, '127.0.0.1')

// console.log("Listening on port 4000...");




// For Node Only 
// const http = require("http")

// const server = http.createServer((req, res)=> {
//     console.log("require was made: ", + req.url);
//     res.writeHead( 200, {"Content-Type": "text/plain"})
//         res.end("Hey ninjas")
// })


// server.listen(4000, '127.0.0.1')

// console.log("Listening on port 4000...");



// var events = require("events")

// var myEmitter = new events.EventEmitter()

// myEmitter.on('someEvents', function(msg){
//     console.log(msg);
// })

// myEmitter.emit('someEvents', 'The evenst was emittex')


// module patterns
// var stuff =  require('./stuff')

// console.log(stuff.counter(["kachi", "kris", "dan"]));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi, 5));


// function declaration
// sayHi(5)
// function sayHi(x) {
//     console.log(x+3);
// }
// musa(3)
// let musa = function (x) {
//     console.log(x+3);
// }

// let time = 0
// let timer = setInterval(() => {
//     time += 2
//     console.log("3 seconds have passed");
// }, 2000);


// For using express ///////////////////////////////////////////////////
// const express = require('express')

// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello kachi')
// })

// app.listen(3000, () => {
//     console.log("Server started on port 3000...");
// })


// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//   },

////////////////////////////////////////////////////
// module patterns
// var counter = function (arr) {
//     return "There are " + arr.lenght + " elements in this.array";
//   };
  
//   var adder  = function (a,b) {
//       return `The Sum of the 2 numbers os ${a+b}`
//   }
//   var pi = 3.142
  
//   module.exports = {
//     counter : counter,
//     adder : adder,
//     pi : pi
//   }
