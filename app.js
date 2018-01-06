const express = require('express');
const app = express();
const fs = require('file-system');
const bodyParser = require('body-parser');
//import {dbconnect} from '/db-calls/dbcall.js';
const dbconnect = require('./db-calls/dbcall.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));

app.get("/", function(req,res){
    fs.readFile(__dirname + '/index.html',function(err,data){
        if(!err){
            res.write(data);
        }
        res.end();
    })
})
app.post("/status/new", function(req, res){
    console.log(req);
    let status = JSON.stringify({"name": req["body"]["name"],"status": req["body"]["status"]});
    fs.writeFile(__dirname + "/posts.json", status,function(err){
            if(err)console.log(err);
        })

})

app.get("/status",function(req,res){
	fs.readFile(__dirname + '/posts.json',function(err,data){
		if(!err){
			res.send(JSON.parse(data));
		}else{
			console.log(err);
		}
	})
})

//Query parameter in a get request
app.get("/p",function(req,res){
    console.log(req);
    //res.send("tag Id is set to " + req.query.tagId + "\n test Id is set to " + req.query.testId);
    //call a different file or command
    const mydbcon = new dbconnect();
    let vCall = mydbcon.dbcon(req.query.tagId, req.query.testId);
    res.send(vCall);
})

app.listen(3000, function(err){
    if(err){
        console.log("error: ", err);
    }else{
        console.log("listening on port 3000");
    }
})