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

module.exports = "\n<div class=\"container\" [ngClass]=\"chosenFont\">\n\n  <div id=\"font-btns\">\n    <button class=\"font-btn\" [ngClass]=\"font[0]\" *ngFor=\"let font of fonts\" (click)=\"chosenFont = font[0]\">{{font[1]}}</button>\n  </div>\n\n  <mmr-rune-scape></mmr-rune-scape>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/rune-scape/rune-scape.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/rune-scape/rune-scape.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"box-shadow box-shadow-1\" style=\"background-color: white; padding: 20px; margin-top: 10px\">\n  <h1>Runes</h1>\n\n  <div id=\"rune-tablets\" class=\"box-shadow box-shadow-2\">\n    <div *ngFor=\"let runeSet of runeSets\" class=\"rune-space\">\n      <button class=\"rune-tablet\"\n              (mouseenter)=\"hoveringOver = runeSet.parent.name\"\n              (mouseleave)=\"hoveringOver = 0\"\n              [@upDown]=\"hoveringOver === runeSet.parent.name ? 'up' : 'down'\"\n              (click)=\"changeRune(runeSet.parent)\">{{runeSet.parent.expression}}</button>\n\n      <div style=\"display: flex; flex-direction: column; align-items: center\">\n        <button *ngFor=\"let rune of runeSet.children\"\n                (mouseenter)=\"hoveringOver = rune.name\"\n                (mouseleave)=\"hoveringOver = 0\"\n                [@upDown]=\"hoveringOver === rune.name ? 'up' : 'down'\"\n                class=\"glyph-tablet\" (click)=\"changeRune(rune)\">\n          {{rune.expression}}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"selectedRune\">\n  <div>{{selectedRune.expression}}</div>\n  <div>{{selectedRune.name}}</div>\n  <div>{{selectedRune.description}}</div>\n  <div>{{selectedRune?.parentGroup.name}}</div>\n  <div>{{selectedRune?.atomicGroup}}</div>\n  <div>{{selectedRune?.atomic}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.font-btn {\n  height: 100px\n}\n\n#font-btns {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9udC1idG4ge1xuICBoZWlnaHQ6IDEwMHB4XG59XG5cbiNmb250LWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mimir';
        this.chosenFont = 'quicksand';
        this.fonts = [
            ['literata', 'Literata'],
            ['mountains-of-christmas', 'Mountains of Christmas'],
            ['quicksand', 'Quicksand'],
            ['teko', 'Teko'],
            ['zilla-slab', 'Zilla Slab'],
            ['concert-one', 'Concert One'],
            ['libre-barcode', 'Libre Barcode 128 Text'],
            ['gochi-hand', 'Gochi Hand'],
            ['nanum-pen-script', 'Nanum Pen Script']
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_rune_scape_rune_scape_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rune-scape/rune-scape.component */ "./src/app/components/rune-scape/rune-scape.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_rune_scape_rune_scape_component__WEBPACK_IMPORTED_MODULE_4__["RuneScapeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/rune-scape/rune-scape.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/rune-scape/rune-scape.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.glyph-tablet, .rune-tablet {\n  font-family: \"Mountains of Christmas\", cursive;\n  border-radius: 2px; /*30px*/\n  font-weight: bold;\n  margin: 0 30px 30px 0;\n}\n\n.glyph-tablet {\n  width: 40px;\n  height: 40px;\n  font-size: 14pt;\n}\n\n.rune-tablet {\n  width: 70px;\n  height: 70px;\n  font-size: 24pt;\n  border-radius: 2px;\n}\n\n.box-shadow {\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n\n.box-shadow-1 {\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n\n.box-shadow-2 {\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n\n.box-shadow-3 {\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n}\n\n.box-shadow-4 {\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n\n.box-shadow-5 {\n  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n}\n\n/*.rune-tablet:hover {*/\n\n/*  color: whitesmoke !important;*/\n\n/*  box-shadow: 0 0 20px 1px gray;*/\n\n/*}*/\n\n/*.rune-space:nth-child(-n+3) .rune-tablet {*/\n\n/*  border-color: #b89b47;*/\n\n/*  color: #b89b47;*/\n\n/*}*/\n\n/*.rune-space:nth-child(-n+3) .rune-tablet:hover {*/\n\n/*  background-color: #b89b47;*/\n\n/*}*/\n\n/*.rune-space:nth-child(n+4):nth-child(-n+6) .rune-tablet {*/\n\n/*  border-color: #47b862;*/\n\n/*  color: #47b862;*/\n\n/*}*/\n\n/*.rune-space:nth-child(n+4):nth-child(-n+6) .rune-tablet:hover {*/\n\n/*  background-color: #47b862;*/\n\n/*}*/\n\n/*.rune-space:nth-child(n+7):nth-child(-n+9) .rune-tablet {*/\n\n/*  border-color: #4764b8;*/\n\n/*  color: #4764b8;*/\n\n/*}*/\n\n/*.rune-space:nth-child(n+7):nth-child(-n+9) .rune-tablet:hover {*/\n\n/*  background-color: #4764b8;*/\n\n/*}*/\n\n/*.rune-space:nth-child(n+10) .rune-tablet {*/\n\n/*  border-color: #b8479d;*/\n\n/*  color: #b8479d;*/\n\n/*}*/\n\n/*.rune-space:nth-child(n+10) .rune-tablet:hover {*/\n\n/*  background-color: #b8479d;*/\n\n/*}*/\n\n#rune-tablets {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-top: 20px;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ydW5lLXNjYXBlL3J1bmUtc2NhcGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSw4Q0FBOEM7RUFDOUMsa0JBQWtCLEVBQUUsT0FBTztFQUMzQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0Usa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0Usa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0Usb0VBQW9FO0FBQ3RFOztBQUVBO0VBQ0Usc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0Usc0VBQXNFO0FBQ3hFOztBQUVBLHVCQUF1Qjs7QUFDdkIsa0NBQWtDOztBQUNsQyxtQ0FBbUM7O0FBQ25DLElBQUk7O0FBRUosNkNBQTZDOztBQUM3QywyQkFBMkI7O0FBQzNCLG9CQUFvQjs7QUFDcEIsSUFBSTs7QUFFSixtREFBbUQ7O0FBQ25ELCtCQUErQjs7QUFDL0IsSUFBSTs7QUFFSiw0REFBNEQ7O0FBQzVELDJCQUEyQjs7QUFDM0Isb0JBQW9COztBQUNwQixJQUFJOztBQUVKLGtFQUFrRTs7QUFDbEUsK0JBQStCOztBQUMvQixJQUFJOztBQUVKLDREQUE0RDs7QUFDNUQsMkJBQTJCOztBQUMzQixvQkFBb0I7O0FBQ3BCLElBQUk7O0FBRUosa0VBQWtFOztBQUNsRSwrQkFBK0I7O0FBQy9CLElBQUk7O0FBRUosNkNBQTZDOztBQUM3QywyQkFBMkI7O0FBQzNCLG9CQUFvQjs7QUFDcEIsSUFBSTs7QUFFSixtREFBbUQ7O0FBQ25ELCtCQUErQjs7QUFDL0IsSUFBSTs7QUFFSjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlCQUFpQjs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3J1bmUtc2NhcGUvcnVuZS1zY2FwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZ2x5cGgtdGFibGV0LCAucnVuZS10YWJsZXQge1xuICBmb250LWZhbWlseTogXCJNb3VudGFpbnMgb2YgQ2hyaXN0bWFzXCIsIGN1cnNpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDsgLyozMHB4Ki9cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMCAzMHB4IDMwcHggMDtcbn1cblxuLmdseXBoLXRhYmxldCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbn1cblxuLnJ1bmUtdGFibGV0IHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgZm9udC1zaXplOiAyNHB0O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG59XG5cbi5ib3gtc2hhZG93LTEge1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG59XG5cbi5ib3gtc2hhZG93LTIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG59XG5cbi5ib3gtc2hhZG93LTMge1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbn1cblxuLmJveC1zaGFkb3ctNCB7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XG59XG5cbi5ib3gtc2hhZG93LTUge1xuICBib3gtc2hhZG93OiAwIDE5cHggMzhweCByZ2JhKDAsMCwwLDAuMzApLCAwIDE1cHggMTJweCByZ2JhKDAsMCwwLDAuMjIpO1xufVxuXG4vKi5ydW5lLXRhYmxldDpob3ZlciB7Ki9cbi8qICBjb2xvcjogd2hpdGVzbW9rZSAhaW1wb3J0YW50OyovXG4vKiAgYm94LXNoYWRvdzogMCAwIDIwcHggMXB4IGdyYXk7Ki9cbi8qfSovXG5cbi8qLnJ1bmUtc3BhY2U6bnRoLWNoaWxkKC1uKzMpIC5ydW5lLXRhYmxldCB7Ki9cbi8qICBib3JkZXItY29sb3I6ICNiODliNDc7Ki9cbi8qICBjb2xvcjogI2I4OWI0NzsqL1xuLyp9Ki9cblxuLyoucnVuZS1zcGFjZTpudGgtY2hpbGQoLW4rMykgLnJ1bmUtdGFibGV0OmhvdmVyIHsqL1xuLyogIGJhY2tncm91bmQtY29sb3I6ICNiODliNDc7Ki9cbi8qfSovXG5cbi8qLnJ1bmUtc3BhY2U6bnRoLWNoaWxkKG4rNCk6bnRoLWNoaWxkKC1uKzYpIC5ydW5lLXRhYmxldCB7Ki9cbi8qICBib3JkZXItY29sb3I6ICM0N2I4NjI7Ki9cbi8qICBjb2xvcjogIzQ3Yjg2MjsqL1xuLyp9Ki9cblxuLyoucnVuZS1zcGFjZTpudGgtY2hpbGQobis0KTpudGgtY2hpbGQoLW4rNikgLnJ1bmUtdGFibGV0OmhvdmVyIHsqL1xuLyogIGJhY2tncm91bmQtY29sb3I6ICM0N2I4NjI7Ki9cbi8qfSovXG5cbi8qLnJ1bmUtc3BhY2U6bnRoLWNoaWxkKG4rNyk6bnRoLWNoaWxkKC1uKzkpIC5ydW5lLXRhYmxldCB7Ki9cbi8qICBib3JkZXItY29sb3I6ICM0NzY0Yjg7Ki9cbi8qICBjb2xvcjogIzQ3NjRiODsqL1xuLyp9Ki9cblxuLyoucnVuZS1zcGFjZTpudGgtY2hpbGQobis3KTpudGgtY2hpbGQoLW4rOSkgLnJ1bmUtdGFibGV0OmhvdmVyIHsqL1xuLyogIGJhY2tncm91bmQtY29sb3I6ICM0NzY0Yjg7Ki9cbi8qfSovXG5cbi8qLnJ1bmUtc3BhY2U6bnRoLWNoaWxkKG4rMTApIC5ydW5lLXRhYmxldCB7Ki9cbi8qICBib3JkZXItY29sb3I6ICNiODQ3OWQ7Ki9cbi8qICBjb2xvcjogI2I4NDc5ZDsqL1xuLyp9Ki9cblxuLyoucnVuZS1zcGFjZTpudGgtY2hpbGQobisxMCkgLnJ1bmUtdGFibGV0OmhvdmVyIHsqL1xuLyogIGJhY2tncm91bmQtY29sb3I6ICNiODQ3OWQ7Ki9cbi8qfSovXG5cbiNydW5lLXRhYmxldHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/rune-scape/rune-scape.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/rune-scape/rune-scape.component.ts ***!
  \***************************************************************/
/*! exports provided: RuneScapeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuneScapeComponent", function() { return RuneScapeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_rune__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/rune */ "./src/app/domain/rune.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var RuneScapeComponent = /** @class */ (function () {
    function RuneScapeComponent() {
        this.primeRunes = _domain_rune__WEBPACK_IMPORTED_MODULE_2__["PRIME_RUNES"];
        this.runeSets = _domain_rune__WEBPACK_IMPORTED_MODULE_2__["RUNE_SETS"];
        this.selectedRune = null;
        this.hoveringOver = 0;
    }
    RuneScapeComponent.prototype.ngOnInit = function () {
    };
    RuneScapeComponent.prototype.changeRune = function (rune) {
        this.selectedRune = this.selectedRune === rune ? null : rune;
    };
    RuneScapeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mmr-rune-scape',
            template: __webpack_require__(/*! raw-loader!./rune-scape.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/rune-scape/rune-scape.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('enteredExited', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('entered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: '70px',
                        width: '70px',
                        'font-size': '24pt'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('exited', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: '33px',
                        width: '33px',
                        'font-size': '14pt'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('exited => entered', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('100ms')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('entered => exited', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('50ms')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('upDown', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        'box-shadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                        transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        'box-shadow': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                        transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('up => down', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('100ms')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('down => up', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('50ms')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('upDownSmall', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        'box-shadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                        transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        'box-shadow': '0 14px 16px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                        transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('up => down', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('90ms')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('down => up', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('40ms')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./rune-scape.component.css */ "./src/app/components/rune-scape/rune-scape.component.css")]
        })
    ], RuneScapeComponent);
    return RuneScapeComponent;
}());



/***/ }),

/***/ "./src/app/domain/rune.ts":
/*!********************************!*\
  !*** ./src/app/domain/rune.ts ***!
  \********************************/
/*! exports provided: Rune, NOT, BAR, BUC, CEN, COL, DOT, KET, LUS, MIC, SIG, TIS, WUT, ZAP, TEM, TER, PRIME_RUNES, BAN, CAB, COM, FAS, HEP, LED, NET, PAD, TAR, VAT, BARCAB, BARCEN, BARCOL, BARDOT, BARHEP, BARKET, BARSIG, BARTAR, BARTIS, BARVAT, BARWUT, BAR_SET, BUCCAB, BUCCEN, BUCCOL, BUCHEP, BUCKET, BUCSIG, BUCVAT, BUC_SET, CENCAB, CENCOL, CENDOT, CENHEP, CENKET, CENLUS, CENSIG, CENTAR, CENTIS, CEN_SET, COLCAB, COLHEP, COLKET, COLLUS, COLSIG, COLTAR, COL_SET, DOTKET, DOTLUS, DOTTAR, DOTTIS, DOTWUT, DOT_SET, KETBAR, KETCOL, KETDOT, KETHEP, KETLUS, KETPAD, KETSIG, KETTAR, KETTIS, KETWUT, KET_SET, LUSBAR, LUSBUC, LUSLUS, LUSTAR, LUS_SET, MICCOL, MICLUS, MICMIC, MICFAS, MICSIG, MICTAR, MICTIS, MIC_SET, SIGBAN, SIGBAR, SIGBUC, SIGCAB, SIGCEN, SIGLED, SIGLUS, SIGNET, SIGPAD, SIGTIS, SIGWUT, SIGZAP, SIG_SET, TISBAN, TISBAR, TISCOL, TISCOM, TISDOT, TISFAS, TISHEP, TISKET, TISLED, TISLUS, TISMIC, TISSIG, TISTAR, TISWUT, TIS_SET, WUTBAN, WUTBAR, WUTCOL, WUTDOT, WUTHEP, WUTKET, WUTLED, WUTLUS, WUTPAD, WUTSIG, WUTTIS, WUTVAT, WUTZAP, WUT_SET, ZAPBAN, ZAPCOL, ZAPDOT, ZAPTIS, ZAPWUT, ZAPZAP, ZAP_SET, RUNE_SETS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rune", function() { return Rune; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT", function() { return NOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAR", function() { return BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUC", function() { return BUC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CEN", function() { return CEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COL", function() { return COL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT", function() { return DOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KET", function() { return KET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LUS", function() { return LUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIC", function() { return MIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIG", function() { return SIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIS", function() { return TIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUT", function() { return WUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAP", function() { return ZAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEM", function() { return TEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TER", function() { return TER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIME_RUNES", function() { return PRIME_RUNES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAN", function() { return BAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAB", function() { return CAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COM", function() { return COM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAS", function() { return FAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEP", function() { return HEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LED", function() { return LED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NET", function() { return NET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAD", function() { return PAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAR", function() { return TAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAT", function() { return VAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BARCAB", function() { return BARCAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BARCEN", function() { return BARCEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BARCOL", function() { return BARCOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BARDOT", function() { return BARDOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BARHEP", function() { return BARHEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BARKET", function() { return BARKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BARSIG", function() { return BARSIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BARTAR", function() { return BARTAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BARTIS", function() { return BARTIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BARVAT", function() { return BARVAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BARWUT", function() { return BARWUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAR_SET", function() { return BAR_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCCAB", function() { return BUCCAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCCEN", function() { return BUCCEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCCOL", function() { return BUCCOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCHEP", function() { return BUCHEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET", function() { return BUCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCSIG", function() { return BUCSIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCVAT", function() { return BUCVAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUC_SET", function() { return BUC_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENCAB", function() { return CENCAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENCOL", function() { return CENCOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENDOT", function() { return CENDOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENHEP", function() { return CENHEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENKET", function() { return CENKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENLUS", function() { return CENLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENSIG", function() { return CENSIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENTAR", function() { return CENTAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENTIS", function() { return CENTIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CEN_SET", function() { return CEN_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLCAB", function() { return COLCAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLHEP", function() { return COLHEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLKET", function() { return COLKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLUS", function() { return COLLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLSIG", function() { return COLSIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLTAR", function() { return COLTAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COL_SET", function() { return COL_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOTKET", function() { return DOTKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOTLUS", function() { return DOTLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOTTAR", function() { return DOTTAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOTTIS", function() { return DOTTIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOTWUT", function() { return DOTWUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT_SET", function() { return DOT_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KETBAR", function() { return KETBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KETCOL", function() { return KETCOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KETDOT", function() { return KETDOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KETHEP", function() { return KETHEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KETLUS", function() { return KETLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KETPAD", function() { return KETPAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KETSIG", function() { return KETSIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KETTAR", function() { return KETTAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KETTIS", function() { return KETTIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KETWUT", function() { return KETWUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KET_SET", function() { return KET_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LUSBAR", function() { return LUSBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LUSBUC", function() { return LUSBUC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LUSLUS", function() { return LUSLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LUSTAR", function() { return LUSTAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LUS_SET", function() { return LUS_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MICCOL", function() { return MICCOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MICLUS", function() { return MICLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MICMIC", function() { return MICMIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MICFAS", function() { return MICFAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MICSIG", function() { return MICSIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MICTAR", function() { return MICTAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MICTIS", function() { return MICTIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIC_SET", function() { return MIC_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGBAN", function() { return SIGBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGBAR", function() { return SIGBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGBUC", function() { return SIGBUC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGCAB", function() { return SIGCAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGCEN", function() { return SIGCEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGLED", function() { return SIGLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGLUS", function() { return SIGLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNET", function() { return SIGNET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGPAD", function() { return SIGPAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGTIS", function() { return SIGTIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGWUT", function() { return SIGWUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGZAP", function() { return SIGZAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIG_SET", function() { return SIG_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISBAN", function() { return TISBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISBAR", function() { return TISBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISCOL", function() { return TISCOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISCOM", function() { return TISCOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISDOT", function() { return TISDOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISFAS", function() { return TISFAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISHEP", function() { return TISHEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISKET", function() { return TISKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISLED", function() { return TISLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISLUS", function() { return TISLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISMIC", function() { return TISMIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISSIG", function() { return TISSIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISTAR", function() { return TISTAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TISWUT", function() { return TISWUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIS_SET", function() { return TIS_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTBAN", function() { return WUTBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTBAR", function() { return WUTBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTCOL", function() { return WUTCOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTDOT", function() { return WUTDOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTHEP", function() { return WUTHEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTKET", function() { return WUTKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTLED", function() { return WUTLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTLUS", function() { return WUTLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTPAD", function() { return WUTPAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTSIG", function() { return WUTSIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTTIS", function() { return WUTTIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTVAT", function() { return WUTVAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUTZAP", function() { return WUTZAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WUT_SET", function() { return WUT_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAPBAN", function() { return ZAPBAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAPCOL", function() { return ZAPCOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAPDOT", function() { return ZAPDOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAPTIS", function() { return ZAPTIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAPWUT", function() { return ZAPWUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAPZAP", function() { return ZAPZAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAP_SET", function() { return ZAP_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUNE_SETS", function() { return RUNE_SETS; });
var Rune = /** @class */ (function () {
    function Rune(expression, name, description, parentGroup, atomicGroup, atomic) {
        if (atomic === void 0) { atomic = false; }
        this.expression = expression;
        this.name = name;
        this.description = description;
        this.parentGroup = parentGroup;
        this.atomicGroup = atomicGroup;
        this.atomic = atomic;
        this.docLink = 'https://urbit.org/docs/reference/hoon-expressions/rune/';
        if (this.name !== 'not' && !atomic) {
            this.docLink += this.parentGroup.name + "/" + this.name;
        }
    }
    Rune.createSpace = function () { return new Rune('', 'not', 'Creates existence'); };
    Rune.prototype.combineOptions = function (expression, name, description) {
        return new Rune(this.expression + expression, this.name + name, description, this);
    };
    Rune.prototype.combineRune = function (rune, description) {
        return new Rune(this.expression + rune.expression, this.name + rune.name, description, this);
    };
    Rune.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: Rune },
        { type: String },
        { type: Boolean }
    ]; };
    return Rune;
}());

// region PRIME RUNES
var NOT = Rune.createSpace();
var BAR = new Rune('|', 'bar', 'Produces core(s)', NOT, 'Cores', true);
var BUC = new Rune('$', 'buc', 'Defines custom type(s)', NOT, 'Structures', true);
var CEN = new Rune('%', 'cen', 'Makes function calls in Hoon', NOT, 'Calls', true);
var COL = new Rune(':', 'col', 'Produces cell(s)', NOT, 'Cells', true);
var DOT = new Rune('.', 'dot', 'Carries out Nock operations in Hoon', NOT, 'Nock', true);
var KET = new Rune('^', 'ket', 'Adjusts types without violating type constraints', NOT, 'Cast', true);
var LUS = new Rune('+', 'lus', 'Defines arms in a core', NOT, 'Arms', true);
var MIC = new Rune(';', 'mic', 'Handles useful macros', NOT, 'Make', true);
var SIG = new Rune('~', 'sig', 'Passes non-semantic info to the interpreter', NOT, 'Hints', true);
var TIS = new Rune('=', 'tis', 'Modifies the subject', NOT, 'Subject Modification', true);
var WUT = new Rune('?', 'wut', 'Processes branching on conditionals', NOT, 'Conditionals', true);
var ZAP = new Rune('!', 'zap', 'Handles wildcard expressions', NOT, 'Wild', true);
var TEM = new Rune('--', '', 'Terminates expressions', NOT, 'Terminators', true);
var TER = new Rune('==', '', 'Terminates expression', NOT, 'Terminators', true);
var PRIME_RUNES = [BAR, BUC, CEN, COL, DOT, KET, LUS, MIC, SIG, TIS, WUT, ZAP, TEM, TER];
// endregion PRIME RUNES
// region SECONDARY RUNES
var BAN = new Rune('>', 'ban', 'Used to make glyphs', NOT, 'Glyph Combinator', true);
var CAB = new Rune('_', 'cab', 'Used to make glyphs', NOT, 'Glyph Combinator', true);
var COM = new Rune(',', 'com', 'Used to make glyphs', NOT, 'Glyph Combinator', true);
var FAS = new Rune('/', 'fas', 'Used to make glyphs', NOT, 'Glyph Combinator', true);
var HEP = new Rune('-', 'hep', 'Used to make glyphs', NOT, 'Glyph Combinator', true);
var LED = new Rune('<', 'led', 'Used to make glyphs', NOT, 'Glyph Combinator', true);
var NET = new Rune('/', 'net', 'Used to make glyphs', NOT, 'Glyph Combinator', true);
var PAD = new Rune('&', 'pad', 'Used to make glyphs', NOT, 'Glyph Combinator', true);
var TAR = new Rune('*', 'tar', 'Used to make glyphs', NOT, 'Glyph Combinator', true);
var VAT = new Rune('@', 'vat', 'Used to make glyphs', NOT, 'Glyph Combinator', true);
// endregion SECONDARY RUNES
// region GLYPHS
// region BAR
var BARCAB = BAR.combineRune(CAB, 'Produces a door (a core with a sample)');
var BARCEN = BAR.combineRune(CEN, 'Produces a core ([battery, payload])');
var BARCOL = BAR.combineRune(COL, 'Produces a gate with a custom sample');
var BARDOT = BAR.combineRune(DOT, 'Produces a trap (core with one arm = $)');
var BARHEP = BAR.combineRune(HEP, 'Produces a trap (core with one arm = $) and evaluate it');
var BARKET = BAR.combineRune(KET, 'Produce a core whose battery includes a $ arm and computer the latter');
var BARSIG = BAR.combineRune(SIG, 'Produce an iron gate');
var BARTAR = BAR.combineRune(TAR, 'Produces a wet gate (one-armed core with sample)');
var BARTIS = BAR.combineRune(TIS, 'Produce a gate (one-armed core with a sample');
var BARVAT = BAR.combineRune(VAT, 'Produces a wet core ([battery payload])');
var BARWUT = BAR.combineRune(WUT, 'Produces a lead trap');
// endregion BAR
var BAR_SET = {
    parent: BAR,
    children: [BARCAB, BARCEN, BARCOL, BARDOT, BARHEP, BARKET, BARSIG, BARTAR, BARTIS, BARVAT, BARWUT]
};
// region BUC
var BUCCAB = BUC.combineRune(CAB, 'Normalizes the structure to an example');
var BUCCEN = BUC.combineRune(CEN, 'Recognizes a union tagged by the head atom');
var BUCCOL = BUC.combineRune(COL, 'Forms a cell type');
var BUCHEP = BUC.combineRune(HEP, 'Normalizes the structure to an example gate');
var BUCKET = BUC.combineRune(KET, 'Normalizes the structure to a union tagged by head depth (cell)');
var BUCSIG = BUC.combineRune(SIG, 'Define a custom type default value');
var BUCVAT = BUC.combineRune(VAT, 'Normalizes the structure to a union tagged by head depth (atom)');
// endregion BUC
var BUC_SET = {
    parent: BUC,
    children: [BUCCAB, BUCCEN, BUCCOL, BUCHEP, BUCKET, BUCSIG, BUCVAT]
};
// region CEN
var CENCAB = CEN.combineRune(CAB, 'Resolves a wing with changes; preserves type');
var CENCOL = CEN.combineRune(COL, 'Calls a gate with many arguments');
var CENDOT = CEN.combineRune(DOT, 'Calls a gate (function) inverted');
var CENHEP = CEN.combineRune(HEP, 'Calls a gate (function)');
var CENKET = CEN.combineRune(KET, 'Calls gate with triple sample');
var CENLUS = CEN.combineRune(LUS, 'Call gate with a cell sample');
var CENSIG = CEN.combineRune(SIG, 'Evaluates an arm in a door');
var CENTAR = CEN.combineRune(TAR, 'Evaluates an expression and then resolves a wing with changes');
var CENTIS = CEN.combineRune(TIS, 'Resolves a wing with changes');
// endregion CEN
var CEN_SET = {
    parent: CEN,
    children: [CENCAB, CENCOL, CENDOT, CENHEP, CENKET, CENLUS, CENSIG, CENTAR, CENTIS]
};
// region COL
var COLCAB = COL.combineRune(CAB, 'Resolves a wing with changes; preserves type');
var COLHEP = COL.combineRune(HEP, 'Constructs a tuple cell');
var COLKET = COL.combineRune(KET, 'Constructs a quadruple cell');
var COLLUS = COL.combineRune(LUS, 'Constructs a triple cell');
var COLSIG = COL.combineRune(SIG, 'Constructs a null-terminated list');
var COLTAR = COL.combineRune(TAR, 'Constructs an n-tuple cell');
// endregion COL
var COL_SET = {
    parent: COL,
    children: [COLCAB, COLHEP, COLKET, COLLUS, COLSIG, COLTAR]
};
// region DOT
var DOTKET = DOT.combineRune(KET, 'Loads from the Arvo namespace with a fake Nock instruction with Nock 12');
var DOTLUS = DOT.combineRune(LUS, 'Increments an atom by 1 with Nock 4');
var DOTTAR = DOT.combineRune(TAR, 'Evaluates with Nock 2');
var DOTTIS = DOT.combineRune(TIS, 'Tests for equality with Nock 5');
var DOTWUT = DOT.combineRune(WUT, 'Tests for cell or atom with Nock 3');
// endregion DOT
var DOT_SET = {
    parent: DOT,
    children: [DOTKET, DOTLUS, DOTTAR, DOTTIS, DOTWUT]
};
// region KEY
var KETBAR = KET.combineRune(BAR, 'Converts a gold core to an iron core');
var KETCOL = KET.combineRune(COL, 'Creates a factory gate for a specified type');
var KETDOT = KET.combineRune(DOT, 'Performs a typecast on value produces from p to q');
var KETHEP = KET.combineRune(HEP, 'Performs a typecast by an explicit type label');
var KETLUS = KET.combineRune(LUS, 'Perform typecast by inferred type');
var KETPAD = KET.combineRune(PAD, 'Converts a core to a zinc core (covariant)');
var KETSIG = KET.combineRune(SIG, 'Folds input as constant at compile time if possible');
var KETTAR = KET.combineRune(TAR, 'Produces an example type value');
var KETTIS = KET.combineRune(TIS, 'Binds a name to a value');
var KETWUT = KET.combineRune(WUT, 'Converts any core to a lead core (bivariant)');
// endregion KEY
var KET_SET = {
    parent: KET,
    children: [KETBAR, KETCOL, KETDOT, KETHEP, KETLUS, KETPAD, KETSIG, KETTAR, KETTIS, KETWUT]
};
// region LUS
var LUSBAR = LUS.combineRune(BAR, 'Creates a chapter label');
var LUSBUC = LUS.combineRune(BUC, 'Produces a structure arm (type definition)');
var LUSLUS = LUS.combineRune(LUS, 'Produces a normal arm');
var LUSTAR = LUS.combineRune(TAR, 'Produces a type constructor arm');
// endregion LUS
var LUS_SET = {
    parent: LUS,
    children: [LUSBAR, LUSBUC, LUSLUS, LUSTAR]
};
// region MIC
var MICCOL = MIC.combineRune(COL, 'Calls a binary function as an n-ary function');
var MICLUS = MIC.combineRune(LUS, 'Makes a single XML node (Sail)');
var MICMIC = MIC.combineRune(MIC, 'Normalizes with a mold, asserting fixpoint');
var MICFAS = MIC.combineRune(FAS, 'Tape as XML element');
var MICSIG = MIC.combineRune(SIG, 'Glues a pipeline together with a product-sample adapter');
var MICTAR = MIC.combineRune(TAR, 'Makes a list of XML nodes from complex Hoon expression (Sail)');
var MICTIS = MIC.combineRune(TIS, 'Makes a list of XML nodes (Sail)');
// endregion MIC
var MIC_SET = {
    parent: MIC,
    children: [MICCOL, MICLUS, MICMIC, MICFAS, MICSIG, MICTAR, MICTIS]
};
// region SIG
var SIGBAN = SIG.combineRune(BAN, 'Creates a raw hint applied to computation');
var SIGBAR = SIG.combineRune(BAR, 'Creates a tracing printf');
var SIGBUC = SIG.combineRune(BUC, 'Creates a profiling hit counter');
var SIGCAB = SIG.combineRune(CAB, 'Creates a user-formatted tracing printf');
var SIGCEN = SIG.combineRune(CEN, 'Creates a jet registration');
var SIGLED = SIG.combineRune(LED, 'Creates a raw hint applied to product');
var SIGLUS = SIG.combineRune(LUS, 'Caches a computation');
var SIGNET = SIG.combineRune(NET, 'Creates a jet registration for gate with registered context');
var SIGPAD = SIG.combineRune(PAD, 'Creates a debugging printf');
var SIGTIS = SIG.combineRune(TIS, 'Detects duplicate');
var SIGWUT = SIG.combineRune(WUT, 'Creates a conditional debug printf');
var SIGZAP = SIG.combineRune(ZAP, 'Sets print type on compilation fail');
// endregion SIG
var SIG_SET = {
    parent: SIG,
    children: [SIGBAN, SIGBAR, SIGBUC, SIGCAB, SIGCEN, SIGLED, SIGLUS, SIGNET, SIGPAD, SIGTIS, SIGWUT, SIGZAP]
};
// region TIS
var TISBAN = TIS.combineRune(BAN, 'Composes two expressions');
var TISBAR = TIS.combineRune(BAR, 'Combines a default type value with the subject');
var TISCOL = TIS.combineRune(COL, 'Changes multiple legs in the subject');
var TISCOM = TIS.combineRune(COM, 'Exposes a namespace');
var TISDOT = TIS.combineRune(DOT, 'Changes one leg in the subject');
var TISFAS = TIS.combineRune(FAS, 'Combines a named noun with the subject, possibly with type annotation');
var TISHEP = TIS.combineRune(HEP, 'Combines a new noun with the subject, inverted');
var TISKET = TIS.combineRune(KET, 'Pins the head of a pair and changes a leg with a tail');
var TISLED = TIS.combineRune(LED, 'Composes two expressions, inverted');
var TISLUS = TIS.combineRune(LUS, 'Combines a new noun with the subject');
var TISMIC = TIS.combineRune(MIC, 'Combines a named noun with the subject, possibly with type annotation; inverted order');
var TISSIG = TIS.combineRune(SIG, 'Composes many expressions');
var TISTAR = TIS.combineRune(TAR, 'Defines an alias');
var TISWUT = TIS.combineRune(WUT, 'Conditionally changes one leg in the subject');
// endregion TIS
var TIS_SET = {
    parent: TIS,
    children: [TISBAN, TISBAR, TISCOL, TISCOM, TISDOT, TISFAS, TISHEP, TISKET, TISLED, TISLUS, TISMIC, TISSIG, TISTAR, TISWUT]
};
// region WUT
var WUTBAN = WUT.combineRune(BAN, 'Creates a positive assertion');
var WUTBAR = WUT.combineRune(BAR, 'Creates logical OR');
var WUTCOL = WUT.combineRune(COL, 'Creates a branch on a boolean test');
var WUTDOT = WUT.combineRune(DOT, 'Branches on a boolean test, inverted');
var WUTHEP = WUT.combineRune(HEP, 'Switches against a union, with no default');
var WUTKET = WUT.combineRune(KET, 'Branches on whether a wing of the subject evaluates as a cell');
var WUTLED = WUT.combineRune(LED, 'Creates a negative assertion');
var WUTLUS = WUT.combineRune(LUS, 'Switches against a union, with a default');
var WUTPAD = WUT.combineRune(PAD, 'Creates logical AND');
var WUTSIG = WUT.combineRune(SIG, 'Branches on whether a wing of the subject evaluates to null');
var WUTTIS = WUT.combineRune(TIS, 'Tests pattern match');
var WUTVAT = WUT.combineRune(VAT, 'Branches on whether a wing of the subject evaluates to an atom');
var WUTZAP = WUT.combineRune(ZAP, 'Creates logical NOT');
// endregion WUT
var WUT_SET = {
    parent: WUT,
    children: [WUTBAN, WUTBAR, WUTCOL, WUTDOT, WUTHEP, WUTKET, WUTLED, WUTLUS, WUTPAD, WUTSIG, WUTTIS, WUTVAT, WUTZAP]
};
// region ZAP
var ZAPBAN = ZAP.combineRune(BAN, 'Wraps a noun in its type');
var ZAPCOL = ZAP.combineRune(COL, 'Turns on stack trace');
var ZAPDOT = ZAP.combineRune(DOT, 'Turns off stack trace for a subexpression p');
var ZAPTIS = ZAP.combineRune(TIS, 'Makes the Nock formula for a Hoon expression');
var ZAPWUT = ZAP.combineRune(WUT, 'Restricts Hoon version');
var ZAPZAP = ZAP.combineRune(ZAP, 'Crashes program');
// endregion ZAP
var ZAP_SET = {
    parent: ZAP,
    children: [ZAPBAN, ZAPCOL, ZAPDOT, ZAPTIS, ZAPWUT, ZAPZAP]
};
// endregion GLYPHS
var RUNE_SETS = [
    BAR_SET, BUC_SET, CEN_SET, COL_SET, DOT_SET, KET_SET, LUS_SET, MIC_SET, SIG_SET, TIS_SET, WUT_SET, ZAP_SET
];


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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshuanickleby/Projects/mimir/wrapper/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map