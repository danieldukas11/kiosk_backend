const router = express.Router()
const payControler = require('../controlers/payControler');
router.post('/check', payControler.checkCode)
module.exports = router;