const router = express.Router()
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+"."+file.mimetype.split("/")[1])
    }
  })
var upload = multer({ storage:storage })
 const dashboardController = require('../controlers/dashboardControler');
 router.post('/login',dashboardController.login);
 router.post('/adduser',dashboardController.addUser);
 router.get('/users',dashboardController.getUsers);
 router.get('/admin/ingr_menu',dashboardController.getIngrMenu);
 router.get('/admin/ingredient',dashboardController.getIngredient);
 router.get('/admin/prod_menu',dashboardController.getProdMenu);
 router.post('/admin/ingr_menu/add',dashboardController.addIngrMenu);
 router.post('/admin/ingredient/add',upload.single('image'),dashboardController.addIngredient);
 router.post('/admin/prod_menu/add',dashboardController.addProdMenu);
 router.delete('/admin/ingredient/delete',dashboardController.deleteIngredient);
  module.exports = router;