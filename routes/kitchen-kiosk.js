const router = express.Router()

const kitchenKioskControler = require('../controlers/kitchenKioskControler');
router.post('/login', kitchenKioskControler.login);
router.get('/get_orders/:user_id',kitchenKioskControler.getUserOrders);
router.get('/get_orders/',kitchenKioskControler.getAllOrders);
router.get('/get-orders-num/',kitchenKioskControler.getOrdersNum);
module.exports = router;
