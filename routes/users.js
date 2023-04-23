const {Router} = require('express')
const { usersGet, usersPost, usersPut, usersPatch, usersDelete } = require('../controllers/users')
const route = Router()

route.get('/', usersGet)
route.post('/', usersPost)
route.put('/:id/:name', usersPut)
route.patch('/', usersPatch)
route.delete('/', usersDelete)



module.exports = route