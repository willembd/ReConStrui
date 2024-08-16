const router = require('express').Router()

const authControllers = require('../controllers/authControllers')
const empresaControllers = require('../controllers/empresaControllers')
const usuarioControllers = require('../controllers/usuarioControllers')

router.post('/empresa/create', empresaControllers.creatEmpresa)
router.get('/empresa', empresaControllers.getAllEmpresa)

router.post('/usuario/create',usuarioControllers.creatUsuario)
router.get('/usuario', usuarioControllers.getAllUsuario)

router.post('/userlogin', authControllers.userLogin)
router.post('/empresalogin', authControllers.empresaLogin)

module.exports = router