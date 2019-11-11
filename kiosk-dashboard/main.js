(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-wrapper\">\n    <div class=\"sidebar\">\n        <div class=\"nav\" *ngFor='let nav of menu'  [routerLink]=\"nav?.link\"><i [class]=\"nav?.icon\" ></i> {{nav.title}}</div>\n        <div class=\"nav\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Log Out</div>\n    </div>\n    <div class=\"route\">\n            <router-outlet></router-outlet>\n    </div>\n   \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/product-management/product-management.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/product-management/product-management.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group dynamicHeight class=\"wrapper\">\n    <mat-tab label=\"Ingredients\">\n        <button class=\"add_menu\" (click)=\"dialogOpened=true;dialogType='Ingredient Menu'\">Add Ingredient Menu</button>\n            <div class=\"no_ingr\" *ngIf='!ingr_menus?.length'>No Ingredient Menu Yet</div>\n        <mat-accordion *ngIf='ingr_menus&&ingr_menus.length'>            \n            <mat-expansion-panel *ngFor=\"let ingr_menu of ingr_menus\" >\n                <mat-expansion-panel-header>\n                    <mat-panel-title class=\"menu_title\">\n                        {{ingr_menu.title}}\n                    </mat-panel-title>                   \n              </mat-expansion-panel-header>\n              <div class=\"body\">\n                    <button class=\"add_ingr\" (click)=\"dialogOpened=true;dialogType='Ingredient'; ingredient.ingredient_ids=ingr_menu._id\">Add Ingredient</button>\n                    <div class=\"no_ingr_t\" *ngIf='!getIngrByMenu(ingr_menu._id)?.length'>No Ingredients Yet</div>\n                    <table class=\"ingr_table\" cellspacing=\"0\" *ngIf=\"getIngrByMenu(ingr_menu._id)&&getIngrByMenu(ingr_menu._id).length\">\n                        <thead>\n                            <tr>\n                                <th>Ingredient Image</th>\n                                <th>Ingredient Title</th>\n                                <th>Ingredient Light Price</th>\n                                <th>Ingredient Price</th>\n                                <th>Ingredient Double Price</th>\n                                <th></th>\n                                <th></th>\n                            </tr>\n                        </thead>\n                        <tr *ngFor=\"let ingr of getIngrByMenu(ingr_menu._id)\">\n                            <td><img [src]=\"imgurl+'/'+ingr.image\" alt=\"\" style=\"width:50px;height:50px; object-fit: contain\"></td>\n                            <td>{{ingr.title}}</td>\n                            <td>$ {{ingr.light_price}}</td>\n                            <td>$ {{ingr.price}}</td>\n                            <td>$ {{ingr.double_price}}</td>\n                            <td><i class=\"far fa-edit\" style=\"color:#F2AC21 \"></i></td>\n                            <td  (click)=\"deleteIngredient(ingr._id)\"><i class=\"fas fa-trash\" style=\"color:red\"></i></td>\n                        </tr>\n                    </table>\n              </div>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </mat-tab>\n    <mat-tab label=\"Products\">    \n            <button class=\"add_menu\" (click)=\"dialogOpened=true;dialogType='Product Menu'\">Add Product Menu</button> \n            <div class=\"no_ingr\" *ngIf='!prod_menus?.length'>No Product Menu Yet</div>\n            <mat-accordion *ngIf='prod_menus&&prod_menus.length'>            \n                <mat-expansion-panel *ngFor=\"let prod_menu of prod_menus\" >\n                    <mat-expansion-panel-header>\n                        <mat-panel-title class=\"menu_title\">\n                            {{prod_menu.title}}\n                        </mat-panel-title>                   \n                  </mat-expansion-panel-header>\n                  <div class=\"body\">\n                        <button class=\"add_ingr\" (click)=\"dialogOpened=true;dialogType='Product';product.menu_ids[0]=prod_menu._id\">Add Product</button>\n                        <div class=\"no_ingr_t\" *ngIf='!getProdByMenu(prod_menu._id).length'>No Products Yet</div>   \n                        <table class=\"ingr_table\" cellspacing=\"0\" *ngIf=\"getProdByMenu(prod_menu._id)&&getProdByMenu(prod_menu._id).length\">\n                            <thead>\n                                <tr>\n                                    <th>Product Image</th>\n                                    <th>Product Title</th>\n                                    <th>Product Price</th>\n                                    <th></th>\n                                    <th></th>\n                                </tr>\n                            </thead>\n                            <tr *ngFor=\"let prod of getProdByMenu(prod_menu._id)\">\n                                <td><img [src]=\"imgurl+'/'+prod.image\" alt=\"\" style=\"width:50px;height:50px; object-fit: contain;\"></td>\n                                <td>{{prod.title}}</td>\n                                <td>$ {{prod.price}}</td>\n                                <td><i class=\"far fa-edit\" style=\"color:#F2AC21 \"></i></td>\n                                <td  (click)=\"deleteIngredient(prod._id)\"><i class=\"fas fa-trash\" style=\"color:red\"></i></td>\n                            </tr>\n                        </table>                 \n                  </div>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </mat-tab>\n        <mat-tab label=\"Combo Menus\">  \n                <button class=\"add_menu\" (click)=\"dialogOpened=true;dialogType='Combo Menu'\">Add Combo Menu</button>  \n                <div class=\"no_ingr\" *ngIf='!comboMenus.length'>No Combo Menu Yet</div>     \n                <mat-accordion *ngIf='comboMenus&&comboMenus.length'>            \n                    <mat-expansion-panel *ngFor=\"let comboMenu of comboMenus\" >\n                        <mat-expansion-panel-header>\n                            <mat-panel-title class=\"menu_title\">\n                                {{comboMenu.title}}\n                            </mat-panel-title>                   \n                      </mat-expansion-panel-header>\n                      <div class=\"body\">\n                            <button class=\"add_ingr\" (click)=\"dialogOpened=true;dialogType='Combo Product';comboProd.special_menu_id=comboMenu._id\">Add Combo Product</button>\n                            <!--<div class=\"no_ingr_t\" *ngIf='!getComboProdByMenu(comboMenu._id).length'>No Products Yet</div> -->    \n                            <table class=\"ingr_table\" cellspacing=\"0\" *ngIf=\"getComboProdByMenu(comboMenu._id)&&getComboProdByMenu(comboMenu._id).length\">\n                                <thead>\n                                    <tr>\n                                        <th>Product Image</th>\n                                        <th>Product Title</th>\n                                        <th>Product Price</th>\n                                        <th></th>\n                                        <th></th>\n                                    </tr>\n                                </thead>\n                                <tr *ngFor=\"let prod of getComboProdByMenu(comboMenu._id)\">\n                                    <td><img [src]=\"imgurl+'/'+prod.image\" alt=\"\" style=\"width:50px;height:50px; object-fit: contain;\"></td>\n                                    <td>{{prod.title}}</td>\n                                    <td>$ {{prod.price}}</td>\n                                    <td><i class=\"far fa-edit\" style=\"color:#F2AC21 \"></i></td>\n                                    <td  (click)=\"deleteIngredient(prod._id)\"><i class=\"fas fa-trash\" style=\"color:red\"></i></td>\n                                </tr>\n                            </table>                                      \n                      </div>\n                    </mat-expansion-panel>\n                </mat-accordion>\n        </mat-tab>\n    <mat-tab label=\"Combo Products\">  \n            <button class=\"add_menu\" (click)=\"dialogOpened=true;dialogType='Combo'\">Add Combo</button>      \n    </mat-tab>\n</mat-tab-group>\n\n<div class=\"dialog\" *ngIf=\"dialogOpened\">\n    <div class=\"dialog_form\">\n       <div class=\"ribon\">\n           <div class=\"header\">Add New {{dialogType}}</div>\n           <div class=\"close\" (click)=\"dialogOpened=false;dialogType='';resetform()\"> <i class=\"far fa-times\"></i></div>           \n       </div>\n       <div class=\"body\">\n           <input type=\"text\" placeholder=\"Menu Title\" name=\"mt\" [(ngModel)]=\"ingrMenuTitle\" *ngIf=\"dialogType=='Ingredient Menu'||dialogType=='Product Menu'||dialogType=='Product Menu'\" autocomplete=\"off\">\n           <input type=\"text\" placeholder=\"Ingredient Title\" name=\"it\" [(ngModel)]=\"ingredient.title\" *ngIf=\"dialogType=='Ingredient'\" autocomplete=\"off\">\n           <input type=\"text\" placeholder=\"Ingredient Light price\" name=\"it\" [(ngModel)]=\"ingredient.light_price\" *ngIf=\"dialogType=='Ingredient'\" autocomplete=\"off\">\n           <input type=\"text\" placeholder=\"Ingredient  Normal price\" name=\"it\" [(ngModel)]=\"ingredient.price\" *ngIf=\"dialogType=='Ingredient'\" autocomplete=\"off\">\n           <input type=\"text\" placeholder=\"Ingredient Double price\" name=\"it\" [(ngModel)]=\"ingredient.double_price\" *ngIf=\"dialogType=='Ingredient'\" autocomplete=\"off\">           \n           <input type=\"text\" placeholder=\"Product Title\" name=\"it\" [(ngModel)]=\"product.title\" *ngIf=\"dialogType=='Product'\" autocomplete=\"off\">\n           <input type=\"text\" placeholder=\"Product Price\" name=\"it\" [(ngModel)]=\"product.price\" *ngIf=\"dialogType=='Product' &&product.sizable=='false' && product.customizable=='false'\"  autocomplete=\"off\">\n           <div *ngIf=\"dialogType=='Product'\">Does product has different sizes?</div>\n           <mat-radio-group [(ngModel)]=\"product.sizable\" *ngIf=\"dialogType=='Product'\" (change)=\"product.customizable='false'\">\n                <mat-radio-button class=\"sizable\" value=\"false\">No</mat-radio-button>\n                <mat-radio-button class=\"sizable\" value=\"true\">Yes</mat-radio-button>                 \n            </mat-radio-group>\n           <div *ngIf=\"dialogType=='Product'\">Is product customizable?</div>\n           <mat-radio-group [(ngModel)]=\"product.customizable\" *ngIf=\"dialogType=='Product'\" (change)=\"product.sizable='false'\">\n                <mat-radio-button class=\"customizable\" value=\"false\">No</mat-radio-button>\n                <mat-radio-button class=\"customizable\" value=\"true\">Yes</mat-radio-button>                 \n            </mat-radio-group>\n            <input type=\"text\" placeholder=\"Small Price\" name=\"it\" [(ngModel)]=\"product?.sizes[0].price\" *ngIf=\"dialogType=='Product'&&product.sizable=='true'\" autocomplete=\"off\">\n            <input type=\"text\" placeholder=\"Medum Price\" name=\"it\" [(ngModel)]=\"product?.sizes[1].price\" *ngIf=\"dialogType=='Product'&&product.sizable=='true'\" autocomplete=\"off\">\n            <input type=\"text\" placeholder=\"Large Price\" name=\"it\" [(ngModel)]=\"product?.sizes[2].price\" *ngIf=\"dialogType=='Product'&&product.sizable=='true'\" autocomplete=\"off\">\n            <mat-form-field *ngIf=\"product.customizable=='true'&&dialogType=='Product'\" style=\"display:block;  width:calc(100% - 32px); margin:auto\">\n                <mat-select placeholder=\"Ingredients for making product\" [formControl]=\"prodIngr\" multiple>\n                    <mat-select-trigger>\n                        {{prodIngr.value ? prodIngr.value[0]?.title : ''}}\n                        <span *ngIf=\"prodIngr.value?.length > 1\" class=\"example-additional-selection\">\n                          (+{{prodIngr.value.length - 1}} {{prodIngr.value?.length === 2 ? 'other' : 'others'}})\n                        </span>\n                    </mat-select-trigger>\n                      <mat-option *ngFor=\"let ingr of ingr_menus\" [value]=\"ingr\">{{ingr.title}}</mat-option>\n                </mat-select>\n            </mat-form-field>        \n            <mat-form-field *ngIf=\"product.customizable=='true'&&dialogType=='Product'\" style=\"display:block;  width:calc(100% - 32px); margin:auto\">\n                <mat-label>Default Ingredients</mat-label>\n                <mat-select [formControl]=\"defaultIngr\" multiple>                 \n                  <mat-optgroup *ngFor=\"let ingr of prodIngr.value\" [label]=\"ingr.title\">\n                    <mat-option *ngFor=\"let ingr_type of getIngrByMenu(ingr._id)\" [value]=\"ingr_type\">\n                      {{ingr_type.title}}\n                    </mat-option>\n                  </mat-optgroup>\n                </mat-select>\n              </mat-form-field>\n\n              <input type=\"text\" placeholder=\"Combo Title\" name=\"it\" [(ngModel)]=\"combo.title\" *ngIf=\"dialogType=='Combo'\" autocomplete=\"off\">\n              <input type=\"text\" placeholder=\"Combo Menu Title\" name=\"it\" [(ngModel)]=\"comboMenu.title\" *ngIf=\"dialogType=='Combo Menu'\" autocomplete=\"off\">\n              <div *ngIf=\"dialogType=='Combo Menu'\">Is combo customizable?</div>\n              <mat-radio-group [(ngModel)]=\"comboMenu.configurable\" *ngIf=\"dialogType=='Combo Menu'\" >\n                   <mat-radio-button class=\"customizable\" value=\"false\">No</mat-radio-button>\n                   <mat-radio-button class=\"customizable\" value=\"true\">Yes</mat-radio-button>                 \n               </mat-radio-group>\n\n               <mat-form-field *ngIf=\"dialogType=='Combo Product'\" style=\"display:block;  width:calc(100% - 32px); margin:auto\">\n                <mat-select placeholder=\"Product For Making Combo Menu\" [formControl]=\"combo_prod\" multiple>\n                    <mat-select-trigger>\n                        {{prodIngr.value ? prodIngr.value[0]?.title : ''}}\n                        <span *ngIf=\"prodIngr.value?.length > 1\" class=\"example-additional-selection\">\n                          (+{{prodIngr.value.length - 1}} {{prodIngr.value?.length === 2 ? 'other' : 'others'}})\n                        </span>\n                    </mat-select-trigger>\n                      <mat-option *ngFor=\"let prod of products\" [value]=\"prod\">{{prod.title}}</mat-option>\n                </mat-select>\n            </mat-form-field> \n\n            <mat-form-field *ngIf=\"dialogType=='Combo'\" style=\"display:block;  width:calc(100% - 32px); margin:auto\">\n                <mat-select placeholder=\"Menu For Making Combo\" [formControl]=\"combo_menu\" multiple>\n                    <mat-select-trigger>\n                        {{combo_menu.value ? combo_menu.value[0]?.title : ''}}\n                        <span *ngIf=\"combo_menu.value?.length > 1\" class=\"example-additional-selection\">\n                          (+{{combo_menu.value.length - 1}} {{combo_menu.value?.length === 2 ? 'other' : 'others'}})\n                        </span>\n                    </mat-select-trigger>\n                      <mat-option *ngFor=\"let menu of comboMenus\" [value]=\"menu\">{{menu.title}}</mat-option>\n                </mat-select>\n            </mat-form-field> \n            <mat-form-field *ngIf=\"dialogType=='Combo'\" style=\"display:block;  width:calc(100% - 32px); margin:auto\">\n                <mat-select placeholder=\"Products For Making Combo\" [formControl]=\"combo_prod\" multiple>\n                    <mat-select-trigger>\n                        {{combo_prod.value ? combo_prod.value[0]?.title : ''}}\n                        <span *ngIf=\"combo_prod.value?.length > 1\" class=\"example-additional-selection\">\n                          (+{{combo_prod.value.length - 1}} {{combo_prod.value?.length === 2 ? 'other' : 'others'}})\n                        </span>\n                    </mat-select-trigger>\n                    <mat-optgroup *ngFor=\"let menu of combo_menu.value\" [label]=\"menu.title\">\n                        <mat-option *ngFor=\"let prod of getComboProdByMenu(menu._id)\" [value]=\"prod\">\n                          {{prod.title}}\n                        </mat-option>\n                      </mat-optgroup>\n                </mat-select>\n            </mat-form-field> \n            <mat-form-field *ngIf=\"dialogType=='Combo'\" style=\"display:block;  width:calc(100% - 32px); margin:auto\">\n                <mat-select placeholder=\"Default Products For Making Combo\" [formControl]=\"combo_default\" multiple>\n                    <mat-select-trigger>\n                        {{combo_default.value ? combo_default.value[0]?.title : ''}}\n                        <span *ngIf=\"combo_default.value?.length > 1\" class=\"example-additional-selection\">\n                          (+{{combo_default.value.length - 1}} {{combo_default.value?.length === 2 ? 'other' : 'others'}})\n                        </span>\n                    </mat-select-trigger>\n                    <mat-optgroup *ngFor=\"let menu of combo_menu.value\" [label]=\"menu.title\">\n                        <mat-option *ngFor=\"let prod of getComboProdByMenu(menu._id)\" [value]=\"prod\">\n                          {{prod.title}}\n                        </mat-option>\n                      </mat-optgroup>\n                </mat-select>\n            </mat-form-field> \n              <input type=\"file\"  name=\"avatar\" accept=\"image/png, image/jpeg\" *ngIf=\"dialogType=='Ingredient'||dialogType=='Product' ||dialogType=='Combo'\" (change)=\"getImage($event.target.files)\">\n           <button style=\"display:block; margin:auto\"  (click)=\"add(dialogType)\">Add  {{dialogType}}</button>\n       </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-super-admin *ngIf=\"(getRole()|lowercase)=='superadmin'\"></app-super-admin>\n<app-admin *ngIf=\"(getRole()|lowercase)=='admin'\"></app-admin>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialogs/new-user-dialog/new-user-dialog.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialogs/new-user-dialog/new-user-dialog.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-user-wrapper\">\n    <div class=\"container\">\n        <div class=\"close\"><i class=\"far fa-times\" (click)=\"close()\"></i></div>\n        <input type=\"text\" placeholder=\"First name\" name=\"firstName\" [(ngModel)]=\"user.firstName\" >\n        <input type=\"text\" placeholder=\"Last name\" name=\"lastName\" [(ngModel)]=\"user.lastName\">\n        <input type=\"email\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"user.email\">\n        <input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"user.password\">\n        <button class=\"submit\" (click)=\"addUser()\">Add user</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-wrapper\">\n    \n    <form action=\"\" class=\"login-form\">\n            <div class=\"welcome\">Welcome! Please sign in</div>\n        <input type=\"text\" class=\"username\" placeholder=\"Username or Email\" [(ngModel)]=\"loginData.userName\"  name=\"usename\">\n        <input type=\"password\" placeholder=\"Password\"  class=\"password\" [(ngModel)]=\"loginData.password\" name=\"password\">\n        <button class=\"login-button\" (click)=\"login()\">Login</button>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/super-admin/manage-user/manage-user.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/super-admin/manage-user/manage-user.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-wrapper\">\n        <button class=\"add-user\" (click)=\"addUser()\">Add new user</button>\n    <div class=\"users\" >        \n        <div class=\"no-user\" *ngIf='!users?.length'>No users yet</div>\n    </div>\n</div>\n\n<app-new-user-dialog *ngIf=\"opendialog\" (onClose)=\"close()\"></app-new-user-dialog>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/super-admin/super-admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/super-admin/super-admin.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-wrapper\">\n    <div class=\"sidebar\">\n        <div class=\"nav\" *ngFor='let nav of menu'  [routerLink]=\"nav?.link\"><i [class]=\"nav?.icon\" ></i> {{nav.title}}</div>\n        <div class=\"nav\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Log Out</div>\n    </div>\n    <div class=\"route\">\n            <router-outlet></router-outlet>\n    </div>\n   \n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-wrapper {\n  font-weight: 500;\n}\n.dashboard-wrapper .sidebar {\n  position: absolute;\n  height: 100%;\n  width: 270px;\n  display: inline-block;\n  background-color: #5E5B58;\n  padding: 20px 0;\n}\n.dashboard-wrapper .sidebar .nav {\n  color: white;\n  cursor: pointer;\n  padding: 10px 15px;\n  font-size: 24px;\n}\n.dashboard-wrapper .route {\n  position: absolute;\n  left: 270px;\n  width: calc(100% - 270px);\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxraW9zay1kYXNoYm9hcmQvc3JjXFxhcHBcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHWjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLXdyYXBwZXJ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLnNpZGViYXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDoyNzBweDtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jazsgICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1RTVCNTg7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4IDA7XHJcbiAgICAgICAgLm5hdntcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzoxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyNHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvdXRle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OjI3MHB4O1xyXG4gICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDI3MHB4KTtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBvdmVyZmxvdzphdXRvXHJcbiAgICB9XHJcbn0iLCIuZGFzaGJvYXJkLXdyYXBwZXIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRhc2hib2FyZC13cmFwcGVyIC5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyNzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU1QjU4O1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uZGFzaGJvYXJkLXdyYXBwZXIgLnNpZGViYXIgLm5hdiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAucm91dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI3MHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjcwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AdminComponent = class AdminComponent {
    constructor(router) {
        this.router = router;
        this.menu = [
            {
                title: "Manage Products ",
                icon: "fas fa-utensils-alt",
                link: ""
            },
            {
                title: "Profile",
                icon: "fas fa-address-card",
                link: "/profile"
            },
        ];
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem("usr");
        this.router.navigate([""]);
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/product-management/product-management.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/admin/product-management/product-management.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  font-weight: 600;\n}\n.wrapper .menu_title {\n  font-weight: bold;\n  font-size: 24px;\n}\n.wrapper .add_menu {\n  margin: 20px;\n  font-size: 24px;\n  padding: 20px;\n  border-radius: 100px;\n  border: 0;\n  background-color: #F2AC21;\n  color: white;\n  outline: 0;\n}\n.wrapper .add_ingr {\n  margin: 14px;\n  font-size: 16px;\n  padding: 14px;\n  border-radius: 50px;\n  border: 0;\n  background-color: #F2AC21;\n  color: white;\n  outline: 0;\n}\n.wrapper .ingr_table {\n  font-size: 20px;\n  color: #5E5B58;\n  text-align: center;\n  border: 1px solid black;\n}\n.wrapper .ingr_table tr {\n  cursor: pointer;\n}\n.wrapper .ingr_table tr th {\n  padding: 10px;\n  border-top: 1px solid #5E5B58;\n  border-bottom: 1px solid #5E5B58;\n}\n.wrapper .ingr_table tr td {\n  padding: 10px;\n  border-top: 1px solid #5E5B58;\n  border-bottom: 1px solid #5E5B58;\n}\n.wrapper .no_ingr {\n  margin: 20px;\n  font-size: 40px;\n  color: #5E5B58;\n}\n.wrapper .no_ingr_t {\n  margin: 16px;\n  font-size: 20px;\n  color: #5E5B58;\n}\n.dialog {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  background-color: rgba(0, 0, 0, 0.7);\n  overflow: auto;\n}\n.dialog .dialog_form {\n  position: absolute;\n  background-color: white;\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n.dialog .dialog_form .ribon .header {\n  float: left;\n  padding: 16px;\n  font-size: 24px;\n  color: #5E5B58;\n}\n.dialog .dialog_form .ribon .close {\n  float: right;\n  padding: 16px;\n  font-size: 24px;\n  color: #5E5B58;\n}\n.dialog .dialog_form .body {\n  padding: 56px 0;\n  text-align: center;\n}\n.dialog .dialog_form .body .customizable {\n  margin: 20px 20px;\n}\n.dialog .dialog_form .body .sizable {\n  margin: 20px 20px;\n}\n.dialog .dialog_form .body input:not([type=radio]) {\n  display: block;\n  width: calc(100% - 32px);\n  margin: 16px;\n  font-size: 24px;\n  color: #5E5B58;\n  border: 1px solid #5E5B58;\n}\n.dialog .dialog_form .body button {\n  margin: 16px;\n  font-size: 20px;\n  padding: 16px;\n  border-radius: 100px;\n  border: 0;\n  background-color: #F2AC21;\n  color: white;\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcHJvZHVjdC1tYW5hZ2VtZW50L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxca2lvc2stZGFzaGJvYXJkL3NyY1xcYXBwXFxhZG1pblxccHJvZHVjdC1tYW5hZ2VtZW50XFxwcm9kdWN0LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3Byb2R1Y3QtbWFuYWdlbWVudC9wcm9kdWN0LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtBQ0FKO0FEQ0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNDUjtBRENJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NSO0FEQ0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ1I7QURDSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0NOO0FEQ007RUFDSSxlQUFBO0FDQ1Y7QURBUTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDRVo7QURBUTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDRVo7QURHSTtFQUNJLFlBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0RaO0FER0k7RUFDSSxZQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNEWjtBRElBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FDREo7QURFSTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtBQ0FSO0FERVk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQWhCO0FER1k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRGhCO0FESVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNGWjtBRElZO0VBQ0ksaUJBQUE7QUNGaEI7QURJWTtFQUNJLGlCQUFBO0FDRmhCO0FESVk7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0ZoQjtBRElZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0ZoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3QtbWFuYWdlbWVudC9wcm9kdWN0LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC5tZW51X3RpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOjI0cHhcclxuICAgIH1cclxuICAgIC5hZGRfbWVudXtcclxuICAgICAgICBtYXJnaW46MjBweDtcclxuICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMDBweDtcclxuICAgICAgICBib3JkZXI6MDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGMkFDMjEgO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIG91dGxpbmU6MFxyXG4gICAgfVxyXG4gICAgLmFkZF9pbmdye1xyXG4gICAgICAgIG1hcmdpbjoxNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6MTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRjJBQzIxIDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBvdXRsaW5lOjBcclxuICAgIH1cclxuICAgIC5pbmdyX3RhYmxle1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazs7XHJcblxyXG4gICAgICB0cntcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIHRoe1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICM1RTVCNTg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM1RTVCNTg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRke1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICM1RTVCNTg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM1RTVCNTg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLm5vX2luZ3J7XHJcbiAgICAgICAgbWFyZ2luOjIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo0MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgfVxyXG4gICAgLm5vX2luZ3JfdHtcclxuICAgICAgICBtYXJnaW46MTZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICB9XHJcbn1cclxuLmRpYWxvZ3tcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB6LWluZGV4OjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLmRpYWxvZ19mb3Jte1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgbGVmdDo1MCUgO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIC5yaWJvbntcclxuICAgICAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2xvc2V7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzVFNUI1ODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9keXtcclxuICAgICAgICAgICAgcGFkZGluZzo1NnB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmN1c3RvbWl6YWJsZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjoyMHB4IDIwcHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2l6YWJsZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjoyMHB4IDIwcHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dDpub3QoW3R5cGU9XCJyYWRpb1wiXSl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gMzJweCk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzVFNUI1ODtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzVFNUI1ODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24gIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjoxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjE2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGMkFDMjEgO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuIiwiLndyYXBwZXIge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLndyYXBwZXIgLm1lbnVfdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLndyYXBwZXIgLmFkZF9tZW51IHtcbiAgbWFyZ2luOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkFDMjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogMDtcbn1cbi53cmFwcGVyIC5hZGRfaW5nciB7XG4gIG1hcmdpbjogMTRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkFDMjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogMDtcbn1cbi53cmFwcGVyIC5pbmdyX3RhYmxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzVFNUI1ODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi53cmFwcGVyIC5pbmdyX3RhYmxlIHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndyYXBwZXIgLmluZ3JfdGFibGUgdHIgdGgge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzVFNUI1ODtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1RTVCNTg7XG59XG4ud3JhcHBlciAuaW5ncl90YWJsZSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNUU1QjU4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVFNUI1ODtcbn1cbi53cmFwcGVyIC5ub19pbmdyIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNUU1QjU4O1xufVxuLndyYXBwZXIgLm5vX2luZ3JfdCB7XG4gIG1hcmdpbjogMTZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzVFNUI1ODtcbn1cblxuLmRpYWxvZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmRpYWxvZyAuZGlhbG9nX2Zvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmRpYWxvZyAuZGlhbG9nX2Zvcm0gLnJpYm9uIC5oZWFkZXIge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTZweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzVFNUI1ODtcbn1cbi5kaWFsb2cgLmRpYWxvZ19mb3JtIC5yaWJvbiAuY2xvc2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM1RTVCNTg7XG59XG4uZGlhbG9nIC5kaWFsb2dfZm9ybSAuYm9keSB7XG4gIHBhZGRpbmc6IDU2cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpYWxvZyAuZGlhbG9nX2Zvcm0gLmJvZHkgLmN1c3RvbWl6YWJsZSB7XG4gIG1hcmdpbjogMjBweCAyMHB4O1xufVxuLmRpYWxvZyAuZGlhbG9nX2Zvcm0gLmJvZHkgLnNpemFibGUge1xuICBtYXJnaW46IDIwcHggMjBweDtcbn1cbi5kaWFsb2cgLmRpYWxvZ19mb3JtIC5ib2R5IGlucHV0Om5vdChbdHlwZT1yYWRpb10pIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgbWFyZ2luOiAxNnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNUU1QjU4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNUU1QjU4O1xufVxuLmRpYWxvZyAuZGlhbG9nX2Zvcm0gLmJvZHkgYnV0dG9uIHtcbiAgbWFyZ2luOiAxNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkFDMjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/product-management/product-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/product-management/product-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementComponent", function() { return ProductManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_manage_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/manage-products.service */ "./src/app/services/manage-products.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let ProductManagementComponent = class ProductManagementComponent {
    constructor(mp) {
        this.mp = mp;
        this.imgurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticUrl + "images";
        this.dialogOpened = false;
        this.dialogType = "";
        this.ingr_menus = [];
        this.ingredients = [];
        this.prod_menus = [];
        this.products = [];
        this.combos = [];
        this.comboMenus = [];
        this.ComboProds = [];
        this.prodIngr = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.defaultIngr = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.combo_prod = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.combo_menu = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.combo_default = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.ingrMenuTitle = "";
        this.ingredient = {
            title: "",
            light_price: "",
            price: "",
            double_price: "",
            ingredient_ids: "",
        };
        this.product = {
            title: "",
            price: "",
            sizable: "false",
            customizable: "false",
            menu_ids: [],
            sizes: [
                {
                    title: "Small",
                    price: ""
                },
                {
                    title: "Medium",
                    price: ""
                },
                {
                    title: "Large",
                    price: ""
                }
            ]
        };
        this.comboMenu = {
            title: "",
            configurable: "false"
        };
        this.combo = {
            title: "",
        };
        this.comboProd = {
            products: [],
            special_menu_id: ""
        };
    }
    ngOnInit() {
        this.mp.getIngredientMenus().subscribe((data) => {
            this.ingr_menus = data;
            console.log(this.ingr_menus);
        });
        this.mp.getIngredients().subscribe((data) => {
            this.ingredients = data;
            console.log(this.ingredients);
        });
        this.mp.getProductMenus().subscribe((data) => {
            this.prod_menus = data;
        });
        this.mp.getProducts().subscribe((data) => {
            this.products = data;
        });
        this.mp.getComboMenu().subscribe((data) => {
            this.comboMenus = data;
        });
    }
    resetform() {
        this.ingrMenuTitle = "";
        this.ingredient.title = "";
        this.ingredient.light_price = "";
        this.ingredient.price = "";
        this.ingredient.double_price = "";
        this.ingredient.ingredient_ids = "";
        this.prodIngr = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.defaultIngr = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.product.customizable = "false";
        this.product.price = "";
        this.product.title = "";
        this.product.sizable = "false";
        this.product.menu_ids = [];
        this.combo_prod = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.comboProd.products = [],
            this.comboProd.special_menu_id = "";
        this.comboMenu.title = "",
            this.comboMenu.configurable = "false";
        this.product.sizes = [
            {
                title: "Small",
                price: ""
            },
            {
                title: "Medium",
                price: ""
            },
            {
                title: "Large",
                price: ""
            }
        ];
        this.img = null;
    }
    add(type) {
        let frm = new FormData();
        switch (type) {
            case "Ingredient Menu":
                let ingrmenu = this.mp.addIngredientMenu(this.ingrMenuTitle).subscribe(data => {
                    this.ingr_menus.push(data);
                    this.dialogOpened = false;
                    this.dialogType = "";
                    this.resetform();
                    ingrmenu.unsubscribe();
                });
                break;
            case "Ingredient":
                frm.append("image", this.img);
                frm.append("title", this.ingredient.title);
                frm.append("price", this.ingredient.price);
                frm.append("light_price", this.ingredient.light_price);
                frm.append("double_price", this.ingredient.double_price);
                frm.append("ingredient_ids", this.ingredient.ingredient_ids);
                let ingrs = this.mp.addIngredient(frm).subscribe((data => {
                    console.log(data);
                    this.ingredients.push(data);
                    this.dialogOpened = false;
                    this.dialogType = "";
                    this.resetform();
                    ingrs.unsubscribe();
                }));
                break;
            case "Product Menu":
                let prodm = this.mp.addProductMenu(this.ingrMenuTitle).subscribe((data) => {
                    this.prod_menus.push(data);
                    this.dialogOpened = false;
                    this.dialogType = "";
                    this.resetform();
                    prodm.unsubscribe();
                });
                break;
            case "Product":
                frm.append("image", this.img);
                frm.append("title", this.product.title);
                frm.append("sizable", this.product.sizable);
                frm.append("customizable", this.product.customizable);
                frm.append("menu_ids", JSON.stringify(this.product.menu_ids));
                if (this.product.sizable == "false" && this.product.customizable == "false") {
                    frm.append("price", this.product.price);
                }
                if (this.product.sizable == "true") {
                    frm.append("sizes", JSON.stringify(this.product.sizes));
                }
                if (this.product.customizable == "true") {
                    frm.append("prodIngr", JSON.stringify(this.prodIngr.value));
                    frm.append("defaultIngr", JSON.stringify(this.defaultIngr.value));
                }
                this.mp.addProduct(frm).subscribe(data => {
                    this.products.push(data);
                    this.dialogOpened = false;
                    this.dialogType = "";
                    this.resetform();
                });
                break;
            case "Combo":
                /*frm.append("image",this.img);
                frm.append("title", this.combo.title);
                this.mp.addCombo(frm).subscribe(data=>{
                  console.log(data)
                  this.combos.push(data)
                })*/
                break;
            case "Combo Menu":
                this.mp.addComboMenu(this.comboMenu).subscribe(data => {
                    console.log(data);
                    this.comboMenus.push(data);
                    this.dialogOpened = false;
                    this.dialogType = "";
                    this.resetform();
                });
                break;
            case "Combo Product":
                this.combo_prod.value.forEach(dat => {
                    this.comboProd.products.push(dat._id);
                });
                this.mp.addComboProd(this.comboProd).subscribe(data => {
                    console.log(data);
                    this.dialogOpened = false;
                    this.dialogType = "";
                    this.resetform();
                });
                break;
        }
    }
    getIngrByMenu(id) {
        return this.ingredients.filter(ingr => {
            return ingr.ingredient_ids[0] == id;
        });
    }
    getProdByMenu(id) {
        return this.products.filter(prod => {
            return prod.menu_ids[0] == id;
        });
    }
    getComboProdByMenu(id) {
        return this.products.filter(prod => {
            return prod.special_menu_ids[0] == id;
        });
    }
    deleteIngredient(id) {
        this.mp.deleteIngredient(id).subscribe(data => {
            this.ingredients = this.ingredients.filter(data => {
                return data._id != id;
            });
        });
    }
    getImage(img) {
        this.img = img.item(0);
    }
};
ProductManagementComponent.ctorParameters = () => [
    { type: _services_manage_products_service__WEBPACK_IMPORTED_MODULE_2__["ManageProductsService"] }
];
ProductManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-management',
        template: __webpack_require__(/*! raw-loader!./product-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/product-management/product-management.component.html"),
        styles: [__webpack_require__(/*! ./product-management.component.scss */ "./src/app/admin/product-management/product-management.component.scss")]
    })
], ProductManagementComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
/* harmony import */ var _guards_log_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/log.guard */ "./src/app/guards/log.guard.ts");
/* harmony import */ var _super_admin_manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./super-admin/manage-user/manage-user.component */ "./src/app/super-admin/manage-user/manage-user.component.ts");
/* harmony import */ var _admin_product_management_product_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/product-management/product-management.component */ "./src/app/admin/product-management/product-management.component.ts");










const routes = [
    {
        path: "",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_guards_log_guard__WEBPACK_IMPORTED_MODULE_7__["LogGuard"]]
    },
    {
        path: "admin",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: "",
                canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_6__["RoleGuard"]],
                component: _super_admin_manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_8__["ManageUserComponent"]
            },
            {
                path: "product_management",
                component: _admin_product_management_product_management_component__WEBPACK_IMPORTED_MODULE_9__["ProductManagementComponent"],
                canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_6__["SRoleGuard"]],
            },
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'kiosk-dashboard';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./super-admin/super-admin.component */ "./src/app/super-admin/super-admin.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _super_admin_manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./super-admin/manage-user/manage-user.component */ "./src/app/super-admin/manage-user/manage-user.component.ts");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "./src/app/interceptors/auth.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _dialogs_new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialogs/new-user-dialog/new-user-dialog.component */ "./src/app/dialogs/new-user-dialog/new-user-dialog.component.ts");
/* harmony import */ var _admin_product_management_product_management_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/product-management/product-management.component */ "./src/app/admin/product-management/product-management.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_8__["SuperAdminComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
            _super_admin_manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_11__["ManageUserComponent"],
            _dialogs_new_user_dialog_new_user_dialog_component__WEBPACK_IMPORTED_MODULE_14__["NewUserDialogComponent"],
            _admin_product_management_product_management_component__WEBPACK_IMPORTED_MODULE_15__["ProductManagementComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
                multi: true
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
    getRole() {
        let token = localStorage.getItem("usr");
        if (token) {
            let decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
            return decoded.data.role;
        }
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dialogs/new-user-dialog/new-user-dialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/new-user-dialog/new-user-dialog.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-user-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1000;\n}\n.add-user-wrapper .container {\n  background-color: white;\n  position: absolute;\n  width: 450px;\n  height: 380px;\n  left: calc(50% - 225px);\n  top: calc(50% - 210px);\n  padding: 15px 20px;\n}\n.add-user-wrapper .container .submit {\n  font-size: 24px;\n  display: block;\n  margin: auto;\n  padding: 12px 24px;\n  background-color: #F2AC21;\n  color: white;\n  border-radius: 100px;\n  border: 0;\n  outline: 0;\n}\n.add-user-wrapper .container input {\n  padding: 5px;\n  font-size: 24px;\n  display: block;\n  width: calc(100% - 32px);\n  margin: 16px auto;\n  color: #5E5B58;\n}\n.add-user-wrapper .container .close {\n  text-align: right;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9uZXctdXNlci1kaWFsb2cvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxraW9zay1kYXNoYm9hcmQvc3JjXFxhcHBcXGRpYWxvZ3NcXG5ldy11c2VyLWRpYWxvZ1xcbmV3LXVzZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaWFsb2dzL25ldy11c2VyLWRpYWxvZy9uZXctdXNlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQUk7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDR1o7QUREUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDR1o7QURBUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9ncy9uZXctdXNlci1kaWFsb2cvbmV3LXVzZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC11c2VyLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwwLDAsMC43KTtcclxuICAgIHotaW5kZXg6MTAwMDtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDo0NTBweDtcclxuICAgICAgICBoZWlnaHQ6MzgwcHg7XHJcbiAgICAgICAgbGVmdDpjYWxjKDUwJSAtIDIyNXB4KTtcclxuICAgICAgICB0b3A6Y2FsYyg1MCUgLSAyMTBweCk7XHJcbiAgICAgICAgcGFkZGluZzoxNXB4IDIwcHg7XHJcbiAgICAgICAgLnN1Ym1pdHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEycHggMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRjJBQzIxIDtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgICAgICBvdXRsaW5lOjBcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gMzJweCk7XHJcbiAgICAgICAgICAgIG1hcmdpbjoxNnB4IGF1dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xvc2V7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5hZGQtdXNlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5hZGQtdXNlci13cmFwcGVyIC5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDUwcHg7XG4gIGhlaWdodDogMzgwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjI1cHgpO1xuICB0b3A6IGNhbGMoNTAlIC0gMjEwcHgpO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59XG4uYWRkLXVzZXItd3JhcHBlciAuY29udGFpbmVyIC5zdWJtaXQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQUMyMTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xufVxuLmFkZC11c2VyLXdyYXBwZXIgLmNvbnRhaW5lciBpbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBtYXJnaW46IDE2cHggYXV0bztcbiAgY29sb3I6ICM1RTVCNTg7XG59XG4uYWRkLXVzZXItd3JhcHBlciAuY29udGFpbmVyIC5jbG9zZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDI0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dialogs/new-user-dialog/new-user-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/new-user-dialog/new-user-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewUserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserDialogComponent", function() { return NewUserDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let NewUserDialogComponent = class NewUserDialogComponent {
    constructor(AS) {
        this.AS = AS;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.user = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    close() {
        this.onClose.emit();
    }
    addUser() {
        this.validate(this.user);
        this.AS.addUser(this.user).subscribe(data => {
            console.log(data);
            this.close();
        });
    }
    validate(user) {
        if (user.firstName.length < 3 || user.lastName.length < 3) {
            return false;
        }
    }
};
NewUserDialogComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NewUserDialogComponent.prototype, "onClose", void 0);
NewUserDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-user-dialog',
        template: __webpack_require__(/*! raw-loader!./new-user-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialogs/new-user-dialog/new-user-dialog.component.html"),
        styles: [__webpack_require__(/*! ./new-user-dialog.component.scss */ "./src/app/dialogs/new-user-dialog/new-user-dialog.component.scss")]
    })
], NewUserDialogComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        let token = localStorage.getItem("usr");
        if (token) {
            return true;
        }
        else {
            this.router.navigate(["/"]);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/log.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guards/log.guard.ts ***!
  \*************************************/
/*! exports provided: LogGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogGuard", function() { return LogGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LogGuard = class LogGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        let token = localStorage.getItem("usr");
        if (!token) {
            return true;
        }
        else {
            this.router.navigate(["admin"]);
            return false;
        }
    }
};
LogGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LogGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LogGuard);



/***/ }),

/***/ "./src/app/guards/role.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/*! exports provided: RoleGuard, SRoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SRoleGuard", function() { return SRoleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);




let RoleGuard = class RoleGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        let token = localStorage.getItem("usr");
        if (token) {
            let decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token);
            if (decoded.data.role == "superAdmin") {
                return true;
            }
            else {
                this.router.navigate(["admin/product_management"]);
                return false;
            }
        }
    }
};
RoleGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RoleGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RoleGuard);

let SRoleGuard = class SRoleGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        let token = localStorage.getItem("usr");
        if (token) {
            let decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token);
            if (decoded.data.role == "superAdmin") {
                this.router.navigate(["admin"]);
                return false;
            }
            else {
                return true;
            }
        }
    }
};
SRoleGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SRoleGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SRoleGuard);



/***/ }),

/***/ "./src/app/interceptors/auth.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthInterceptor = class AuthInterceptor {
    intercept(request, next) {
        let token = localStorage.getItem("usr");
        if (token) {
            let newReq = request.clone({ headers: request.headers.set('Authorization', token) });
            return next.handle(newReq);
        }
        else {
            return next.handle(request);
        }
    }
};
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url('0_H7lU6fCgj4eHyVzw5HeLww1FA.jpg');\n  background-attachment: fixed;\n  background-size: 100%;\n}\n.login-wrapper .login-form {\n  position: absolute;\n  width: 600px;\n  height: 400px;\n  top: calc(50% - 200px);\n  left: calc(50% - 300px);\n  background-color: white;\n  border-radius: 8px;\n  padding: 24px;\n}\n.login-wrapper .login-form .welcome {\n  font-size: 26px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 24px;\n}\n.login-wrapper .login-form .username, .login-wrapper .login-form .password {\n  display: block;\n  width: 100%;\n  padding: 8px 12px;\n  font-size: 24px;\n  margin-bottom: 16px;\n}\n.login-wrapper .login-form .login-button {\n  display: block;\n  margin: auto;\n  background-color: #F2AC21;\n  color: white;\n  border: 0;\n  border-radius: 100px;\n  width: 236px;\n  height: 60px;\n  border-radius: 100px;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxraW9zay1kYXNoYm9hcmQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNFUjtBRERRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0daO0FERFE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDR1o7QUREUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vYXNzZXRzLzBfSDdsVTZmQ2dqNGVIeVZ6dzVIZUx3dzFGQS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgLmxvZ2luLWZvcm17XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6NjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgICAgIHRvcDpjYWxjKDUwJSAtIDIwMHB4KTtcclxuICAgICAgICBsZWZ0OmNhbGMoNTAlIC0gMzAwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6MjRweDtcclxuICAgICAgICAud2VsY29tZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOjI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToyNHB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2VybmFtZSwgLnBhc3N3b3Jke1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjhweCAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9naW4tYnV0dG9ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRjJBQzIxIDtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjM2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyNHB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiLmxvZ2luLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy8wX0g3bFU2ZkNnajRlSHlWenc1SGVMd3cxRkEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB0b3A6IGNhbGMoNTAlIC0gMjAwcHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDMwMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjRweDtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1mb3JtIC53ZWxjb21lIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLWZvcm0gLnVzZXJuYW1lLCAubG9naW4td3JhcHBlciAubG9naW4tZm9ybSAucGFzc3dvcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tZm9ybSAubG9naW4tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQUMyMTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMjM2cHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loginData = {
            userName: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    login() {
        let log = this.auth.login(this.loginData).subscribe((data) => {
            localStorage.setItem("usr", data.toString());
            this.router.navigate(["admin"]);
        }, (err) => {
            console.log(err);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(data) {
        return this.http.post("dashboard/login", data);
    }
    addUser(user) {
        return this.http.post("dashboard/adduser", user);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/manage-products.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/manage-products.service.ts ***!
  \*****************************************************/
/*! exports provided: ManageProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsService", function() { return ManageProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ManageProductsService = class ManageProductsService {
    constructor(http) {
        this.http = http;
    }
    getIngredientMenus() {
        return this.http.get("dashboard/admin/ingr_menu");
    }
    getIngredients() {
        return this.http.get("dashboard/admin/ingredient");
    }
    getProductMenus() {
        return this.http.get("dashboard/admin/prod_menu");
    }
    getProducts() {
        return this.http.get("dashboard/admin/product");
    }
    getComboMenu() {
        return this.http.get("dashboard/admin/combo_menu");
    }
    addIngredientMenu(title) {
        return this.http.post("dashboard/admin/ingr_menu/add", { title });
    }
    addIngredient(ingredient) {
        return this.http.post("dashboard/admin/ingredient/add", ingredient);
    }
    addProductMenu(title) {
        return this.http.post("dashboard/admin/prod_menu/add", { title });
    }
    addProduct(data) {
        return this.http.post("dashboard/admin/product/add", data);
    }
    addCombo(data) {
        return this.http.post("dashboard/admin/combo/add", data);
    }
    addComboMenu(data) {
        return this.http.post("dashboard/admin/combo_menu/add", data);
    }
    addComboProd(data) {
        return this.http.post("dashboard/admin/combo_prod/add", data);
    }
    deleteIngredient(id) {
        return this.http.delete("dashboard/admin/ingredient/delete", { params: { id: id } });
    }
};
ManageProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ManageProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ManageProductsService);



/***/ }),

/***/ "./src/app/services/manage-users.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/manage-users.service.ts ***!
  \**************************************************/
/*! exports provided: ManageUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersService", function() { return ManageUsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ManageUsersService = class ManageUsersService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get("dashboard/users");
    }
};
ManageUsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ManageUsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ManageUsersService);



/***/ }),

/***/ "./src/app/super-admin/manage-user/manage-user.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/super-admin/manage-user/manage-user.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-wrapper {\n  height: 100%;\n  font-weight: 600;\n}\n.user-wrapper .add-user {\n  font-size: 24px;\n  margin: 24px;\n  padding: 16px;\n  border-radius: 100px;\n  border: 0;\n  background-color: #F2AC21;\n  color: white;\n  outline: 0;\n}\n.user-wrapper .users {\n  overflow: auto;\n}\n.user-wrapper .users .no-user {\n  margin: 20px;\n  font-size: 40px;\n  color: #5E5B58;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXItYWRtaW4vbWFuYWdlLXVzZXIvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxraW9zay1kYXNoYm9hcmQvc3JjXFxhcHBcXHN1cGVyLWFkbWluXFxtYW5hZ2UtdXNlclxcbWFuYWdlLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N1cGVyLWFkbWluL21hbmFnZS11c2VyL21hbmFnZS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNFUjtBRENJO0VBQ0ksY0FBQTtBQ0NSO0FEQVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLWFkbWluL21hbmFnZS11c2VyL21hbmFnZS11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItd3JhcHBlcntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgLmFkZC11c2Vye1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgIG1hcmdpbjoyNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6MTZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xyXG4gICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I0YyQUMyMSA7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgb3V0bGluZTowXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLnVzZXJze1xyXG4gICAgICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAgICAgLm5vLXVzZXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6NDBweDtcclxuICAgICAgICAgICAgY29sb3I6IzVFNUI1ODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIudXNlci13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnVzZXItd3JhcHBlciAuYWRkLXVzZXIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMjRweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQUMyMTtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiAwO1xufVxuLnVzZXItd3JhcHBlciAudXNlcnMge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi51c2VyLXdyYXBwZXIgLnVzZXJzIC5uby11c2VyIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNUU1QjU4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/super-admin/manage-user/manage-user.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/super-admin/manage-user/manage-user.component.ts ***!
  \******************************************************************/
/*! exports provided: ManageUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserComponent", function() { return ManageUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_manage_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/manage-users.service */ "./src/app/services/manage-users.service.ts");



let ManageUserComponent = class ManageUserComponent {
    constructor(mannageUser) {
        this.mannageUser = mannageUser;
        this.opendialog = false;
    }
    ngOnInit() {
        this.mannageUser.getUsers().subscribe(data => {
            this.users = data;
            console.log(data);
        });
    }
    addUser() {
        this.opendialog = true;
    }
    close() {
        this.opendialog = false;
    }
};
ManageUserComponent.ctorParameters = () => [
    { type: _services_manage_users_service__WEBPACK_IMPORTED_MODULE_2__["ManageUsersService"] }
];
ManageUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-user',
        template: __webpack_require__(/*! raw-loader!./manage-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/super-admin/manage-user/manage-user.component.html"),
        styles: [__webpack_require__(/*! ./manage-user.component.scss */ "./src/app/super-admin/manage-user/manage-user.component.scss")]
    })
], ManageUserComponent);



/***/ }),

/***/ "./src/app/super-admin/super-admin.component.scss":
/*!********************************************************!*\
  !*** ./src/app/super-admin/super-admin.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-wrapper {\n  font-weight: 500;\n}\n.dashboard-wrapper .sidebar {\n  position: absolute;\n  height: 100%;\n  width: 250px;\n  display: inline-block;\n  background-color: #5E5B58;\n  padding: 20px 0;\n}\n.dashboard-wrapper .sidebar .nav {\n  color: white;\n  cursor: pointer;\n  padding: 10px 15px;\n  font-size: 24px;\n}\n.dashboard-wrapper .route {\n  position: absolute;\n  left: 250px;\n  width: calc(100% - 250px);\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXItYWRtaW4vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxraW9zay1kYXNoYm9hcmQvc3JjXFxhcHBcXHN1cGVyLWFkbWluXFxzdXBlci1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3VwZXItYWRtaW4vc3VwZXItYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHWjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvc3VwZXItYWRtaW4vc3VwZXItYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLXdyYXBwZXJ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLnNpZGViYXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jazsgICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1RTVCNTg7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4IDA7XHJcbiAgICAgICAgLm5hdntcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzoxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyNHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvdXRle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OjI1MHB4O1xyXG4gICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDI1MHB4KTtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBvdmVyZmxvdzphdXRvXHJcbiAgICB9XHJcbn0iLCIuZGFzaGJvYXJkLXdyYXBwZXIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRhc2hib2FyZC13cmFwcGVyIC5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU1QjU4O1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uZGFzaGJvYXJkLXdyYXBwZXIgLnNpZGViYXIgLm5hdiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAucm91dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI1MHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/super-admin/super-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/super-admin/super-admin.component.ts ***!
  \******************************************************/
/*! exports provided: SuperAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminComponent", function() { return SuperAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SuperAdminComponent = class SuperAdminComponent {
    constructor(router) {
        this.router = router;
        this.menu = [
            {
                title: "Manage Users ",
                icon: "fas fa-users",
                link: ""
            },
            {
                title: "Profile",
                icon: "fas fa-address-card",
                link: "/profile"
            },
        ];
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem("usr");
        this.router.navigate([""]);
    }
};
SuperAdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SuperAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-super-admin',
        template: __webpack_require__(/*! raw-loader!./super-admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/super-admin/super-admin.component.html"),
        styles: [__webpack_require__(/*! ./super-admin.component.scss */ "./src/app/super-admin/super-admin.component.scss")]
    })
], SuperAdminComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: "http://localhost:3500/user_kiosk/",
    staticUrl: "http://localhost:3500/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\kiosk-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map