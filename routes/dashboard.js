const router = express.Router()
const fs=require("fs");
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (!fs.existsSync('public/images')){
        fs.mkdirSync('public/images');        
      }
      cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+"."+file.mimetype.split("/")[1]);
     
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
 router.put('/updateuser',dashboardController.updateUser);
 router.get('/users',dashboardController.getUsers);
//////////////////////////////////////////////get dashboard///////////////////////////////////////////////////////////
router.get('/admin/ingr_menu',dashboardController.getIngrCategories);
router.get('/admin/ingredient',dashboardController.getIngredient);
router.get('/admin/prod_menu',dashboardController.getProdMenu);
router.get('/admin/product',dashboardController.getProducts);
router.get('/admin/wraps',dashboardController.getWraps);
//router.get('/admin/combo',dashboardController.getCombos);
//router.get('/admin/combo_menu',dashboardController.getComboMenu);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////add dashboard////////////////////////////////////////////////////////////
router.post('/admin/ingr_menu/add',dashboardController.addIngrMenu); 
router.post('/admin/ingredient/add',imgUpload.single('image'),dashboardController.addIngredient);
router.post('/admin/prod_menu/add',dashboardController.addProdMenu);
router.post('/admin/product/add',imgUpload.single('image'),dashboardController.addProduct);
router.post('/admin/wraps/add',dashboardController.addWraps);
//router.post('/admin/combo/add',imgUpload.single('image'),dashboardController.addCombo);
//router.post('/admin/combo_menu/add',dashboardController.addComboMenu);
//router.post('/admin/combo_prod/add',dashboardController.addComboProd);
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////update dashboard///////////////////////////////////////////////////////
router.put('/admin/ingr_menu/update',dashboardController.updateIngrMenu); 
router.put('/admin/ingredient/update',imgUpload.single('image'),dashboardController.updateIngredient);
router.put('/admin/prod_menu/update',dashboardController.updateProdMenu);
router.put('/admin/product/update',imgUpload.single('image'),dashboardController.updateProduct);
//router.put('/admin/combo/update',dashboardController.updateCombo);
//router.put('/admin/combo_menu/update',dashboardController.updateComboMenu);
///////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////order update/////////////////////////////////////////////////
router.put('/admin/ingr_menu/update-order',dashboardController.changeIngrCategoriesOrder); 
router.put('/admin/ingredient/update-order',dashboardController.changeIngrOrder);
router.put('/admin/prod_menu/update-order',dashboardController.changeProdCategoriesOrder); 
router.put('/admin/product/update-order',dashboardController.changeProdOrder);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
 
//////////////////////////////////////////////show hide update////////////////////////////////////////////
router.put('/admin/prod_menu/update-visibility',dashboardController.updateProdMenuVisiblity); 
router.put('/admin/product/update-visibility',dashboardController.updateProdVisiblity); 
router.put('/admin/ingr_menu/update-visibility',dashboardController.updateIngrMenuVisiblity); 
router.put('/admin/ingredient/update-visibility',dashboardController.updateIngrVisiblity); 
router.put('/admin/wraps/update',dashboardController.updateWrap);
/////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////delete dashboard////////////////////////////////////////////////////
router.delete('/admin/ingredient/delete',dashboardController.deleteIngredient);
router.delete('/admin/ingredientmenu/delete',dashboardController.deleteIngredientMenu);
router.delete('/admin/prod_menu/delete',dashboardController.deleteProdMenu);
router.delete('/admin/product/delete',dashboardController.deleteProduct);
router.delete('/admin/wraps/remove',dashboardController.removeWrap);
//router.delete('/admin/combo/delete',dashboardController.deleteCombo);
//router.delete('/admin/combo_menu/delete',dashboardController.deleteComboMenu);
//router.delete('/admin/combo_prod/delete',dashboardController.deleteComboProd);
////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post("/admin/ads/video/add",videoUpload.single("adVideo"),dashboardController.addAdVideo)
router.post("/admin/kiosk/video/add",videoUpload.single("kioskVideo"),dashboardController.addKioskVideo)
router.get('/admin/progress_monitor',dashboardController.getprogressMonitorData);
module.exports = router;
