(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/* ------------  Brand Colors  ---------------- */\n/* -----------  Border Colors  ---------------- */\n/* -----------  Button Colors  ---------------- */\n/* -----------  Font Colors  ------------------- */\n/* -----------  Input Group Colors  ------------ */\n/* -----------  Page Layout Colors  ------------ */\n/* -----------  Table Colors  ------------------ */\n/* -----------  Font Settings  ------------------- */\n/* -----------  Button Settings  ----------------- */\n/* -----------  PC Settings  ----------------- */\nh1, h2, h3, h4, h5, h6, header, section, p, a, b, title, textarea, input {\n  margin: 0;\n  padding: 0;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n}\ndiv:focus, header:focus, button:focus {\n  outline: none;\n}\n.pagecontainer {\n  padding: 25px;\n  background: #F2F2F2;\n  min-height: calc(100vh - 70px - 50px);\n}\n.pagecontainer .container {\n  margin-top: 25px;\n  background: white;\n  padding: 25px;\n}\n.pagecontainer .container > header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.pagecontainer .container > header .left, .pagecontainer .container > header .right {\n  display: flex;\n  align-items: center;\n}\n/* Sample Code for Page Container */\n/* ----------------------------------------------------------\n<div class=\"pagecontainer\">\n    <!--App Loader-->\n    <app-loader *ngIf=\"loader_params.isdisplayed\" (close)=\"toggleLoader($event)\"></app-loader>\n\n    <!--App Message-->\n    <app-message *ngIf=\"message_params.isdisplayed\" [is_message_displayed]=\"message_params\"></app-message>\n\n    <!--Sample Page Section 1-->\n    <div class=\"pagesection\">\n        <header>Buttons</header>\n        <div class=\"button-container\">\n            <div class=\"left\">\n                <button (click)=\"toggleModal()\">Show Modal</button>\n                <button (click)=\"toggleLoader()\">Toggle Loader</button>\n            </div>\n            <div class=\"right\">\n                <button (click)=\"toggleMessage()\">Toggle Message</button>\n            </div>\n        </div>\n    </div>\n\n    <!--Sample Page Section 2-->\n    <div class=\"pagesection\">\n\n    </div>\n</div>\n\n ---------------------------------------------------------- */\n.button-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.button-container .left, .button-container .right {\n  display: flex;\n  align-items: center;\n}\n.button-container .left {\n  justify-content: flex-start;\n}\n.button-container .left i, .button-container .left header, .button-container .left button, .button-container .left img {\n  margin-right: 10px;\n}\n.button-container .right {\n  justify-content: flex-end;\n}\n.button-container .right i, .button-container .right header, .button-container .right button, .button-container .right img {\n  margin-left: 10px;\n}\n/* Sample Code for Button Container */\n/* ----------------------------------------------------------\n<div class=\"button-container\">\n    <div class=\"left\">\n        <button (click)=\"toggleModal()\">Show Modal</button>\n        <button (click)=\"toggleLoader()\">Toggle Loader</button>\n    </div>\n    <div class=\"right\">\n        <button (click)=\"toggleMessage()\">Toggle Message</button>\n    </div>\n</div>\n ---------------------------------------------------------- */\n.table {\n  font-size: 13px;\n  color: #212529;\n}\n.table .column {\n  width: 18%;\n  padding: 1%;\n}\n.table .column-s {\n  width: 3%;\n  padding: 1%;\n}\n.table .column-m {\n  width: 8%;\n  padding: 1%;\n}\n.table .column-l {\n  width: 13%;\n  padding: 1%;\n}\n.table .column-xl {\n  width: 18%;\n  padding: 1%;\n}\n.table .row {\n  display: flex;\n  align-items: center;\n  min-height: 30px;\n}\n.table .table-header {\n  background: #f2f2f2;\n  font-weight: 700;\n}\n.table .table-data {\n  max-height: 360px;\n  overflow-y: auto;\n}\n.table .table-data .row {\n  border-bottom: 1px solid #d0dee6;\n}\n/* Sample Code for Table */\n/* ----------------------------------------------------------\n<div class=\"table\">\n    <div class=\"row table-header\">\n        <div class=\"column\">\n            #\n        </div>\n        <div class=\"column\">\n            Name\n        </div>\n    </div>\n    <div class=\"table-data\">\n        <div class=\"row\" *ngFor=\"let i of [1,2,3];let index = index\">\n            <div class=\"column\">\n                {{index + 1}}\n            </div>\n            <div class=\"column\">\n                {{'Name' + index}}\n            </div>\n        </div>\n    </div>\n</div>\n ---------------------------------------------------------- */\n/* Buttons */\nbutton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 34px;\n  padding: 8px 15px;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n  font-size: 14px;\n  text-decoration: none;\n  font-weight: 400;\n  color: #FFF;\n  border: 1px solid #ff9e00;\n  border-radius: 3px;\n  transition: 0.3s;\n  background-color: #ff9e00;\n  background-image: #ff9e00;\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#498493, endColorstr=#48778A);\n  cursor: pointer;\n}\nbutton i {\n  margin: 0 5px;\n}\nbutton span {\n  margin: 0 5px;\n}\nbutton:hover {\n  transition: 0.5s;\n}\nbutton:focus {\n  outline: none;\n}\nbutton.outline {\n  background: white;\n  color: #ff9e00;\n  border: 1px solid #ff9e00;\n}\nbutton.nooutline {\n  background: white;\n  color: #000;\n  border: none;\n}\nbutton.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n/* Scroll Bars */\n/* width */\n::-webkit-scrollbar {\n  width: 6px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 4px;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\ninput {\n  padding: 3px 7px;\n  border: 1px solid #000;\n}\ninput:focus {\n  outline: none;\n}\n/* Inputs */\n.ig {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.ig .ig-item {\n  min-height: 36px;\n  padding: 5px 0;\n  cursor: text;\n  margin-bottom: 15px;\n}\n.ig .ig-item .ig-item-header {\n  font-weight: 700;\n  font-size: 13px;\n  margin-bottom: 5px;\n  color: #53565A;\n}\n.ig .ig-item .ig-input {\n  border-left: 4px solid white;\n}\n.ig .ig-item .ig-input > header {\n  font-size: 14px;\n  font-weight: 400;\n  color: #53565A;\n  margin-left: -4px;\n  min-height: 38px;\n}\n.ig .ig-item .ig-input > i {\n  border-top: 1px solid #CFDDE6;\n  border-bottom: 1px solid #CFDDE6;\n  height: 37px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 5px;\n}\n.ig .ig-item .ig-input input {\n  border: 1px solid #CFDDE6;\n  outline: none;\n  font-size: 14px;\n  padding: 9px 15px;\n  width: calc(100% - 32px);\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input input::-webkit-input-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::-moz-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::-ms-input-placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input input::placeholder {\n  color: #98A4AE;\n  font-size: 14px;\n}\n.ig .ig-item .ig-input textarea {\n  font-size: 14px;\n  width: calc(100% - 22px);\n  height: 100px;\n  border: 1px solid #CFDDE6;\n  padding: 10px;\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input .dropdown, .ig .ig-item .ig-input .default, .ig .ig-item .ig-input .material {\n  border: 1px solid #CFDDE6;\n  margin-left: -4px;\n}\n.ig .ig-item .ig-input .dropdown .dropdown-button, .ig .ig-item .ig-input .default .dropdown-button, .ig .ig-item .ig-input .material .dropdown-button {\n  border: none;\n}\n.ig .ig-item .ig-input-required {\n  border-left: 4px solid #ED8B00;\n}\n.ig .ig-item .ig-input-required input, .ig .ig-item .ig-input-required textarea {\n  border-left: 1px solid transparent;\n  margin-left: 0;\n}\n.ig .ig-item .ig-input-required .ng-select.custom .ng-select-container {\n  border-left: 1px solid transparent;\n}\n.ig .ig-item .ig-input-large {\n  height: 122px;\n}\n.ig-2 .ig-item {\n  width: calc(50% - 15px);\n  margin-right: 15px;\n}\n.ig-3 .ig-item {\n  width: calc(33% - 15px);\n  margin-right: 15px;\n}\n/* Global */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Nunito Sans\", \"sans-serif\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzaGVldHNcXGNvbG9ycy5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcdGhlbWUuc2NzcyIsInNyYy9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzaGVldHNcXGZvbnRzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxhYzE0MzExXFxQcm9qZWN0c1xcT3BlbiBTb3VyY2VcXEFuZ3VsYXJTdGFydGVyL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc2hlZXRzXFxwYWdlcy5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcdGFibGUuc2NzcyIsInNyYy9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzaGVldHNcXGJ1dHRvbnMuc2NzcyIsInNyYy9DOlxcVXNlcnNcXGFjMTQzMTFcXFByb2plY3RzXFxPcGVuIFNvdXJjZVxcQW5ndWxhclN0YXJ0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzaGVldHNcXHNjcm9sbC5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcYWMxNDMxMVxcUHJvamVjdHNcXE9wZW4gU291cmNlXFxBbmd1bGFyU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNoZWV0c1xcaW5wdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBLGlEQUFBO0FBS0EsaURBQUE7QUFJQSxpREFBQTtBQU9BLGtEQUFBO0FBUUEsa0RBQUE7QUFVQSxrREFBQTtBQUlBLGtEQUFBO0FDdENBLG9EQUFBO0FBS0Esb0RBQUE7QUFJQSxnREFBQTtBQ1RBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQ1lKO0FDWkE7RUFDSSxhQUFBO0FEZUo7QUNYQTtFQUNJLGFBQUE7RUFDQSxtQkp5QnVCO0VJeEJ2QixxQ0FBQTtBRGNKO0FDWkk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUhOZ0I7QUVvQnhCO0FDWlE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFyQlk7QURtQ3hCO0FDWlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QURjaEI7QUNQQSxtQ0FBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQUFBO0FBK0JBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFwRW9CO0FENEV4QjtBQ0xJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FET1I7QUNKSTtFQUNJLDJCQUFBO0FETVI7QUNKUTtFQUNJLGtCQUFBO0FETVo7QUNGSTtFQUNJLHlCQUFBO0FESVI7QUNGUTtFQUNJLGlCQUFBO0FESVo7QUNFQSxxQ0FBQTtBQUNBOzs7Ozs7Ozs7OzZEQUFBO0FDL0ZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUYyR0o7QUV6R0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBRjJHUjtBRXhHSTtFQUNJLFNBQUE7RUFDQSxXQUFBO0FGMEdSO0FFdkdJO0VBQ0ksU0FBQTtFQUNBLFdBQUE7QUZ5R1I7QUV0R0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBRndHUjtBRXJHSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FGdUdSO0FFcEdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUZzR1I7QUVuR0k7RUFDSSxtQkxHVTtFS0ZWLGdCQUFBO0FGcUdSO0FFbEdJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBRm9HUjtBRWxHUTtFQUNJLGdDQUFBO0FGb0daO0FFOUZBLDBCQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFBQTtBQ3BEQSxZQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCTENhO0VLQWIsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLHlCTlBXO0VNUVgseUJOTlc7RU1PWCw4R0FBQTtFQUNBLGVBQUE7QUh5S0o7QUd2S0k7RUFDSSxhQUFBO0FIeUtSO0FHdEtJO0VBQ0ksYUFBQTtBSHdLUjtBR3BLQTtFQUNJLGdCQUFBO0FIdUtKO0FHcEtBO0VBQ0ksYUFBQTtBSHVLSjtBR25LQTtFQUNJLGlCQUFBO0VBQ0EsY05oQ1c7RU1pQ1gseUJBQUE7QUhzS0o7QUduS0E7RUFDSSxpQkFBQTtFQUNBLFdObkN3QjtFTW9DeEIsWUFBQTtBSHNLSjtBR25LQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBSHNLSjtBSTVOQSxnQkFBQTtBQUNBLFVBQUE7QUFDQTtFQUNJLFVBQUE7QUorTko7QUk1TkEsVUFBQTtBQUNBO0VBQ0ksbUJBQUE7QUorTko7QUk1TkEsV0FBQTtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBSitOSjtBSTVOQSxvQkFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUorTko7QUtqUEE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FMb1BKO0FLalBBO0VBQ0ksYUFBQTtBTG9QSjtBS2hQQSxXQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FMbVBKO0FLaFBJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FMa1BSO0FLaFBRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjUkZTO0FHb1ByQjtBSy9PUTtFQUNJLDRCQUFBO0FMaVBaO0FLL09ZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY1JYSztFUVlMLGlCQUFBO0VBQ0EsZ0JBQUE7QUxpUGhCO0FLOU9ZO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FMZ1BoQjtBSzdPWTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUwrT2hCO0FLNU9ZO0VBQ0ksY1JuQ1k7RVFvQ1osZUFBQTtBTDhPaEI7QUtoUFk7RUFDSSxjUm5DWTtFUW9DWixlQUFBO0FMOE9oQjtBS2hQWTtFQUNJLGNSbkNZO0VRb0NaLGVBQUE7QUw4T2hCO0FLaFBZO0VBQ0ksY1JuQ1k7RVFvQ1osZUFBQTtBTDhPaEI7QUszT1k7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUw2T2hCO0FLek9ZO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBTDJPaEI7QUt6T2dCO0VBQ0ksWUFBQTtBTDJPcEI7QUt0T1E7RUFDSSw4QkFBQTtBTHdPWjtBS3RPWTtFQUNJLGtDQUFBO0VBQ0EsY0FBQTtBTHdPaEI7QUtwT2dCO0VBQ0ksa0NBQUE7QUxzT3BCO0FLak9RO0VBQ0ksYUFBQTtBTG1PWjtBS3hOSTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7QUwyTlI7QUtyTkk7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FMd05SO0FKeFVBLFdBQUE7QUFDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7QUkyVUoiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0IFwiYXBwL3NoYXJlZC9zdHlsZXNoZWV0cy9jb2xvcnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiYXBwL3NoYXJlZC9zdHlsZXNoZWV0cy90aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL2ZvbnRzLnNjc3NcIjtcclxuXHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL3BhZ2VzLnNjc3NcIjtcclxuQGltcG9ydCBcImFwcC9zaGFyZWQvc3R5bGVzaGVldHMvdGFibGUuc2Nzc1wiO1xyXG5cclxuQGltcG9ydCBcImFwcC9zaGFyZWQvc3R5bGVzaGVldHMvYnV0dG9ucy5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL3Njcm9sbC5zY3NzXCI7XHJcbkBpbXBvcnQgXCJhcHAvc2hhcmVkL3N0eWxlc2hlZXRzL2lucHV0LnNjc3NcIjtcclxuXHJcblxyXG4vKiBHbG9iYWwgKi9cclxuaHRtbCwgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQsICRzZWNvbmRhcnktZm9udDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLyogLS0tLS0tLS0tLS0tICBCcmFuZCBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJGFjX2NscjogIzAyNzhFQztcclxuJHByX2NscjogIzAyNjdDOTtcclxuJHNjX2NscjogI0VERjNGQztcclxuXHJcbi8qIC0tLS0tLS0tLS0tICBCb3JkZXIgQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tICovXHJcbiRib3JkZXItY29sb3I6IHJnYigyMDgsIDIyMiwgMjMwKTtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgQnV0dG9uIENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4kYnRuLWJnLWNvbG9yOiAjZmY5ZTAwO1xyXG4kYnRuLWZvbnQtY29sb3I6ICNGRkY7XHJcbiRidG4tYmctaW1hZ2U6ICNmZjllMDA7XHJcbiRidG4tbm8tb3V0bGluZS1mb250LWNvbG9yOiAjMDAwO1xyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tICBGb250IENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4kZm9udF9jbHJfcHJpbWFyeTogcmdiKDk0LCA5MCwgOTUpO1xyXG4kZm9udF9jbHJfc2Vjb25kYXJ5OiByZ2JhKDksIDIwLCAzNywgMC41OSk7XHJcbiRmb250X2Nscl90ZXJ0aWFyeTogcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuJHdhcm5pbmdfZm9udF9jbHI6IHJnYigxODUsIDQzLCA1Mik7XHJcbiR0b29sdGlwZm9udDogcmdiKDE4NSwgNDMsIDUyKTtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgSW5wdXQgR3JvdXAgQ29sb3JzICAtLS0tLS0tLS0tLS0gKi9cclxuJGlucHV0LWJvcmRlcjogIzAwMDtcclxuXHJcbi8vSW5wdXQgR3JvdXAgUGFyYW1zXHJcbiRpZy1pdGVtLWZvbnQtY29sb3I6ICM1MzU2NUE7XHJcbiRpZy1pdGVtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOThBNEFFO1xyXG4kaWctaXRlbS1pbnB1dC1ib3JkZXI6ICNDRkRERTY7XHJcbiRpZy1pbnB1dC1yZXF1aXJlZDogI0VEOEIwMDtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgUGFnZSBMYXlvdXQgQ29sb3JzICAtLS0tLS0tLS0tLS0gKi9cclxuJHBhZ2Vjb250YWluZXItYmFja2dyb3VuZDogI0YyRjJGMjtcclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLSAgVGFibGUgQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJHRhYmxlLWhlYWRlci1iZzogI2YyZjJmMjtcclxuIiwiLyogLS0tLS0tLS0tLS0gIEZvbnQgU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJHByaW1hcnktZm9udDogJ051bml0byBTYW5zJztcclxuJHNlY29uZGFyeS1mb250OiAnc2Fucy1zZXJpZic7XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0gIEJ1dHRvbiBTZXR0aW5ncyAgLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJGJ0bi1taW4taGVpZ2h0OiAzNHB4O1xyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tICBQQyBTZXR0aW5ncyAgLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJHBhZ2Vjb250YWluZXItcGFkZGluZzogMjVweDtcclxuIiwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgaGVhZGVyLCBzZWN0aW9uLCBwLCBhLCBiLCB0aXRsZSwgdGV4dGFyZWEsIGlucHV0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udCwgJHNlY29uZGFyeS1mb250O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qIC0tLS0tLS0tLS0tLSAgQnJhbmQgQ29sb3JzICAtLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgQm9yZGVyIENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIEJ1dHRvbiBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBGb250IENvbG9ycyAgLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIElucHV0IEdyb3VwIENvbG9ycyAgLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgUGFnZSBMYXlvdXQgQ29sb3JzICAtLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBUYWJsZSBDb2xvcnMgIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gIEZvbnQgU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tICBCdXR0b24gU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSAgUEMgU2V0dGluZ3MgIC0tLS0tLS0tLS0tLS0tLS0tICovXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBoZWFkZXIsIHNlY3Rpb24sIHAsIGEsIGIsIHRpdGxlLCB0ZXh0YXJlYSwgaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIFwic2Fucy1zZXJpZlwiO1xufVxuXG5kaXY6Zm9jdXMsIGhlYWRlcjpmb2N1cywgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBhZ2Vjb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCAtIDUwcHgpO1xufVxuLnBhZ2Vjb250YWluZXIgLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyNXB4O1xufVxuLnBhZ2Vjb250YWluZXIgLmNvbnRhaW5lciA+IGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5wYWdlY29udGFpbmVyIC5jb250YWluZXIgPiBoZWFkZXIgLmxlZnQsIC5wYWdlY29udGFpbmVyIC5jb250YWluZXIgPiBoZWFkZXIgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogU2FtcGxlIENvZGUgZm9yIFBhZ2UgQ29udGFpbmVyICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG48ZGl2IGNsYXNzPVwicGFnZWNvbnRhaW5lclwiPlxuICAgIDwhLS1BcHAgTG9hZGVyLS0+XG4gICAgPGFwcC1sb2FkZXIgKm5nSWY9XCJsb2FkZXJfcGFyYW1zLmlzZGlzcGxheWVkXCIgKGNsb3NlKT1cInRvZ2dsZUxvYWRlcigkZXZlbnQpXCI+PC9hcHAtbG9hZGVyPlxuXG4gICAgPCEtLUFwcCBNZXNzYWdlLS0+XG4gICAgPGFwcC1tZXNzYWdlICpuZ0lmPVwibWVzc2FnZV9wYXJhbXMuaXNkaXNwbGF5ZWRcIiBbaXNfbWVzc2FnZV9kaXNwbGF5ZWRdPVwibWVzc2FnZV9wYXJhbXNcIj48L2FwcC1tZXNzYWdlPlxuXG4gICAgPCEtLVNhbXBsZSBQYWdlIFNlY3Rpb24gMS0tPlxuICAgIDxkaXYgY2xhc3M9XCJwYWdlc2VjdGlvblwiPlxuICAgICAgICA8aGVhZGVyPkJ1dHRvbnM8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTW9kYWwoKVwiPlNob3cgTW9kYWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVMb2FkZXIoKVwiPlRvZ2dsZSBMb2FkZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTWVzc2FnZSgpXCI+VG9nZ2xlIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS1TYW1wbGUgUGFnZSBTZWN0aW9uIDItLT5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZXNlY3Rpb25cIj5cblxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5idXR0b24tY29udGFpbmVyIC5sZWZ0LCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ1dHRvbi1jb250YWluZXIgLmxlZnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uYnV0dG9uLWNvbnRhaW5lciAubGVmdCBpLCAuYnV0dG9uLWNvbnRhaW5lciAubGVmdCBoZWFkZXIsIC5idXR0b24tY29udGFpbmVyIC5sZWZ0IGJ1dHRvbiwgLmJ1dHRvbi1jb250YWluZXIgLmxlZnQgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmJ1dHRvbi1jb250YWluZXIgLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5idXR0b24tY29udGFpbmVyIC5yaWdodCBpLCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQgaGVhZGVyLCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQgYnV0dG9uLCAuYnV0dG9uLWNvbnRhaW5lciAucmlnaHQgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qIFNhbXBsZSBDb2RlIGZvciBCdXR0b24gQ29udGFpbmVyICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG48ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1vZGFsKClcIj5TaG93IE1vZGFsPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZUxvYWRlcigpXCI+VG9nZ2xlIExvYWRlcjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVNZXNzYWdlKClcIj5Ub2dnbGUgTWVzc2FnZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRhYmxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzIxMjUyOTtcbn1cbi50YWJsZSAuY29sdW1uIHtcbiAgd2lkdGg6IDE4JTtcbiAgcGFkZGluZzogMSU7XG59XG4udGFibGUgLmNvbHVtbi1zIHtcbiAgd2lkdGg6IDMlO1xuICBwYWRkaW5nOiAxJTtcbn1cbi50YWJsZSAuY29sdW1uLW0ge1xuICB3aWR0aDogOCU7XG4gIHBhZGRpbmc6IDElO1xufVxuLnRhYmxlIC5jb2x1bW4tbCB7XG4gIHdpZHRoOiAxMyU7XG4gIHBhZGRpbmc6IDElO1xufVxuLnRhYmxlIC5jb2x1bW4teGwge1xuICB3aWR0aDogMTglO1xuICBwYWRkaW5nOiAxJTtcbn1cbi50YWJsZSAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzBweDtcbn1cbi50YWJsZSAudGFibGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi50YWJsZSAudGFibGUtZGF0YSB7XG4gIG1heC1oZWlnaHQ6IDM2MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnRhYmxlIC50YWJsZS1kYXRhIC5yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZGVlNjtcbn1cblxuLyogU2FtcGxlIENvZGUgZm9yIFRhYmxlICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG48ZGl2IGNsYXNzPVwidGFibGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHRhYmxlLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAjXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICBOYW1lXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1kYXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdGb3I9XCJsZXQgaSBvZiBbMSwyLDNdO2xldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAge3tpbmRleCArIDF9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAge3snTmFtZScgKyBpbmRleH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBCdXR0b25zICovXG5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMzRweDtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIFwic2Fucy1zZXJpZlwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjllMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWUwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogI2ZmOWUwMDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoR3JhZGllbnRUeXBlPTAsIHN0YXJ0Q29sb3JzdHI9IzQ5ODQ5MywgZW5kQ29sb3JzdHI9IzQ4Nzc4QSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbiBpIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbmJ1dHRvbiBzcGFuIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uLm91dGxpbmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNmZjllMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjllMDA7XG59XG5cbmJ1dHRvbi5ub291dGxpbmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogU2Nyb2xsIEJhcnMgKi9cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBJbnB1dHMgKi9cbi5pZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaWcgLmlnLWl0ZW0ge1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pdGVtLWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzUzNTY1QTtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHdoaXRlO1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCA+IGhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM1MzU2NUE7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBtaW4taGVpZ2h0OiAzOHB4O1xufVxuLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCA+IGkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0NGRERFNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDRkRERTY7XG4gIGhlaWdodDogMzdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0IGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NGRERFNjtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OEE0QUU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQgdGV4dGFyZWEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NGRERFNjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0IC5kcm9wZG93biwgLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCAuZGVmYXVsdCwgLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCAubWF0ZXJpYWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0ZEREU2O1xuICBtYXJnaW4tbGVmdDogLTRweDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQgLmRyb3Bkb3duIC5kcm9wZG93bi1idXR0b24sIC5pZyAuaWctaXRlbSAuaWctaW5wdXQgLmRlZmF1bHQgLmRyb3Bkb3duLWJ1dHRvbiwgLmlnIC5pZy1pdGVtIC5pZy1pbnB1dCAubWF0ZXJpYWwgLmRyb3Bkb3duLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQtcmVxdWlyZWQge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNFRDhCMDA7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0LXJlcXVpcmVkIGlucHV0LCAuaWcgLmlnLWl0ZW0gLmlnLWlucHV0LXJlcXVpcmVkIHRleHRhcmVhIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uaWcgLmlnLWl0ZW0gLmlnLWlucHV0LXJlcXVpcmVkIC5uZy1zZWxlY3QuY3VzdG9tIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5pZyAuaWctaXRlbSAuaWctaW5wdXQtbGFyZ2Uge1xuICBoZWlnaHQ6IDEyMnB4O1xufVxuXG4uaWctMiAuaWctaXRlbSB7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDE1cHgpO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pZy0zIC5pZy1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMzMlIC0gMTVweCk7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLyogR2xvYmFsICovXG5odG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBcInNhbnMtc2VyaWZcIjtcbn0iLCIkc2VjdGlvbi1ib3R0b20tbWFyZ2luOiAyMHB4O1xyXG5cclxuXHJcbmRpdjpmb2N1cywgaGVhZGVyOmZvY3VzLCBidXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5wYWdlY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcGFnZWNvbnRhaW5lci1iYWNrZ3JvdW5kO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHggLSA1MHB4KTtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6ICRwYWdlY29udGFpbmVyLXBhZGRpbmc7XHJcblxyXG4gICAgICAgID4gaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkc2VjdGlvbi1ib3R0b20tbWFyZ2luO1xyXG5cclxuICAgICAgICAgICAgLmxlZnQsIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIFNhbXBsZSBDb2RlIGZvciBQYWdlIENvbnRhaW5lciAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbjxkaXYgY2xhc3M9XCJwYWdlY29udGFpbmVyXCI+XHJcbiAgICA8IS0tQXBwIExvYWRlci0tPlxyXG4gICAgPGFwcC1sb2FkZXIgKm5nSWY9XCJsb2FkZXJfcGFyYW1zLmlzZGlzcGxheWVkXCIgKGNsb3NlKT1cInRvZ2dsZUxvYWRlcigkZXZlbnQpXCI+PC9hcHAtbG9hZGVyPlxyXG5cclxuICAgIDwhLS1BcHAgTWVzc2FnZS0tPlxyXG4gICAgPGFwcC1tZXNzYWdlICpuZ0lmPVwibWVzc2FnZV9wYXJhbXMuaXNkaXNwbGF5ZWRcIiBbaXNfbWVzc2FnZV9kaXNwbGF5ZWRdPVwibWVzc2FnZV9wYXJhbXNcIj48L2FwcC1tZXNzYWdlPlxyXG5cclxuICAgIDwhLS1TYW1wbGUgUGFnZSBTZWN0aW9uIDEtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlc2VjdGlvblwiPlxyXG4gICAgICAgIDxoZWFkZXI+QnV0dG9uczwvaGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVNb2RhbCgpXCI+U2hvdyBNb2RhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTG9hZGVyKClcIj5Ub2dnbGUgTG9hZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1lc3NhZ2UoKVwiPlRvZ2dsZSBNZXNzYWdlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLVNhbXBsZSBQYWdlIFNlY3Rpb24gMi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2VzZWN0aW9uXCI+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206ICRzZWN0aW9uLWJvdHRvbS1tYXJnaW47XHJcblxyXG5cclxuICAgIC5sZWZ0LCAucmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBpLCBoZWFkZXIsIGJ1dHRvbiwgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIGksIGhlYWRlciwgYnV0dG9uLCBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTYW1wbGUgQ29kZSBmb3IgQnV0dG9uIENvbnRhaW5lciAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbjxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1vZGFsKClcIj5TaG93IE1vZGFsPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlTG9hZGVyKClcIj5Ub2dnbGUgTG9hZGVyPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZU1lc3NhZ2UoKVwiPlRvZ2dsZSBNZXNzYWdlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4iLCIudGFibGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcblxyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLXMge1xyXG4gICAgICAgIHdpZHRoOiAzJTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLW0ge1xyXG4gICAgICAgIHdpZHRoOiA4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sdW1uLWwge1xyXG4gICAgICAgIHdpZHRoOiAxMyU7XHJcbiAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHVtbi14bCB7XHJcbiAgICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgIH1cclxuXHJcbiAgICAucm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGFibGUtaGVhZGVyLWJnO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLWRhdGEge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTYW1wbGUgQ29kZSBmb3IgVGFibGUgKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG48ZGl2IGNsYXNzPVwidGFibGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgdGFibGUtaGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAjXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1kYXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0Zvcj1cImxldCBpIG9mIFsxLDIsM107bGV0IGluZGV4ID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAge3tpbmRleCArIDF9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAge3snTmFtZScgKyBpbmRleH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4iLCIvKiBCdXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogJGJ0bi1taW4taGVpZ2h0O1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udCwgJHNlY29uZGFyeS1mb250O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAkYnRuLWZvbnQtY29sb3I7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJ0bi1iZy1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWJnLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGJ0bi1iZy1pbWFnZTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KEdyYWRpZW50VHlwZT0wLCBzdGFydENvbG9yc3RyPSM0OTg0OTMsIGVuZENvbG9yc3RyPSM0ODc3OEEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vLyBPdXRsaW5lZFxyXG5idXR0b24ub3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAkYnRuLWJnLWNvbG9yO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJ0bi1iZy1jb2xvcjtcclxufVxyXG5cclxuYnV0dG9uLm5vb3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAkYnRuLW5vLW91dGxpbmUtZm9udC1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4iLCIvKiBTY3JvbGwgQmFycyAqL1xyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuaW5wdXQge1xyXG4gICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRpbnB1dC1ib3JkZXI7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBJbnB1dHMgKi9cclxuLmlnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC8vIEFuIEl0ZW0gb2YgSW5wdXQgR3JvdXAgKGNvbnRhaW5zIHNpbmdsZS9tdWx0aXBsZSB0ZXh0Ym94ZXMpXHJcbiAgICAuaWctaXRlbSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzZweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgLmlnLWl0ZW0taGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkaWctaXRlbS1mb250LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlnLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgID4gaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGlnLWl0ZW0tZm9udC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiBpIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkaWctaXRlbS1pbnB1dC1ib3JkZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGlnLWl0ZW0taW5wdXQtYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRpZy1pdGVtLWlucHV0LWJvcmRlcjtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRpZy1pdGVtLXBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkaWctaXRlbS1pbnB1dC1ib3JkZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAuZHJvcGRvd24sIC5kZWZhdWx0LCAubWF0ZXJpYWwge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGlnLWl0ZW0taW5wdXQtYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWctaW5wdXQtcmVxdWlyZWQge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRpZy1pbnB1dC1yZXF1aXJlZDtcclxuXHJcbiAgICAgICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uZy1zZWxlY3QuY3VzdG9tIHtcclxuICAgICAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWctaW5wdXQtbGFyZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMnB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4uaWctMiB7XHJcbiAgICAuaWctaXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTVweCk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmlnLTMge1xyXG4gICAgLmlnLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDMzJSAtIDE1cHgpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ac14311\Projects\Open Source\AngularStarter\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map