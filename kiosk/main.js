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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@fadeAnimation]=\"getRouterOutletState(outlet)\" >\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/combo-customize/combo-customize.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/combo-customize/combo-customize.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customize-wrapper\">\n    <div class=\"header\">\n        <div class=\"col1\">Categories</div>\n        <div  class=\"col2\">Select Your Ingredients</div>\n    </div>\n    <div class=\"product-list\">\n        <div class=\"product\" *ngFor='let menu of product?.menus;let mi = index'>\n            <div class=\"product-title\">{{menu.title}}</div>\n            <div class=\"types\"  *ngIf=\"openTypeId!==mi\">\n                <div class=\"type\" *ngFor=\"let prod of menu.products\">\n                    <div class=\"prod\" [ngClass]=\"getSelected(prod._id, menu.default[0]._id)\" (click)=\"continue(mi,prod)\">\n                        <img [src]=\"imgUrl+prod.image\" alt=\"\" class=\"prod-img\">\n                        <div class=\"prod-content\">\n                            <div class=\"title\">{{prod?.title}}</div>   \n                            <div class=\"price\">$ {{prod?.price}}</div>\n                            <div class=\"sz\" *ngIf=\"prod.sizable\">{{prod?.size.title}}</div>\n                            \n                        </div>\n                    </div>\n                    <div class=\"customize\" *ngIf=\"menu.configurable\" (click)=\"customize(menu.default[0])\">Edit {{menu.title}} Ingredients</div>\n                </div>                \n            </div> \n            \n            <div class=\"types\" *ngIf=\"openTypeId===mi\" >\n                <div class=\"type\" *ngFor=\"let size of SizeProd?.sizes; let si=index\">\n                    <div class=\"prod\" [ngClass]=\"getSizeSelected(size)\" (click)=\"getSize(size)\">\n                        <img [src]=\"imgUrl+SizeProd.image\" alt=\"\" class=\"prod-img\" >\n                        <div class=\"prod-content\">\n                            <div class=\"title\">{{size?.title}}</div>\n                            <div class=\"price\">$ {{size?.price}}</div>\n                        </div>\n                    </div>\n                    <div class=\"customize\" *ngIf=\"menu.configurable\" (click)=\"customize(menu.default[0])\">Edit {{menu.title}} Ingredients</div>\n                </div>                \n            </div>      \n        </div>        \n    </div>    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/combo-menu/combo-menu.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/combo-menu/combo-menu.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"special-wrapper\">\n    <div class=\"header\">Specials</div>\n    <div class=\"specials\">\n        <div class=\"special\" *ngFor=\"let special of this.ms.specials|async\" (click)=\"getCombo(special)\">\n            <div class=\"details\">\n                <img [src]=\"imgUrl+special.image\" alt=\"\" >                \n                <div class=\"title\">{{special.title}}</div>\n                <div class=\"price\">$ {{special.price}}</div>\n            </div>            \n        </div>        \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/menu-detail/menu-detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/menu-detail/menu-detail.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-wrapper\">\n    <div class=\"header\">\n        <div class=\"col1\">Menu</div>\n        <div  class=\"col2\">Select Your Product</div>\n    </div>\n    <div class=\"menu-list\">\n        <div class=\"menu\" *ngFor='let m of menu'>\n            <div class=\"menu-title\">{{m.title}}</div>\n            <div class=\"products\" *ngIf=\"mId!==m._id\">\n                <div class=\"prod\" *ngFor='let prod of m.products' (click)=\"continue(prod, m._id)\">\n                    <img [src]=\"imgUrl+prod.image\" alt=\"\" class=\"product-image\" >\n                    <div class=\"prod-title\">{{prod.title}}</div>\n                    <div class=\"prod-price\">$ {{prod.price}}</div>\n                </div>\n            </div>\n            <div class=\"products\" *ngIf=\"mId===m._id\">\n                    <div class=\"prod\" *ngFor='let size of selectedProd.sizes' (click)=\"order(size)\">\n                        <img [src]=\"imgUrl+selectedProd.image\" alt=\"\" class=\"product-image\" >\n                        <span [class]=\"size.selected?'selected':''\">\n                            <div class=\"prod-title\">{{size.title}}</div>\n                            <div class=\"prod-price\">$ {{size.price}}</div>\n                        </span>\n                        \n                    </div>\n                </div>\n\n        </div>\n        \n    </div>\n    \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/payment/card-pay/card-pay.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/payment/card-pay/card-pay.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cash-wrapper\">\n        <div class=\"left-container\">    \n            <div style=\"margin-bottom:6px\">\n                <button class=\"back-button\" (click)=\"goBack()\"><i  class=\"far fa-long-arrow-alt-left\"></i> &nbsp;&nbsp;&nbsp;Back</button>\n            </div>   \n            <div class=\"title\">\n                    Please insert card or tap for Apple Pay, Samsung Pay etc\n            </div> \n            <div style=\"color: #5E5B58;\">\n                <button class=\"cancel-button\" (click)=\"cancel()\">Cancel</button>\n                <div class=\"total-amount\">Total amount: $ {{total}}</div>\n            </div>\n            \n        </div> \n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/payment/cash-pay-finish/cash-pay-finish.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/payment/cash-pay-finish/cash-pay-finish.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cash-wrapper\">\n    <div class=\"left-container\">\n        <div class=\"title\">\n            Thank You, you paid $ {{inserted}} $ {{inserted-total}} change wil l come with your order. Please collect your receipt below.\n        </div> \n        <div style=\"color: #5E5B58;\">\n            <button class=\"finish-button\" (click)=\"finish()\">Finished</button>\n            <div class=\"total-amount\">Total amount: $ {{total}}</div>\n            <span>Inserted amount </span> <input type=\"text\" placeholder=\"$ 0.00\" readonly class=\"insert-amount\" [value]=\"'$ '+inserted\">\n        </div>        \n    </div> \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/payment/cash-pay/cash-pay.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/payment/cash-pay/cash-pay.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cash-wrapper\">\n    <div class=\"left-container\">    \n        <div style=\"margin-bottom:6px\">\n            <button class=\"back-button\" (click)=\"goBack()\"><i  class=\"far fa-long-arrow-alt-left\"></i> &nbsp;&nbsp;&nbsp;Back</button>\n        </div>   \n        <div class=\"title\">\n                Please Insert Cash below and push finished button. Your change will come with your order! Enjoy Your Food!\n        </div> \n        <div style=\"color: #5E5B58;\">\n            <button class=\"cancel-button\" (click)=\"cancel()\">Cancel</button>\n            <div class=\"total-amount\">Total amount: $ {{total}}</div>\n            <span>Inserted amount </span> <input type=\"text\" placeholder=\"$ 0.00\" readonly class=\"insert-amount\" [value]=\"'$ '+inserted\">\n        </div>\n        \n    </div> \n    <!--<div class=\"select-pay\">\n        <div class=\"card\">\n                <img src=\"../../../../assets/images/visa-pay-logo.svg\" alt=\"\" srcset=\"\" style=\"margin-right:14px\">\n                <img src=\"../../../../assets/images/mastercard.svg\" alt=\"\" srcset=\"\">\n                <img src=\"../../../../assets/images/paypal-logo-in-rectangular-black-card.svg\" alt=\"\" srcset=\"\" style=\"margin-right:14px\">\n                <img src=\"../../../../assets/images/american-express-logo.svg\" alt=\"\" srcset=\"\">\n        </div>\n        <button class=\"pay-button\" (click)=\"setpaytype('card')\">Pay Card</button>\n    </div>-->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/payment/payment-finish/payment-finish.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/payment/payment-finish/payment-finish.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cash-wrapper\">\n    <div class=\"left-container\">\n        <div class=\"title\">\n            Thank you, your payment is done successfully. When your order will ready you'll receive message so please fill the below fields\n        </div> \n        <div class=\"input\">\n            <input type=\"text\" class=\"email\" placeholder=\"Email\" readonly  (click)=\"selectInp('email')\" [value]=\"email\" >\n            <span class=\"or\">OR</span>\n            <input type=\"text\" class=\"phone\" placeholder=\"Phone\" readonly  (click)=\"selectInp('phone')\" [value]=\"phone\">\n        </div>\n        <div style=\"color: #5E5B58;\">\n            <button class=\"close-button\" (click)=\"close()\">Close</button>\n            <button class=\"submit-button\" (click)=\"submit()\">Submit</button>\n        </div>        \n    </div> \n</div>\n<div class=\"keyboard\" [style.display]=\"keyboard?'block':'none'\">\n    <div class=\"simple-keyboard\"></div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/payment/payment.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/payment/payment.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-tip [price]=\"price\" *ngIf=\"route=='select-tip'\" (onSetTipData)=\"setTipData($event)\" [TAX]=\"getTax(tax,price)\"></app-tip>\n    <app-select-pay *ngIf=\"route=='select-pay-method'\"\n     [sub_total]=\"price\" [tip]=\"tip\" [TAX]=\"getTax(tax,price)\" [total]=\"getTotal(tax,price,tip)\" (onSetPayData)=\"setPayment($event)\"></app-select-pay>\n    <app-cash-pay *ngIf=\"route=='cash-pay'\" (onSetPayMethod)=\"setPayment($event)\" [total]=\"getTotal(tax,price,tip)\" [inserted]=\"inserted_ammount\" (onGoBack)=\"goBack()\"></app-cash-pay>\n    <app-card-pay *ngIf=\"route=='card-pay'\" (onSetPayMethod)=\"setPayment($event)\" [total]=\"getTotal(tax,price,tip)\" (onGoBack)=\"goBack()\"></app-card-pay>\n    <app-cash-pay-finish  *ngIf=\"route=='cash-pay-finish'\" [total]=\"getTotal(tax,price,tip)\" [inserted]=\"inserted_ammount\" (OnFinish)=\"finish()\"></app-cash-pay-finish>\n    <app-payment-finish   *ngIf=\"route=='pay-finish'\" (onClose)=\"close()\" (onSubmit)=\"submit()\"></app-payment-finish>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/payment/select-pay/select-pay.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/payment/select-pay/select-pay.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pay-wrapper\">\n    <div class=\"left-container\">\n        <textarea class=\"spec-instructions\" placeholder=\"Type here your special instructions\" (click)=\"selectInp('spec-instructions')\" readonly>{{spec_instructions}}</textarea>\n        <button class=\"cancel-button\" (click)=\"cancel()\">Cancel</button>\n    </div>       \n    <div class=\"select-pay\">\n        <div class=\"cash\">\n            <sup>$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sup>\n            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n            <sup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$</sup>\n        </div>\n        <button class=\"pay-button\" (click)=\"setpaytypeData('cash')\">Pay Cash</button>\n    </div>\n    <div class=\"payment-data\">\n        <div class=\"detail\">\n            <div class=\"data\">\n                <div>Sub-total</div>\n                <div>$ {{sub_total}}</div>\n            </div>\n            <div class=\"data\">\n                <div>TAX</div>\n                <div>$ {{TAX}}</div>\n            </div>\n            <div class=\"data\">\n                <div>Tip</div>\n                <div>$ {{tip}}</div>\n            </div>\n        </div>\n        <div class=\"total\">\n            <div>TOTAL AMOUNT</div>\n            <div style=\"color:#F2AC21\">$ {{total}}</div>\n        </div>\n    </div>\n    <div class=\"select-pay\">\n        <div class=\"card\">\n                <img src=\"../../../../usr_kiosk/assets/images/visa-pay-logo.svg\" alt=\"\" srcset=\"\" style=\"margin-right:14px\">\n                <img src=\"../../../../usr_kiosk/assets/images/mastercard.svg\" alt=\"\" srcset=\"\">\n                <img src=\"../../../../usr_kiosk/assets/images/paypal-logo-in-rectangular-black-card.svg\" alt=\"\" srcset=\"\" style=\"margin-right:14px\">\n                <img src=\"../../../../usr_kiosk/assets/images/american-express-logo.svg\" alt=\"\" srcset=\"\">\n        </div>\n        <button class=\"pay-button\" (click)=\"setpaytypeData('card')\">Pay Card</button>\n    </div>\n</div>\n<div class=\"keyboard\" [style.display]=\"keyboard?'block':'none'\">\n    <div class=\"simple-keyboard\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/payment/tip/tip.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/payment/tip/tip.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tip-wrapper\">\n    <div class=\"left-container\">\n        <textarea class=\"spec-instructions\" placeholder=\"Type here your allergy information\" (click)=\"selectInp('spec-instructions')\"  readonly>{{spec_instructions}}</textarea>\n        <button class=\"cancel-button\" (click)=\"cancel()\">Cancel</button>\n    </div>\n    <div class=\"right-container\">\n        <div class=\"header\">We're Glad We're in your Journey</div>\n        <div class=\"tips\" *ngIf=\"!custom\">\n            <button class=\"tip-button\" (click)=\"setData(price,30)\">30% Tip | $ {{getTip(price,30)}}</button>\n            <button class=\"tip-button\" (click)=\"setData(price,20)\">20% Tip | $ {{getTip(price,20)}}</button>\n            <button class=\"tip-button\" (click)=\"setData(price,10)\">10% Tip | $ {{getTip(price,10)}}</button>\n        </div>\n        <div class=\"menu\"  *ngIf=\"!custom\">\n            <button class=\"menu-button\" (click)=\"custom=true\">Custom Tip</button>\n            <button class=\"menu-button\" (click)=\"setData(price,0)\">No Thanks</button>\n        </div>\n        <div class=\"custom-tip\"  *ngIf=\"custom\">\n            <input type=\"text\" #tip class=\"tip-input\" placeholder=\"Type Custom Tip\" (click)=\"selectInp('custom-tip')\" [value]=\"tipValue\" readonly>\n            <button class=\"next-button\" (click)=\"setData(price,tip.value)\"><i class=\"fas fa-long-arrow-alt-right\"></i></button>\n        </div>\n    </div>    \n</div>\n<div class=\"keyboard\" [style.display]=\"keyboard?'block':'none'\">\n    <div class=\"simple-keyboard\"></div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-customize/product-customize.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-customize/product-customize.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customize-wrapper\">\n    <div class=\"header\">\n        <div class=\"col1\">Categories</div>\n        <div  class=\"col2\">Select Your Ingredients</div>\n    </div>\n    <div class=\"ingredient-list\">\n        <div class=\"ingredient\" *ngFor='let ingredient of product?.ingredients;let ii = index'>\n            <div class=\"ingredient-title\">{{ingredient.title}}</div>\n            <div class=\"types\" >\n                <div class=\"type \" *ngFor='let type of ingredient.types;let ti = index' >\n                    <div class=\"type-container\" *ngIf=\"type?._id!==openTypeId\" [ngClass]=\"type && type.selected?'selected':''\" >\n                        <div  >\n\n                        </div>\n                        <img [src]=\"imgUrl+type.image\" alt=\"\" class=\"type-container-img\" >\n                        <div class=\"type-container-detail\" (click)=\"openTypeSelecting(type._id)\">\n                            <div class=\"title\" >\n                                <div *ngIf=\"!type.selected\">Add</div>\n                                <div *ngIf=\"type.selected\"><span *ngIf=\"type.selected_qty==0.5\">Light</span><span *ngIf=\"type.selected_qty==2\">Double</span></div>\n                                <div>{{type.title}}</div>\n                            </div>\n                            <div class=\"price\">$ {{type.price}}</div>\n                        </div>\n                    </div>   \n                    <div class=\"type-selecting\" *ngIf=\"type?._id===openTypeId\" >\n                        <div class=\"selecting-header\">\n                            <div class=\"heading\">\n                                Add {{type.title}} \n                            </div>\n                            <div class=\"close\" (click)=\"openTypeId=''\">\n                               <i class=\"fal fa-times\"></i>\n                            </div>                            \n                        </div>\n                        <div class=\"control-buttons\">\n                            <button (click)=\"addProduct('normal',type,ingredient)\" [disabled]=\"type.selected &&!type.selected_qty\">Yes \n                                <span *ngIf=\"type.selected_qty\">(${{type.normal_price}})</span>\n                            </button>\n                            <button (click)=\"deleteItem(type._id,ii,ti)\" [disabled]=\"!type.selected\">Delete \n                                <span *ngIf=\"type.selected\">(-${{type.price}})</span>\n                            </button>\n                            <button (click)=\"addProduct('light',type,ingredient)\" [disabled]=\"type.selected &&type.selected_qty==0.5\">Light\n                                <span *ngIf=\"type.selected_qty!='light'\">(${{type.light_price}})</span>\n                            </button>\n                            <button (click)=\"addProduct('double',type,ingredient)\" [disabled]=\"type.selected &&type.selected_qty==2\">Double\n                                <span *ngIf=\"type.selected_qty!='double'\">(${{type.double_price}})</span>\n                            </button>\n                        </div>\n                    </div>                 \n                </div>\n            </div>           \n        </div>\n        \n    </div>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-details/product-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-details/product-details.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-wrapper\">\n    <div class=\"header\">{{product.title}}</div>\n    <div class=\"detail-menu\">\n        <div class=\"left-button\" *ngIf=\"type!=='combo'\">\n            <div>Quick Order</div>\n            <div>No Changes</div>\n            <div style=\"font-size:24px\">$ {{quickProd.price}}</div>\n        </div>\n        <div class=\"left-button-transparent\" *ngIf=\"type==='combo'\"></div>\n        <img [src]=\"imgUrl+product.image\" alt=\"\" class=\"product-image\" >\n        <div class=\"details\" *ngIf=\"type==='combo'\">\n            <div class=\"images\" >\n                <span *ngFor='let menu of product.menus' >                    \n                    <img [src]=\"imgUrl+menu?.default.image\" alt=\"\" class='selected-image' > \n                </span>                \n            </div>            \n            <div class=\"text\">\n                <span *ngFor='let menu of product.menus'>\n                    <span *ngIf=\"menu.dafault&&menu.default.length\">\n                        {{menu.default[0]?.title}}<span *ngIf=\"menu.configurable&&menu.default[0].defaults.length\">\n                            (<span *ngFor='let default of menu.default[0].defaults'>{{default.title}}<span *ngIf=\"default.selected_qty\">(X {{default.selected_qty}})</span>,\n                            </span>)</span><span *ngIf=\"menu.default[0].sizable\">({{menu.default[0].size.title}})</span>,\n                    </span>\n                </span>\n            </div>\n        </div>\n        <div class=\"details\" *ngIf=\"type!=='combo'\">\n                <div class=\"images\" >\n                    <span *ngFor='let selected of product.defaults' >                    \n                        <img [src]=\"imgUrl+selected?.image\" alt=\"\" class='selected-image' > \n                    </span>                \n                </div>            \n                <div class=\"text\">\n                    Our {{product.title}} starts with\n                    <span *ngFor='let selected of product.defaults'>{{selected.title}}<span *ngIf=\"selected.selected_qty\">(x{{selected.selected_qty}})</span>, </span>\n                </div>\n            </div>\n        <div class=\"ordering\">\n            <div class=\"order-button\" *ngIf=\"type!=='prod-customize'\">Quick order <span>$ {{product.price}}</span></div>\n            <div class=\"order-button\" *ngIf=\"type=='prod-customize'\" (click)=\"next()\">next</div>\n            <div class=\"cancel-button\">Cancel</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login *ngIf=\"!authorize()\"></app-login>\n<div class=\"wrapper\" [routerLink]=\"'menu'\">\n    <div class=\"header-text\">Touch to Begin</div>\n    <div class=\"hr\"></div>\n    <img [src]=\"imgUrl+'1.png'\" alt=\"\" class=\"back-img\" >\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-wrapper\" appClickStopPropagation (click)=\"keyboard=null;selectedInput=''\">\n<toaster-container></toaster-container>\n   <form action=\"\" class=\"auth-form \" [ngClass]='selectedInput!=\"\"?\"focused\":\"\"' >\n       <h2 style=\"text-align:center\">PLEASE LOGIN FOR FIRST TIME RUN</h2>\n       <input type=\"text\"  placeholder=\"Username/Email\"\n        appClickStopPropagation readonly \n        (click)=\"selectInp('username')\" [ngClass]='selectedInput==\"username\"?\"focused\":\"\"' \n        name=\"username\" [(ngModel)]=\"user.userName\">\n       <input type=\"text\" placeholder=\"Terminal Number\" \n       appClickStopPropagation readonly (click)=\"selectInp('terminal')\"\n        [ngClass]='selectedInput==\"terminal\"?\"focused\":\"\"'\n         name=\"terminal\" [(ngModel)]=\"user.terminal\">\n       <input type=\"password\" placeholder=\"password\"\n        appClickStopPropagation readonly (click)=\"selectInp('password')\" \n        [ngClass]='selectedInput==\"password\"?\"focused\":\"\"' name=\"password\"\n         [(ngModel)]=\"user.password\">\n       <button (click)=\"login()\">Log In</button>\n   </form>\n   <div class=\"keyboard\" [style.display]=\"keyboard?'block':'none'\" appClickStopPropagation>\n    <div class=\"simple-keyboard\"></div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"logo\"><img [src]=\"imgUrl+'logo.png'\" alt=\"\" srcset=\"\" ></div>    \n    <div class=\"pay-head\">Payment details</div>\n    <div class=\"payment-wrapper\" *ngIf=\"orders.length\">\n        <div class=\"product-detail\">            \n            <ol style=\"padding:0 0 0 16px\" >\n                <li class=\"ordered-product\" *ngFor='let order of orders' >                           \n                    <div class=\"ordered-product-detail\" *ngIf=\"!order.isSpecial\">                                                      \n                        <div class=\"detail-menu\">\n                            <div class=\"content\">\n                                <div><div style=\"display: inline-block\">{{order.title}}</div><div style=\"display: inline-block\" *ngIf=\"order.size\">({{order.size}})</div></div>                          \n                                <div class=\"quant-control\">                                    \n                                    <div class=\"minus\" (click)=\"order.quantity=order.quantity>0?order.quantity-1:0\" >\n                                        <i class=\"fal  fa-minus\"></i>\n                                    </div>\n                                    <div class=\"prod-quant\">{{order.quantity}}</div>\n                                    <div class=\"plus\" (click)=\"order.quantity=order.quantity+1\"  >\n                                        <i class=\"fal fa-plus\"></i>                                                                                \n                                    </div>\n                                </div>\n                            </div>\n                            <div><span *ngFor=\"let ingr of order.defaults\" style=\"display: inline; font-size:12px\">{{ingr.title}}<span *ngIf='ingr.selected_qty' style=\"display: inline; font-size:12px\">(X {{ingr.selected_qty}})</span>, </span></div>\n                        </div>\n                        <div style='line-height:1.5'>$ {{getPrice(order)}}</div>\n                    </div> \n\n                    <div class=\"ordered-product-detail\" *ngIf=\"order.isSpecial\">                                                      \n                        <div class=\"detail-menu\">\n                            <div class=\"content\">\n                                <div><div style=\"display: inline-block\">{{order.title}}</div><div style=\"display: inline-block\" *ngIf=\"order.size\">({{order.size}})</div></div>                          \n                                <div class=\"quant-control\">                                    \n                                    <div class=\"minus\" (click)=\"order.quantity=order.quantity>0?order.quantity-1:0\" >\n                                        <i class=\"fal  fa-minus\"></i>\n                                    </div>\n                                    <div class=\"prod-quant\">{{order.quantity}}</div>\n                                    <div class=\"plus\" (click)=\"order.quantity=order.quantity+1\"  >\n                                        <i class=\"fal fa-plus\"></i>                                                                                \n                                    </div>\n                                </div>\n                            </div>\n                            <div><span *ngFor=\"let menu of order.menus\">{{menu.default[0].title}}<span *ngIf=\"menu.default[0].size\">({{menu.default[0].size.title}})</span><span *ngIf=\"menu.default[0].customizable\">(<span *ngFor=\"let def of menu.default[0].defaults\">{{def.title}}<span *ngIf=\"def.selected_qty\">(X{{def.selected_qty}})</span>, </span>)</span>, </span></div>\n                        </div>\n                        <div style='line-height:1.5'>$ {{getPrice(order)}}</div>\n                    </div>                  \n                </li>                \n            </ol>\n        </div>\n        <div class=\"payment-detail\">\n            <div class=\"total\">\n                <div>TOTAL</div>\n                <div>$ {{getTotal()}}</div>\n            </div>\n            <div class=\"tax\">\n                <div>TAX</div>\n                <div>$ {{getTax()}}</div>\n            </div>\n        </div> \n        <div class=\"final-pay-container\" >\n            <div>Pay This Amount</div>\n            <div>$ {{getPay()}} </div>\n        </div>\n        <div class=\"button-container\">\n            <button [routerLink]=\"['/']\" class=\"cancel\">Cancel</button>\n            <button class=\"pay\" (click)=\"pay()\">Pay<span>$ {{getPay()}}</span></button>\n        </div>\n    </div>    \n    <button class=\"back-bttn\" (click)=\"goBack()\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"14\" viewBox=\"0 0 32 14\">\n                <defs>\n                    <style>.a{fill:#5e5b58;}</style>\n                </defs>\n                <g transform=\"translate(0 0)\">\n                    <path class=\"a\" d=\"M.185,143.579,7.3,137.2a.6.6,0,0,1,.648-.091.529.529,0,0,1,.352.529v4.084H31.407a.581.581,0,0,1,.426.164A.564.564,0,0,1,32,142.3v3.5a.562.562,0,0,1-.167.419.582.582,0,0,1-.426.164H8.3v4.084a.549.549,0,0,1-.352.529.584.584,0,0,1-.648-.109L.185,144.435A.591.591,0,0,1,0,144,.572.572,0,0,1,.185,143.579Z\" transform=\"translate(0 -137.052)\"/>\n                </g>\n            </svg>\n            back\n    </button>\n</div>\n<div>        \n    <app-products></app-products>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div #wrapper class=\"wrapper\">\n    <app-combo-menu *ngIf='(rs.$route|async)==\"menu\"'></app-combo-menu>\n    <app-product-details *ngIf='!((rs.$route|async)==\"menu\")'></app-product-details>\n    <app-menu-detail *ngIf='((rs.$route|async)==\"menu\")'></app-menu-detail>\n    <app-product-customize *ngIf='((rs.$route|async)==\"customize\")'></app-product-customize>\n    <app-product-customize *ngIf='((rs.$route|async)==\"customize-combo-prod\")'></app-product-customize>\n    <app-combo-customize  *ngIf='((rs.$route|async)==\"combo\")'></app-combo-customize>\n    \n</div>\n<app-payment  *ngIf='((rs.$payRoute|async)==true)' style=\"position:absolute;width:100%;height:100%;z-index: 1000000000;\"></app-payment>"

/***/ }),

/***/ "./src/app/animmations/navigation.animation.ts":
/*!*****************************************************!*\
  !*** ./src/app/animmations/navigation.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', []);


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");







//import { IngredientsComponent } from './ingredients/ingredients.component';
const routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "menu",
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: "**",
                component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"]
            }
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
/* harmony import */ var _animmations_navigation_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animmations/navigation.animation */ "./src/app/animmations/navigation.animation.ts");



let AppComponent = class AppComponent {
    getRouterOutletState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        animations: [
            _animmations_navigation_animation__WEBPACK_IMPORTED_MODULE_2__["fadeAnimation"]
        ],
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_combo_menu_combo_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/combo-menu/combo-menu.component */ "./src/app/components/combo-menu/combo-menu.component.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "./src/app/components/product-details/product-details.component.ts");
/* harmony import */ var _components_menu_detail_menu_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/menu-detail/menu-detail.component */ "./src/app/components/menu-detail/menu-detail.component.ts");
/* harmony import */ var _components_product_customize_product_customize_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product-customize/product-customize.component */ "./src/app/components/product-customize/product-customize.component.ts");
/* harmony import */ var _components_combo_customize_combo_customize_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/combo-customize/combo-customize.component */ "./src/app/components/combo-customize/combo-customize.component.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");
/* harmony import */ var _components_payment_tip_tip_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/payment/tip/tip.component */ "./src/app/components/payment/tip/tip.component.ts");
/* harmony import */ var _components_payment_select_pay_select_pay_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/payment/select-pay/select-pay.component */ "./src/app/components/payment/select-pay/select-pay.component.ts");
/* harmony import */ var _components_payment_cash_pay_cash_pay_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/payment/cash-pay/cash-pay.component */ "./src/app/components/payment/cash-pay/cash-pay.component.ts");
/* harmony import */ var _components_payment_card_pay_card_pay_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/payment/card-pay/card-pay.component */ "./src/app/components/payment/card-pay/card-pay.component.ts");
/* harmony import */ var _components_payment_cash_pay_finish_cash_pay_finish_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/payment/cash-pay-finish/cash-pay-finish.component */ "./src/app/components/payment/cash-pay-finish/cash-pay-finish.component.ts");
/* harmony import */ var _components_payment_payment_finish_payment_finish_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/payment/payment-finish/payment-finish.component */ "./src/app/components/payment/payment-finish/payment-finish.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directives/click-stop-propagation.directive */ "./src/app/directives/click-stop-propagation.directive.ts");




























const config = { url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticUrl}`, options: {} };
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
            _components_combo_menu_combo_menu_component__WEBPACK_IMPORTED_MODULE_13__["ComboMenuComponent"],
            _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailsComponent"],
            _components_menu_detail_menu_detail_component__WEBPACK_IMPORTED_MODULE_15__["MenuDetailComponent"],
            _components_product_customize_product_customize_component__WEBPACK_IMPORTED_MODULE_16__["ProductCustomizeComponent"],
            _components_combo_customize_combo_customize_component__WEBPACK_IMPORTED_MODULE_17__["ComboCustomizeComponent"],
            _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_18__["PaymentComponent"],
            _components_payment_tip_tip_component__WEBPACK_IMPORTED_MODULE_19__["TipComponent"],
            _components_payment_select_pay_select_pay_component__WEBPACK_IMPORTED_MODULE_20__["SelectPayComponent"],
            _components_payment_cash_pay_cash_pay_component__WEBPACK_IMPORTED_MODULE_21__["CashPayComponent"],
            _components_payment_card_pay_card_pay_component__WEBPACK_IMPORTED_MODULE_22__["CardPayComponent"],
            _components_payment_cash_pay_finish_cash_pay_finish_component__WEBPACK_IMPORTED_MODULE_23__["CashPayFinishComponent"],
            _components_payment_payment_finish_payment_finish_component__WEBPACK_IMPORTED_MODULE_24__["PaymentFinishComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
            _directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_27__["ClickStopPropagationDirective"],
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["SocketIoModule"].forRoot(config),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_25__["ToasterModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/combo-customize/combo-customize.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/combo-customize/combo-customize.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customize-wrapper {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 401px);\n  font-weight: 600;\n}\n.customize-wrapper .header {\n  height: 75px;\n  font-size: 24px;\n  padding-top: 23px;\n  color: #5E5B58;\n}\n.customize-wrapper .header .col1 {\n  display: inline-block;\n  width: 299px;\n  text-align: center;\n}\n.customize-wrapper .header .col2 {\n  display: inline-block;\n  width: calc(100% - 299px);\n  text-align: center;\n}\n.customize-wrapper .product-list {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  overflow: auto;\n}\n.customize-wrapper .product-list .product {\n  background-color: #F9F9F9;\n}\n.customize-wrapper .product-list .product .product-title {\n  vertical-align: top;\n  display: inline-block;\n  text-align: center;\n  width: 299px;\n  height: 249px;\n  font-size: 30px;\n  padding: 90px 0 0 34px;\n  color: #5E5B58;\n}\n.customize-wrapper .product-list .product .types {\n  overflow: auto;\n  white-space: nowrap;\n  vertical-align: top;\n  padding: 22px 6px;\n  display: inline-block;\n  background-color: white;\n  width: calc(100% - 299px);\n  height: 249px;\n  border-bottom: 1px solid #D8D8D8;\n}\n.customize-wrapper .product-list .product .types .type {\n  vertical-align: top;\n  display: inline-block;\n  margin: 0 24px;\n}\n.customize-wrapper .product-list .product .types .type .prod.selected {\n  border-radius: 0;\n  border: 4px solid #3CFF03;\n  background-color: #3CFF03;\n  padding: 0;\n}\n.customize-wrapper .product-list .product .types .type .prod.selected .prod-img {\n  width: 100%;\n  background-color: white;\n  padding: 16px;\n}\n.customize-wrapper .product-list .product .types .type .prod {\n  vertical-align: top;\n  border: 1px solid #3CFF03;\n  height: 200px;\n  width: 200px;\n  border-radius: 8px;\n  display: inline-block;\n  padding: 16px;\n}\n.customize-wrapper .product-list .product .types .type .prod-img {\n  display: block;\n  width: 100%;\n  height: 110px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-bottom: 8px;\n}\n.customize-wrapper .product-list .product .types .type .prod-content {\n  color: #5E5B58;\n  padding-top: 8px;\n  text-align: center;\n}\n.customize-wrapper .product-list .product .types .type .prod-content .title {\n  display: inline-block;\n  width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 14px;\n}\n.customize-wrapper .product-list .product .types .type .prod-content .sz {\n  width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: auto;\n  font-size: 14px;\n}\n.customize-wrapper .product-list .product .types .type .prod-content .price {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 14px;\n}\n.customize-wrapper .product-list .product .types .type .customize {\n  padding-top: 40px;\n  color: #5E5B58;\n  font-size: 16px;\n  border: 2px solid #F2AC21;\n  white-space: normal;\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  text-align: center;\n  display: inline-block;\n  margin-top: 36px;\n  margin-left: 60px;\n}\n.product-list::-webkit-scrollbar {\n  display: none !important;\n}\n.types::-webkit-scrollbar {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21iby1jdXN0b21pemUvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxraW9zay9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tYm8tY3VzdG9taXplXFxjb21iby1jdXN0b21pemUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tYm8tY3VzdG9taXplL2NvbWJvLWN1c3RvbWl6ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDUjtBREFRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFWjtBREFRO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRVo7QURDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ1I7QURBUTtFQUNJLHlCQUFBO0FDRVo7QUREWTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0doQjtBRERZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ0doQjtBREZnQjtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDSXBCO0FESG9CO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0t4QjtBREp3QjtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNNNUI7QURIb0I7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ0t4QjtBREp3QjtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ001QjtBREp3QjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTTVCO0FETDRCO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUVBLGVBQUE7QUNNaEM7QURINEI7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FDSWhDO0FERjRCO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0loQztBREFvQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRXhCO0FETUE7RUFBa0Msd0JBQUE7QUNGbEM7QURHQTtFQUEyQix3QkFBQTtBQ0MzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tYm8tY3VzdG9taXplL2NvbWJvLWN1c3RvbWl6ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21pemUtd3JhcHBlcntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTAwJSA7XHJcbiAgICBoZWlnaHQ6Y2FsYygxMDAlIC0gNDAxcHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gIFxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6NzVweDtcclxuICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDoyM3B4O1xyXG4gICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgLmNvbDF7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDoyOTlweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jazsgICAgICAgICAgICBcclxuICAgICAgICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gMjk5cHgpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9kdWN0LWxpc3R7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTsgICAgICAgIFxyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAgICAgLnByb2R1Y3R7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0Y5RjlGOTtcclxuICAgICAgICAgICAgLnByb2R1Y3QtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6Mjk5cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjQ5cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDkwcHggMCAwIDM0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojNUU1QjU4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnR5cGVze1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MjJweCA2cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSAyOTlweCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjQ5cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRDhEOEQ4OyAgICAgXHJcbiAgICAgICAgICAgICAgICAudHlwZXtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2Quc2VsZWN0ZWR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjRweCBzb2xpZCAjM0NGRjAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQ0ZGMDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2QtaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjE2cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjM0NGRjAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi1pbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6Y29udGFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206OHB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzVFNUI1ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3p7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByaWNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9taXple1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjRjJBQzIxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTpub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NjBweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucHJvZHVjdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7ZGlzcGxheTpub25lICFpbXBvcnRhbnQgfTtcclxuLnR5cGVzOjotd2Via2l0LXNjcm9sbGJhciB7ZGlzcGxheTpub25lICFpbXBvcnRhbnQgfTsiLCIuY3VzdG9taXplLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwMXB4KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmctdG9wOiAyM3B4O1xuICBjb2xvcjogIzVFNUI1ODtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaGVhZGVyIC5jb2wxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjk5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaGVhZGVyIC5jb2wyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjk5cHgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLnByb2R1Y3QtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLnByb2R1Y3QtbGlzdCAucHJvZHVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLnByb2R1Y3QtbGlzdCAucHJvZHVjdCAucHJvZHVjdC10aXRsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjk5cHg7XG4gIGhlaWdodDogMjQ5cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZzogOTBweCAwIDAgMzRweDtcbiAgY29sb3I6ICM1RTVCNTg7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLnByb2R1Y3QtbGlzdCAucHJvZHVjdCAudHlwZXMge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMjJweCA2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyOTlweCk7XG4gIGhlaWdodDogMjQ5cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xufVxuLmN1c3RvbWl6ZS13cmFwcGVyIC5wcm9kdWN0LWxpc3QgLnByb2R1Y3QgLnR5cGVzIC50eXBlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMjRweDtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAucHJvZHVjdC1saXN0IC5wcm9kdWN0IC50eXBlcyAudHlwZSAucHJvZC5zZWxlY3RlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogNHB4IHNvbGlkICMzQ0ZGMDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQ0ZGMDM7XG4gIHBhZGRpbmc6IDA7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLnByb2R1Y3QtbGlzdCAucHJvZHVjdCAudHlwZXMgLnR5cGUgLnByb2Quc2VsZWN0ZWQgLnByb2QtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmN1c3RvbWl6ZS13cmFwcGVyIC5wcm9kdWN0LWxpc3QgLnByb2R1Y3QgLnR5cGVzIC50eXBlIC5wcm9kIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNDRkYwMztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAucHJvZHVjdC1saXN0IC5wcm9kdWN0IC50eXBlcyAudHlwZSAucHJvZC1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAucHJvZHVjdC1saXN0IC5wcm9kdWN0IC50eXBlcyAudHlwZSAucHJvZC1jb250ZW50IHtcbiAgY29sb3I6ICM1RTVCNTg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAucHJvZHVjdC1saXN0IC5wcm9kdWN0IC50eXBlcyAudHlwZSAucHJvZC1jb250ZW50IC50aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmN1c3RvbWl6ZS13cmFwcGVyIC5wcm9kdWN0LWxpc3QgLnByb2R1Y3QgLnR5cGVzIC50eXBlIC5wcm9kLWNvbnRlbnQgLnN6IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLnByb2R1Y3QtbGlzdCAucHJvZHVjdCAudHlwZXMgLnR5cGUgLnByb2QtY29udGVudCAucHJpY2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLnByb2R1Y3QtbGlzdCAucHJvZHVjdCAudHlwZXMgLnR5cGUgLmN1c3RvbWl6ZSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBjb2xvcjogIzVFNUI1ODtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRjJBQzIxO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBoZWlnaHQ6IDEyOHB4O1xuICB3aWR0aDogMTI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG4ucHJvZHVjdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnR5cGVzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/combo-customize/combo-customize.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/combo-customize/combo-customize.component.ts ***!
  \*************************************************************************/
/*! exports provided: ComboCustomizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboCustomizeComponent", function() { return ComboCustomizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/menu.service */ "./src/app/shared/services/menu.service.ts");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





let ComboCustomizeComponent = class ComboCustomizeComponent {
    constructor(ms, rs) {
        this.ms = ms;
        this.rs = rs;
        this.openTypeId = -1;
        this.Subscriptions = [];
        this.imgUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].staticUrl + 'images/';
    }
    ngOnInit() {
        this.Subscriptions.push(this.ms.product.subscribe((dat) => {
            this.type = dat.type;
            this.product = dat.product;
            this.product.menus.forEach(menu => {
                menu.products.forEach(prod => {
                    if (prod._id == menu.default[0]._id) {
                        prod.price = menu.default[0].price;
                    }
                });
            });
        }));
    }
    ngOnDestroy() {
        this.Subscriptions.forEach(s => s.unsubscribe());
    }
    getSelected(id, selected_id) {
        if (selected_id == id) {
            return "selected";
        }
        return "";
    }
    customize(prod) {
        let data = {
            type: "prod-customize",
            product: prod,
            ref: this.product
        };
        this.ms.comboProdCustomize(data);
        this.rs.setRoute("customize-combo-prod");
    }
    continue(mi, prod) {
        if (prod.sizable) {
            this.product.menus[mi].default[0] = prod;
            this.SizeProd = prod;
            this.openTypeId = mi;
        }
    }
    getSizeSelected(size) {
        return size.title == this.SizeProd.size.title ? "selected" : "";
    }
    getSize(size) {
        this.SizeProd.size = size;
        this.SizeProd.price = size.price;
        this.product.price = 0;
        this.product.menus.forEach(menu => {
            this.product.price = this.product.price + menu.default[0].price;
        });
        this.openTypeId = -1;
        this.ms.addForPay({ prod: this.product, action: "update", special: true });
    }
    getimage(image) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.imgUrl}${image}`, true);
        xhr.responseType = 'blob';
        xhr.onload = function (e) {
            var img = document.getElementById(image);
            img.setAttribute('src', window.URL.createObjectURL(this.response));
        };
        xhr.send();
    }
};
ComboCustomizeComponent.ctorParameters = () => [
    { type: _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"] }
];
ComboCustomizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-combo-customize',
        template: __webpack_require__(/*! raw-loader!./combo-customize.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/combo-customize/combo-customize.component.html"),
        styles: [__webpack_require__(/*! ./combo-customize.component.scss */ "./src/app/components/combo-customize/combo-customize.component.scss")]
    })
], ComboCustomizeComponent);



/***/ }),

/***/ "./src/app/components/combo-menu/combo-menu.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/combo-menu/combo-menu.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".special-wrapper {\n  width: 100%;\n  height: 326px;\n  border: 4px solid #3CFF03;\n}\n.special-wrapper .header {\n  margin: 30px 0 24px 54px;\n  text-align: left;\n  font-weight: bold;\n  font-size: 28px;\n  color: #F2AC21;\n}\n.special-wrapper .specials {\n  margin-left: 299px;\n  padding: 0 24px;\n  white-space: nowrap;\n  overflow: auto;\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n}\n.special-wrapper .specials .special {\n  display: inline-block;\n  height: 214px;\n  width: 263px;\n  border-right: 1px solid #5E5B58;\n  padding: 0 24px;\n}\n.special-wrapper .specials .special .details {\n  padding: 16px;\n  color: #5E5B58;\n  font-weight: 600;\n  font-size: 14px;\n}\n.special-wrapper .specials .special .details img {\n  width: 182px;\n  height: 103px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.special-wrapper .specials .special .details .title {\n  margin-top: 16px;\n  width: 182px;\n  height: 36px;\n  overflow: hidden;\n}\n.special-wrapper .specials .special .details .price {\n  margin-top: 6px;\n  text-align: right;\n}\n.specials::-webkit-scrollbar {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21iby1tZW51L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxca2lvc2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbWJvLW1lbnVcXGNvbWJvLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tYm8tbWVudS9jb21iby1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQUk7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0FDRVI7QUREUTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNHWjtBREZZO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNJaEI7QURIZ0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNLcEI7QURIZ0I7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNLcEI7QURGZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNJcEI7QURFQTtFQUE4Qix3QkFBQTtBQ0U5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tYm8tbWVudS9jb21iby1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwZWNpYWwtd3JhcHBlcntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MzI2cHg7XHJcbiAgICBib3JkZXI6NHB4IHNvbGlkICMzQ0ZGMDM7XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIG1hcmdpbjozMHB4IDAgMjRweCA1NHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBmb250LXNpemU6MjhweDtcclxuICAgICAgICBjb2xvcjogI0YyQUMyMTtcclxuICAgIH1cclxuICAgIC5zcGVjaWFsc3sgICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI5OXB4O1xyXG4gICAgICAgIHBhZGRpbmc6MCAyNHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgICAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XHJcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgICAgIC5zcGVjaWFse1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jazsgICAgICAgICAgICBcclxuICAgICAgICAgICAgaGVpZ2h0OjIxNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoyNjNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjNUU1QjU4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjAgMjRweDtcclxuICAgICAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzVFNUI1ODtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDNweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OmNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJpY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5zcGVjaWFsczo6LXdlYmtpdC1zY3JvbGxiYXIge2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50IH0iLCIuc3BlY2lhbC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzI2cHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICMzQ0ZGMDM7XG59XG4uc3BlY2lhbC13cmFwcGVyIC5oZWFkZXIge1xuICBtYXJnaW46IDMwcHggMCAyNHB4IDU0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiAjRjJBQzIxO1xufVxuLnNwZWNpYWwtd3JhcHBlciAuc3BlY2lhbHMge1xuICBtYXJnaW4tbGVmdDogMjk5cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xufVxuLnNwZWNpYWwtd3JhcHBlciAuc3BlY2lhbHMgLnNwZWNpYWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjE0cHg7XG4gIHdpZHRoOiAyNjNweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzVFNUI1ODtcbiAgcGFkZGluZzogMCAyNHB4O1xufVxuLnNwZWNpYWwtd3JhcHBlciAuc3BlY2lhbHMgLnNwZWNpYWwgLmRldGFpbHMge1xuICBwYWRkaW5nOiAxNnB4O1xuICBjb2xvcjogIzVFNUI1ODtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNwZWNpYWwtd3JhcHBlciAuc3BlY2lhbHMgLnNwZWNpYWwgLmRldGFpbHMgaW1nIHtcbiAgd2lkdGg6IDE4MnB4O1xuICBoZWlnaHQ6IDEwM3B4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLnNwZWNpYWwtd3JhcHBlciAuc3BlY2lhbHMgLnNwZWNpYWwgLmRldGFpbHMgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgd2lkdGg6IDE4MnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc3BlY2lhbC13cmFwcGVyIC5zcGVjaWFscyAuc3BlY2lhbCAuZGV0YWlscyAucHJpY2Uge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc3BlY2lhbHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/combo-menu/combo-menu.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/combo-menu/combo-menu.component.ts ***!
  \***************************************************************/
/*! exports provided: ComboMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboMenuComponent", function() { return ComboMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/menu.service */ "./src/app/shared/services/menu.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");





let ComboMenuComponent = class ComboMenuComponent {
    constructor(ms, rs) {
        this.ms = ms;
        this.rs = rs;
        this.imgUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticUrl + 'images/';
    }
    ngOnInit() {
    }
    getimage(image) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.imgUrl}${image}`, true);
        xhr.responseType = 'blob';
        xhr.onload = function (e) {
            var img = document.getElementById(image);
            img.setAttribute('src', window.URL.createObjectURL(this.response));
        };
        xhr.send();
    }
    getCombo(combo) {
        combo.menus = combo.menus.filter(m => {
            return m.default && m.default.length && m.products && m.products.length;
        });
        let data = {
            type: "combo",
            product: combo
        };
        this.rs.setRoute("combo");
        this.ms.addForPay({ prod: combo, action: "add", special: true });
        console.log(combo);
        this.ms.addProduct(data);
    }
};
ComboMenuComponent.ctorParameters = () => [
    { type: _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"] }
];
ComboMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-combo-menu',
        template: __webpack_require__(/*! raw-loader!./combo-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/combo-menu/combo-menu.component.html"),
        styles: [__webpack_require__(/*! ./combo-menu.component.scss */ "./src/app/components/combo-menu/combo-menu.component.scss")]
    })
], ComboMenuComponent);



/***/ }),

/***/ "./src/app/components/menu-detail/menu-detail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/menu-detail/menu-detail.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-wrapper {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 401px);\n}\n.detail-wrapper .header {\n  height: 75px;\n  font-size: 24px;\n  font-weight: bold;\n  padding-top: 23px;\n  color: #5E5B58;\n}\n.detail-wrapper .header .col1 {\n  display: inline-block;\n  width: 299px;\n  text-align: center;\n}\n.detail-wrapper .header .col2 {\n  display: inline-block;\n  width: calc(100% - 299px);\n  text-align: center;\n}\n.detail-wrapper .menu-list {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  overflow: auto;\n}\n.detail-wrapper .menu-list .menu {\n  background-color: #F9F9F9;\n}\n.detail-wrapper .menu-list .menu .menu-title {\n  vertical-align: top;\n  display: inline-block;\n  text-align: center;\n  width: 299px;\n  height: 249px;\n  font-weight: 500;\n  font-size: 30px;\n  padding: 90px 0 0 34px;\n}\n.detail-wrapper .menu-list .menu .products {\n  overflow: auto;\n  white-space: nowrap;\n  vertical-align: top;\n  padding: 24px 6px;\n  display: inline-block;\n  background-color: white;\n  width: calc(100% - 299px);\n  height: 249px;\n  border-bottom: 1px solid #D8D8D8;\n}\n.detail-wrapper .menu-list .menu .products .prod {\n  margin: 0 24px;\n  display: inline-block;\n  border: 1px solid #3CFF03;\n  border-radius: 8px;\n  height: 200px;\n  width: 200px;\n}\n.detail-wrapper .menu-list .menu .products .prod .selected {\n  height: 73px;\n  display: block;\n  background-color: #3CFF03;\n}\n.detail-wrapper .menu-list .menu .products .prod .product-image {\n  display: block;\n  margin: 16px auto 12px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 168px;\n  height: 96px;\n}\n.detail-wrapper .menu-list .menu .products .prod .prod-title {\n  margin: auto;\n  font-size: 14px;\n  font-weight: 500;\n  height: 36px;\n  white-space: normal;\n  width: 168px;\n}\n.detail-wrapper .menu-list .menu .products .prod .prod-price {\n  margin: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: right;\n  width: 168px;\n}\n.menu-list::-webkit-scrollbar {\n  display: none !important;\n}\n.products::-webkit-scrollbar {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LWRldGFpbC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXGtpb3NrL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51LWRldGFpbFxcbWVudS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1kZXRhaWwvbWVudS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0NKO0FEQ0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ1I7QURBUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRVo7QURBUTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VaO0FEQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NSO0FEQVE7RUFDSSx5QkFBQTtBQ0VaO0FERFk7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDR2hCO0FERFk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDR2hCO0FERmdCO0VBQ0ksY0FBQTtFQUVBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDR3BCO0FERm9CO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0l4QjtBREZvQjtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0l4QjtBREZvQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDSXhCO0FERG9CO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0d4QjtBRElBO0VBQStCLHdCQUFBO0FDQS9CO0FEQ0E7RUFBOEIsd0JBQUE7QUNHOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUtZGV0YWlsL21lbnUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbC13cmFwcGVye1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDoxMDAlIDtcclxuICAgIGhlaWdodDpjYWxjKDEwMCUgLSA0MDFweCk7XHJcbiAgXHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIGhlaWdodDo3NXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MjNweDtcclxuICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgIC5jb2wxeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6Mjk5cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sMntcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDI5OXB4KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWVudS1saXN0e1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7ICAgICAgICBcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGOUY5Rjk7XHJcbiAgICAgICAgICAgIC5tZW51LXRpdGxle1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjI5OXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjI0OXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5MHB4IDAgMCAzNHB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3Rze1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MjRweCA2cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSAyOTlweCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjQ5cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRDhEOEQ4O1xyXG4gICAgICAgICAgICAgICAgLnByb2R7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMzQ0ZGMDM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjczcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzNDRkYwM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pbWFnZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjE2cHggYXV0byAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OmNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE2OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6OTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2QtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6bm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNjhweFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2QtcHJpY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNjhweCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubWVudS1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7ZGlzcGxheTpub25lICFpbXBvcnRhbnQgfTtcclxuLnByb2R1Y3RzOjotd2Via2l0LXNjcm9sbGJhciB7ZGlzcGxheTpub25lICFpbXBvcnRhbnQgfTsiLCIuZGV0YWlsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwMXB4KTtcbn1cbi5kZXRhaWwtd3JhcHBlciAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMjNweDtcbiAgY29sb3I6ICM1RTVCNTg7XG59XG4uZGV0YWlsLXdyYXBwZXIgLmhlYWRlciAuY29sMSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI5OXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGV0YWlsLXdyYXBwZXIgLmhlYWRlciAuY29sMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI5OXB4KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbC13cmFwcGVyIC5tZW51LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmRldGFpbC13cmFwcGVyIC5tZW51LWxpc3QgLm1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xufVxuLmRldGFpbC13cmFwcGVyIC5tZW51LWxpc3QgLm1lbnUgLm1lbnUtdGl0bGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI5OXB4O1xuICBoZWlnaHQ6IDI0OXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDkwcHggMCAwIDM0cHg7XG59XG4uZGV0YWlsLXdyYXBwZXIgLm1lbnUtbGlzdCAubWVudSAucHJvZHVjdHMge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMjRweCA2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyOTlweCk7XG4gIGhlaWdodDogMjQ5cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xufVxuLmRldGFpbC13cmFwcGVyIC5tZW51LWxpc3QgLm1lbnUgLnByb2R1Y3RzIC5wcm9kIHtcbiAgbWFyZ2luOiAwIDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgIzNDRkYwMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG4uZGV0YWlsLXdyYXBwZXIgLm1lbnUtbGlzdCAubWVudSAucHJvZHVjdHMgLnByb2QgLnNlbGVjdGVkIHtcbiAgaGVpZ2h0OiA3M3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDRkYwMztcbn1cbi5kZXRhaWwtd3JhcHBlciAubWVudS1saXN0IC5tZW51IC5wcm9kdWN0cyAucHJvZCAucHJvZHVjdC1pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE2cHggYXV0byAxMnB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMTY4cHg7XG4gIGhlaWdodDogOTZweDtcbn1cbi5kZXRhaWwtd3JhcHBlciAubWVudS1saXN0IC5tZW51IC5wcm9kdWN0cyAucHJvZCAucHJvZC10aXRsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdpZHRoOiAxNjhweDtcbn1cbi5kZXRhaWwtd3JhcHBlciAubWVudS1saXN0IC5tZW51IC5wcm9kdWN0cyAucHJvZCAucHJvZC1wcmljZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDE2OHB4O1xufVxuXG4ubWVudS1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3RzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/menu-detail/menu-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/menu-detail/menu-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDetailComponent", function() { return MenuDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/menu.service */ "./src/app/shared/services/menu.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");





let MenuDetailComponent = class MenuDetailComponent {
    constructor(ms, rs) {
        this.ms = ms;
        this.rs = rs;
        this.mId = '';
        this.Subscriptions = [];
        this.imgUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticUrl + 'images/';
    }
    getimage(image) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.imgUrl}${image}`, true);
        xhr.responseType = 'blob';
        xhr.onload = function (e) {
            var img = document.getElementById(image);
            img.setAttribute('src', window.URL.createObjectURL(this.response));
        };
        xhr.send();
    }
    ngOnInit() {
        this.Subscriptions.push(this.ms.Menu.subscribe((dat) => {
            this.menu = dat;
        }));
    }
    continue(prod, menu_id) {
        if (prod.sizable) {
            prod.sizes = prod.sizes.filter((size) => size.title != prod.size.title);
            prod.size.selected = true;
            prod.sizes.unshift(prod.size);
            this.changeSize(prod, menu_id);
        }
        else if (prod.customizable) {
            this.customize(prod);
        }
    }
    changeSize(prod, id) {
        this.mId = id;
        this.selectedProd = JSON.parse(JSON.stringify(prod));
    }
    order(size) {
        this.selectedProd.size = size;
        this.selectedProd.price = this.selectedProd.size.price;
        delete this.selectedProd.sizes;
        if (this.selectedProd.customizable) {
            this.customize(this.selectedProd);
        }
        else {
            delete this.selectedProd.customizable;
            delete this.selectedProd.sizable;
            delete this.selectedProd.image;
            delete this.selectedProd.defaults;
            delete this.selectedProd.ingredients,
                this.selectedProd.size = this.selectedProd.size.title;
            this.ms.addForPay({ prod: this.selectedProd, action: "add" });
        }
        this.mId = "";
        this.selectedProd = null;
    }
    customize(prod) {
        let data = {
            type: "product",
            product: prod
        };
        this.ms.addForPay({ prod: prod, action: "add" });
        this.ms.addProduct(JSON.parse(JSON.stringify(data)));
        this.rs.setRoute("customize");
    }
    ngOnDestroy() {
        this.Subscriptions.forEach(s => s.unsubscribe());
    }
};
MenuDetailComponent.ctorParameters = () => [
    { type: _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"] }
];
MenuDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-detail',
        template: __webpack_require__(/*! raw-loader!./menu-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/menu-detail/menu-detail.component.html"),
        styles: [__webpack_require__(/*! ./menu-detail.component.scss */ "./src/app/components/menu-detail/menu-detail.component.scss")]
    })
], MenuDetailComponent);



/***/ }),

/***/ "./src/app/components/payment/card-pay/card-pay.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/payment/card-pay/card-pay.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cash-wrapper {\n  font-weight: 600;\n  font-family: roboto;\n  font-style: normal;\n  position: relative;\n  background-color: #FFFFFF;\n  height: 314px;\n  box-shadow: 0px 3px 15px #FFFFFF33;\n  width: 1200px;\n  top: 268px;\n  margin: auto;\n  padding: 24px;\n  border-radius: 8px;\n}\n.cash-wrapper .left-container {\n  display: inline-block;\n}\n.cash-wrapper .left-container .back-button {\n  font-size: 16px;\n  background-color: transparent;\n  border: 0;\n  width: 84px;\n  height: 44px;\n  border-radius: 4px;\n  color: #5E5B58;\n  outline: 0;\n}\n.cash-wrapper .left-container .back-button .far.fa-long-arrow-alt-left {\n  font-weight: bold;\n  font-size: 20px;\n  color: #5E5B58;\n}\n.cash-wrapper .left-container .title {\n  margin: auto;\n  text-align: center;\n  font-size: 24px;\n  color: #5E5B58;\n  margin-bottom: 138px;\n}\n.cash-wrapper .left-container .total-amount {\n  display: inline-block;\n  color: #5E5B58;\n  margin-left: 800px;\n  font-size: 16px;\n  width: 150px;\n}\n.cash-wrapper .left-container .insert-amount {\n  width: 120px;\n  height: 44px;\n  font-size: 18px;\n  text-align: center;\n  border: 1px solid #9B9B9B;\n  outline: 0;\n}\n.cash-wrapper .left-container .cancel-button {\n  display: inline-block;\n  background: #FFFFFF;\n  border: 0;\n  box-shadow: 0px 3px 15px #00000012;\n  border-radius: 100px;\n  width: 150px;\n  height: 44px;\n  text-align: center;\n  color: #5E5B58;\n  outline: 0;\n}\n.cash-wrapper .select-pay {\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 24px;\n  border: 1px solid #F2AC21;\n  width: 200px;\n  height: 262px;\n  padding: 24px;\n  text-align: center;\n}\n.cash-wrapper .select-pay .cash {\n  width: 152px;\n  height: 44px;\n  background-color: #9B9B9B;\n  margin-bottom: 82px;\n  color: white;\n  padding: 10px;\n}\n.cash-wrapper .select-pay .pay-button {\n  height: 88px;\n  width: 88px;\n  border-radius: 50%;\n  border: 2px solid #F2AC21;\n  background-color: #3CFF03;\n  color: #5E5B58;\n  font-size: 16px;\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L2NhcmQtcGF5L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxca2lvc2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBheW1lbnRcXGNhcmQtcGF5XFxjYXJkLXBheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L2NhcmQtcGF5L2NhcmQtcGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxxQkFBQTtBQ0VSO0FEQVE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDRVo7QUREWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHaEI7QURBUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNFWjtBREFRO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0VaO0FEQVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0VaO0FEQVE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNFWjtBRENJO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0VaO0FEQVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L2NhcmQtcGF5L2NhcmQtcGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhc2gtd3JhcHBlcntcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcclxuICAgIGhlaWdodDozMTRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjRkZGRkZGMzM7XHJcbiAgICB3aWR0aDoxMjAwcHg7XHJcbiAgICB0b3A6MjY4cHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHBhZGRpbmc6MjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgLmxlZnQtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgXHJcbiAgICAgICAgLmJhY2stYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6MDtcclxuICAgICAgICAgICAgd2lkdGg6IDg0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOjA7XHJcbiAgICAgICAgICAgIC5mYXIuZmEtbG9uZy1hcnJvdy1hbHQtbGVmdHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojNUU1QjU4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEzOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG90YWwtYW1vdW50e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY29sb3I6IzVFNUI1ODsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogODAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnNlcnQtYW1vdW50e1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjOUI5QjlCO1xyXG4gICAgICAgICAgICBvdXRsaW5lOjBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbmNlbC1idXR0b257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDtcclxuICAgICAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjMDAwMDAwMTI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6MDtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgLnNlbGVjdC1wYXl7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMkFDMjE7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjYycHg7XHJcbiAgICAgICAgcGFkZGluZzoyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyOyAgICBcclxuICAgICAgICAuY2FzaHtcclxuICAgICAgICAgICAgd2lkdGg6MTUycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo0NHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI5QjlCOyAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjgycHg7ICAgICBcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweCAgICBcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgLnBheS1idXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDo4OHB4O1xyXG4gICAgICAgICAgICB3aWR0aDo4OHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0YyQUMyMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojM0NGRjAzO1xyXG4gICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgb3V0bGluZTowXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59IiwiLmNhc2gtd3JhcHBlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBoZWlnaHQ6IDMxNHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggI0ZGRkZGRjMzO1xuICB3aWR0aDogMTIwMHB4O1xuICB0b3A6IDI2OHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5jYXNoLXdyYXBwZXIgLmxlZnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLmJhY2stYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogODRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjNUU1QjU4O1xuICBvdXRsaW5lOiAwO1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLmJhY2stYnV0dG9uIC5mYXIuZmEtbG9uZy1hcnJvdy1hbHQtbGVmdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNUU1QjU4O1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLnRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM1RTVCNTg7XG4gIG1hcmdpbi1ib3R0b206IDEzOHB4O1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLnRvdGFsLWFtb3VudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM1RTVCNTg7XG4gIG1hcmdpbi1sZWZ0OiA4MDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTUwcHg7XG59XG4uY2FzaC13cmFwcGVyIC5sZWZ0LWNvbnRhaW5lciAuaW5zZXJ0LWFtb3VudCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzlCOUI5QjtcbiAgb3V0bGluZTogMDtcbn1cbi5jYXNoLXdyYXBwZXIgLmxlZnQtY29udGFpbmVyIC5jYW5jZWwtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjMDAwMDAwMTI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzVFNUI1ODtcbiAgb3V0bGluZTogMDtcbn1cbi5jYXNoLXdyYXBwZXIgLnNlbGVjdC1wYXkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjJBQzIxO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjYycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXNoLXdyYXBwZXIgLnNlbGVjdC1wYXkgLmNhc2gge1xuICB3aWR0aDogMTUycHg7XG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlCOUI5QjtcbiAgbWFyZ2luLWJvdHRvbTogODJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNhc2gtd3JhcHBlciAuc2VsZWN0LXBheSAucGF5LWJ1dHRvbiB7XG4gIGhlaWdodDogODhweDtcbiAgd2lkdGg6IDg4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI0YyQUMyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDRkYwMztcbiAgY29sb3I6ICM1RTVCNTg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/payment/card-pay/card-pay.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/payment/card-pay/card-pay.component.ts ***!
  \*******************************************************************/
/*! exports provided: CardPayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPayComponent", function() { return CardPayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");



let CardPayComponent = class CardPayComponent {
    constructor(rs) {
        this.rs = rs;
        this.onSetPayMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    cancel() {
        this.rs.setPayRoute(false);
    }
    setpaytype(data) {
        this.onSetPayMethod.emit(data);
    }
    goBack() {
        this.onGoBack.emit("");
    }
};
CardPayComponent.ctorParameters = () => [
    { type: _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CardPayComponent.prototype, "onSetPayMethod", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CardPayComponent.prototype, "onGoBack", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardPayComponent.prototype, "total", void 0);
CardPayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-pay',
        template: __webpack_require__(/*! raw-loader!./card-pay.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/payment/card-pay/card-pay.component.html"),
        styles: [__webpack_require__(/*! ./card-pay.component.scss */ "./src/app/components/payment/card-pay/card-pay.component.scss")]
    })
], CardPayComponent);



/***/ }),

/***/ "./src/app/components/payment/cash-pay-finish/cash-pay-finish.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/payment/cash-pay-finish/cash-pay-finish.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cash-wrapper {\n  font-weight: 600;\n  font-family: roboto;\n  font-style: normal;\n  position: relative;\n  background-color: #FFFFFF;\n  height: 314px;\n  box-shadow: 0px 3px 15px #FFFFFF33;\n  width: 1200px;\n  top: 268px;\n  margin: auto;\n  padding: 24px;\n  border-radius: 8px;\n}\n.cash-wrapper .left-container {\n  display: inline-block;\n}\n.cash-wrapper .left-container .title {\n  margin: 50px auto 110px;\n  text-align: center;\n  font-size: 24px;\n  color: #5E5B58;\n}\n.cash-wrapper .left-container .total-amount {\n  display: inline-block;\n  color: #5E5B58;\n  border-right: 1px solid #9B9B9B;\n  padding: 5.5px 24px;\n  margin-left: 489px;\n  font-size: 16px;\n  width: 200px;\n  margin-right: 24px;\n}\n.cash-wrapper .left-container .insert-amount {\n  width: 120px;\n  height: 44px;\n  font-size: 18px;\n  text-align: center;\n  border: 1px solid #9B9B9B;\n  outline: 0;\n}\n.cash-wrapper .left-container .finish-button {\n  display: inline-block;\n  background: #F2AC21;\n  font-size: 16px;\n  border: 0;\n  box-shadow: 0px 3px 15px #00000012;\n  border-radius: 100px;\n  width: 150px;\n  height: 44px;\n  text-align: center;\n  color: white;\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L2Nhc2gtcGF5LWZpbmlzaC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXGtpb3NrL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYXltZW50XFxjYXNoLXBheS1maW5pc2hcXGNhc2gtcGF5LWZpbmlzaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L2Nhc2gtcGF5LWZpbmlzaC9jYXNoLXBheS1maW5pc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLHFCQUFBO0FDRVI7QUREUTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0daO0FERFE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDR1o7QUREUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDR1o7QUREUTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC9jYXNoLXBheS1maW5pc2gvY2FzaC1wYXktZmluaXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhc2gtd3JhcHBlcntcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcclxuICAgIGhlaWdodDozMTRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjRkZGRkZGMzM7XHJcbiAgICB3aWR0aDoxMjAwcHg7XHJcbiAgICB0b3A6MjY4cHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHBhZGRpbmc6MjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgLmxlZnQtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrOyBcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1MHB4IGF1dG8gMTEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b3RhbC1hbW91bnR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICM5QjlCOUI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6NS41cHggMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NDg5cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5zZXJ0LWFtb3VudHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzlCOUI5QjtcclxuICAgICAgICAgICAgb3V0bGluZTowXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maW5pc2gtYnV0dG9ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0YyQUMyMSA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjMDAwMDAwMTI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBvdXRsaW5lOjA7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbn0iLCIuY2FzaC13cmFwcGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGhlaWdodDogMzE0cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjRkZGRkZGMzM7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIHRvcDogMjY4cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY2FzaC13cmFwcGVyIC5sZWZ0LWNvbnRhaW5lciAudGl0bGUge1xuICBtYXJnaW46IDUwcHggYXV0byAxMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNUU1QjU4O1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLnRvdGFsLWFtb3VudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM1RTVCNTg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5QjlCOUI7XG4gIHBhZGRpbmc6IDUuNXB4IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0ODlweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbi5jYXNoLXdyYXBwZXIgLmxlZnQtY29udGFpbmVyIC5pbnNlcnQtYW1vdW50IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOUI5QjlCO1xuICBvdXRsaW5lOiAwO1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLmZpbmlzaC1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNGMkFDMjE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggIzAwMDAwMDEyO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/payment/cash-pay-finish/cash-pay-finish.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/payment/cash-pay-finish/cash-pay-finish.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CashPayFinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPayFinishComponent", function() { return CashPayFinishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CashPayFinishComponent = class CashPayFinishComponent {
    constructor() {
        this.OnFinish = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    finish() {
        this.OnFinish.emit("");
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CashPayFinishComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CashPayFinishComponent.prototype, "inserted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CashPayFinishComponent.prototype, "OnFinish", void 0);
CashPayFinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cash-pay-finish',
        template: __webpack_require__(/*! raw-loader!./cash-pay-finish.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/payment/cash-pay-finish/cash-pay-finish.component.html"),
        styles: [__webpack_require__(/*! ./cash-pay-finish.component.scss */ "./src/app/components/payment/cash-pay-finish/cash-pay-finish.component.scss")]
    })
], CashPayFinishComponent);



/***/ }),

/***/ "./src/app/components/payment/cash-pay/cash-pay.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/payment/cash-pay/cash-pay.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cash-wrapper {\n  font-weight: 600;\n  font-family: roboto;\n  font-style: normal;\n  position: relative;\n  background-color: #FFFFFF;\n  height: 314px;\n  box-shadow: 0px 3px 15px #FFFFFF33;\n  width: 1200px;\n  top: 268px;\n  margin: auto;\n  padding: 24px;\n  border-radius: 8px;\n}\n.cash-wrapper .left-container {\n  display: inline-block;\n}\n.cash-wrapper .left-container .back-button {\n  font-size: 16px;\n  background-color: transparent;\n  border: 0;\n  width: 84px;\n  height: 44px;\n  border-radius: 4px;\n  color: #5E5B58;\n  outline: 0;\n}\n.cash-wrapper .left-container .back-button .far.fa-long-arrow-alt-left {\n  font-weight: bold;\n  font-size: 20px;\n  color: #5E5B58;\n}\n.cash-wrapper .left-container .title {\n  margin: auto;\n  text-align: center;\n  font-size: 24px;\n  color: #5E5B58;\n  margin-bottom: 110px;\n}\n.cash-wrapper .left-container .total-amount {\n  display: inline-block;\n  color: #5E5B58;\n  border-right: 1px solid #9B9B9B;\n  padding: 5.5px 24px;\n  margin-left: 489px;\n  font-size: 16px;\n  width: 198px;\n  margin-right: 24px;\n}\n.cash-wrapper .left-container .insert-amount {\n  width: 120px;\n  height: 44px;\n  font-size: 18px;\n  text-align: center;\n  border: 1px solid #9B9B9B;\n  outline: 0;\n}\n.cash-wrapper .left-container .cancel-button {\n  display: inline-block;\n  background: #FFFFFF;\n  border: 0;\n  box-shadow: 0px 3px 15px #00000012;\n  border-radius: 100px;\n  width: 150px;\n  height: 44px;\n  text-align: center;\n  color: #5E5B58;\n  outline: 0;\n}\n.cash-wrapper .select-pay {\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 24px;\n  border: 1px solid #F2AC21;\n  width: 200px;\n  height: 262px;\n  padding: 24px;\n  text-align: center;\n}\n.cash-wrapper .select-pay .pay-button {\n  height: 88px;\n  width: 88px;\n  border-radius: 50%;\n  border: 2px solid #F2AC21;\n  background-color: #3CFF03;\n  color: #5E5B58;\n  font-size: 16px;\n  outline: 0;\n}\n.cash-wrapper .select-pay .card img {\n  width: 68px;\n  height: 44px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L2Nhc2gtcGF5L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxca2lvc2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBheW1lbnRcXGNhc2gtcGF5XFxjYXNoLXBheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L2Nhc2gtcGF5L2Nhc2gtcGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxxQkFBQTtBQ0VSO0FERFE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDR1o7QURGWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNJaEI7QUREUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNHWjtBRERRO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0daO0FERFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0daO0FERFE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNHWjtBREFJO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0daO0FEQVc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L2Nhc2gtcGF5L2Nhc2gtcGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhc2gtd3JhcHBlcntcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcclxuICAgIGhlaWdodDozMTRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjRkZGRkZGMzM7XHJcbiAgICB3aWR0aDoxMjAwcHg7XHJcbiAgICB0b3A6MjY4cHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHBhZGRpbmc6MjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgLmxlZnQtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrOyAgICAgIFxyXG4gICAgICAgIC5iYWNrLWJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgY29sb3I6IzVFNUI1ODtcclxuICAgICAgICAgICAgb3V0bGluZTowO1xyXG4gICAgICAgICAgICAuZmFyLmZhLWxvbmctYXJyb3ctYWx0LWxlZnR7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzVFNUI1OFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvdGFsLWFtb3VudHtcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgIzlCOUI5QjtcclxuICAgICAgICAgICAgcGFkZGluZzo1LjVweCAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDo0ODlweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxOThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnNlcnQtYW1vdW50e1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjOUI5QjlCO1xyXG4gICAgICAgICAgICBvdXRsaW5lOjBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbmNlbC1idXR0b257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDtcclxuICAgICAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjMDAwMDAwMTI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6MDtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgLnNlbGVjdC1wYXl7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMkFDMjE7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjYycHg7XHJcbiAgICAgICAgcGFkZGluZzoyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyOyAgICAgICBcclxuICAgICAgICAucGF5LWJ1dHRvbntcclxuICAgICAgICAgICAgaGVpZ2h0Ojg4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjg4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRjJBQzIxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQ0ZGMDM7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOjBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmR7XHJcbiAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogNjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OmNvbnRhaW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTZweFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59IiwiLmNhc2gtd3JhcHBlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBoZWlnaHQ6IDMxNHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggI0ZGRkZGRjMzO1xuICB3aWR0aDogMTIwMHB4O1xuICB0b3A6IDI2OHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5jYXNoLXdyYXBwZXIgLmxlZnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLmJhY2stYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogODRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjNUU1QjU4O1xuICBvdXRsaW5lOiAwO1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLmJhY2stYnV0dG9uIC5mYXIuZmEtbG9uZy1hcnJvdy1hbHQtbGVmdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNUU1QjU4O1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLnRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM1RTVCNTg7XG4gIG1hcmdpbi1ib3R0b206IDExMHB4O1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLnRvdGFsLWFtb3VudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM1RTVCNTg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5QjlCOUI7XG4gIHBhZGRpbmc6IDUuNXB4IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0ODlweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTk4cHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbi5jYXNoLXdyYXBwZXIgLmxlZnQtY29udGFpbmVyIC5pbnNlcnQtYW1vdW50IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOUI5QjlCO1xuICBvdXRsaW5lOiAwO1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLmNhbmNlbC1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4ICMwMDAwMDAxMjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNUU1QjU4O1xuICBvdXRsaW5lOiAwO1xufVxuLmNhc2gtd3JhcHBlciAuc2VsZWN0LXBheSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMkFDMjE7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyNjJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhc2gtd3JhcHBlciAuc2VsZWN0LXBheSAucGF5LWJ1dHRvbiB7XG4gIGhlaWdodDogODhweDtcbiAgd2lkdGg6IDg4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI0YyQUMyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDRkYwMztcbiAgY29sb3I6ICM1RTVCNTg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogMDtcbn1cbi5jYXNoLXdyYXBwZXIgLnNlbGVjdC1wYXkgLmNhcmQgaW1nIHtcbiAgd2lkdGg6IDY4cHg7XG4gIGhlaWdodDogNDRweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/payment/cash-pay/cash-pay.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/payment/cash-pay/cash-pay.component.ts ***!
  \*******************************************************************/
/*! exports provided: CashPayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPayComponent", function() { return CashPayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");



let CashPayComponent = class CashPayComponent {
    constructor(rs) {
        this.rs = rs;
        this.onSetPayMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    cancel() {
        this.rs.setPayRoute(false);
    }
    setpaytype(data) {
        this.onSetPayMethod.emit(data);
    }
    goBack() {
        this.onGoBack.emit("");
    }
};
CashPayComponent.ctorParameters = () => [
    { type: _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CashPayComponent.prototype, "onSetPayMethod", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CashPayComponent.prototype, "onGoBack", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CashPayComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CashPayComponent.prototype, "inserted", void 0);
CashPayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cash-pay',
        template: __webpack_require__(/*! raw-loader!./cash-pay.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/payment/cash-pay/cash-pay.component.html"),
        styles: [__webpack_require__(/*! ./cash-pay.component.scss */ "./src/app/components/payment/cash-pay/cash-pay.component.scss")]
    })
], CashPayComponent);



/***/ }),

/***/ "./src/app/components/payment/payment-finish/payment-finish.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/payment/payment-finish/payment-finish.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cash-wrapper {\n  font-weight: 600;\n  font-family: roboto;\n  font-style: normal;\n  position: relative;\n  background-color: #FFFFFF;\n  height: 314px;\n  box-shadow: 0px 3px 15px #FFFFFF33;\n  width: 1200px;\n  top: 268px;\n  margin: auto;\n  padding: 24px;\n  border-radius: 8px;\n}\n.cash-wrapper .left-container {\n  display: inline-block;\n}\n.cash-wrapper .left-container .title {\n  margin: 38px auto 30px;\n  text-align: center;\n  font-size: 24px;\n  color: #5E5B58;\n}\n.cash-wrapper .left-container .close-button {\n  display: inline-block;\n  background: white;\n  font-size: 16px;\n  border: 0;\n  box-shadow: 0px 3px 15px #00000012;\n  border-radius: 100px;\n  width: 150px;\n  height: 44px;\n  text-align: center;\n  outline: 0;\n}\n.cash-wrapper .left-container .submit-button {\n  float: right;\n  background: #F2AC21;\n  font-size: 16px;\n  border: 0;\n  box-shadow: 0px 3px 15px #00000012;\n  border-radius: 100px;\n  width: 150px;\n  height: 44px;\n  text-align: center;\n  color: white;\n  outline: 0;\n}\n.cash-wrapper .left-container .input {\n  text-align: center;\n  margin-bottom: 46px;\n}\n.cash-wrapper .left-container .input .or {\n  font-size: 20px;\n  padding: 14px 24px;\n  color: #5E5B58;\n}\n.cash-wrapper .left-container .input .email {\n  width: 360px;\n  font-size: 16px;\n  outline: 0;\n  height: 52px;\n  padding: 17px 0 16px 24px;\n  border: 1px solid #D8D8D8;\n}\n.cash-wrapper .left-container .input .phone {\n  outline: 0;\n  width: 360px;\n  font-size: 16px;\n  height: 52px;\n  padding: 17px 0 16px 24px;\n  border: 1px solid #D8D8D8;\n}\n.keyboard {\n  position: absolute;\n  background-color: white;\n  width: 1200px;\n  left: calc(50% - 600px);\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L3BheW1lbnQtZmluaXNoL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxca2lvc2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBheW1lbnRcXHBheW1lbnQtZmluaXNoXFxwYXltZW50LWZpbmlzaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L3BheW1lbnQtZmluaXNoL3BheW1lbnQtZmluaXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxxQkFBQTtBQ0VSO0FERFE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHWjtBRERRO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDR1o7QUREUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0daO0FERFE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDR1o7QURGWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNJaEI7QURGWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDSWhCO0FERlk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0loQjtBREVBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC9wYXltZW50LWZpbmlzaC9wYXltZW50LWZpbmlzaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXNoLXdyYXBwZXJ7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XHJcbiAgICBoZWlnaHQ6MzE0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggI0ZGRkZGRjMzO1xyXG4gICAgd2lkdGg6MTIwMHB4O1xyXG4gICAgdG9wOjI2OHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwYWRkaW5nOjI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgIC5sZWZ0LWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jazsgXHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBtYXJnaW46MzhweCBhdXRvIDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgfSAgICAgICBcclxuICAgICAgICAuY2xvc2UtYnV0dG9ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggIzAwMDAwMDEyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJtaXQtYnV0dG9ue1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0YyQUMyMSA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjMDAwMDAwMTI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBvdXRsaW5lOjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NDZweDtcclxuICAgICAgICAgICAgLm9ye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjE0cHggMjRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiM1RTVCNThcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZW1haWx7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozNjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo1MnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxN3B4IDAgMTZweCAyNHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q4RDhEODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGhvbmV7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOjA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozNjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjUycHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjE3cHggMCAxNnB4IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDhEOEQ4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSAgXHJcbn1cclxuLmtleWJvYXJke1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOjEyMDBweDtcclxuICAgIGxlZnQ6Y2FsYyg1MCUgLSA2MDBweCk7XHJcbiAgICBib3R0b206MFxyXG4gICAgXHJcbn0iLCIuY2FzaC13cmFwcGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGhlaWdodDogMzE0cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjRkZGRkZGMzM7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIHRvcDogMjY4cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY2FzaC13cmFwcGVyIC5sZWZ0LWNvbnRhaW5lciAudGl0bGUge1xuICBtYXJnaW46IDM4cHggYXV0byAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM1RTVCNTg7XG59XG4uY2FzaC13cmFwcGVyIC5sZWZ0LWNvbnRhaW5lciAuY2xvc2UtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjMDAwMDAwMTI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiAwO1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLnN1Ym1pdC1idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICNGMkFDMjE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggIzAwMDAwMDEyO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiAwO1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLmlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0NnB4O1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLmlucHV0IC5vciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTRweCAyNHB4O1xuICBjb2xvcjogIzVFNUI1ODtcbn1cbi5jYXNoLXdyYXBwZXIgLmxlZnQtY29udGFpbmVyIC5pbnB1dCAuZW1haWwge1xuICB3aWR0aDogMzYwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogMDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBwYWRkaW5nOiAxN3B4IDAgMTZweCAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDhEOEQ4O1xufVxuLmNhc2gtd3JhcHBlciAubGVmdC1jb250YWluZXIgLmlucHV0IC5waG9uZSB7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiAzNjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIHBhZGRpbmc6IDE3cHggMCAxNnB4IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG5cbi5rZXlib2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNjAwcHgpO1xuICBib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/payment/payment-finish/payment-finish.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/payment/payment-finish/payment-finish.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PaymentFinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFinishComponent", function() { return PaymentFinishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-keyboard */ "./node_modules/simple-keyboard/build/index.js");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_keyboard__WEBPACK_IMPORTED_MODULE_2__);



let PaymentFinishComponent = class PaymentFinishComponent {
    constructor() {
        this.selectedInput = "";
        this.email = "";
        this.phone = "";
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = (input) => {
            if (this.selectedInput == 'email') {
                this.email = input;
            }
            else if (this.selectedInput == 'phone') {
                this.phone = input;
            }
        };
        this.onKeyPress = (button) => {
            if (button === "{shift}" || button === "{lock}")
                this.handleShift();
        };
        this.onInputChange = (event) => {
            this.keyboard.setInput(event.target.value);
        };
        this.handleShift = () => {
            let currentLayout = this.keyboard.options.layoutName;
            let shiftToggle = currentLayout === "default" ? "shift" : "default";
            this.keyboard.setOptions({
                layoutName: shiftToggle
            });
        };
    }
    ngOnInit() {
    }
    selectInp(data) {
        this.selectedInput = data;
        if (this.selectedInput == 'email') {
            this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default.a({
                onChange: input => this.onChange(input),
                onKeyPress: button => this.onKeyPress(button)
            });
            this.keyboard.setInput(this.email);
        }
        else if (this.selectedInput == 'phone') {
            this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default.a({
                onChange: input => this.onChange(input),
                onKeyPress: button => this.onKeyPress(button),
                inputPattern: /^\d+$/
            });
            this.keyboard.setInput(this.phone);
        }
    }
    close() {
        this.onClose.emit("");
    }
    submit() {
        this.onSubmit.emit("");
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaymentFinishComponent.prototype, "onClose", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaymentFinishComponent.prototype, "onSubmit", void 0);
PaymentFinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-finish',
        template: __webpack_require__(/*! raw-loader!./payment-finish.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/payment/payment-finish/payment-finish.component.html"),
        styles: [__webpack_require__(/*! ./payment-finish.component.scss */ "./src/app/components/payment/payment-finish/payment-finish.component.scss")]
    })
], PaymentFinishComponent);



/***/ }),

/***/ "./src/app/components/payment/payment.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/payment/payment.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(94, 91, 88, 0.95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxca2lvc2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBheW1lbnRcXHBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDk0LDkxLDg4LDAuOTUpO1xyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk0LCA5MSwgODgsIDAuOTUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/payment/payment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/payment/payment.component.ts ***!
  \*********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/payment.service */ "./src/app/shared/services/payment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _shared_services_electron_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/electron.service */ "./src/app/shared/services/electron.service.ts");






let PaymentComponent = class PaymentComponent {
    constructor(ps, router, socket, electron) {
        this.ps = ps;
        this.router = router;
        this.socket = socket;
        this.electron = electron;
        this.order = [];
        this.tip = 0;
        this.price = 0;
        this.route = "";
        this.tax = 5;
        this.inserted_ammount = 0;
        this.special_instructions = "";
        this.alergy_info = "";
    }
    ngOnInit() {
        this.ps.$paymentData.subscribe(data => {
            data.forEach(prod => {
                this.price = (this.price * 1000 + prod.price * 1000) / 1000;
                delete prod._id;
                delete prod.sizes;
                delete prod.sizable;
                delete prod.ingredients;
                delete prod.image;
                delete prod.customizable;
                if (prod.menus && prod.menus.length) {
                    prod.menus.forEach(menu => {
                        delete menu._id;
                        delete menu.specials_id;
                        delete menu.products;
                        delete menu.configurable;
                        menu.default = menu.default[0];
                        if (menu.default.size) {
                            menu.default.size = menu.default.size.title;
                        }
                        delete menu.default._id;
                        delete menu.default.special_menu_ids;
                        delete menu.default.special_ids;
                        delete menu.default.sizes;
                        delete menu.default.sizable;
                        delete menu.default.selected_ids;
                        delete menu.default.menu_ids;
                        delete menu.default.ingredients;
                        delete menu.default.image;
                        delete menu.default.customizable;
                        if (menu.default.defaults && menu.default.defaults.length) {
                            menu.default.defaults.forEach(def => {
                                delete def._id;
                                delete def.normal_price;
                                delete def.light_price;
                                delete def.image;
                                delete def.selected;
                                delete def.double_price;
                            });
                        }
                    });
                }
                if (prod.defaults && prod.defaults.length) {
                    prod.defaults.forEach(def => {
                        delete def.selected;
                        delete def._id;
                        delete def.normal_price;
                        delete def.light_price;
                        delete def.image;
                        delete def.double_price;
                    });
                }
            });
            this.order = data;
            this.route = "select-tip";
        });
        this.electron.serialPort.list().then((ports) => {
            console.log("ports", ports);
            this.port = new this.electron.serialPort(ports[1].path, {
                baudRate: 57600
            });
            console.log("Port", this.port);
            this.port.open(() => {
                this.port.write(new Buffer([0X1401]), function (err) {
                    if (err) {
                        return console.log('Error on write: ', err.message);
                    }
                    console.log('message written');
                });
                this.port.on('error', function (err) {
                    console.log('Error: ', err.message);
                });
                this.port.on('data', function (data) {
                    console.log('Data:', data);
                });
            });
        }).catch((err) => {
        });
    }
    ngOnDestroy() {
    }
    setTipData(event) {
        this.tip = event.tip;
        this.alergy_info = event.spec_instructions;
        this.route = "select-pay-method";
    }
    getTax(tax, price) {
        return Math.round(tax * price) / 100;
    }
    getTotal(tax, price, tip) {
        return Math.round((this.getTax(tax, price) + tip + price) * 100) / 100;
    }
    setPayment(event) {
        this.special_instructions = event.spec_instructions;
        switch (event.paytype) {
            case "cash":
                this.route = "cash-pay";
                setTimeout(() => {
                    this.inserted_ammount = this.getTotal(this.tax, this.price, this.tip) + 5;
                    this.checkPayment();
                }, 3000);
                break;
            case "card":
                this.route = "card-pay";
                break;
            default:
                break;
        }
    }
    checkPayment() {
        if (this.inserted_ammount >= this.getTotal(this.tax, this.price, this.tip)) {
            this.route = "cash-pay-finish";
        }
    }
    finish() {
        this.route = "pay-finish";
    }
    close() {
        let order = {
            orderedProducts: this.order,
            subTotal: this.price,
            special_instructions: this.special_instructions,
            alergy_info: this.alergy_info,
            tax: this.getTax(this.tax, this.price),
            tip: this.tip,
            total: this.getTotal(this.tax, this.price, this.tip)
        };
        this.socket.emit("pay", order);
        this.router.navigate(['/']);
    }
    submit() {
        this.router.navigate(['/']);
    }
    goBack() {
        this.route = "select-pay-method";
    }
};
PaymentComponent.ctorParameters = () => [
    { type: _shared_services_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] },
    { type: _shared_services_electron_service__WEBPACK_IMPORTED_MODULE_5__["ElectronService"] }
];
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: __webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/payment/payment.component.html"),
        styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/components/payment/payment.component.scss")]
    })
], PaymentComponent);



/***/ }),

/***/ "./src/app/components/payment/select-pay/select-pay.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/payment/select-pay/select-pay.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pay-wrapper {\n  font-weight: 600;\n  font-family: roboto;\n  font-style: normal;\n  position: relative;\n  background-color: #FFFFFF;\n  height: 314px;\n  box-shadow: 0px 3px 15px #FFFFFF33;\n  width: 1200px;\n  top: 268px;\n  margin: auto;\n  padding: 24px;\n  border-radius: 8px;\n}\n.pay-wrapper .left-container {\n  display: inline-block;\n}\n.pay-wrapper .left-container .spec-instructions {\n  padding: 16px;\n  display: block;\n  resize: none;\n  width: 372px;\n  font-size: 14px;\n  height: 162px;\n  margin-bottom: 60px;\n  outline: 0;\n}\n.pay-wrapper .left-container .cancel-button {\n  display: block;\n  background: #FFFFFF;\n  border: 0;\n  box-shadow: 0px 3px 15px #00000012;\n  border-radius: 100px;\n  width: 150px;\n  height: 44px;\n  text-align: center;\n  color: #5E5B58;\n  outline: 0;\n}\n.pay-wrapper .payment-data {\n  vertical-align: top;\n  display: inline-block;\n  margin-left: 40px;\n  margin-top: 57px;\n  width: 260px;\n  height: 151px;\n}\n.pay-wrapper .payment-data .total {\n  display: flex;\n  justify-content: space-between;\n  margin: 16px 0;\n}\n.pay-wrapper .payment-data .detail {\n  font-size: 16px;\n  border-bottom: 1px solid #D8D8D8;\n  padding: 8px 0;\n}\n.pay-wrapper .payment-data .detail .data {\n  display: flex;\n  justify-content: space-between;\n  margin: 16px 0;\n}\n.pay-wrapper .select-pay {\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 40px;\n  border: 1px solid #F2AC21;\n  width: 200px;\n  height: 262px;\n  padding: 24px;\n  text-align: center;\n}\n.pay-wrapper .select-pay .cash {\n  width: 152px;\n  height: 44px;\n  background-color: #9B9B9B;\n  margin-bottom: 82px;\n  color: white;\n  padding: 10px;\n}\n.pay-wrapper .select-pay .pay-button {\n  height: 88px;\n  width: 88px;\n  border-radius: 50%;\n  border: 2px solid #F2AC21;\n  background-color: #3CFF03;\n  color: #5E5B58;\n  font-size: 16px;\n  outline: 0;\n}\n.pay-wrapper .select-pay .card img {\n  width: 68px;\n  height: 44px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-bottom: 16px;\n}\n.keyboard {\n  position: absolute;\n  background-color: white;\n  width: 1200px;\n  left: calc(50% - 600px);\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L3NlbGVjdC1wYXkvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxraW9zay9zcmNcXGFwcFxcY29tcG9uZW50c1xccGF5bWVudFxcc2VsZWN0LXBheVxcc2VsZWN0LXBheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L3NlbGVjdC1wYXkvc2VsZWN0LXBheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0kscUJBQUE7QUNFUjtBRERRO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDR1o7QUREVTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDR1o7QURBSTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFUjtBRERRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0daO0FERFE7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FDR1o7QURGWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNJaEI7QURBSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNHWjtBRERRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNHWjtBRENXO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDWjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC9zZWxlY3QtcGF5L3NlbGVjdC1wYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5LXdyYXBwZXJ7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XHJcbiAgICBoZWlnaHQ6MzE0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggI0ZGRkZGRjMzO1xyXG4gICAgd2lkdGg6MTIwMHB4O1xyXG4gICAgdG9wOjI2OHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwYWRkaW5nOjI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgIC5sZWZ0LWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAuc3BlYy1pbnN0cnVjdGlvbnMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOjE2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6MzcycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTYycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcclxuICAgICAgICAgICAgb3V0bGluZTowXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FuY2VsLWJ1dHRvbntcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRiA7XHJcbiAgICAgICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggIzAwMDAwMDEyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOjA7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGF5bWVudC1kYXRhe1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjU3cHg7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUxcHg7XHJcbiAgICAgICAgLnRvdGFse1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luOjE2cHggMFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGV0YWlse1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6OHB4IDA7XHJcbiAgICAgICAgICAgIC5kYXRhe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjE2cHggMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlbGVjdC1wYXl7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBtYXJnaW4tbGVmdDo0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMkFDMjE7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjYycHg7XHJcbiAgICAgICAgcGFkZGluZzoyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIC5jYXNoe1xyXG4gICAgICAgICAgICB3aWR0aDoxNTJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjQ0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5QjlCOUI7ICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ODJweDsgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzoxMHB4ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAucGF5LWJ1dHRvbntcclxuICAgICAgICAgICAgaGVpZ2h0Ojg4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjg4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRjJBQzIxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQ0ZGMDM7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOjBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJke1xyXG4gICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDY4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDpjb250YWluO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjE2cHhcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG4ua2V5Ym9hcmR7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6MTIwMHB4O1xyXG4gICAgbGVmdDpjYWxjKDUwJSAtIDYwMHB4KTtcclxuICAgIGJvdHRvbTowXHJcbiAgICBcclxufSIsIi5wYXktd3JhcHBlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBoZWlnaHQ6IDMxNHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggI0ZGRkZGRjMzO1xuICB3aWR0aDogMTIwMHB4O1xuICB0b3A6IDI2OHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5wYXktd3JhcHBlciAubGVmdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucGF5LXdyYXBwZXIgLmxlZnQtY29udGFpbmVyIC5zcGVjLWluc3RydWN0aW9ucyB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICByZXNpemU6IG5vbmU7XG4gIHdpZHRoOiAzNzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDE2MnB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBvdXRsaW5lOiAwO1xufVxuLnBheS13cmFwcGVyIC5sZWZ0LWNvbnRhaW5lciAuY2FuY2VsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjMDAwMDAwMTI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzVFNUI1ODtcbiAgb3V0bGluZTogMDtcbn1cbi5wYXktd3JhcHBlciAucGF5bWVudC1kYXRhIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXRvcDogNTdweDtcbiAgd2lkdGg6IDI2MHB4O1xuICBoZWlnaHQ6IDE1MXB4O1xufVxuLnBheS13cmFwcGVyIC5wYXltZW50LWRhdGEgLnRvdGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDE2cHggMDtcbn1cbi5wYXktd3JhcHBlciAucGF5bWVudC1kYXRhIC5kZXRhaWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbi5wYXktd3JhcHBlciAucGF5bWVudC1kYXRhIC5kZXRhaWwgLmRhdGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMTZweCAwO1xufVxuLnBheS13cmFwcGVyIC5zZWxlY3QtcGF5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0YyQUMyMTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDI2MnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGF5LXdyYXBwZXIgLnNlbGVjdC1wYXkgLmNhc2gge1xuICB3aWR0aDogMTUycHg7XG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlCOUI5QjtcbiAgbWFyZ2luLWJvdHRvbTogODJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnBheS13cmFwcGVyIC5zZWxlY3QtcGF5IC5wYXktYnV0dG9uIHtcbiAgaGVpZ2h0OiA4OHB4O1xuICB3aWR0aDogODhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRjJBQzIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0NGRjAzO1xuICBjb2xvcjogIzVFNUI1ODtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdXRsaW5lOiAwO1xufVxuLnBheS13cmFwcGVyIC5zZWxlY3QtcGF5IC5jYXJkIGltZyB7XG4gIHdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5rZXlib2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNjAwcHgpO1xuICBib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/payment/select-pay/select-pay.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/payment/select-pay/select-pay.component.ts ***!
  \***********************************************************************/
/*! exports provided: SelectPayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPayComponent", function() { return SelectPayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simple-keyboard */ "./node_modules/simple-keyboard/build/index.js");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simple_keyboard__WEBPACK_IMPORTED_MODULE_3__);




let SelectPayComponent = class SelectPayComponent {
    constructor(rs) {
        this.rs = rs;
        this.onSetPayData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedInput = "";
        this.spec_instructions = "";
        this.onChange = (input) => {
            if (this.selectedInput == 'spec-instructions') {
                this.spec_instructions = input;
            }
        };
        this.onKeyPress = (button) => {
            if (button == "{enter}") {
                this.keyboard.setInput(this.keyboard.getInput() + "\r\n");
                this.onChange(this.keyboard.getInput());
            }
            if (button === "{shift}" || button === "{lock}")
                this.handleShift();
        };
        this.onInputChange = (event) => {
            this.keyboard.setInput(event.target.value);
        };
        this.handleShift = () => {
            let currentLayout = this.keyboard.options.layoutName;
            let shiftToggle = currentLayout === "default" ? "shift" : "default";
            this.keyboard.setOptions({
                layoutName: shiftToggle
            });
        };
    }
    ngOnInit() {
    }
    cancel() {
        this.rs.setPayRoute(false);
    }
    setpaytypeData(data) {
        let payData = {
            paytype: data,
            spec_instructions: this.spec_instructions
        };
        this.onSetPayData.emit(payData);
    }
    selectInp(data) {
        this.selectedInput = data;
        if (this.selectedInput == 'spec-instructions') {
            this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_3___default.a({
                onChange: input => this.onChange(input),
                onKeyPress: button => this.onKeyPress(button)
            });
            this.keyboard.setInput(this.spec_instructions);
        }
    }
};
SelectPayComponent.ctorParameters = () => [
    { type: _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectPayComponent.prototype, "sub_total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectPayComponent.prototype, "tip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectPayComponent.prototype, "TAX", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectPayComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectPayComponent.prototype, "onSetPayData", void 0);
SelectPayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-pay',
        template: __webpack_require__(/*! raw-loader!./select-pay.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/payment/select-pay/select-pay.component.html"),
        styles: [__webpack_require__(/*! ./select-pay.component.scss */ "./src/app/components/payment/select-pay/select-pay.component.scss")]
    })
], SelectPayComponent);



/***/ }),

/***/ "./src/app/components/payment/tip/tip.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/payment/tip/tip.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tip-wrapper {\n  font-weight: 600;\n  font-family: roboto;\n  font-style: normal;\n  position: relative;\n  background-color: #FFFFFF;\n  height: 314px;\n  box-shadow: 0px 3px 15px #FFFFFF33;\n  width: 1200px;\n  top: 268px;\n  margin: auto;\n  padding: 24px;\n  border-radius: 8px;\n}\n.tip-wrapper .left-container {\n  display: inline-block;\n}\n.tip-wrapper .left-container .spec-instructions {\n  padding: 16px;\n  display: block;\n  resize: none;\n  width: 372px;\n  font-size: 14px;\n  height: 162px;\n  margin-bottom: 60px;\n  outline: 0;\n}\n.tip-wrapper .left-container .cancel-button {\n  display: block;\n  background: #FFFFFF;\n  border: 0;\n  box-shadow: 0px 3px 15px #00000012;\n  border-radius: 100px;\n  width: 150px;\n  height: 44px;\n  text-align: center;\n  color: #5E5B58;\n  outline: 0;\n}\n.tip-wrapper .right-container {\n  width: 702px;\n  vertical-align: top;\n  display: inline-block;\n  margin-left: 78px;\n}\n.tip-wrapper .right-container .header {\n  text-align: center;\n  font-size: 24px;\n  color: #5E5B58;\n}\n.tip-wrapper .right-container .tips {\n  margin-top: 48px;\n}\n.tip-wrapper .right-container .tips .tip-button {\n  outline: 0;\n  background: #F2AC21;\n  margin-right: 24px;\n  width: 200px;\n  height: 60px;\n  border: 0;\n  box-shadow: 0px 3px 15px #0000001F;\n  border-radius: 100px;\n  font-size: 16px;\n  color: #FFFFFF;\n}\n.tip-wrapper .right-container .menu {\n  margin-top: 39px;\n  text-align: center;\n}\n.tip-wrapper .right-container .menu-button {\n  outline: 0;\n  width: 200px;\n  height: 60px;\n  background: #FFFFFF;\n  border: 1px solid #9B9B9B;\n  border-radius: 100px;\n  color: #5E5B58;\n  font-size: 16px;\n  margin-right: 24px;\n}\n.tip-wrapper .right-container .custom-tip {\n  margin-top: 67px;\n  text-align: center;\n}\n.tip-wrapper .right-container .custom-tip .tip-input {\n  font-size: 16px;\n  padding: 19px 24px;\n  border: 1px solid #9B9B9B;\n  width: 364px;\n  outline: 0;\n}\n.tip-wrapper .right-container .custom-tip .next-button {\n  color: white;\n  width: 60px;\n  height: 60px;\n  background-color: #F2AC21;\n  border: 0;\n  font-size: 21px;\n  outline: 0;\n  vertical-align: top;\n}\n.keyboard {\n  position: absolute;\n  background-color: white;\n  width: 1200px;\n  left: calc(50% - 600px);\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L3RpcC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXGtpb3NrL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYXltZW50XFx0aXBcXHRpcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L3RpcC90aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLHFCQUFBO0FDRVI7QUREUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0daO0FERFU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0daO0FEQUk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDRVI7QUREUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHWjtBRERRO0VBQ0ksZ0JBQUE7QUNHWjtBREZZO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNJaEI7QUREUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNHWjtBREZZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0loQjtBRERRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0daO0FERlk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSWhCO0FERlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDSWhCO0FERUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L3RpcC90aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlwLXdyYXBwZXJ7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XHJcbiAgICBoZWlnaHQ6MzE0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggI0ZGRkZGRjMzO1xyXG4gICAgd2lkdGg6MTIwMHB4O1xyXG4gICAgdG9wOjI2OHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwYWRkaW5nOjI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgIC5sZWZ0LWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAuc3BlYy1pbnN0cnVjdGlvbnMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOjE2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6MzcycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTYycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcclxuICAgICAgICAgICAgb3V0bGluZTowXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FuY2VsLWJ1dHRvbntcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRiA7XHJcbiAgICAgICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggIzAwMDAwMDEyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOjA7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHQtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOjcwMnB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDo3OHB4O1xyXG4gICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgICAgY29sb3I6ICM1RTVCNTg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXBze1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjQ4cHg7XHJcbiAgICAgICAgICAgIC50aXAtYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTowO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0YyQUMyMTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoyNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggIzAwMDAwMDFGO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjM5cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAmLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6MDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOUI5QjlCO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzVFNUI1ODtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjI0cHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY3VzdG9tLXRpcHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo2N3B4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgLnRpcC1pbnB1dHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxOXB4IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOUI5QjlCO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzY0cHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmV4dC1idXR0b257XHJcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRjJBQzIxO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MjFweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6MDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLmtleWJvYXJke1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOjEyMDBweDtcclxuICAgIGxlZnQ6Y2FsYyg1MCUgLSA2MDBweCk7XHJcbiAgICBib3R0b206MFxyXG4gICAgXHJcbn0iLCIudGlwLXdyYXBwZXIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgaGVpZ2h0OiAzMTRweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4ICNGRkZGRkYzMztcbiAgd2lkdGg6IDEyMDBweDtcbiAgdG9wOiAyNjhweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4udGlwLXdyYXBwZXIgLmxlZnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnRpcC13cmFwcGVyIC5sZWZ0LWNvbnRhaW5lciAuc3BlYy1pbnN0cnVjdGlvbnMge1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcmVzaXplOiBub25lO1xuICB3aWR0aDogMzcycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAxNjJweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgb3V0bGluZTogMDtcbn1cbi50aXAtd3JhcHBlciAubGVmdC1jb250YWluZXIgLmNhbmNlbC1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggIzAwMDAwMDEyO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1RTVCNTg7XG4gIG91dGxpbmU6IDA7XG59XG4udGlwLXdyYXBwZXIgLnJpZ2h0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MDJweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNzhweDtcbn1cbi50aXAtd3JhcHBlciAucmlnaHQtY29udGFpbmVyIC5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM1RTVCNTg7XG59XG4udGlwLXdyYXBwZXIgLnJpZ2h0LWNvbnRhaW5lciAudGlwcyB7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG59XG4udGlwLXdyYXBwZXIgLnJpZ2h0LWNvbnRhaW5lciAudGlwcyAudGlwLWJ1dHRvbiB7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6ICNGMkFDMjE7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4ICMwMDAwMDAxRjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4udGlwLXdyYXBwZXIgLnJpZ2h0LWNvbnRhaW5lciAubWVudSB7XG4gIG1hcmdpbi10b3A6IDM5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aXAtd3JhcHBlciAucmlnaHQtY29udGFpbmVyIC5tZW51LWJ1dHRvbiB7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOUI5QjlCO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgY29sb3I6ICM1RTVCNTg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLnRpcC13cmFwcGVyIC5yaWdodC1jb250YWluZXIgLmN1c3RvbS10aXAge1xuICBtYXJnaW4tdG9wOiA2N3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGlwLXdyYXBwZXIgLnJpZ2h0LWNvbnRhaW5lciAuY3VzdG9tLXRpcCAudGlwLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxOXB4IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5QjlCOUI7XG4gIHdpZHRoOiAzNjRweDtcbiAgb3V0bGluZTogMDtcbn1cbi50aXAtd3JhcHBlciAucmlnaHQtY29udGFpbmVyIC5jdXN0b20tdGlwIC5uZXh0LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQUMyMTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG91dGxpbmU6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5rZXlib2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNjAwcHgpO1xuICBib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/payment/tip/tip.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/payment/tip/tip.component.ts ***!
  \*********************************************************/
/*! exports provided: TipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipComponent", function() { return TipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simple-keyboard */ "./node_modules/simple-keyboard/build/index.js");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simple_keyboard__WEBPACK_IMPORTED_MODULE_3__);




let TipComponent = class TipComponent {
    constructor(rs) {
        this.rs = rs;
        this.custom = false;
        this.onSetTipData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedInput = "";
        this.spec_instructions = "";
        this.tipValue = "";
        this.onChange = (input) => {
            if (this.selectedInput == 'spec-instructions') {
                this.spec_instructions = input;
            }
            else if (this.selectedInput == 'custom-tip') {
                this.tipValue = input;
            }
        };
        this.onKeyPress = (button) => {
            /**
             * If you want to handle the shift and caps lock buttons
             */
            if (this.selectedInput !== 'custom-tip') {
                if (button == "{enter}") {
                    this.keyboard.setInput(this.keyboard.getInput() + "\r\n");
                    this.onChange(this.keyboard.getInput());
                }
            }
            if (button === "{shift}" || button === "{lock}")
                this.handleShift();
        };
        this.onInputChange = (event) => {
            this.keyboard.setInput(event.target.value);
        };
        this.handleShift = () => {
            let currentLayout = this.keyboard.options.layoutName;
            let shiftToggle = currentLayout === "default" ? "shift" : "default";
            this.keyboard.setOptions({
                layoutName: shiftToggle
            });
        };
    }
    ngOnInit() {
    }
    cancel() {
        this.rs.setPayRoute(false);
    }
    getTip(price, percent) {
        return Math.round((price + this.TAX) * percent) / 100;
    }
    setData(price, percent) {
        let tip = Math.round((price + this.TAX) * percent) / 100;
        this.onSetTipData.emit({
            tip: tip,
            spec_instructions: this.spec_instructions
        });
    }
    selectInp(data) {
        this.selectedInput = data;
        if (this.selectedInput == 'spec-instructions') {
            this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_3___default.a({
                onChange: input => this.onChange(input),
                onKeyPress: button => this.onKeyPress(button)
            });
            this.keyboard.setInput(this.spec_instructions);
        }
        else if (this.selectedInput == 'custom-tip') {
            this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_3___default.a({
                onChange: input => this.onChange(input),
                onKeyPress: button => this.onKeyPress(button),
                inputPattern: /^\d+$/
            });
            this.keyboard.setInput(this.tipValue);
        }
    }
};
TipComponent.ctorParameters = () => [
    { type: _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TipComponent.prototype, "price", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TipComponent.prototype, "onSetTipData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TipComponent.prototype, "TAX", void 0);
TipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tip',
        template: __webpack_require__(/*! raw-loader!./tip.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/payment/tip/tip.component.html"),
        styles: [__webpack_require__(/*! ./tip.component.scss */ "./src/app/components/payment/tip/tip.component.scss")]
    })
], TipComponent);



/***/ }),

/***/ "./src/app/components/product-customize/product-customize.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product-customize/product-customize.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customize-wrapper {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 401px);\n  font-weight: 600;\n}\n.customize-wrapper .header {\n  height: 75px;\n  font-size: 24px;\n  padding-top: 23px;\n  color: #5E5B58;\n}\n.customize-wrapper .header .col1 {\n  display: inline-block;\n  width: 299px;\n  text-align: center;\n}\n.customize-wrapper .header .col2 {\n  display: inline-block;\n  width: calc(100% - 299px);\n  text-align: center;\n}\n.customize-wrapper .ingredient-list {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  overflow: auto;\n}\n.customize-wrapper .ingredient-list .ingredient {\n  background-color: #F9F9F9;\n}\n.customize-wrapper .ingredient-list .ingredient .ingredient-title {\n  vertical-align: top;\n  display: inline-block;\n  text-align: center;\n  width: 299px;\n  height: 249px;\n  font-size: 30px;\n  padding: 90px 0 0 34px;\n  color: #5E5B58;\n}\n.customize-wrapper .ingredient-list .ingredient .types {\n  overflow: auto;\n  white-space: nowrap;\n  vertical-align: top;\n  padding: 22px 6px;\n  display: inline-block;\n  background-color: white;\n  width: calc(100% - 299px);\n  height: 249px;\n  border-bottom: 1px solid #D8D8D8;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-container.selected {\n  vertical-align: top;\n  border: 4px solid #3CFF03;\n  border-bottom: 0;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-container.selected .type-container-detail {\n  border: 0;\n  background-color: #3CFF03;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-container.selected .type-container-detail .title {\n  text-decoration: unset;\n  color: #5E5B58;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-container.selected .type-container-img {\n  margin-bottom: 14px;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type {\n  vertical-align: top;\n  margin: 0 24px;\n  display: inline-block;\n  height: 200px;\n  width: 200px;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-container-img {\n  display: block;\n  width: 100%;\n  height: 110px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-bottom: 18px;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-container-detail {\n  width: 100%;\n  height: 72px;\n  border: 1px solid #D8D8D8;\n  border-radius: 4px;\n  padding: 15px 8px;\n  font-size: 16px;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-container-detail .title {\n  vertical-align: top;\n  display: inline-block;\n  width: 132px;\n  height: 38px;\n  text-align: center;\n  color: #0F6BD5;\n  text-decoration: underline;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-container-detail .title div {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-container-detail .price {\n  display: inline-block;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-selecting {\n  height: 200px;\n  width: 200px;\n  border: 1px solid #D8D8D8;\n  border-radius: 8px;\n  padding: 8px;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-selecting .selecting-header {\n  font-size: 14px;\n  color: #5E5B58;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-selecting .selecting-header .heading {\n  vertical-align: top;\n  display: inline-block;\n  width: 148px;\n  margin-right: 10px;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-selecting .selecting-header .close {\n  width: 24px;\n  text-align: center;\n  display: inline-block;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-selecting .control-buttons button {\n  display: block;\n  width: 100%;\n  background-color: transparent;\n  border: 1px solid #F2AC21;\n  color: #F2AC21;\n  font-size: 14px;\n  text-align: center;\n  padding: 7.5px;\n  margin-top: 7px;\n  border-radius: 4px;\n}\n.customize-wrapper .ingredient-list .ingredient .types .type-selecting .control-buttons button[disabled] {\n  color: #D8D8D8;\n  border: 1px solid #D8D8D8;\n}\n.ingredient-list::-webkit-scrollbar {\n  display: none !important;\n}\n.types::-webkit-scrollbar {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWN1c3RvbWl6ZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXGtpb3NrL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0LWN1c3RvbWl6ZVxccHJvZHVjdC1jdXN0b21pemUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1jdXN0b21pemUvcHJvZHVjdC1jdXN0b21pemUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ1I7QURBUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRVo7QURBUTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VaO0FEQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NSO0FEQVE7RUFDSSx5QkFBQTtBQ0VaO0FERFk7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNHaEI7QUREWTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUNHaEI7QURGZ0I7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNJcEI7QURIb0I7RUFDSSxTQUFBO0VBQ0EseUJBQUE7QUNLeEI7QURKd0I7RUFDSSxzQkFBQTtFQUNBLGNBQUE7QUNNNUI7QURGb0I7RUFDSSxtQkFBQTtBQ0l4QjtBRERnQjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNHcEI7QUREd0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNHNUI7QUREd0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHNUI7QURBNEI7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ0VoQztBRERnQztFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0dwQztBREM0QjtFQUNJLHFCQUFBO0FDQ2hDO0FESW9CO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0Z4QjtBREd3QjtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRDVCO0FERTRCO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQWhDO0FERTRCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBaEM7QURHd0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0Q1QjtBREU0QjtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0FoQztBRFVBO0VBQXFDLHdCQUFBO0FDTnJDO0FET0E7RUFBMkIsd0JBQUE7QUNIM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtY3VzdG9taXplL3Byb2R1Y3QtY3VzdG9taXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbWl6ZS13cmFwcGVye1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDoxMDAlIDtcclxuICAgIGhlaWdodDpjYWxjKDEwMCUgLSA0MDFweCk7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgXHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIGhlaWdodDo3NXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjIzcHg7XHJcbiAgICAgICAgY29sb3I6IzVFNUI1ODtcclxuICAgICAgICAuY29sMXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOjI5OXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbDJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSAyOTlweCk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluZ3JlZGllbnQtbGlzdHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlOyAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgICAgICAuaW5ncmVkaWVudHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRjlGOUY5O1xyXG4gICAgICAgICAgICAuaW5ncmVkaWVudC10aXRsZXtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyOTlweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyNDlweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOTBweCAwIDAgMzRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiM1RTVCNThcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudHlwZXN7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoyMnB4IDZweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDI5OXB4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyNDlweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNEOEQ4RDg7XHJcbiAgICAgICAgICAgICAgICAudHlwZS1jb250YWluZXIuc2VsZWN0ZWR7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6NHB4IHNvbGlkICMzQ0ZGMDM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTowOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC50eXBlLWNvbnRhaW5lci1kZXRhaWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQ0ZGMDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246dW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudHlwZS1jb250YWluZXItaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnR5cGV7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgMjRweDsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMDBweDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAmLWNvbnRhaW5lcnsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi1pbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6Y29udGFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MThweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYtZGV0YWlse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo3MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjRDhEOEQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHggOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDozOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiMwRjZCRDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLXNlbGVjdGluZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjRDhEOEQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RpbmctaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udHJvbC1idXR0b25zIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNGMkFDMjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojRjJBQzIxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6Ny41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJltkaXNhYmxlZF17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I0Q4RDhEODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNEOEQ4RDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5pbmdyZWRpZW50LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudCB9O1xyXG4udHlwZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudCB9OyIsIi5jdXN0b21pemUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDAxcHgpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmN1c3RvbWl6ZS13cmFwcGVyIC5oZWFkZXIge1xuICBoZWlnaHQ6IDc1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy10b3A6IDIzcHg7XG4gIGNvbG9yOiAjNUU1QjU4O1xufVxuLmN1c3RvbWl6ZS13cmFwcGVyIC5oZWFkZXIgLmNvbDEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyOTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmN1c3RvbWl6ZS13cmFwcGVyIC5oZWFkZXIgLmNvbDIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyOTlweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaW5ncmVkaWVudC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaW5ncmVkaWVudC1saXN0IC5pbmdyZWRpZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaW5ncmVkaWVudC1saXN0IC5pbmdyZWRpZW50IC5pbmdyZWRpZW50LXRpdGxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyOTlweDtcbiAgaGVpZ2h0OiAyNDlweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nOiA5MHB4IDAgMCAzNHB4O1xuICBjb2xvcjogIzVFNUI1ODtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaW5ncmVkaWVudC1saXN0IC5pbmdyZWRpZW50IC50eXBlcyB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nOiAyMnB4IDZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI5OXB4KTtcbiAgaGVpZ2h0OiAyNDlweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLmluZ3JlZGllbnQtbGlzdCAuaW5ncmVkaWVudCAudHlwZXMgLnR5cGUtY29udGFpbmVyLnNlbGVjdGVkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzNDRkYwMztcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaW5ncmVkaWVudC1saXN0IC5pbmdyZWRpZW50IC50eXBlcyAudHlwZS1jb250YWluZXIuc2VsZWN0ZWQgLnR5cGUtY29udGFpbmVyLWRldGFpbCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDRkYwMztcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaW5ncmVkaWVudC1saXN0IC5pbmdyZWRpZW50IC50eXBlcyAudHlwZS1jb250YWluZXIuc2VsZWN0ZWQgLnR5cGUtY29udGFpbmVyLWRldGFpbCAudGl0bGUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xuICBjb2xvcjogIzVFNUI1ODtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaW5ncmVkaWVudC1saXN0IC5pbmdyZWRpZW50IC50eXBlcyAudHlwZS1jb250YWluZXIuc2VsZWN0ZWQgLnR5cGUtY29udGFpbmVyLWltZyB7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLmluZ3JlZGllbnQtbGlzdCAuaW5ncmVkaWVudCAudHlwZXMgLnR5cGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW46IDAgMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLmluZ3JlZGllbnQtbGlzdCAuaW5ncmVkaWVudCAudHlwZXMgLnR5cGUtY29udGFpbmVyLWltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaW5ncmVkaWVudC1saXN0IC5pbmdyZWRpZW50IC50eXBlcyAudHlwZS1jb250YWluZXItZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q4RDhEODtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxNXB4IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmN1c3RvbWl6ZS13cmFwcGVyIC5pbmdyZWRpZW50LWxpc3QgLmluZ3JlZGllbnQgLnR5cGVzIC50eXBlLWNvbnRhaW5lci1kZXRhaWwgLnRpdGxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTMycHg7XG4gIGhlaWdodDogMzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzBGNkJENTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLmluZ3JlZGllbnQtbGlzdCAuaW5ncmVkaWVudCAudHlwZXMgLnR5cGUtY29udGFpbmVyLWRldGFpbCAudGl0bGUgZGl2IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLmluZ3JlZGllbnQtbGlzdCAuaW5ncmVkaWVudCAudHlwZXMgLnR5cGUtY29udGFpbmVyLWRldGFpbCAucHJpY2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLmluZ3JlZGllbnQtbGlzdCAuaW5ncmVkaWVudCAudHlwZXMgLnR5cGUtc2VsZWN0aW5nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDhEOEQ4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaW5ncmVkaWVudC1saXN0IC5pbmdyZWRpZW50IC50eXBlcyAudHlwZS1zZWxlY3RpbmcgLnNlbGVjdGluZy1oZWFkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNUU1QjU4O1xufVxuLmN1c3RvbWl6ZS13cmFwcGVyIC5pbmdyZWRpZW50LWxpc3QgLmluZ3JlZGllbnQgLnR5cGVzIC50eXBlLXNlbGVjdGluZyAuc2VsZWN0aW5nLWhlYWRlciAuaGVhZGluZyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE0OHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY3VzdG9taXplLXdyYXBwZXIgLmluZ3JlZGllbnQtbGlzdCAuaW5ncmVkaWVudCAudHlwZXMgLnR5cGUtc2VsZWN0aW5nIC5zZWxlY3RpbmctaGVhZGVyIC5jbG9zZSB7XG4gIHdpZHRoOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaW5ncmVkaWVudC1saXN0IC5pbmdyZWRpZW50IC50eXBlcyAudHlwZS1zZWxlY3RpbmcgLmNvbnRyb2wtYnV0dG9ucyBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjJBQzIxO1xuICBjb2xvcjogI0YyQUMyMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDcuNXB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jdXN0b21pemUtd3JhcHBlciAuaW5ncmVkaWVudC1saXN0IC5pbmdyZWRpZW50IC50eXBlcyAudHlwZS1zZWxlY3RpbmcgLmNvbnRyb2wtYnV0dG9ucyBidXR0b25bZGlzYWJsZWRdIHtcbiAgY29sb3I6ICNEOEQ4RDg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG5cbi5pbmdyZWRpZW50LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udHlwZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/product-customize/product-customize.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/product-customize/product-customize.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductCustomizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCustomizeComponent", function() { return ProductCustomizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/menu.service */ "./src/app/shared/services/menu.service.ts");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





let ProductCustomizeComponent = class ProductCustomizeComponent {
    constructor(ms, rs) {
        this.ms = ms;
        this.rs = rs;
        this.openTypeId = "";
        this.special = false;
        this.Subscriptions = [];
        this.imgUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].staticUrl + 'images/';
    }
    getimage(image) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.imgUrl}${image}`, true);
        xhr.responseType = 'blob';
        xhr.onload = function (e) {
            var img = document.getElementById(image);
            img.setAttribute('src', window.URL.createObjectURL(this.response));
        };
        xhr.send();
    }
    ngOnInit() {
        this.route = this.rs.$route.subscribe(route => {
            if (route == "customize") {
                this.Subscriptions.push(this.ms.product.subscribe((dat) => {
                    this.type = dat.type;
                    dat.product.ingredients.forEach(ingr => {
                        ingr.types.forEach(type => {
                            dat.product.defaults.forEach(def => {
                                if (def._id == type._id) {
                                    type.selected = true;
                                }
                            });
                        });
                        let sel = [];
                        ingr.types = ingr.types.filter(type => {
                            if (type.selected) {
                                sel.push(type);
                            }
                            return !type.selected;
                        });
                        ingr.types = sel.concat(ingr.types);
                    });
                    this.product = dat.product;
                }));
            }
            else if (route == "customize-combo-prod") {
                this.special = true;
                this.Subscriptions.push(this.ms.comboPrord.subscribe((dat) => {
                    this.type = dat.type;
                    this.ref = dat.ref;
                    dat.product.ingredients.forEach(ingr => {
                        ingr.types.forEach(type => {
                            dat.product.defaults.forEach(def => {
                                if (def._id == type._id) {
                                    type.selected = true;
                                }
                            });
                        });
                        let sel = [];
                        ingr.types = ingr.types.filter(type => {
                            if (type.selected) {
                                sel.push(type);
                            }
                            return !type.selected;
                        });
                        ingr.types = sel.concat(ingr.types);
                    });
                    this.product = dat.product;
                }));
            }
        });
    }
    ngOnDestroy() {
        this.Subscriptions.forEach(s => s.unsubscribe());
        this.route.unsubscribe();
        this.special = false;
    }
    openTypeSelecting(id) {
        this.openTypeId = id;
    }
    deleteItem(id, ii, ti) {
        this.product.defaults = this.product.defaults.filter(deflt => {
            return deflt._id != id;
        });
        delete this.product.ingredients[ii].types[ti].selected;
        let tp = this.product.ingredients[ii].types[ti];
        this.product.price = (this.product.price * 1000 - tp.price * 1000) / 1000;
        tp.price = tp.normal_price;
        this.product.ingredients[ii].types.splice(ti, 1);
        this.product.ingredients[ii].types.push(tp);
        this.openTypeId = "";
        if (!this.special) {
            this.ms.addForPay({ prod: this.product, action: "update", special: this.special });
        }
        else {
            this.ms.addForPay({ prod: this.ref, action: "update", special: this.special });
        }
    }
    addProduct(qty, type, ingredient) {
        if (ingredient && ingredient.multiSelect) {
            this.addProd(qty, type, ingredient);
        }
        else {
            let id = ingredient.types[0]._id;
            this.product.defaults = this.product.defaults.filter(def => {
                return def._id != id;
            });
            delete ingredient.types[0].selected;
            ingredient.types[0].price = ingredient.types[0].normal_price;
            ingredient.types.push(ingredient.types[0]);
            ingredient.types.splice(0, 1);
            this.addProd(qty, type, ingredient);
        }
    }
    addProd(qty, type, ingredient) {
        let defaultSelected = this.product.defaults.find(data => {
            return data._id == type._id;
        });
        switch (qty) {
            case "normal":
                type.selected = true;
                type.price = type.normal_price;
                delete type.selected_qty;
                break;
            case "light":
                type.selected = true;
                type.price = type.light_price;
                type.selected_qty = 0.5;
                break;
            case "double":
                type.selected = true;
                type.price = type.double_price;
                type.selected_qty = 2;
                break;
            default:
                break;
        }
        ingredient.types = ingredient.types.filter(t => {
            return t._id != type._id;
        });
        ingredient.types.unshift(type);
        if (!defaultSelected) {
            this.product.defaults.unshift(type);
        }
        else {
            defaultSelected.selected_qty = type.selected_qty;
            defaultSelected.price = type.price;
        }
        this.product.price = this.product.defaults.reduce((curr, next) => {
            return (curr * 1000 + next.price * 1000) / 1000;
        }, 0);
        this.openTypeId = "";
        if (!this.special) {
            this.ms.addForPay({ prod: this.product, action: "update", special: this.special });
        }
        else {
            let pr = JSON.parse(JSON.stringify(this.ref));
            pr.price = 0;
            pr.menus.forEach((menu) => {
                pr.price = (pr.price * 1000 + menu.default[0].price * 1000) / 1000;
            });
            this.ms.addForPay({ prod: pr, action: "update", special: this.special });
        }
    }
};
ProductCustomizeComponent.ctorParameters = () => [
    { type: _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"] }
];
ProductCustomizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-customize',
        template: __webpack_require__(/*! raw-loader!./product-customize.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-customize/product-customize.component.html"),
        styles: [__webpack_require__(/*! ./product-customize.component.scss */ "./src/app/components/product-customize/product-customize.component.scss")]
    })
], ProductCustomizeComponent);



/***/ }),

/***/ "./src/app/components/product-details/product-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-wrapper {\n  width: 100%;\n  height: 326px;\n  border: 4px solid #3CFF03;\n  font-weight: 600;\n}\n.product-wrapper .header {\n  margin: 30px 0 24px 54px;\n  text-align: left;\n  font-weight: bold;\n  font-size: 28px;\n  color: #F2AC21;\n}\n.product-wrapper .detail-menu {\n  margin-left: 136px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.product-wrapper .detail-menu .left-button, .product-wrapper .detail-menu .left-button-transparent {\n  color: #5E5B58;\n  font-size: 16px;\n  white-space: normal;\n  text-align: center;\n  padding: 30px 0;\n  overflow: hidden;\n  height: 128px;\n  width: 128px;\n  background-color: #3CFF03;\n  border: 2px solid #F2AC21;\n  border-radius: 50%;\n  display: inline-block;\n}\n.product-wrapper .detail-menu .left-button-transparent {\n  visibility: hidden;\n}\n.product-wrapper .detail-menu .product-image {\n  vertical-align: top;\n  width: 240px;\n  height: 134px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-left: 35px;\n}\n.product-wrapper .detail-menu .details {\n  vertical-align: top;\n  display: inline-block;\n  margin-left: 35px;\n  max-height: 228px;\n  width: calc(100% - 684px);\n  overflow: hidden;\n}\n.product-wrapper .detail-menu .details .images .selected-image {\n  height: 88px;\n  width: 88px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: 0 12px;\n}\n.product-wrapper .detail-menu .details .text {\n  white-space: normal;\n}\n.product-wrapper .detail-menu .ordering {\n  vertical-align: top;\n  display: inline-block;\n  margin-left: 35px;\n  max-height: 228px;\n}\n.product-wrapper .detail-menu .ordering .order-button {\n  padding-top: 42px;\n  font-size: 16px;\n  width: 128px;\n  height: 128px;\n  background-color: #3CFF03;\n  border: 2px solid #F2AC21;\n  color: #5E5B58;\n  border-radius: 50%;\n  margin: auto;\n  text-align: center;\n}\n.product-wrapper .detail-menu .ordering .order-button span {\n  display: block;\n  font-size: 24px;\n  font-weight: 500;\n}\n.product-wrapper .detail-menu .ordering .cancel-button {\n  padding-top: 20px;\n  font-size: 16px;\n  width: 64px;\n  height: 64px;\n  background-color: #FFFE03;\n  border: 2px solid #5E5B58;\n  color: #5E5B58;\n  border-radius: 50%;\n  margin: 16px auto 0;\n  text-align: center;\n}\n.specials::-webkit-scrollbar {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxraW9zay9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdC1kZXRhaWxzXFxwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRERRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0VaO0FEQ1E7RUFDRyxrQkFBQTtBQ0NYO0FEQ1E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ1o7QURDUTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NaO0FEQ2dCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NwQjtBREVZO0VBQ0ksbUJBQUE7QUNBaEI7QURHUTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRFo7QURHWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RoQjtBREVnQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBcEI7QURHWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNEaEI7QURRQTtFQUE4Qix3QkFBQTtBQ0o5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXdyYXBwZXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjMyNnB4O1xyXG4gICAgYm9yZGVyOjRweCBzb2xpZCAjM0NGRjAzO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgLmhlYWRlcntcclxuICAgICAgICBtYXJnaW46MzBweCAwIDI0cHggNTRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOjI4cHg7XHJcbiAgICAgICAgY29sb3I6ICNGMkFDMjE7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsLW1lbnV7ICAgICAgICBcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMzZweDsgXHJcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwOyAgICBcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47ICBcclxuICAgICAgICAubGVmdC1idXR0b24sLmxlZnQtYnV0dG9uLXRyYW5zcGFyZW50e1xyXG4gICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOm5vcm1hbDsgXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjMwcHggMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OjEyOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxMjhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNDRkYwMztcclxuICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjRjJBQzIxO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2tcclxuXHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIC5sZWZ0LWJ1dHRvbi10cmFuc3BhcmVudHtcclxuICAgICAgICAgICB2aXNpYmlsaXR5OmhpZGRlblxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1pbWFnZXtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgICAgICB3aWR0aDoyNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjEzNHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OmNvbnRhaW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjM1cHhcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjM1cHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6MjI4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDY4NHB4KTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAuaW1hZ2Vze1xyXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkLWltYWdle1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo4OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjg4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCAxMnB4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm9yZGVyaW5ne1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDozNXB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OjIyOHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLm9yZGVyLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjQycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEyOHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEyOHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojM0NGRjAzO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjRjJBQzIxO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzVFNUI1ODsgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhbmNlbC1idXR0b257XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo2NHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjY0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZFMDM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICM1RTVCNTg7ICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IzVFNUI1ODsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjE2cHggYXV0byAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG4uc3BlY2lhbHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudCB9IiwiLnByb2R1Y3Qtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMyNnB4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjM0NGRjAzO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnByb2R1Y3Qtd3JhcHBlciAuaGVhZGVyIHtcbiAgbWFyZ2luOiAzMHB4IDAgMjRweCA1NHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogI0YyQUMyMTtcbn1cbi5wcm9kdWN0LXdyYXBwZXIgLmRldGFpbC1tZW51IHtcbiAgbWFyZ2luLWxlZnQ6IDEzNnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2R1Y3Qtd3JhcHBlciAuZGV0YWlsLW1lbnUgLmxlZnQtYnV0dG9uLCAucHJvZHVjdC13cmFwcGVyIC5kZXRhaWwtbWVudSAubGVmdC1idXR0b24tdHJhbnNwYXJlbnQge1xuICBjb2xvcjogIzVFNUI1ODtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgd2lkdGg6IDEyOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0NGRjAzO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRjJBQzIxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wcm9kdWN0LXdyYXBwZXIgLmRldGFpbC1tZW51IC5sZWZ0LWJ1dHRvbi10cmFuc3BhcmVudCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5wcm9kdWN0LXdyYXBwZXIgLmRldGFpbC1tZW51IC5wcm9kdWN0LWltYWdlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDEzNHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cbi5wcm9kdWN0LXdyYXBwZXIgLmRldGFpbC1tZW51IC5kZXRhaWxzIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgbWF4LWhlaWdodDogMjI4cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2ODRweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZHVjdC13cmFwcGVyIC5kZXRhaWwtbWVudSAuZGV0YWlscyAuaW1hZ2VzIC5zZWxlY3RlZC1pbWFnZSB7XG4gIGhlaWdodDogODhweDtcbiAgd2lkdGg6IDg4cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbjogMCAxMnB4O1xufVxuLnByb2R1Y3Qtd3JhcHBlciAuZGV0YWlsLW1lbnUgLmRldGFpbHMgLnRleHQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLnByb2R1Y3Qtd3JhcHBlciAuZGV0YWlsLW1lbnUgLm9yZGVyaW5nIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgbWF4LWhlaWdodDogMjI4cHg7XG59XG4ucHJvZHVjdC13cmFwcGVyIC5kZXRhaWwtbWVudSAub3JkZXJpbmcgLm9yZGVyLWJ1dHRvbiB7XG4gIHBhZGRpbmctdG9wOiA0MnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDRkYwMztcbiAgYm9yZGVyOiAycHggc29saWQgI0YyQUMyMTtcbiAgY29sb3I6ICM1RTVCNTg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZHVjdC13cmFwcGVyIC5kZXRhaWwtbWVudSAub3JkZXJpbmcgLm9yZGVyLWJ1dHRvbiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wcm9kdWN0LXdyYXBwZXIgLmRldGFpbC1tZW51IC5vcmRlcmluZyAuY2FuY2VsLWJ1dHRvbiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZFMDM7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1RTVCNTg7XG4gIGNvbG9yOiAjNUU1QjU4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTZweCBhdXRvIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwZWNpYWxzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/product-details/product-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/menu.service */ "./src/app/shared/services/menu.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");





let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(ms, rs) {
        this.ms = ms;
        this.rs = rs;
        this.imgUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticUrl + 'images/';
        this.Subscriptions = [];
    }
    ngOnInit() {
        this.route = this.rs.$route.subscribe(route => {
            if (route == "customize-combo-prod") {
                this.Subscriptions.push(this.ms.comboPrord.subscribe((dat) => {
                    this.type = dat.type;
                    this.quickProd = JSON.parse(JSON.stringify(dat.product));
                    console.log(dat.product);
                    this.product = dat.product;
                }));
            }
            else {
                this.Subscriptions.push(this.ms.product.subscribe((data) => {
                    this.type = data.type;
                    this.quickProd = JSON.parse(JSON.stringify(data.product));
                    this.product = data.product;
                    if (this.type == "combo") {
                        this.product.price = 0;
                        this.product.menus.forEach(menu => {
                            if (menu.default && menu.default.length) {
                                this.product.price = (this.product.price * 1000 + menu.default[0].price * 1000) / 1000;
                            }
                        });
                    }
                }));
            }
        });
    }
    ngOnDestroy() {
        this.Subscriptions.forEach(s => s.unsubscribe());
        this.route.unsubscribe();
    }
    next() {
        this.rs.setRoute("combo");
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"] }
];
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: __webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-details/product-details.component.html"),
        styles: [__webpack_require__(/*! ./product-details.component.scss */ "./src/app/components/product-details/product-details.component.scss")]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/directives/click-stop-propagation.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/directives/click-stop-propagation.directive.ts ***!
  \****************************************************************/
/*! exports provided: ClickStopPropagationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickStopPropagationDirective", function() { return ClickStopPropagationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClickStopPropagationDirective = class ClickStopPropagationDirective {
    constructor() { }
    onClick(event) {
        event.stopPropagation();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"])
], ClickStopPropagationDirective.prototype, "onClick", null);
ClickStopPropagationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appClickStopPropagation]'
    })
], ClickStopPropagationDirective);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: white;\n}\n.wrapper .hr {\n  width: calc(100% - 120px);\n  height: 0;\n  border-bottom: 2px solid #F2AC21;\n  margin: 0 auto 60px auto;\n}\n.wrapper .header-text {\n  font-family: roboto;\n  font-weight: bold;\n  font-size: 80px;\n  outline: 0;\n  text-align: center;\n  color: #5E5B58;\n  margin: 60px 0 60px 0;\n}\n.wrapper .back-img {\n  position: fixed;\n  display: block;\n  height: calc(100% - 318px);\n  width: calc(100% - 120px);\n  left: 60px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXGtpb3NrL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUF3QkksdUJBQUE7QUN0Qko7QURESTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7QUNHUjtBRERJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNHUjtBRERJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgLmhye1xyXG4gICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDEyMHB4KTtcclxuICAgICAgICBoZWlnaHQ6MDtcclxuICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjRjJBQzIxO1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG8gNjBweCBhdXRvXHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXRleHR7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6ODBweDtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgbWFyZ2luOjYwcHggMCA2MHB4IDBcclxuICAgIH1cclxuICAgIC5iYWNrLWltZ3tcclxuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6Y2FsYygxMDAlIC0gMzE4cHgpO1xyXG4gICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDEyMHB4KTtcclxuICAgICAgICBsZWZ0OjYwcHg7XHJcbiAgICAgICAgbWFyZ2luOmF1dG9cclxuICAgIH1cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi53cmFwcGVyIC5ociB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGMkFDMjE7XG4gIG1hcmdpbjogMCBhdXRvIDYwcHggYXV0bztcbn1cbi53cmFwcGVyIC5oZWFkZXItdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDgwcHg7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1RTVCNTg7XG4gIG1hcmdpbjogNjBweCAwIDYwcHggMDtcbn1cbi53cmFwcGVyIC5iYWNrLWltZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzE4cHgpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICBsZWZ0OiA2MHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let HomeComponent = class HomeComponent {
    constructor() {
        this.imgUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticUrl + 'images/';
    }
    ngOnInit() {
    }
    authorize() {
        return localStorage.getItem("terminal_id");
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1000000000;\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.login-wrapper .auth-form {\n  position: absolute;\n  top: calc(50% - 150px);\n  left: calc(50% - 200px);\n  background-color: white;\n  height: 300px;\n  width: 400px;\n  padding: 10px 10px;\n}\n.login-wrapper .auth-form input {\n  display: block;\n  width: calc(100% - 24px);\n  margin: 10px auto;\n  padding: 5px 15px;\n  font-size: 16px;\n  outline: 0;\n}\n.login-wrapper .auth-form button {\n  display: block;\n  width: calc(100% - 24px);\n  margin: 10px auto;\n  padding: 5px 15px;\n  font-size: 16px;\n  outline: 0;\n}\n.login-wrapper .keyboard {\n  position: absolute;\n  background-color: white;\n  width: 1200px;\n  left: calc(50% - 600px);\n  bottom: 100px;\n}\n.login-wrapper .auth-form.focused {\n  top: 100px;\n}\n.login-wrapper input.focused {\n  border: 1px solid #F2AC21;\n  color: #F2AC21;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxraW9zay9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDR1o7QUREUTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0daO0FEQ0k7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FERUE7RUFDSSxVQUFBO0FDQUo7QURFQTtFQUNHLHlCQUFBO0VBQ0EsY0FBQTtBQ0FIIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4td3JhcHBlcntcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB6LWluZGV4OjEwMDAwMDAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XHJcbiAgICAuYXV0aC1mb3Jte1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHRvcDpjYWxjKDUwJSAtIDE1MHB4KTtcclxuICAgICAgICBsZWZ0OmNhbGMoNTAlIC0gMjAwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OjMwMHB4O1xyXG4gICAgICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6MTBweCAxMHB4O1xyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSAyNHB4KTtcclxuICAgICAgICAgICAgbWFyZ2luOjEwcHggYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzo1cHggMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6MFxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDI0cHgpO1xyXG4gICAgICAgICAgICBtYXJnaW46MTBweCBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjVweCAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgb3V0bGluZTowXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5rZXlib2FyZHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDoxMjAwcHg7XHJcbiAgICBsZWZ0OmNhbGMoNTAlIC0gNjAwcHgpO1xyXG4gICAgYm90dG9tOjEwMHB4XHJcbiAgICBcclxufVxyXG4uYXV0aC1mb3JtLmZvY3VzZWR7XHJcbiAgICB0b3A6MTAwcHhcclxufVxyXG5pbnB1dC5mb2N1c2Vke1xyXG4gICBib3JkZXI6MXB4IHNvbGlkICNGMkFDMjE7IFxyXG4gICBjb2xvcjojRjJBQzIxOyBcclxufVxyXG59IiwiLmxvZ2luLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuLmxvZ2luLXdyYXBwZXIgLmF1dGgtZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDE1MHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMDBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cbi5sb2dpbi13cmFwcGVyIC5hdXRoLWZvcm0gaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0cHgpO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogMDtcbn1cbi5sb2dpbi13cmFwcGVyIC5hdXRoLWZvcm0gYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG91dGxpbmU6IDA7XG59XG4ubG9naW4td3JhcHBlciAua2V5Ym9hcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTIwMHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDYwMHB4KTtcbiAgYm90dG9tOiAxMDBweDtcbn1cbi5sb2dpbi13cmFwcGVyIC5hdXRoLWZvcm0uZm9jdXNlZCB7XG4gIHRvcDogMTAwcHg7XG59XG4ubG9naW4td3JhcHBlciBpbnB1dC5mb2N1c2VkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0YyQUMyMTtcbiAgY29sb3I6ICNGMkFDMjE7XG59Il19 */"

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
/* harmony import */ var _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/menu.service */ "./src/app/shared/services/menu.service.ts");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simple-keyboard */ "./node_modules/simple-keyboard/build/index.js");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simple_keyboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");





let LoginComponent = class LoginComponent {
    constructor(ms, toasterService) {
        this.ms = ms;
        this.toasterService = toasterService;
        this.selectedInput = "";
        this.user = {
            userName: "",
            terminal: "",
            password: ""
        };
        this.onChange = (input) => {
            if (this.selectedInput == 'username') {
                this.user.userName = input;
            }
            if (this.selectedInput == 'terminal') {
                this.user.terminal = input;
            }
            if (this.selectedInput == 'password') {
                this.user.password = input;
            }
        };
        this.onKeyPress = (button) => {
            if (button == "{enter}") {
                this.keyboard.setInput(this.keyboard.getInput() + "\r\n");
                this.onChange(this.keyboard.getInput());
            }
            if (button === "{shift}" || button === "{lock}")
                this.handleShift();
        };
        this.onInputChange = (event) => {
            this.keyboard.setInput(event.target.value);
        };
        this.handleShift = () => {
            let currentLayout = this.keyboard.options.layoutName;
            let shiftToggle = currentLayout === "default" ? "shift" : "default";
            this.keyboard.setOptions({
                layoutName: shiftToggle
            });
        };
    }
    ngOnInit() {
    }
    selectInp(data) {
        this.selectedInput = data;
        if (this.selectedInput == 'username') {
            this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_3___default.a({
                onChange: input => this.onChange(input),
                onKeyPress: button => this.onKeyPress(button)
            });
            this.keyboard.setInput(this.user.userName);
        }
        else if (this.selectedInput == 'terminal') {
            this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_3___default.a({
                onChange: input => this.onChange(input),
                onKeyPress: button => this.onKeyPress(button)
            });
            this.keyboard.setInput(this.user.terminal);
        }
        else if (this.selectedInput == 'password') {
            this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_3___default.a({
                onChange: input => this.onChange(input),
                onKeyPress: button => this.onKeyPress(button)
            });
            this.keyboard.setInput(this.user.password);
        }
    }
    login() {
        this.ms.login(this.user).subscribe((data) => {
            localStorage.setItem("terminal_id", data);
        }, (err) => {
            this.toasterService.pop('error', err.error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  font-weight: 600;\n  font-family: roboto;\n  font-style: normal;\n  position: fixed;\n  z-index: 5;\n  right: 0;\n  width: 400px;\n  height: 100%;\n  background-color: white;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\n  /* Handle on hover */\n}\n.wrapper .logo {\n  width: 340px;\n  height: 180px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: 30px auto;\n}\n.wrapper .pay-head {\n  margin: 0 30px;\n  color: #F2AC21;\n  font-size: 24px;\n  border-bottom: 1px solid #5E5B58;\n  text-align: center;\n  padding: 8px 0 16px 0;\n}\n.wrapper .back-bttn {\n  position: absolute;\n  bottom: 30px;\n  font-size: 20px;\n  padding: 10.5px 0;\n  border: 0;\n  left: 30px;\n  background-color: transparent;\n  border-radius: 200px;\n  width: 90px;\n}\n.wrapper .payment-wrapper {\n  border: 1px solid #F2AC21;\n  margin: 10px auto;\n  width: 340px;\n  padding: 10px;\n  border-radius: 8px;\n}\n.wrapper .payment-wrapper .product-detail {\n  padding: 0 6px;\n  max-height: 170px;\n  border-bottom: 1px solid #D8D8D8;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product {\n  font-family: roboto;\n  font-weight: 600;\n  font-size: 16px;\n  color: #5E5B58;\n  margin-bottom: 8px;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product-detail {\n  display: flex;\n  justify-content: space-between;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product-detail .detail-menu {\n  width: 231px;\n  font-weight: 600;\n  font-size: 16px;\n  color: #5E5B58;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product-detail .detail-menu .content {\n  width: 150px;\n  overflow: hidden;\n  width: 231px;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product-detail .detail-menu .content .quant-control {\n  display: flex;\n  width: 72px;\n  height: 24px;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product-detail .detail-menu .content .quant-control .minus {\n  font-size: 16px;\n  overflow: hidden;\n  width: 24px;\n  text-align: center;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product-detail .detail-menu .content .quant-control .minus i {\n  display: inline;\n  font-weight: 400;\n  line-height: 1.3;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product-detail .detail-menu .content .quant-control .prod-quant {\n  text-align: center;\n  font-size: 16px;\n  color: #F2AC21;\n  overflow: hidden;\n  width: 24px;\n  line-height: 1.4;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product-detail .detail-menu .content .quant-control .plus {\n  overflow: hidden;\n  width: 24px;\n  text-align: center;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product-detail .detail-menu .content .quant-control .plus i {\n  display: inline;\n  font-weight: 400;\n  line-height: 1.3;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product-detail .detail-menu :nth-child(2) {\n  font-size: 12px;\n}\n.wrapper .payment-wrapper .product-detail .ordered-product-detail :nth-child(2) {\n  font-weight: 600;\n  font-family: roboto;\n  font-size: 16px;\n  color: #5E5B58;\n}\n.wrapper .payment-wrapper .payment-detail {\n  border-bottom: 1px solid #D8D8D8;\n}\n.wrapper .payment-wrapper .payment-detail .total, .wrapper .payment-wrapper .payment-detail .tax {\n  display: flex;\n  justify-content: space-between;\n  margin: 8px 0;\n}\n.wrapper .payment-wrapper .payment-detail .total div, .wrapper .payment-wrapper .payment-detail .tax div {\n  font-family: roboto;\n  font-weight: 600;\n  font-size: 16px;\n  color: #5E5B58;\n  margin-bottom: 8px;\n}\n.wrapper .payment-wrapper .final-pay-container {\n  display: flex;\n  justify-content: space-between;\n  margin: 16px 0 60px 0;\n}\n.wrapper .payment-wrapper .final-pay-container :nth-child(1) {\n  font-family: roboto;\n  font-weight: 600;\n  font-size: 16px;\n  color: #5E5B58;\n}\n.wrapper .payment-wrapper .final-pay-container :nth-child(2) {\n  font-weight: 600;\n  font-family: roboto;\n  font-size: 16px;\n  color: #F2AC21;\n}\n.wrapper .payment-wrapper .button-container {\n  display: flex;\n  justify-content: space-between;\n}\n.wrapper .payment-wrapper .button-container .cancel {\n  padding-top: 0px;\n  font-size: 16px;\n  width: 64px;\n  height: 64px;\n  background-color: #FFFE03;\n  border: 2px solid #5E5B58;\n  color: #5E5B58;\n  border-radius: 50%;\n  margin: 16px auto 0;\n  text-align: center;\n}\n.wrapper .payment-wrapper .button-container .cancel:focus {\n  outline: 0;\n}\n.wrapper .payment-wrapper .button-container .pay {\n  padding-top: 0px;\n  font-size: 20px;\n  width: 100px;\n  height: 100px;\n  background-color: #3CFF03;\n  border: 2px solid #F2AC21;\n  color: #5E5B58;\n  border-radius: 50%;\n  margin: auto;\n  text-align: center;\n}\n.wrapper .payment-wrapper .button-container .pay span {\n  display: block;\n  font-size: 20px;\n  font-weight: 500;\n}\n.wrapper .payment-wrapper .button-container .pay:focus {\n  outline: 0;\n}\n.wrapper .product-detail::-webkit-scrollbar {\n  width: 3px;\n}\n.wrapper .product-detail::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.wrapper .product-detail::-webkit-scrollbar-thumb {\n  background: #F2AC21;\n}\n.wrapper .product-detail::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXGtpb3NrL3NyY1xcYXBwXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUEwTUUsb0JBQUE7QUN6TU47QURBSTtFQUNHLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGlCQUFBO0FDRVA7QURBSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0VSO0FERUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDQVI7QURHSTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRFI7QURFUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FaO0FERVk7RUFDSSxtQkFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FwQjtBREVvQjtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0F4QjtBREN3QjtFQUNJLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQTVCO0FEQzRCO0VBQ0csWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQy9CO0FEQytCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ25DO0FEQW1DO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRXBDO0FERG9DO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHeEM7QURDaUM7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDckM7QURDaUM7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NyQztBREFxQztFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRXhDO0FERzRCO0VBQ0ksZUFBQTtBQ0RoQztBREl3QjtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0Y1QjtBRFFRO0VBQ0ksZ0NBQUE7QUNOWjtBRE9ZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ0xoQjtBRE1nQjtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSnBCO0FEUVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ05aO0FEUVk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNOaEI7QURRWTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ05oQjtBRFVRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDUlo7QURVWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNSaEI7QURTZ0I7RUFDSSxVQUFBO0FDUHBCO0FEV1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNUaEI7QURVZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUnBCO0FEVWdCO0VBQ0ksVUFBQTtBQ1JwQjtBRGVJO0VBQXFDLFVBQUE7QUNaekM7QURhSTtFQUNJLG1CQUFBO0FDWFI7QURhTTtFQUNFLG1CQUFBO0FDWFI7QURlTTtFQUNFLGdCQUFBO0FDYlIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLndyYXBwZXJ7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwwLDAsIDAuNSk7XHJcbiAgICAubG9nb3tcclxuICAgICAgIHdpZHRoOiAzNDBweDtcclxuICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgbWFyZ2luOjMwcHggYXV0b1xyXG4gICAgfVxyXG4gICAgLnBheS1oZWFke1xyXG4gICAgICAgIG1hcmdpbjowIDMwcHg7XHJcbiAgICAgICAgY29sb3I6I0YyQUMyMTtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzVFNUI1ODtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzo4cHggMCAxNnB4IDA7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFjay1idHRue1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTozMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOjEwLjVweCAwO1xyXG4gICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgIGxlZnQ6MzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgICAgICB3aWR0aDo5MHB4XHJcbiAgICAgICAgXHJcbiAgICB9ICBcclxuICAgIC5wYXltZW50LXdyYXBwZXJ7ICBcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNGMkFDMjE7ICBcclxuICAgICAgICBtYXJnaW46MTBweCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOjM0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgICAucHJvZHVjdC1kZXRhaWx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MCA2cHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6MTcwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNEOEQ4RDg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6YXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAub3JkZXJlZC1wcm9kdWN0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo2MDAgOyBcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo4cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJi1kZXRhaWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlsLW1lbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMzFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo2MDAgOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4OyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxNTBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW4gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjMxcHg7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVhbnQtY29udHJvbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWludXN7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjEuMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2QtcXVhbnR7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojRjJBQzIxOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MS40O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjEuMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4OyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCgyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMCA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4OyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGF5bWVudC1kZXRhaWx7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNEOEQ4RDg7XHJcbiAgICAgICAgICAgIC50b3RhbCwgLnRheHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjhweCAwO1xyXG4gICAgICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwIDsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7ICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206OHB4OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpbmFsLXBheS1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbjoxNnB4IDAgNjBweCAwO1xyXG5cclxuICAgICAgICAgICAgOm50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDo2MDAgOyBcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4OyAgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjojNUU1QjU4ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDo2MDAgOyBcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDsgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6I0YyQUMyMTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbi1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY2FuY2Vse1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo2NHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjY0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZFMDM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICM1RTVCNTg7ICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IzVFNUI1ODsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjE2cHggYXV0byAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOjA7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBheXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQ0ZGMDM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICNGMkFDMjE7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojNUU1QjU4OyBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo1MDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTowOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZHVjdC1kZXRhaWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDNweH1cclxuICAgIC5wcm9kdWN0LWRldGFpbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3QtZGV0YWlsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0YyQUMyMTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiAgICAgIC5wcm9kdWN0LWRldGFpbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICAgIH1cclxufSIsIi53cmFwcGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXG59XG4ud3JhcHBlciAubG9nbyB7XG4gIHdpZHRoOiAzNDBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG4ud3JhcHBlciAucGF5LWhlYWQge1xuICBtYXJnaW46IDAgMzBweDtcbiAgY29sb3I6ICNGMkFDMjE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1RTVCNTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDAgMTZweCAwO1xufVxuLndyYXBwZXIgLmJhY2stYnR0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDEwLjVweCAwO1xuICBib3JkZXI6IDA7XG4gIGxlZnQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgd2lkdGg6IDkwcHg7XG59XG4ud3JhcHBlciAucGF5bWVudC13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0YyQUMyMTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHdpZHRoOiAzNDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLndyYXBwZXIgLnBheW1lbnQtd3JhcHBlciAucHJvZHVjdC1kZXRhaWwge1xuICBwYWRkaW5nOiAwIDZweDtcbiAgbWF4LWhlaWdodDogMTcwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ud3JhcHBlciAucGF5bWVudC13cmFwcGVyIC5wcm9kdWN0LWRldGFpbCAub3JkZXJlZC1wcm9kdWN0IHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVFNUI1ODtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLndyYXBwZXIgLnBheW1lbnQtd3JhcHBlciAucHJvZHVjdC1kZXRhaWwgLm9yZGVyZWQtcHJvZHVjdC1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ud3JhcHBlciAucGF5bWVudC13cmFwcGVyIC5wcm9kdWN0LWRldGFpbCAub3JkZXJlZC1wcm9kdWN0LWRldGFpbCAuZGV0YWlsLW1lbnUge1xuICB3aWR0aDogMjMxcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1RTVCNTg7XG59XG4ud3JhcHBlciAucGF5bWVudC13cmFwcGVyIC5wcm9kdWN0LWRldGFpbCAub3JkZXJlZC1wcm9kdWN0LWRldGFpbCAuZGV0YWlsLW1lbnUgLmNvbnRlbnQge1xuICB3aWR0aDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAyMzFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLndyYXBwZXIgLnBheW1lbnQtd3JhcHBlciAucHJvZHVjdC1kZXRhaWwgLm9yZGVyZWQtcHJvZHVjdC1kZXRhaWwgLmRldGFpbC1tZW51IC5jb250ZW50IC5xdWFudC1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDcycHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi53cmFwcGVyIC5wYXltZW50LXdyYXBwZXIgLnByb2R1Y3QtZGV0YWlsIC5vcmRlcmVkLXByb2R1Y3QtZGV0YWlsIC5kZXRhaWwtbWVudSAuY29udGVudCAucXVhbnQtY29udHJvbCAubWludXMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud3JhcHBlciAucGF5bWVudC13cmFwcGVyIC5wcm9kdWN0LWRldGFpbCAub3JkZXJlZC1wcm9kdWN0LWRldGFpbCAuZGV0YWlsLW1lbnUgLmNvbnRlbnQgLnF1YW50LWNvbnRyb2wgLm1pbnVzIGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4ud3JhcHBlciAucGF5bWVudC13cmFwcGVyIC5wcm9kdWN0LWRldGFpbCAub3JkZXJlZC1wcm9kdWN0LWRldGFpbCAuZGV0YWlsLW1lbnUgLmNvbnRlbnQgLnF1YW50LWNvbnRyb2wgLnByb2QtcXVhbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGMkFDMjE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuLndyYXBwZXIgLnBheW1lbnQtd3JhcHBlciAucHJvZHVjdC1kZXRhaWwgLm9yZGVyZWQtcHJvZHVjdC1kZXRhaWwgLmRldGFpbC1tZW51IC5jb250ZW50IC5xdWFudC1jb250cm9sIC5wbHVzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53cmFwcGVyIC5wYXltZW50LXdyYXBwZXIgLnByb2R1Y3QtZGV0YWlsIC5vcmRlcmVkLXByb2R1Y3QtZGV0YWlsIC5kZXRhaWwtbWVudSAuY29udGVudCAucXVhbnQtY29udHJvbCAucGx1cyBpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLndyYXBwZXIgLnBheW1lbnQtd3JhcHBlciAucHJvZHVjdC1kZXRhaWwgLm9yZGVyZWQtcHJvZHVjdC1kZXRhaWwgLmRldGFpbC1tZW51IDpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ud3JhcHBlciAucGF5bWVudC13cmFwcGVyIC5wcm9kdWN0LWRldGFpbCAub3JkZXJlZC1wcm9kdWN0LWRldGFpbCA6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVFNUI1ODtcbn1cbi53cmFwcGVyIC5wYXltZW50LXdyYXBwZXIgLnBheW1lbnQtZGV0YWlsIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG4ud3JhcHBlciAucGF5bWVudC13cmFwcGVyIC5wYXltZW50LWRldGFpbCAudG90YWwsIC53cmFwcGVyIC5wYXltZW50LXdyYXBwZXIgLnBheW1lbnQtZGV0YWlsIC50YXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogOHB4IDA7XG59XG4ud3JhcHBlciAucGF5bWVudC13cmFwcGVyIC5wYXltZW50LWRldGFpbCAudG90YWwgZGl2LCAud3JhcHBlciAucGF5bWVudC13cmFwcGVyIC5wYXltZW50LWRldGFpbCAudGF4IGRpdiB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1RTVCNTg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi53cmFwcGVyIC5wYXltZW50LXdyYXBwZXIgLmZpbmFsLXBheS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMTZweCAwIDYwcHggMDtcbn1cbi53cmFwcGVyIC5wYXltZW50LXdyYXBwZXIgLmZpbmFsLXBheS1jb250YWluZXIgOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1RTVCNTg7XG59XG4ud3JhcHBlciAucGF5bWVudC13cmFwcGVyIC5maW5hbC1wYXktY29udGFpbmVyIDpudGgtY2hpbGQoMikge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRjJBQzIxO1xufVxuLndyYXBwZXIgLnBheW1lbnQtd3JhcHBlciAuYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi53cmFwcGVyIC5wYXltZW50LXdyYXBwZXIgLmJ1dHRvbi1jb250YWluZXIgLmNhbmNlbCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkUwMztcbiAgYm9yZGVyOiAycHggc29saWQgIzVFNUI1ODtcbiAgY29sb3I6ICM1RTVCNTg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAxNnB4IGF1dG8gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndyYXBwZXIgLnBheW1lbnQtd3JhcHBlciAuYnV0dG9uLWNvbnRhaW5lciAuY2FuY2VsOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi53cmFwcGVyIC5wYXltZW50LXdyYXBwZXIgLmJ1dHRvbi1jb250YWluZXIgLnBheSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0NGRjAzO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRjJBQzIxO1xuICBjb2xvcjogIzVFNUI1ODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53cmFwcGVyIC5wYXltZW50LXdyYXBwZXIgLmJ1dHRvbi1jb250YWluZXIgLnBheSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi53cmFwcGVyIC5wYXltZW50LXdyYXBwZXIgLmJ1dHRvbi1jb250YWluZXIgLnBheTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4ud3JhcHBlciAucHJvZHVjdC1kZXRhaWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDNweDtcbn1cbi53cmFwcGVyIC5wcm9kdWN0LWRldGFpbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuLndyYXBwZXIgLnByb2R1Y3QtZGV0YWlsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNGMkFDMjE7XG59XG4ud3JhcHBlciAucHJvZHVjdC1kZXRhaWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/menu.service */ "./src/app/shared/services/menu.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var _shared_services_payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/payment.service */ "./src/app/shared/services/payment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let MenuComponent = class MenuComponent {
    constructor(MS, rs, router, loc, ps) {
        this.MS = MS;
        this.rs = rs;
        this.router = router;
        this.loc = loc;
        this.ps = ps;
        this.imgUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticUrl + 'images/';
        this.Subscriptions = [];
        this.orders = [];
        this.tax = 5;
    }
    getimage(image) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.imgUrl}${image}`, true);
        xhr.responseType = 'blob';
        xhr.onload = function (e) {
            var img = document.getElementById(image);
            img.setAttribute('src', window.URL.createObjectURL(this.response));
        };
        xhr.send();
    }
    ngOnInit() {
        this.rs.setRoute("menu");
        this.router.navigate(["menu"]);
        this.loc.onPopState(() => {
            this.rs.setRoute('');
            this.router.navigate(["/"]);
        });
        this.Subscriptions.push(this.MS.getMenu().subscribe((data) => {
            this.MS.setMenu(data);
        }), this.MS.getSpecials().subscribe((data) => {
            this.MS.setSpecials(data);
        }), this.MS.forPay.subscribe((data) => {
            if (data.action == "add") {
                data.prod.isSpecial = data.special;
                data.prod.quantity = 1;
                this.orders.push(data.prod);
            }
            else if (data.action == "update") {
                data.prod.isSpecial = data.special;
                data.prod.quantity = 1;
                this.orders.pop();
                this.orders.push(data.prod);
            }
        }), this.rs.$route.subscribe(route => {
            this.route = route;
        }));
    }
    getPrice(order) {
        return Math.round(order.price * 100 * order.quantity) / 100;
    }
    ngOnDestroy() {
        this.rs.setRoute("");
        this.orders = [];
        this.MS.addForPay("");
        this.ps.setPaymentData([]);
        this.rs.setPayRoute(false);
        this.Subscriptions.forEach(s => s.unsubscribe());
    }
    getTotal() {
        return this.orders.reduce((a, b) => { return Math.round((a + b.price * b.quantity) * 100) / 100; }, 0);
    }
    getTax() {
        return Math.round((this.getTotal() * this.tax / 100) * 100) / 100;
    }
    getPay() {
        return Math.round((this.getTotal() + this.getTax()) * 100) / 100;
    }
    goBack() {
        switch (this.route) {
            case "menu":
                this.router.navigate(["/"]);
                break;
            case "customize":
                this.rs.setRoute("menu");
                break;
            case "combo":
                this.rs.setRoute("menu");
                break;
            case "customize-combo-prod":
                this.rs.setRoute("combo");
                break;
        }
    }
    pay() {
        this.ps.setPaymentData(this.orders);
        this.rs.setPayRoute(true);
    }
};
MenuComponent.ctorParameters = () => [
    { type: _shared_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"] },
    { type: _shared_services_payment_service__WEBPACK_IMPORTED_MODULE_5__["PaymentService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  font-weight: 400;\n  font-style: normal;\n  overflow: auto;\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n  position: absolute;\n  height: 100%;\n  width: calc(100% - 400px);\n}\n.wrapper .menu-wrapper {\n  background-color: #F9F9F9;\n}\n.wrapper .menu-wrapper .hr {\n  position: fixed;\n  height: 94px;\n  width: calc(100% - 299px);\n  background-color: white;\n  top: 0;\n  left: 299px;\n}\n.wrapper .menu-wrapper .menu-title {\n  position: fixed;\n  font-weight: bold;\n  color: #F2AC21;\n  background-color: #F9F9F9;\n  padding: 30px 0;\n  width: 299px;\n  text-align: center;\n  font-size: 28px;\n  top: 0px;\n  left: 0px;\n}\n.wrapper .menu-wrapper .top-botton {\n  position: fixed;\n  left: 20px;\n  top: 104px;\n}\n.wrapper .menu-wrapper .bottom-button {\n  position: fixed;\n  left: 20px;\n  bottom: 50px;\n}\n.wrapper .menu-wrapper .menu-list .menu-item {\n  padding: 24px 10px 0 40px;\n  display: inline-block;\n}\n.wrapper .menu-wrapper .menu-list .menu-item .item-text {\n  padding: 81.5px 0;\n  width: 249px;\n  text-align: center;\n  font-size: 30px;\n}\n.wrapper .menu-wrapper .menu-list .product-wrapper {\n  vertical-align: top;\n  background-color: white;\n  display: inline-flex;\n  width: calc(100% - 579px);\n  overflow-x: auto;\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n  padding: 24px 0 0 0;\n  border-top: 1px solid #D8D8D8;\n}\n.wrapper .menu-wrapper .menu-list .product-wrapper .product {\n  border: 1px solid #F2AC21;\n  border-radius: 8px;\n  margin: 0 0 24px 24px;\n}\n.wrapper .menu-wrapper .menu-list .product-wrapper .product-img {\n  width: 168px;\n  height: 96px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: 16px 15px 13px 15px;\n}\n.wrapper .menu-wrapper .menu-list .product-wrapper .product-text {\n  font-size: 14px;\n  color: #5E5B58;\n  width: 168px;\n  height: 36px;\n  margin: auto;\n}\n.wrapper .menu-wrapper .menu-list .product-wrapper .product-data-price {\n  margin: 0 16px 16px 0;\n  font-size: 14px;\n  float: right;\n}\n.menu-list:nth-child(3) .menu-item {\n  margin-top: 104px;\n  padding-top: 0 !important;\n}\n.menu-list:nth-child(3) .product-wrapper {\n  padding-top: 104px !important;\n}\n.wrapper::-webkit-scrollbar {\n  display: none !important;\n}\n.product-wrapper::-webkit-scrollbar {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxraW9zay9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7QURBSTtFQUNJLHlCQUFBO0FDRVI7QUREUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDR1o7QUREUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNHWjtBRERRO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDR1o7QUREUTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0daO0FEQ1k7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDQ2hCO0FEQWdCO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRXBCO0FEQ1k7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0QsNkJBQUE7QUNDZjtBREFnQjtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0VwQjtBRERvQjtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLDJCQUFBO0FDR3hCO0FERG9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHeEI7QUREb0I7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDR3hCO0FETUE7RUFDRyxpQkFBQTtFQUNBLHlCQUFBO0FDSEg7QURLQTtFQUNJLDZCQUFBO0FDRko7QURNQTtFQUE4Qix3QkFBQTtBQ0Y5QjtBREdBO0VBQXNDLHdCQUFBO0FDQ3RDIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcnsgICAgXHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7IFxyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDAwcHgpOyAgIFxyXG4gICAgLm1lbnUtd3JhcHBlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5OyAgICBcclxuICAgICAgICAuaHJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5NHB4O1xyXG4gICAgICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSAyOTlweCk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgbGVmdDoyOTlweFxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgLm1lbnUtdGl0bGV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiNGMkFDMjE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MzBweCAwO1xyXG4gICAgICAgICAgICB3aWR0aDoyOTlweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6MHB4ICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIC50b3AtYm90dG9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGxlZnQ6MjBweDtcclxuICAgICAgICAgICAgdG9wOjEwNHB4XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICAgICAgLmJvdHRvbS1idXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgbGVmdDoyMHB4O1xyXG4gICAgICAgICAgICBib3R0b206NTBweFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUtbGlzdHsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubWVudS1pdGVteyAgICAgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjI0cHggMTBweCAwIDQwcHg7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgICAgICAgICAgICAgIC5pdGVtLXRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo4MS41cHggMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNDlweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3Qtd3JhcHBlcnsgIFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gNTc5cHgpOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7IFxyXG4gICAgICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyBcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MjRweCAwIDAgMDtcclxuICAgICAgICAgICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgI0Q4RDhEODtcclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI0YyQUMyMTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI0cHggMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAmLWltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTY4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo5NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MTZweCAxNXB4IDEzcHggMTVweFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgJi10ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiM1RTVCNTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE2OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0b1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgJi1kYXRhLXByaWNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCAxNnB4IDE2cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHggO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4ubWVudS1saXN0Om50aC1jaGlsZCgzKSAubWVudS1pdGVte1xyXG4gICBtYXJnaW4tdG9wOjEwNHB4OyAgICBcclxuICAgcGFkZGluZy10b3A6MCFpbXBvcnRhbnQ7IFxyXG59XHJcbi5tZW51LWxpc3Q6bnRoLWNoaWxkKDMpIC5wcm9kdWN0LXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDoxMDRweCFpbXBvcnRhbnQ7ICAgIFxyXG4gfVxyXG4gXHJcblxyXG4ud3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBkaXNwbGF5Om5vbmUgIWltcG9ydGFudCB9XHJcbi5wcm9kdWN0LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50IH0iLCIud3JhcHBlciB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwMHB4KTtcbn1cbi53cmFwcGVyIC5tZW51LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xufVxuLndyYXBwZXIgLm1lbnUtd3JhcHBlciAuaHIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogOTRweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI5OXB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMjk5cHg7XG59XG4ud3JhcHBlciAubWVudS13cmFwcGVyIC5tZW51LXRpdGxlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGMkFDMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgd2lkdGg6IDI5OXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cbi53cmFwcGVyIC5tZW51LXdyYXBwZXIgLnRvcC1ib3R0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogMTA0cHg7XG59XG4ud3JhcHBlciAubWVudS13cmFwcGVyIC5ib3R0b20tYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAyMHB4O1xuICBib3R0b206IDUwcHg7XG59XG4ud3JhcHBlciAubWVudS13cmFwcGVyIC5tZW51LWxpc3QgLm1lbnUtaXRlbSB7XG4gIHBhZGRpbmc6IDI0cHggMTBweCAwIDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi53cmFwcGVyIC5tZW51LXdyYXBwZXIgLm1lbnUtbGlzdCAubWVudS1pdGVtIC5pdGVtLXRleHQge1xuICBwYWRkaW5nOiA4MS41cHggMDtcbiAgd2lkdGg6IDI0OXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi53cmFwcGVyIC5tZW51LXdyYXBwZXIgLm1lbnUtbGlzdCAucHJvZHVjdC13cmFwcGVyIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNTc5cHgpO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMjRweCAwIDAgMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG4ud3JhcHBlciAubWVudS13cmFwcGVyIC5tZW51LWxpc3QgLnByb2R1Y3Qtd3JhcHBlciAucHJvZHVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMkFDMjE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAwIDAgMjRweCAyNHB4O1xufVxuLndyYXBwZXIgLm1lbnUtd3JhcHBlciAubWVudS1saXN0IC5wcm9kdWN0LXdyYXBwZXIgLnByb2R1Y3QtaW1nIHtcbiAgd2lkdGg6IDE2OHB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbjogMTZweCAxNXB4IDEzcHggMTVweDtcbn1cbi53cmFwcGVyIC5tZW51LXdyYXBwZXIgLm1lbnUtbGlzdCAucHJvZHVjdC13cmFwcGVyIC5wcm9kdWN0LXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNUU1QjU4O1xuICB3aWR0aDogMTY4cHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLndyYXBwZXIgLm1lbnUtd3JhcHBlciAubWVudS1saXN0IC5wcm9kdWN0LXdyYXBwZXIgLnByb2R1Y3QtZGF0YS1wcmljZSB7XG4gIG1hcmdpbjogMCAxNnB4IDE2cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZW51LWxpc3Q6bnRoLWNoaWxkKDMpIC5tZW51LWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxMDRweDtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLm1lbnUtbGlzdDpudGgtY2hpbGQoMykgLnByb2R1Y3Qtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAxMDRweCAhaW1wb3J0YW50O1xufVxuXG4ud3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9kdWN0LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");



let ProductsComponent = class ProductsComponent {
    constructor(rs) {
        this.rs = rs;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
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
        let id = localStorage.getItem("terminal_id");
        if (!id) {
            this.router.navigateByUrl("/");
            return false;
        }
        else {
            return true;
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

/***/ "./src/app/shared/services/electron.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/electron.service.ts ***!
  \*****************************************************/
/*! exports provided: ElectronService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronService", function() { return ElectronService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ElectronService = class ElectronService {
    constructor() {
        // Conditional imports
        if (this.isElectron) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.webFrame = window.require('electron').webFrame;
            this.remote = window.require('electron').remote;
            this.childProcess = window.require('child_process');
            this.fs = window.require('fs');
            this.serialPort = window.require('serialport');
        }
    }
    get isElectron() {
        return window && window.process && window.process.type;
    }
};
ElectronService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ElectronService);



/***/ }),

/***/ "./src/app/shared/services/menu.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/menu.service.ts ***!
  \*************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let MenuService = class MenuService {
    constructor(http) {
        this.http = http;
        this.Menu = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.specials = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.product = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.forPay = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.comboPrord = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    login(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}login`, user);
    }
    getMenu() {
        let id = localStorage.getItem("terminal_id");
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'terminal_id': id
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/menu`, httpOptions);
    }
    setMenu(data) {
        this.Menu.next(JSON.parse(JSON.stringify(data)));
    }
    getSpecials() {
        let id = localStorage.getItem("terminal_id");
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'terminal_id': id
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/specials`, httpOptions);
    }
    setSpecials(data) {
        this.specials.next(JSON.parse(JSON.stringify(data)));
    }
    addProduct(prod) {
        this.product.next(prod);
    }
    comboProdCustomize(data) {
        this.comboPrord.next(data);
    }
    addForPay(data) {
        this.forPay.next(JSON.parse(JSON.stringify(data)));
    }
};
MenuService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MenuService);



/***/ }),

/***/ "./src/app/shared/services/payment.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/payment.service.ts ***!
  \****************************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let PaymentService = class PaymentService {
    constructor() {
        this.$paymentData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    setPaymentData(data) {
        this.$paymentData.next(JSON.parse(JSON.stringify(data)));
    }
};
PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PaymentService);



/***/ }),

/***/ "./src/app/shared/services/routing.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/routing.service.ts ***!
  \****************************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let RoutingService = class RoutingService {
    constructor() {
        this.$route = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.$payRoute = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    setRoute(route) {
        this.$route.next(route);
    }
    setPayRoute(val) {
        this.$payRoute.next(val);
    }
};
RoutingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RoutingService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\kiosk\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map