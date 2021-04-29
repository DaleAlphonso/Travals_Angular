const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const multer = require("multer");
//const path = require('path');

const api = require('./routes/api');
const port = 3000;

const app = express();
// const storage = multer.diskStorage({
//     desination:'./uploads/',
//     filename:function(req,file,cb){
//         cb(null,Date.now()+'.'+file.mimetype.split('/')[1])
//     }
// })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        console.log("aha " + file.originalname);
        cb(null, file.originalname)
    }
})

const upload = multer({storage:storage})

app.use(cors());

app.post('/',upload.single('file'),(req,res) => {})



app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());

app.use('/api', api);
app.get('/',(req,res)=>{
    res.send("Hello from server")
})
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

//var upload = multer({ storage: storage });
app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});