
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
    //const q = "SELECT * FROM city WHERE cityName='beirut' "
    const q = "select * from cityy c INNER JOIN citydescription cd ON c.cityyName = cd.cityyName WHERE c.cityyName IN ('Beirut')"
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

app.get(`/cities/batroun`, (req,res)=>{
    const q = "SELECT * FROM city WHERE cityName='batroun' "
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/cities/jbeil`, (req,res)=>{
    const q = "SELECT * FROM city WHERE cityName='jbeil' "
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/cities/Farayya`, (req,res)=>{
    const q = "SELECT * FROM city WHERE cityName='Farayya' "
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/types/hotel`, (req,res)=>{
    const q = "SELECT * FROM city WHERE Type='hotel' "
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/types/apartment`, (req,res)=>{
    const q = "SELECT * FROM city WHERE Type='apartment' "
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/types/resorts`, (req,res)=>{
    const q = "SELECT * FROM city WHERE Type='resort' "
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/types/villas`, (req,res)=>{
    const q = "SELECT * FROM city WHERE Type='villa' "
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/description`, (req,res)=>{
    const q = "SELECT * FROM allplaces"
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get('/edit/:id', (req,res) => {
    const sql = "Select * From city Where idCity = ?";
    const id = req.params.id;
    db.query(sql,[id], (err, result)=>{
        if(err) return res.json({Error:err});
        return res.json(result);
    })
})

// app.put("/update", (req, res) => {  
//     const id = req.body.id; 
//     const Reserved = req.body.Reserved; 
//     const sql = "Update city set Reserved = ? WHERE idCity = ?";    
//     db.query(sql, [Reserved, id], (err, result) => {        
//         if(err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }  
//     })})

    app.put("/update", (req, res) => {  
        const id = req.body.id; 
        const sql = "Update city set Reserved = 'book' WHERE idCity = ?";    
        db.query(sql, [ id], (err, result) => {        
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }  
        })})
    

app.listen(8800, () => {
    console.log("connecteddd!")
})
