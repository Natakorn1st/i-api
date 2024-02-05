const express = require('express')
const app =express()
const PORT = process.env.PORT || 5050;
const path =require('path');
const cors = require('cors')
const logger = require('./logger')
const mongoose = require('mongoose');
const products = require('./routes/api/products');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://admin:1234@cluster0.3zvuctm.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log('connection successfully!'))
        .catch((err) => console.error(err))

app.use(cors())
// set static folder
app.use(express.static(path.join( __dirname,'public')))

app.get('/',(req,res)=>{
    res.json({msg:"hello"})
})

app.get('/',(req,res)=>{
   res.json({msg:"wol"})
})

// app.post('/api/users/add',(req,res)=>{
//     const newUser ={
//         id: uuid.v4(),
//         name:req.body.name,
//         location:req.body.location
//        }
//        if(!newUser.name || !newUser.email){
//         return res.status(404).json({msg:"please input"})
//         }     
//         res.json(users);  
// })

//init midderware
app.use(logger)
// body parse middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/api/userApi'))
app.use('/api/user', products);

app.listen(PORT,()=> console.log('Server is running ')); 