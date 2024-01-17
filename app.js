const express = require('express')
const app =express()
const PORT = process.env.PORT || 5050;
const path =require('path');
const cors = require('cors')
const logger = require('./logger')
app.use(cors())
// set static folder
app.use(express.static(path.join( __dirname,'public')))

app.get('/',(req,res)=>{
    res.json({msg:"hello"})
})

//init midderware
app.use(logger)
// body parse middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/api/userApi'))


app.listen(PORT,()=> console.log('Server is running ')); 