const router = express.Router()
 const userKioskController = require('../controlers/userKioskControler');
 router.get('/menu',userKioskController.getMenu);
 router.get('/specials',userKioskController.getSpecials);
  module.exports = router;