webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _ramda = __webpack_require__(2);

	var _DesktopMenu = __webpack_require__(3);

	var _DesktopMenu2 = _interopRequireDefault(_DesktopMenu);

	var _MobileMenu = __webpack_require__(4);

	var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

	var _TestKnockoutComponent = __webpack_require__(11);

	var _TestKnockoutComponent2 = _interopRequireDefault(_TestKnockoutComponent);

	var _TestViewModel = __webpack_require__(5);

	var _TestViewModel2 = _interopRequireDefault(_TestViewModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var main = function main() {
	  (0, _ramda.map)(_DesktopMenu2.default, (0, _jquery2.default)('.desktop-menu'));
	  (0, _ramda.map)(_MobileMenu2.default, (0, _jquery2.default)('.mobile-menu'));

	  (0, _ramda.map)(_TestViewModel2.default, (0, _jquery2.default)('#test-view-model'));
	  (0, _TestKnockoutComponent2.default)();
	};

	// Side Effects
	(0, _jquery2.default)(document).ready(function () {
	  return main();
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (el) {};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (el) {};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (el) {
	  (0, _knockout.applyBindings)(new TestViewModel(), el);
	};

	var _knockout = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TestViewModel = function TestViewModel() {
	  var _this = this;

	  _classCallCheck(this, TestViewModel);

	  this.firstName = (0, _knockout.observable)('Bruce');
	  this.lastName = (0, _knockout.observable)('Banner');
	  this.fullName = (0, _knockout.computed)(function () {
	    return _this.firstName() + ' ' + _this.lastName();
	  });
	};

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  _knockout2.default.components.register('test-knockout-component', {
	    viewModel: ViewModel,
	    template: _TestKnockoutComponentTmpl2.default
	  });
	};

	var _knockout = __webpack_require__(6);

	var _knockout2 = _interopRequireDefault(_knockout);

	var _TestKnockoutComponentTmpl = __webpack_require__(12);

	var _TestKnockoutComponentTmpl2 = _interopRequireDefault(_TestKnockoutComponentTmpl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewModel = function ViewModel() {
	  _classCallCheck(this, ViewModel);

	  this.firstName = (0, _knockout.observable)();
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n  <p>Some HTML</p>\r\n</div>";

/***/ }
]);