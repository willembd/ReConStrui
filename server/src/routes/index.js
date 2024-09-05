const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware');

const authControllers = require('../controllers/authControllers')
const empresaControllers = require('../controllers/empresaControllers')
const usuarioControllers = require('../controllers/usuarioControllers')
const produtoControllers = require('../controllers/produtoControllers')

router.post('/empresa/create', authMiddleware, empresaControllers.creatEmpresa)
router.get('/empresa', authMiddleware, empresaControllers.getAllEmpresa)
router.get('/empresa/:id', authMiddleware, empresaControllers.getOneEmpresa)
router.delete('/empresa/:id', authMiddleware, empresaControllers.deleteEmpresa)

router.post('/usuario/create',authMiddleware, usuarioControllers.creatUsuario)
router.get('/usuario', authMiddleware, usuarioControllers.getAllUsuario)
router.get('/usuario/:id', authMiddleware, usuarioControllers.getOneUsuario)
router.delete('/usuario/:id', authMiddleware, usuarioControllers.deleteUsuario)

router.post('/userlogin', authControllers.userLogin)
router.post('/empresalogin', authControllers.empresaLogin)

router.post('/produtos/create', authMiddleware, produtoControllers.creatProduto)
router.get('/produtos', authMiddleware, produtoControllers.getAllProduto)



module.exports = router