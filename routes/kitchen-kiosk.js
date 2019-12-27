const router = express.Router()
const kitchenKioskControler = require('../controlers/kitchenKioskControler');
router.post('/login', kitchenKioskControler.login)