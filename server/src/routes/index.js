const router = require('express').Router()

const authControllers = require('../controllers/authControllers')
const empresaControllers = require('../controllers/empresaControllers')
const usuarioControllers = require('../controllers/usuarioControllers')

router.post('/empresa/create', empresaControllers.creatEmpresa)
router.get('/empresa', empresaControllers.getAllEmpresa)
router.get('/empresa/:id', empresaControllers.getOneEmpresa)
router.delete('/empresa/:id', empresaControllers.deleteEmpresa)

router.post('/usuario/create',usuarioControllers.creatUsuario)
router.get('/usuario', usuarioControllers.getAllUsuario)
router.get('/usuario/:id', usuarioControllers.getOneUsuario)
router.delete('/usuario/:id', usuarioControllers.deleteUsuario)

router.post('/userlogin', authControllers.userLogin)
router.post('/empresalogin', authControllers.empresaLogin)

module.exports = router