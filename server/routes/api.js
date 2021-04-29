const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const Blog = require('../models/blogschema');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser= require('body-parser');
//const multer = require('multer');


// File upload settings  
//const PATH = './uploads';

const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}))

// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, PATH);
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// });

// let upload = multer({
//   storage: storage
// });

// Express settings
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

router.post('/create',(req, res,next) => {
  var newblog = new Blog({
    title:req.body.title,
    desc:req.body.desc
  });
  newblog.save((err,blog) => {
    if(err)
      res.status(500).json({errmsg:err});
      res.status(200).json({msg:blog});
  });

});
router.get('/read',(req, res,next) =>{
  Blog.find({},(err,blogs)=>{
    if(err)
      res.status(500).json({errmsg:err});
      res.status(200).json({msg:blogs});
  });

 });
 router.put('/update',(req, res,next) =>{
   Blog.findById(req.body._id,(err,blog)=>{
     if(err)
      res.status(500).json({errmsg:err});
      blog.title = req.body.title;
      blog.desc = req.body.desc;
      blog.save((err,blog) =>{
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:blog});

      });
   })
  
 });
 router.delete('/delete/:id',(req, res,next) =>{
  Blog.findOneAndRemove({_id:req.params.id},(err,blog) =>{
    if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:blog});
  })
 
 });

// POST File
// app.post('/api/upload', upload.single('image'), function (req, res) {
//   if (!req.file) {
//     console.log("No file is available!");
//     return res.send({
//       success: false
//     });

//   } else {
//     console.log('File is available!');
//     return res.send({
//       success: true
//     })
//   }
// });
//const url = "mongodb://localhost:27017/";
 const db = "mongodb://localhost:27017/eventsdb";
// const db1 = "mongodb://localhost:27017/blogsdb";

mongoose.set('useFindAndModify', false);

mongoose.connect(db, { useFindAndModify: false })
// mongoose.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("eventsdb");
//   dbo.collection("users").find({}).toArray(function(err, result) {
//     if (err) throw err;
//    // console.log(result);
//     console.log("Connected to uers");
//     db.close();
//   });
// });



mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb users')      
    }
});
//mongoose.connect(db1, {useMongoClient:true});
function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}
router.get('/',(req,res)=>{
    res.send("From api route");
})  
router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
        let payload = {subject: registeredUser._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    })
  })

  router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
          res.status(401).send('Invalid Email')
        } else 
        if ( user.password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      }
    })
  })
  router.get('/events', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })
  
  router.get('/special',verifyToken,(req, res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })


module.exports = router
