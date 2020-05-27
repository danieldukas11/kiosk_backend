const router = express.Router()
const userKioskController = require('../controlers/userKioskControler');
router.get('/menu',userKioskController.getMenu);
//router.get('/specials',userKioskController.getSpecials);
router.get('/kiosk_data', userKioskController.getKioskData)
router.post('/login', userKioskController.login)
router.post('/loginbypin', userKioskController.loginByPin)
module.exports = router;