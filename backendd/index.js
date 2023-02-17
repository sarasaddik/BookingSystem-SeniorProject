
const express = require('express')
const app = express();
const mysql2 = require('mysql2')
const cors = require('cors')

app.use(express.json());
app.use(cors());

const db = mysql2.createConnection({
    host: "127.0.0.1",
    user: "saradb",
    password: "SaraMySql-123",
    database: "booking",
});


app.get("/", (req,res)=>{
    res.json("helloo")
})


app.get("/cities", (req,res)=>{
    const q = "SELECT * FROM city"
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/cities/beirut`, (req,res)=>{
    const q = "SELECT * FROM city WHERE cityName='beirut' "
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})
app.get(`/cities/koura`, (req,res)=>{
    const q = "SELECT * FROM city WHERE cityName='koura' "
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})




app.listen(8800, () => {
    console.log("connecteddd!")
})
