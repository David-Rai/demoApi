const express=require('express')
const router=express.Router()   
const {createUser,getAll,userById,deleteUser,updateUser}=require('../contoller/users.js')

//getting all users
router.get('/',getAll)

//cerating the users
router.post('/new',createUser)

//getting user by id
router.get('/:id',userById)

//deleting by id
router.delete('/:id',deleteUser)

//updating user by id
router.put('/:id',updateUser)


module.exports=router