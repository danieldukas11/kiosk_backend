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

module.exports = "<div class=\"wrapper\">\n  <button class=\"close\" [disabled]=\"getActive()\" (click)=\"closeDialog=true\">Close event</button>\n  <div class=\"orders-wrapper\">\n    <div class=\"order-wrapper\" *ngFor='let order of orders;let ind=index' [ngClass]=\"getClass(order.action)\" [id]=\"'item'+ind\">\n      <div class=\"header\">ORDER {{order._id}}</div>\n      <ul class=\"products\">\n        <span style=\"color:#F2AC21\">Products</span>\n        <li *ngFor=\"let prod of order.orderedProducts\">X{{prod.quantity}} {{prod.title}}<span *ngIf=\"prod.size\">({{prod.size}})</span>\n          <span  *ngIf=\"prod.defaults&&prod.defaults.length\">(<span *ngFor=\"let def of prod.defaults\">{{def.title}}\n            <span *ngIf=\"def.selected_qty\">(X{{def.selected_qty}})</span>\n            , </span>)</span>\n            <span *ngIf=\"prod.isSpecial\">(\n              <span *ngFor=\"let menu of prod.menus\">\n                <span *ngIf=\"menu.default\">{{menu.default.title}}<span *ngIf=\"menu.default.size\">({{menu.default.size}})</span>\n                <span  *ngIf=\"menu.default.defaults&&menu.default.defaults.length\">(<span *ngFor=\"let def of menu.default.defaults\">{{def.title}}\n                    <span *ngIf=\"def.selected_qty\">(X{{def.selected_qty}})</span>\n                    , </span>)</span>\n                ,\n                </span>\n              </span>)\n            </span>\n        </li>\n      </ul>\n      <div class=\"special-instructions\"><span style=\"color:#F2AC21\">Special instructions: </span>{{order.special_instructions?order.special_instructions:\"NO\"}}</div>\n      <div class=\"alergy-info\"><span style=\"color:#F2AC21\">Allergy information: </span>{{order.alergy_info?order.alergy_info:\"NO\"}}</div>\n      <button class=\"action-button\" (click)=\"changeAction(order.action,order._id,ind)\">{{order.action|titlecase}}</button>\n      <div class=\"timer\">Timer:</div>\n    </div>   \n  </div>\n  <div class=\"orders\">\n    <a class=\"order\" *ngFor='let order of orders;let ind=index' >{{order._id}}</a>\n  </div>\n</div>\n\n<div class=\"close_dialog\" *ngIf=\"closeDialog\">\n  <div class=\"close_form\">\n    <div class=\"header\">Are you sure you want to close an event?</div>\n    <button class=\"cancel\" (click)=\"closeDialog=false\">Cancel</button>\n    <button class=\"close\" (click)=\"close()\">Close</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding: 30px 64px;\n  font-weight: 600;\n}\n.wrapper .close {\n  display: block;\n  width: 300px;\n  margin: auto;\n  font-size: 25px;\n  background-color: #f0bb53;\n  margin-bottom: 24px;\n  border: 0;\n  padding: 20px 0;\n  outline: 0;\n  border-radius: 100px;\n  color: white;\n}\n.wrapper .close[disabled] {\n  opacity: 0.5;\n}\n.wrapper .orders-wrapper {\n  white-space: nowrap;\n  overflow: auto;\n}\n.wrapper .orders-wrapper .order-wrapper.pending {\n  border: 4px solid #F2AC21;\n}\n.wrapper .orders-wrapper .order-wrapper.pending .action-button {\n  background-color: #F2AC21;\n}\n.wrapper .orders-wrapper .order-wrapper.under-construction {\n  border: 4px solid #F25A21;\n}\n.wrapper .orders-wrapper .order-wrapper.under-construction .action-button {\n  background-color: #F25A21;\n}\n.wrapper .orders-wrapper .order-wrapper.pick-up, .wrapper .orders-wrapper .order-wrapper.picked {\n  border: 4px solid #3CFF03;\n}\n.wrapper .orders-wrapper .order-wrapper.pick-up .action-button, .wrapper .orders-wrapper .order-wrapper.picked .action-button {\n  background-color: #3CFF03;\n  color: black;\n}\n.wrapper .orders-wrapper .order-wrapper.picked {\n  opacity: 0.5;\n}\n.wrapper .orders-wrapper .order-wrapper {\n  vertical-align: top;\n  display: inline-block;\n  width: 584px;\n  height: 800px;\n  border-radius: 8px;\n  margin-right: 24px;\n}\n.wrapper .orders-wrapper .order-wrapper .header {\n  text-align: center;\n  padding: 24px 0;\n  font-size: 16px;\n  color: #5E5B58;\n  border-bottom: 1px solid #D8D8D8;\n  margin: 0 24px;\n}\n.wrapper .orders-wrapper .order-wrapper .products {\n  overflow: auto;\n  font-size: 16px;\n  padding: 24px 0;\n  border-bottom: 1px solid #D8D8D8;\n  margin: 0 24px;\n}\n.wrapper .orders-wrapper .order-wrapper .special-instructions {\n  font-size: 16px;\n  padding: 24px 0;\n  border-bottom: 1px solid #D8D8D8;\n  margin: 0 24px;\n}\n.wrapper .orders-wrapper .order-wrapper .alergy-info {\n  font-size: 16px;\n  padding: 24px 0;\n  margin: 0 24px;\n}\n.wrapper .orders-wrapper .order-wrapper .action-button {\n  width: 236px;\n  display: block;\n  height: 60px;\n  border-radius: 100px;\n  border: 0;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 20px;\n  margin: 24px auto;\n  outline: 0;\n}\n.wrapper .orders .order {\n  display: inline-block;\n  font-size: 24px;\n  margin: 24px 24px 0 0;\n  border: 1px solid #D8D8D8;\n  color: #5E5B58;\n  padding: 18px;\n}\n.close_dialog {\n  top: 0;\n  left: 0;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.close_form {\n  height: 300px;\n  width: 600px;\n  background-color: white;\n  position: absolute;\n  top: calc(50% - 150px);\n  left: calc(50% - 300px);\n  padding: 70px 40px;\n  border-radius: 5px;\n}\n.close_form .header {\n  font-size: 30px;\n  text-align: center;\n  margin-bottom: 100px;\n}\n.close_form .cancel {\n  border: 1px solid #D8D8D8;\n  width: 236px;\n  height: 60px;\n  border-radius: 100px;\n  outline: 0;\n  background-color: transparent;\n  font-size: 24px;\n}\n.close_form .close {\n  outline: 0;\n  border: 0;\n  background-color: #F2AC21;\n  color: white;\n  width: 236px;\n  float: right;\n  height: 60px;\n  border-radius: 100px;\n  font-size: 24px;\n}\n.orders-wrapper::-webkit-scrollbar {\n  display: none !important;\n}\n.products::-webkit-scrollbar {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxraXRjaGVuL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNFUjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FEQUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNFUjtBRERRO0VBQ0kseUJBQUE7QUNHWjtBREZZO0VBQ0kseUJBQUE7QUNJaEI7QUREUTtFQUNJLHlCQUFBO0FDR1o7QURGWTtFQUNJLHlCQUFBO0FDSWhCO0FERFE7RUFDSSx5QkFBQTtBQ0daO0FERlk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNJaEI7QUREUTtFQUNJLFlBQUE7QUNHWjtBRERRO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ0VaO0FEQVk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQ0VoQjtBREFZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FDRWhCO0FEQVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQ0VoQjtBREFZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRWhCO0FEQVk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDRWhCO0FER1E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNEWjtBRE1BO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ0hKO0FES0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FER0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0RSO0FER0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDRFI7QURHSTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDRFI7QURJQTtFQUFvQyx3QkFBQTtBQ0FwQztBRENBO0VBQThCLHdCQUFBO0FDRzlCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOjMwcHggNjRweCA7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAuY2xvc2V7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICBmb250LXNpemU6MjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDAsIDE4NywgODMpIDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjI0cHg7XHJcbiAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4IDA7XHJcbiAgICAgICAgb3V0bGluZTowO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTAwcHg7XHJcbiAgICAgICAgY29sb3I6d2hpdGVcclxuICAgIH1cclxuICAgIC5jbG9zZVtkaXNhYmxlZF17XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgLm9yZGVycy13cmFwcGVye1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgLm9yZGVyLXdyYXBwZXIucGVuZGluZ3tcclxuICAgICAgICAgICAgYm9yZGVyOjRweCBzb2xpZCAjRjJBQzIxOyAgIFxyXG4gICAgICAgICAgICAuYWN0aW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0YyQUMyMTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9yZGVyLXdyYXBwZXIudW5kZXItY29uc3RydWN0aW9ue1xyXG4gICAgICAgICAgICBib3JkZXI6NHB4IHNvbGlkICNGMjVBMjE7IFxyXG4gICAgICAgICAgICAuYWN0aW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0YyNUEyMTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcmRlci13cmFwcGVyLnBpY2stdXAsLm9yZGVyLXdyYXBwZXIucGlja2Vke1xyXG4gICAgICAgICAgICBib3JkZXI6NHB4IHNvbGlkICMzQ0ZGMDM7IFxyXG4gICAgICAgICAgICAuYWN0aW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzNDRkYwMztcclxuICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrXHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9yZGVyLXdyYXBwZXIucGlja2Vke1xyXG4gICAgICAgICAgICBvcGFjaXR5OjAuNVxyXG4gICAgICAgIH1cclxuICAgICAgICAub3JkZXItd3JhcHBlcnsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDU4NHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MjRweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MjRweCAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojNUU1QjU4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0Q4RDhEODtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowIDI0cHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c3tcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjI0cHggIDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRDhEOEQ4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3BlY2lhbC1pbnN0cnVjdGlvbnN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MjRweCAgMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNEOEQ4RDg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MCAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hbGVyZ3ktaW5mb3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoyNHB4ICAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWN0aW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMzZweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4OyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjI0cHggYXV0bztcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9yZGVyc3tcclxuICAgICAgICAub3JkZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgICAgbWFyZ2luOjI0cHggMjRweCAwIDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI0Q4RDhEODtcclxuICAgICAgICAgICAgY29sb3I6IzVFNUI1ODtcclxuICAgICAgICAgICAgcGFkZGluZzoxOHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2xvc2VfZGlhbG9ne1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC44KVxyXG59XHJcbi5jbG9zZV9mb3Jte1xyXG4gICAgaGVpZ2h0OjMwMHB4O1xyXG4gICAgd2lkdGg6NjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6Y2FsYyg1MCUgLSAxNTBweCk7XHJcbiAgICBsZWZ0OmNhbGMoNTAlIC0gMzAwcHgpO1xyXG4gICAgcGFkZGluZzo3MHB4IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMDBweFxyXG4gICAgfVxyXG4gICAgLmNhbmNlbHtcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNEOEQ4RDg7XHJcbiAgICAgICAgd2lkdGg6IDIzNnB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xyXG4gICAgICAgIG91dGxpbmU6MDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIC5jbG9zZXtcclxuICAgICAgICBvdXRsaW5lOjA7XHJcbiAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRjJBQzIxO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAyMzZweDtcclxuICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMDBweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7IFxyXG4gICAgfVxyXG59XHJcbi5vcmRlcnMtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50IH07XHJcbi5wcm9kdWN0czo6LXdlYmtpdC1zY3JvbGxiYXIge2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50IH07IiwiLndyYXBwZXIge1xuICBwYWRkaW5nOiAzMHB4IDY0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ud3JhcHBlciAuY2xvc2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYmI1MztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ud3JhcHBlciAuY2xvc2VbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLndyYXBwZXIgLm9yZGVycy13cmFwcGVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ud3JhcHBlciAub3JkZXJzLXdyYXBwZXIgLm9yZGVyLXdyYXBwZXIucGVuZGluZyB7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNGMkFDMjE7XG59XG4ud3JhcHBlciAub3JkZXJzLXdyYXBwZXIgLm9yZGVyLXdyYXBwZXIucGVuZGluZyAuYWN0aW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkFDMjE7XG59XG4ud3JhcHBlciAub3JkZXJzLXdyYXBwZXIgLm9yZGVyLXdyYXBwZXIudW5kZXItY29uc3RydWN0aW9uIHtcbiAgYm9yZGVyOiA0cHggc29saWQgI0YyNUEyMTtcbn1cbi53cmFwcGVyIC5vcmRlcnMtd3JhcHBlciAub3JkZXItd3JhcHBlci51bmRlci1jb25zdHJ1Y3Rpb24gLmFjdGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjI1QTIxO1xufVxuLndyYXBwZXIgLm9yZGVycy13cmFwcGVyIC5vcmRlci13cmFwcGVyLnBpY2stdXAsIC53cmFwcGVyIC5vcmRlcnMtd3JhcHBlciAub3JkZXItd3JhcHBlci5waWNrZWQge1xuICBib3JkZXI6IDRweCBzb2xpZCAjM0NGRjAzO1xufVxuLndyYXBwZXIgLm9yZGVycy13cmFwcGVyIC5vcmRlci13cmFwcGVyLnBpY2stdXAgLmFjdGlvbi1idXR0b24sIC53cmFwcGVyIC5vcmRlcnMtd3JhcHBlciAub3JkZXItd3JhcHBlci5waWNrZWQgLmFjdGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0NGRjAzO1xuICBjb2xvcjogYmxhY2s7XG59XG4ud3JhcHBlciAub3JkZXJzLXdyYXBwZXIgLm9yZGVyLXdyYXBwZXIucGlja2VkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLndyYXBwZXIgLm9yZGVycy13cmFwcGVyIC5vcmRlci13cmFwcGVyIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTg0cHg7XG4gIGhlaWdodDogODAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLndyYXBwZXIgLm9yZGVycy13cmFwcGVyIC5vcmRlci13cmFwcGVyIC5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVFNUI1ODtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG4gIG1hcmdpbjogMCAyNHB4O1xufVxuLndyYXBwZXIgLm9yZGVycy13cmFwcGVyIC5vcmRlci13cmFwcGVyIC5wcm9kdWN0cyB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDI0cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG4gIG1hcmdpbjogMCAyNHB4O1xufVxuLndyYXBwZXIgLm9yZGVycy13cmFwcGVyIC5vcmRlci13cmFwcGVyIC5zcGVjaWFsLWluc3RydWN0aW9ucyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMjRweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4RDhEODtcbiAgbWFyZ2luOiAwIDI0cHg7XG59XG4ud3JhcHBlciAub3JkZXJzLXdyYXBwZXIgLm9yZGVyLXdyYXBwZXIgLmFsZXJneS1pbmZvIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAyNHB4IDA7XG4gIG1hcmdpbjogMCAyNHB4O1xufVxuLndyYXBwZXIgLm9yZGVycy13cmFwcGVyIC5vcmRlci13cmFwcGVyIC5hY3Rpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDIzNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMjRweCBhdXRvO1xuICBvdXRsaW5lOiAwO1xufVxuLndyYXBwZXIgLm9yZGVycyAub3JkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAyNHB4IDI0cHggMCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDhEOEQ4O1xuICBjb2xvcjogIzVFNUI1ODtcbiAgcGFkZGluZzogMThweDtcbn1cblxuLmNsb3NlX2RpYWxvZyB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5jbG9zZV9mb3JtIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDMwMHB4KTtcbiAgcGFkZGluZzogNzBweCA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY2xvc2VfZm9ybSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuLmNsb3NlX2Zvcm0gLmNhbmNlbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOEQ4RDg7XG4gIHdpZHRoOiAyMzZweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5jbG9zZV9mb3JtIC5jbG9zZSB7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQUMyMTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjM2cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ub3JkZXJzLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

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
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");



let AppComponent = class AppComponent {
    constructor(socket) {
        this.socket = socket;
        this.closeDialog = false;
        this.orders = [];
        this.socket.emit("getOrders");
        this.socket.on("initorder", (data) => {
            this.orders = data;
            console.log(this.orders);
        });
        this.socket.on("order", (data) => {
            this.orders.unshift(data);
        });
    }
    changeAction(action, id, i) {
        switch (action) {
            case "pending":
                this.orders[i].action = "under construction";
                this.socket.emit("change-action", { id: id, action: "under construction" });
                break;
            case "under construction":
                this.orders[i].action = "pick-up";
                this.socket.emit("change-action", { id: id, action: "pick-up" });
                break;
            case "pick-up":
                this.orders[i].action = "picked";
                this.socket.emit("change-action", { id: id, action: "picked" });
                break;
        }
    }
    getClass(action) {
        switch (action) {
            case "pending":
                return "pending";
            case "under construction":
                return "under-construction";
            case "pick-up":
                return "pick-up";
            case "picked":
                return "picked";
        }
    }
    getActive() {
        for (let order of this.orders) {
            if (order.action != "picked") {
                return true;
            }
        }
        return false;
    }
    close() {
        this.socket.emit("closeEvent", this.orders);
        this.orders = [];
        this.closeDialog = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
];
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
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");







const config = { url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].staticUrl}`, options: {} };
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"].forRoot(config),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



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

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\kitchen\src\main.ts */"./src/main.ts");


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