const router = express.Router()
 const dashboardController = require('../controlers/dashboardControler');
 router.post('/login',dashboardController.login);
 router.post('/adduser',dashboardController.addUser);
 router.get('/users',dashboardController.getUsers);
 router.get('/admin/ingr_menu',dashboardController.getIngrMenu);
 router.get('/admin/ingredient',dashboardController.getIngredient);
 router.post('/admin/ingr_menu/add',dashboardController.addIngrMenu);
 router.post('/admin/ingredient/add',dashboardController.addIngredient);
 router.delete('/admin/ingredient/delete',dashboardController.deleteIngredient);
  module.exports = router;