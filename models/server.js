
const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3000
        this.usersPath = '/api/users'

        //MIddlewares
        this.middlewares()

        //Routes of my app
        this.routes()
    }

    middlewares(){

        //Read Json in request
        this.app.use(express.json())

        //CORS
        this.app.use(cors())

        //Public directory
        this.app.use( express.static('public') )
    }

    routes(){
        this.app.use(this.usersPath,require('../routes/users'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Running in port ${this.port}`)
        })
    }

}

module.exports = Server
