const router = require('express').Router()

const empresaControllers = require('../controllers/empresaControllers')

router.post('/empresa/create', empresaControllers.creatEmpresa)
router.get('/empresa', empresaControllers.getAllEmpresa)

module.exports = router