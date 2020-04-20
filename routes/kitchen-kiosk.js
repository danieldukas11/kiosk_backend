const router = express.Router()

const kitchenKioskControler = require('../controlers/kitchenKioskControler');
router.post('/login', kitchenKioskControler.login)
router.get('/get_orders/:user_id',kitchenKioskControler.getOrders)
module.exports = router;