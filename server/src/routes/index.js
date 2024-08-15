const router = require('express').Router()

const empresaControllers = require('../controllers/empresaControllers')
const usuarioControllers = require('../controllers/usuarioControllers')

router.post('/empresa/create', empresaControllers.creatEmpresa)
router.get('/empresa', empresaControllers.getAllEmpresa)

router.post('/usuario/create',usuarioControllers.creatUsuario)
router.get('/usuario', usuarioControllers.getAllUsuario)

module.exports = router