import express from 'express'
import mysql2 from 'mysql2';
//const express = require('express')
const app = express();
//const mysql2 = require('mysql2')
// const cors = require('cors')
import cors from 'cors'

import multer from 'multer'
import path from 'path'

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

const db = mysql2.createConnection({
    host: "127.0.0.1",
    user: "saradb",
    password: "SaraMySql-123",
    database: "booking",
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})




app.get("/", (req,res)=>{
    res.json("helloo")
})


app.get("/cities", (req,res)=>{
    const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy"  
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/cities/beirut`, (req,res)=>{
 const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.cityyName='beirut'"  
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

app.get(`/cities/koura`, (req,res)=>{
    const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.cityyName='Koura'"  

  //  const q = "SELECT * FROM city WHERE cityName='koura' "
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/cities/batroun`, (req,res)=>{
    const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.cityyName='batroun'"  
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/cities/jbeil`, (req,res)=>{
    const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.cityyName='jbeil'"  
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/cities/Farayya`, (req,res)=>{
    const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.cityyName='farayya'"  
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/types/hotel`, (req,res)=>{
    const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.type='hotel'"  
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/types/apartment`, (req,res)=>{
    const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.type='apartment' AND citydescription.idCityy<50"  
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/types/newApartment`, (req,res)=>{
  
 // const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.type='apartment' AND citydescription.idCityy>=50"
 const idimages = req.body.idimages; 
//  console.log(req);
 const q = "select citydescription.*, cityy.Name, images.* from citydescription join cityy on cityy.idCityy = citydescription.idCityy join images on images.idimages = citydescription.idCityy where citydescription.type='apartment' AND citydescription.idCityy>=50"

 db.query(q, (err,data)=>{
     if (err){
         console.log(err)
         console.log("error")
        }else{
            res.send(data)
             console.log(data)
            //console.log(idimages);

        }
    })
})


// app.get(`/types/newImages/:idimages`, (req,res)=>{
    
//     // const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.type='apartment' AND citydescription.idCityy>=50"
//     const idimages = req.params.idimages; 
//     const q = `select * from images where idimages = ${idimages}`;
//      db.query(q, [idimages] , (err,data)=>{
//            if (err){
//                console.log(err)
//            }else{
//                res.send(data)
//            }
//        })
//    })

app.get(`/types/resorts`, (req,res)=>{
    const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.type='resort' AND citydescription.idCityy<50"  
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})


app.get(`/types/newResorts`, (req,res)=>{
  
    // const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.type='apartment' AND citydescription.idCityy>=50"
    const idimages = req.body.idimages; 
   //  console.log(req);
    const q = "select citydescription.*, cityy.Name, images.* from citydescription join cityy on cityy.idCityy = citydescription.idCityy join images on images.idimages = citydescription.idCityy where citydescription.type='resort' AND citydescription.idCityy>=50"
   
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
            console.log("error")
           }else{
               res.send(data)
                console.log(data)
               //console.log(idimages);
   
           }
       })
   })

app.get(`/types/villas`, (req,res)=>{
    const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.type='villa'AND citydescription.idCityy<50"  
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.get(`/types/newVillas`, (req,res)=>{
  
    // const q = "select citydescription.*, cityy.Name from citydescription inner join cityy on cityy.idCityy = citydescription.idCityy where citydescription.type='apartment' AND citydescription.idCityy>=50"
    const idimages = req.body.idimages; 
   //  console.log(req);
    const q = "select citydescription.*, cityy.Name, images.* from citydescription join cityy on cityy.idCityy = citydescription.idCityy join images on images.idimages = citydescription.idCityy where citydescription.type='villa' AND citydescription.idCityy>=50"
   
    db.query(q, (err,data)=>{
        if (err){
            console.log(err)
            console.log("error")
           }else{
               res.send(data)
                console.log(data)
               //console.log(idimages);
   
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
        const idCityy = req.body.idCityy; 
        const sql = "Update citydescription set Reserved = 'book' WHERE idCityy = ?";    
        db.query(sql, [ idCityy], (err, result) => {        
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }  
        })})

        app.post('/register', (req, res) => {
            const fName = req.body.fName
            const lName = req.body.lName
            const nbr = req.body.nbr
            const email = req.body.email
            const IDnumber = req.body.IDnumber
            const passcode = req.body.passcode

            db.query('INSERT INTO users (Username, UserLastNAme, phoneNumber, email, IDnumber, passcode) VALUES(?,?,?,?,?,?)',
             [fName, lName, nbr, email, IDnumber,passcode], (err, result) =>{
                if(err) {
                    console.log(err)
                } else {
                    res.send("VALUES INSERTED")
                }
             })
        })
    
        app.post('/login', (req, res) => {
            const username = req.body.username
            const password = req.body.password

            db.query('INSERT INTO loginuser (username, password) VALUES(?,?)',
             [username,password], (err, result) =>{
                if(err) {
                    console.log(err)
                } else {
                    res.send("VALUES INSERTED")
                }
             })
        })

        app.post('/sigin', (req, res) => {
            const username = req.body.username
            const password = req.body.password

            db.query('SELECT * FROM loginuser WHERE username=? AND password=?',
             [username,password], (err, result) =>{
                if(err) {
                    res.send({err: err})
                } else {
                    if(result.length>0) {
                        res.send(result);
                    } else {
                        res.send({message: "User not found"})
                    }
                    
                }
             })
        })



        app.post('/addprp', (req, res) => {
            const rooms = req.body.rooms;
            const location = req.body.location;
            const review = req.body.review;
            const price = req.body.price;
            const desc = req.body.desc;
            const moredesc = req.body.moredesc;
            const view = req.body.view;
            const cityname = req.body.cityname;
            const types = req.body.types;

            db.query('INSERT INTO citydescription (roomsNumber, Location, Review, Price, `Desc`, MoreDesc, `View` , cityyName, type) VALUES(?,?,?,?,?,?,?,?,?)',
             [rooms,location,review,price,desc,moredesc,view,cityname,types], (err, result) =>{
                if(err) {
                    console.log(err);
                } else {
                    res.send("VALUES INSERTED");
                };
             });
        });

        app.post('/addImage',upload.single('image'), (req, res) => {
            const image = req.file.filename;
            const sql = "INSERT INTO images (image) VALUES (?) " ;
            db.query(sql, [image], (err, result)=>{
                if(err) return res.json({Message: "Error"});
                return res.json({Status: "Success"});
            })
        })

        // app.post('/addImage', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'file2', maxCount: 1 }]), (req, res) => {
        //     const image = req.file.filename;
        //     const image2 = req.file2.filename;
        //     const sql = "INSERT INTO images (image,image2) VALUES (?,?) " ;
        //         db.query(sql, [image,image2], (err, result)=>{
        //         if(err) return res.json({Message: "Error"});
        //         return res.json({Status: "Success"});
        //     })
        // })

        

        //     db.query('INSERT INTO cityy (cityyNames,types,Name) VALUES(?,?,?)',
        //      [cityname,types,mainName], (err, result) =>{
        //         if(err) {
        //             console.log(err)
        //         } else {
        //             res.send("VALUES INSERTED")
        //         }
        //      })
        // })

        app.post('/addprpp', (req, res) => {
            const cityname = req.body.cityname
            const types = req.body.types
            const mainName = req.body.mainName
            db.query('INSERT INTO cityy (cityyNames,types,Name) VALUES(?,?,?)',
             [cityname,types,mainName], (err, result) =>{
                if(err) {
                    console.log(err)
                } else {
                    res.send("VALUES INSERTED")
                }
             })
        })

        app.get(`/user`, (req,res)=>{
            const q = "select * from users"  
            db.query(q, (err,data)=>{
                if (err){
                    console.log(err)
                }else{
                    res.send(data)
                }
            })
        })

        app.get(`/owner`, (req,res)=>{
            const q = "select Username from users ORDER BY id DESC LIMIT 1"  
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
