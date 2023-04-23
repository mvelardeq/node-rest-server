const {response, request} = require('express')

const usersGet = (req = request,res=response)=>{

    const query = req.query
    
    res.json({
        msg: 'get api from controller',
        query
    })
}
const usersPost = (req,res=response)=>{

    const body = req.body
    
    res.json({
        msg: 'post api from controller',
        body
    })
}
const usersPut = (req=request,res=response)=>{
    
    const {id,name} = req.params
    
    res.json({
        msg: 'put api from controller',
        id,
        name
    })
}
const usersPatch = (req,res=response)=>{
    
    res.json({
        msg: 'patch api from controller'
    })
}
const usersDelete = (req,res=response)=>{
    
    res.json({
        msg: 'delete api from controller'
    })
}

module.exports={
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}