const router = express.Router()
const userModel=require("../models/user");
const kitchenKioskControler = require('../controlers/kitchenKioskControler');
router.post('/login', kitchenKioskControler.login)
module.exports = router;