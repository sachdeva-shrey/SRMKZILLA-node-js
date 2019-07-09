const express= require('express');
const bodyParser = require('body-parser');
const app= express();
const fs= require('fs');

app.use(bodyParser.json());


app.get("/read", function(req, res){
    fs.readFile("index.html", "utf-8", function(err, data){
        if(err){
            console.log(err);
            res.status(500).send("Sorry! Couldn't read file.");
        }
        else{
            res.send(data);
        }
    });
});

app.post("/write", function(req, res){
    const message = req.body.message;
    fs.writeFile("index.html", message, function(err){
        if(err){
            console.log(err);
            res.status(500).send("Sorry! Couldn't write file.");
        }
        else{
            res.send("Your message: " + message + " has been saved.");
        }
        
        });
    });


app.listen(4000);
