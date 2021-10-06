const express = require('express')
const User = require('../model/User.js')
const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const user = await User.find()
        res.json(user) 
    }catch(err){
        console.log(err)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const user = await User.findOne({_id: req.params.id})
        res.json(user) 
    }catch(err){
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    const userPost = new User({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    })
    try{
        const user = await userPost.save()
        res.json(user) 
    }catch(err){
        console.log(err)
    }
})

router.put('/:id', async (req, res) => {
    try{
        const userUpdate = await User.updateOne( {_id: req.params.id} ,{
            name: req.body.name,
            email: req.body.email,
            address: req.body.address
        })
        res.json(userUpdate)
    }catch(err){
        console.log(err)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const userDelete = await User.deleteOne( {_id: req.params.id})
        res.json(userDelete)
    }catch(err){
        console.log(err)
    }
})

module.exports = router