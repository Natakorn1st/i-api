const express = require('express')
const router = express.Router();
const users = require('../../user')
const uuid = require('uuid')
const mongoose = require('mongoose');



// api get all users
router.get('',(req,res)=>{
    res.json(users)
})

//get single users
router.get('/:id',(req,res)=>{
    let found = users.some(user=>user.id === parseInt(req.params.id));
    if(found){
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({msg :`no user with the id of ${req.params.id}`})
    }
})


// Create User
        // router.post('/',(req,res)=>{
        //     res.send(req.body)
        // })
//New user
router.post('/',(req,res)=>{
   const newUser ={
    id: uuid.v4(),
    name:req.body.name,
    email:req.body.email
   }
   if(!newUser.name || !newUser.email){
        return res.status(404).json({msg:"please input"})
   }

   users.push(newUser);
   res.json(users);
})




// Update User
router.put('/:id',(req,res)=>{
    let found = users.some(user=>user.id === parseInt(req.params.id));
    if(found){
       const updUser = req.body;
       users.forEach(user => {
        if(user.id===parseInt(req.params.id)){
            user.name = updUser.name ? updUser.name : user.name;
            user.email = updUser.email ? updUser.email : user.email;

            res.json({msg:"User Update",user})
        }
       })
    }else{
        res.status(400).json({msg :`no user with the id of ${req.params.id}`})
    }
})


//Delete User
router.delete('/:id',(req,res)=>{
    let found = users.some(user=>user.id === parseInt(req.params.id));
    if (found) {
       
        res.json({
            msg: 'Member deleted',
            users: users.filter(user => user.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
    }
})


module.exports = router;