const router = express.Router()
const fs=require("fs");
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
      }
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+"."+file.mimetype.split("/")[1])
    }
  })
  var storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
      if (!fs.existsSync('public/videos')){
        fs.mkdirSync('public/videos');
      }
      cb(null, 'public/videos')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+"."+file.mimetype.split("/")[1])
    }
  })
let imgUpload = multer({ storage:storage });
let videoUpload=multer({ storage:storage2})
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
 router.post('/admin/ingredient/add',imgUpload.single('image'),dashboardController.addIngredient);
 router.post('/admin/prod_menu/add',dashboardController.addProdMenu);
 router.post('/admin/product/add',imgUpload.single('image'),dashboardController.addProduct);
 router.post('/admin/combo/add',imgUpload.single('image'),dashboardController.addCombo);
 router.post('/admin/combo_menu/add',dashboardController.addComboMenu);
 router.post('/admin/combo_prod/add',dashboardController.addComboProd);

 router.put('/admin/ingr_menu/update',dashboardController.updateIngrMenu); 
 router.put('/admin/ingredient/update',dashboardController.updateIngredient);
 router.put('/admin/prod_menu/update',dashboardController.updateProdMenu);
 router.put('/admin/product/update',dashboardController.updateProduct);
 router.put('/admin/combo/update',dashboardController.updateCombo);
 router.put('/admin/combo_menu/update',dashboardController.updateComboMenu);
 router.put('/admin/combo_prod/update',dashboardController.updateComboProd);


 router.delete('/admin/ingredient/delete',dashboardController.deleteIngredient);
 router.delete('/admin/ingredientmenu/delete',dashboardController.deleteIngredientMenu);
 router.delete('/admin/prod_menu/delete',dashboardController.deleteProdMenu);
 router.delete('/admin/product/delete',dashboardController.deleteProduct);
 router.delete('/admin/combo/delete',dashboardController.deleteCombo);
 router.delete('/admin/combo_menu/delete',dashboardController.deleteComboMenu);
 router.delete('/admin/combo_prod/delete',dashboardController.deleteComboProd);

 router.post("/admin/ads/video/add",videoUpload.single("adVideo"),dashboardController.addAdVideo)
  module.exports = router;