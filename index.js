import express from "express";
import cron from "node-cron";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import Data from "./models/data_model.js";
import Message from "./models/message_model.js";


const app = express();
dotenv.config()


app.use(express.json());

const port = process.env.PORT || 3000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);  

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, ()=>{
    console.log("Connected to the port 3000")
})

// For cron Job - Triggers every one hour
var task = cron.schedule('* 1 * * *', () => {     
        const newData = new Data({nameData:"Print this"});
        newData.save((err) => {
            if (err){
                console.log(err);
            }
            else{
                console.log("success")
            }
        })
});
// For triggering the cron Job
task.start();



app.get("/",(req, res) => {
    res.redirect("/home")
})

app.get("/home",(req, res) => {
    res.send("This is a Home Page")
})

app.post('/Post', function (req, res) {
    res.send('This is Post requrest')
  })


class User {
   constructor(name){
       this.name = name;
        this.message1 = {
            bot: `Hello!!${this.name}, How was food`,
            user: "Yeah!, The food was great!"
            
        },
        this.message2 = {
            bot: `Thank you ${this.name} for the response Bye!!`,
            user: "Bye!!"
        }
    }

}

const mohan = new User("Mohan");
const newPerson = new Message(mohan);
newPerson.save((err) => {
    if (err){
        console.log(err);
    }
    else{
        console.log("success")
    }
})

