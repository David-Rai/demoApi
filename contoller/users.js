const pool=require('../database/db.js')

     //all users
const getAll=(req,res)=>{
const q='select * from todos'
pool.query(q,(err,results)=>{
    if(err){
        res.status(500).send("server problem")
    }
    res.json(results)
})
}

//getting user by id
const userById=(req,res)=>{
const id=parseInt(req.params.id)
const q='select * from todos where id=?'

pool.query(q,[id],(err,results)=>{
    if(err){
        res.status(500).send("server problem")
    }
    res.json(results)
})

}

//deleting by id
const deleteUser=(req,res)=>{
const id=parseInt(req.params.id)


//deleting the data from database
const q='delete from todos where id = ?'
 pool.query(q,[id],(err,results)=>{
    if(err){
        res.send("server problem")
    }
    res.json({
        message:"deleted",
 })
 })

}

//updating user by id
const updateUser=(req,res)=>{
const id=req.params.id
const {name,email}=req.body

const q='update todos set name=? , email = ?'
pool.query(q,[name,email],(err,results)=>{
    if(err){
        res.status(500).send("server ma problem xa")
    }
res.json(results)
})

}


//creating the user
const createUser=(req,res)=>{
const {name,email}=req.body
const q='insert into todos (name,email) values (?,?)'
pool.query(q,[name,email],(err,results)=>{
    if(err){
        res.send("server pronblbem hai")
    }
res.json(results)
})

}

//exporting the contollers
module.exports={
    getAll,
    userById,
    deleteUser,
    updateUser,
    createUser

}