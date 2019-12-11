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
 router.get('/admin/product',dashboardController.getProducts);
 router.get('/admin/combo',dashboardController.getCombos);
 router.get('/admin/combo_menu',dashboardController.getComboMenu);

 router.post('/admin/ingr_menu/add',dashboardController.addIngrMenu); 
 router.post('/admin/ingredient/add',upload.single('image'),dashboardController.addIngredient);
 router.post('/admin/prod_menu/add',dashboardController.addProdMenu);
 router.post('/admin/product/add',upload.single('image'),dashboardController.addProduct);
 router.post('/admin/combo/add',upload.single('image'),dashboardController.addCombo);
 router.post('/admin/combo_menu/add',dashboardController.addComboMenu);
 router.post('/admin/combo_prod/add',dashboardController.addComboProd);

 router.delete('/admin/ingredient/delete',dashboardController.deleteIngredient);
 router.delete('/admin/ingredientmenu/delete',dashboardController.deleteIngredientMenu);
 router.delete('/admin/combo_prod/delete',dashboardController.deleteComboProd);
  module.exports = router;