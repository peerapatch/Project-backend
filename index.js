const http = require('http');
const express = require('express')
const hostname = '127.0.0.1';
const port = 3000;

const Mongoose = require('mongoose')
const app = express()
const mongoUrl ='mongodb+srv://classSchedule:classSchedule2565@cluster0.tti87.mongodb.net/sample_training?retryWrites=true&w=majority'
  const opts = { useNewUrlParser: true, useUnifiedTopology: true }

  Mongoose.connect(mongoUrl, opts)
    .then(() => {
    console.log('test');
      const port = 9000
   
      app.listen(port, () => {
        console.log(`SERVER IS RUNNING AT PORT ${port}.`)
      })
    })
    .catch((err) => {
      console.log();(err)
      process.exit(1)
    })

    app.get('/test',function(req,res){
        res.send("OK")
    })
    app.use(express.json());
    app.use(require('./apis/lecturer'))
    app.use(require('./apis/subject'))
    app.use(require('./apis/classroom'))
    app.use(require('./apis/major'))
    app.use(require('./apis/schedule'))
    app.use(require('./apis/user'))
   