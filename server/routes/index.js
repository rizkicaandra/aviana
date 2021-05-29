const router = require('express').Router()
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')
const UserController = require('../controllers/userController')
const KycController = require('../controllers/kycController')

router.post('/users/register', UserController.register)
router.post('/users/login', UserController.login)
router.use(authenticate)
router.post('/kycs/addkyc', KycController.addKyc)
router.get('/kycs/getall', KycController.getAll)
router.get('/kycs/findone/:id', KycController.getDataById)
router.get('/kycs/detailkyc/:id', KycController.getDetailKyc)
router.patch('/kycs/updateapproval/:id', authorize, KycController.updateApproval)

module.exports = router