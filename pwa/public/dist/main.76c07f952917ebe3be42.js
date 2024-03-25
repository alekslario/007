(self["webpackChunkdietgraph"] = self["webpackChunkdietgraph"] || []).push([["main"],{

/***/ 3199:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 3199;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 17186:
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ 5338);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout.js */ 40930);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ 71468);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/store */ 29338);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ 74357);
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global.js */ 73134);
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ 94540);
/* harmony import */ var _mapbox_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! !mapbox-gl */ 60842);
/* harmony import */ var _mapbox_gl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mapbox_gl__WEBPACK_IMPORTED_MODULE_7__);



 // Import Provider
 // Import your Redux store



 // eslint-disable-line import/no-webpack-loader-syntax

(_mapbox_gl__WEBPACK_IMPORTED_MODULE_7___default().accessToken) = "pk.eyJ1IjoiYWxla3NsYXJpbyIsImEiOiJjbHQ0cXJ3eG8wNW1vMmttZTA4NHpmNXA4In0.yylNO1HKBxVbA9jKNwgUmg";
var container = document.getElementById('app');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {
  store: _utils_store__WEBPACK_IMPORTED_MODULE_3__.store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

//register service worker

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     navigator.serviceWorker
//       .register('/sw.js')
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }

/***/ }),

/***/ 85158:
/*!****************************************!*\
  !*** ./src/components/ActionButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionButton: () => (/* binding */ ActionButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 57528);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ 78956);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ 69815);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global */ 73134);

var _templateObject;



var ActionButton = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.ActionIcon)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  bottom: 20px;\n  right: 15px;\n  z-index: 1000;\n  background-color: ", ";\n  padding: 5px;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n  /* border-radius: 50%; */\n  svg {\n    fill: ", ";\n  }\n  svg path {\n    stroke: ", ";\n    fill: ", ";\n  }\n  &:active {\n    background-color: ", ";\n  }\n"])), _global__WEBPACK_IMPORTED_MODULE_2__.darkTheme.card, _global__WEBPACK_IMPORTED_MODULE_2__.darkTheme.active, _global__WEBPACK_IMPORTED_MODULE_2__.darkTheme.active, _global__WEBPACK_IMPORTED_MODULE_2__.darkTheme.active, _global__WEBPACK_IMPORTED_MODULE_2__.darkTheme.card);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionButton);

/***/ }),

/***/ 34674:
/*!****************************************!*\
  !*** ./src/components/BottomDrawer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BottomDrawer: () => (/* binding */ BottomDrawer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ 59581);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 98741);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ 80115);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/react */ 18472);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global */ 73134);
/* harmony import */ var _hooks_useGetLatLon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useGetLatLon */ 47123);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ 71468);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/store */ 29338);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mantine/core */ 78956);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tabler/icons-react */ 62103);












var BottomDrawer = function BottomDrawer(_ref) {
  var show = _ref.show;
  var modal = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {
      return state.location;
    }),
    options = _useSelector.options;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (!document) return;
    var setState = function setState(e) {
      var data = e.detail.value;
      setValue(data);
    };
    document.addEventListener('ionInput', setState);
    return function () {
      return document.removeEventListener('ionInput', setState);
    };
  }, []);
  var matchedLocations = (0,_hooks_useGetLatLon__WEBPACK_IMPORTED_MODULE_7__.useGetLatLon)(value);
  console.log(matchedLocations);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonModal, {
    style: {
      '--ion-background-color': _global__WEBPACK_IMPORTED_MODULE_6__.darkTheme.secondaryBackgroundColor
    },
    ref: modal,
    initialBreakpoint: 0.65,
    isOpen: show
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonHeader, null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, {
    style: {
      position: 'sticky'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonButtons, {
    slot: "end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonButton, {
    color: "light",
    onClick: function onClick() {
      var _modal$current;
      return (_modal$current = modal.current) === null || _modal$current === void 0 ? void 0 : _modal$current.dismiss();
    }
  }, "Close"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonSearchbar, {
    style: {
      '--background': _global__WEBPACK_IMPORTED_MODULE_6__.darkTheme.card,
      '--color': _global__WEBPACK_IMPORTED_MODULE_6__.darkTheme.mainText,
      '--icon-color': _global__WEBPACK_IMPORTED_MODULE_6__.darkTheme.active,
      '--clear-button-color': _global__WEBPACK_IMPORTED_MODULE_6__.darkTheme.active,
      '--border-radius': '10px'
    },
    placeholder: "Search"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonContent, {
    className: "ion-padding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("ul", {
    style: {
      overflow: 'scroll'
    }
  }, matchedLocations.map(function (location, index) {
    var latitude = location.latitude,
      longitude = location.longitude,
      admin1 = location.admin1,
      name = location.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonItem, {
      key: index,
      style: {
        '--color': _global__WEBPACK_IMPORTED_MODULE_6__.darkTheme.mainText
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonLabel, {
      onClick: function onClick() {
        var _modal$current2;
        dispatch((0,_utils_store__WEBPACK_IMPORTED_MODULE_8__.addLocation)({
          lat: latitude,
          lon: longitude,
          name: "".concat(name, ", ").concat(admin1)
        }));
        setValue('');
        (_modal$current2 = modal.current) === null || _modal$current2 === void 0 ? void 0 : _modal$current2.dismiss();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, admin1)));
  }), matchedLocations.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, options.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    style: {
      color: _global__WEBPACK_IMPORTED_MODULE_6__.darkTheme.mainText
    }
  }, "Your saved locations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonList, {
    style: {
      height: '100%'
    }
  }, options.map(function (_ref2, index) {
    var lon = _ref2.lon,
      lat = _ref2.lat,
      name = _ref2.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonItem, {
      key: index,
      onClick: function onClick() {
        var _modal$current3;
        dispatch((0,_utils_store__WEBPACK_IMPORTED_MODULE_8__.removeLocation)(name));
        (_modal$current3 = modal.current) === null || _modal$current3 === void 0 ? void 0 : _modal$current3.dismiss();
      },
      style: {
        '--color': _global__WEBPACK_IMPORTED_MODULE_6__.darkTheme.mainText
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_5__.IonLabel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", null, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.ActionIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_11__["default"], null)));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    style: {
      height: '300px'
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BottomDrawer);

/***/ }),

/***/ 99872:
/*!***************************************!*\
  !*** ./src/components/ColorLegend.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorLegend: () => (/* binding */ ColorLegend),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 57528);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ 15195);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ 29979);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ 59581);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActionButton */ 85158);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mantine/core */ 78956);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tabler/icons-react */ 54927);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tabler/icons-react */ 25774);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ 69815);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global */ 73134);
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Flex */ 96291);


var _templateObject, _templateObject2, _templateObject3, _templateObject4;










var colors = {
  0: "#dfdfdfff",
  15: "#9bea8fff",
  20: "#58ff42ff",
  25: "#47c278ff",
  30: "#4793f9ff",
  35: "#0c59ffff",
  40: "#6153c1ff",
  45: "#ff93a3ff",
  50: "#ff3f35ff",
  55: "#c20511ff",
  60: "#ffeb0aff"
};
var ColorMeterWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  border-radius: 15px;\n  border: 1px transparent solid;\n  overflow: hidden;\n  width: 20px;\n  border-radius: 15px;\n  margin: 10px;\n"])));
var ColorLegendWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  background-color: ", ";\n  border-radius: 15px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n  display: flex;\n  width: min-content;\n  position: absolute;\n  bottom: 100px;\n  left: 15px;\n  transition: width 0.5s ease-in-out;\n  overflow: hidden;\n  height: fit-content;\n  padding-top: 5px;\n"])), _global__WEBPACK_IMPORTED_MODULE_8__.darkTheme.card);
var ColorMeter = function ColorMeter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(ColorMeterWrapper, null, Array.from({
    length: 10
  }, function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      key: i,
      className: "tint".concat(9 - i, " tint"),
      style: {
        width: "20px",
        height: "20px"
      }
    });
  }));
};
var Text = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: ", ";\n"])), _global__WEBPACK_IMPORTED_MODULE_8__.darkTheme.mainText);
var SubText = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  font-size: 12px;\n  color: ", ";\n"])), _global__WEBPACK_IMPORTED_MODULE_8__.darkTheme.seconDaryText);
var texts = [["Light rain", "0.1 mm/h"], ["Light rain", "2.5 mm/h"], ["Moderate rain", "7.6 mm/h"], ["Heavy rain", "15.0 mm/h"], ["Intense rain", "30.0 mm/h"], ["Extreme rain", ">30.0 mm/h"]];
var ColorLegendText = function ColorLegendText() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      margin: "4px 20px 4px 20px",
      textWrap: "nowrap",
      flexWrap: "nowrap"
    }
  }, ["#58ff42", "#ff5f5e", "#4f54cf", "#4798ec", "#58fd44", "#c9e2c5"].map(function (color, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Flex__WEBPACK_IMPORTED_MODULE_9__.Row, {
      style: {
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      style: {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: color,
        marginRight: "10px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Flex__WEBPACK_IMPORTED_MODULE_9__.Col, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(Text, null, texts[i][0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(SubText, null, texts[i][1])));
  }));
};
var ColorLegend = function ColorLegend() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(ColorLegendWrapper, {
    style: {
      width: show ? "200px" : "40px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Flex__WEBPACK_IMPORTED_MODULE_9__.Col, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Flex__WEBPACK_IMPORTED_MODULE_9__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(ColorMeter, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(ColorLegendText, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_10__.ActionIcon, {
    style: {
      margin: "6px"
    },
    onClick: function onClick() {
      setShow(function (prev) {
        return !prev;
      });
    }
  }, show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fill: _global__WEBPACK_IMPORTED_MODULE_8__.darkTheme.active,
    stroke: _global__WEBPACK_IMPORTED_MODULE_8__.darkTheme.active
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
    fill: _global__WEBPACK_IMPORTED_MODULE_8__.darkTheme.active,
    stroke: _global__WEBPACK_IMPORTED_MODULE_8__.darkTheme.active
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorLegend);

/***/ }),

/***/ 73815:
/*!*****************************************!*\
  !*** ./src/components/EmblaCarousel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 89394);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 98741);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ 59581);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 17);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 5086);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ 80115);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ 71468);
/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! embla-carousel-react */ 67647);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/store */ 29338);











var EmblaCarousel = function EmblaCarousel() {
  var _useEmblaCarousel = (0,embla_carousel_react__WEBPACK_IMPORTED_MODULE_9__["default"])({
      loop: true
    }),
    _useEmblaCarousel2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useEmblaCarousel, 2),
    emblaRef = _useEmblaCarousel2[0],
    emblaApi = _useEmblaCarousel2[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (state) {
      return state.location;
    }),
    _useSelector$current = _useSelector.current,
    name = _useSelector$current.name,
    lat = _useSelector$current.lat,
    lon = _useSelector$current.lon,
    selectedIndex = _useSelector.selectedIndex,
    options = _useSelector.options;
  var logSlidesInView = function logSlidesInView() {
    if (emblaApi) {
      var slides = emblaApi.slidesInView();
      if (slides.length === 1 && slides[0] !== selectedIndex) {
        dispatch((0,_utils_store__WEBPACK_IMPORTED_MODULE_8__.selectSlide)(slides[0]));
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (emblaApi) emblaApi.on('slidesInView', logSlidesInView);
  }, [emblaApi, logSlidesInView]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("section", {
    className: "embla"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "embla__viewport",
    ref: emblaRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "embla__container"
  }, [name].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(options.map(function (e) {
    return e.name;
  }))).filter(function (e) {
    return e;
  }).map(function (name, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
      className: "embla__slide",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
      className: "embla__slide__number"
    }, name));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmblaCarousel);

/***/ }),

/***/ 96291:
/*!********************************!*\
  !*** ./src/components/Flex.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Col: () => (/* binding */ Col),
/* harmony export */   Row: () => (/* binding */ Row)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 57528);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ 69815);

var _templateObject, _templateObject2;

var Row = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n"])));
var Col = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n"])));

/***/ }),

/***/ 8938:
/*!************************************!*\
  !*** ./src/components/IconText.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconText: () => (/* binding */ IconText),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ 73134);


var IconText = function IconText(_ref) {
  var children = _ref.children,
    text = _ref.text,
    number = _ref.number,
    units = _ref.units;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.container
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: styles.text
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.numberContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: styles.number
  }, number), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: _global__WEBPACK_IMPORTED_MODULE_1__.darkTheme.secondaryText
    }
  }, units)));
};
var styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  text: {
    color: _global__WEBPACK_IMPORTED_MODULE_1__.darkTheme.secondaryText
  },
  units: {
    color: _global__WEBPACK_IMPORTED_MODULE_1__.darkTheme.secondaryText
  },
  numberContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  number: {
    fontSize: "18px",
    color: _global__WEBPACK_IMPORTED_MODULE_1__.darkTheme.mainText
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconText);

/***/ }),

/***/ 40930:
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ 69815);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ 56347);
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/react */ 18472);
/* harmony import */ var _ionic_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/react-router */ 55616);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-redux */ 71468);
/* harmony import */ var _hooks_useGeolocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useGeolocation */ 50183);
/* harmony import */ var _hooks_useQueryWeather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useQueryWeather */ 38141);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/store */ 29338);
/* harmony import */ var _pages_MainPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/MainPage */ 41162);
/* harmony import */ var _pages_SettingsPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/SettingsPage */ 93302);
/* harmony import */ var _hooks_useGetAddress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useGetAddress */ 11661);
/* harmony import */ var _ionic_react_css_core_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/react/css/core.css */ 44526);
/* harmony import */ var _ionic_react_css_normalize_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/react/css/normalize.css */ 57658);
/* harmony import */ var _ionic_react_css_structure_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/react/css/structure.css */ 68032);
/* harmony import */ var _ionic_react_css_typography_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/react/css/typography.css */ 34360);
/* harmony import */ var _ionic_react_css_padding_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/react/css/padding.css */ 30536);
/* harmony import */ var _ionic_react_css_float_elements_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/react/css/float-elements.css */ 35587);
/* harmony import */ var _ionic_react_css_text_alignment_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/react/css/text-alignment.css */ 33690);
/* harmony import */ var _ionic_react_css_text_transformation_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/react/css/text-transformation.css */ 74894);
/* harmony import */ var _ionic_react_css_flex_utils_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/react/css/flex-utils.css */ 60122);
/* harmony import */ var _ionic_react_css_display_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/react/css/display.css */ 993);
/* harmony import */ var _theme_variables_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../theme/variables.css */ 15187);













/* Core CSS required for Ionic components to work properly */


/* Basic CSS for apps built with Ionic */




/* Optional CSS utils that can be commented out */







/* Theme variables */

(0,_ionic_react__WEBPACK_IMPORTED_MODULE_3__.setupIonicReact)();
var App = function App() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_22__.useDispatch)();
  // const { selectedIndex, options, current } = useSelector((state) => state.location);
  // const { lat: savedLat, lon: savedLon } = selectedIndex > 0 ? options[selectedIndex] : current;
  var _useGeolocation = (0,_hooks_useGeolocation__WEBPACK_IMPORTED_MODULE_5__.useGeolocation)(),
    _useGeolocation2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGeolocation, 2),
    lat = _useGeolocation2[0],
    lon = _useGeolocation2[1];
  var address = (0,_hooks_useGetAddress__WEBPACK_IMPORTED_MODULE_10__.useGetAddress)({
    lon: lon,
    lat: lat
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!address) return;
    dispatch((0,_utils_store__WEBPACK_IMPORTED_MODULE_7__.addCurrentLocation)({
      name: address,
      lat: lat,
      lon: lon
    }));
  }, [address]);
  (0,_hooks_useQueryWeather__WEBPACK_IMPORTED_MODULE_6__.useQueryWeather)();

  // const address = useGetAddress(location?.latitude, location?.longitude);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__.IonApp, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ionic_react_router__WEBPACK_IMPORTED_MODULE_4__.IonReactRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_3__.IonRouterOutlet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_MainPage__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    exact: true,
    path: "/settings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_SettingsPage__WEBPACK_IMPORTED_MODULE_9__["default"], null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 41333:
/*!************************************!*\
  !*** ./src/components/MainInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainInfo: () => (/* binding */ MainInfo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 64467);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ 59581);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ 15195);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ 29979);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ 89560);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ 79389);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7899);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ 63534);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 17);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 5086);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ 10678);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ 58476);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 58379);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ 3101);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ 36012);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ 15852);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-redux */ 71468);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/utils */ 48590);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../global */ 73134);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @emotion/styled */ 69815);
/* harmony import */ var _EmblaCarousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./EmblaCarousel */ 73815);
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Flex */ 96291);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mantine/core */ 78956);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @tabler/icons-react */ 54927);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @tabler/icons-react */ 25774);


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

















// Remove React Native specific imports







var MainInfo = function MainInfo() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_23__.useSelector)(function (state) {
      return {
        data: state.data,
        location: state.location
      };
    }),
    _useSelector$data = _useSelector.data,
    currentTemperature = _useSelector$data.currentTemperature,
    currentTime = _useSelector$data.currentTime,
    _useSelector$location = _useSelector.location,
    selectedIndex = _useSelector$location.selectedIndex,
    options = _useSelector$location.options;
  var weather = currentTemperature;
  var _formatDate = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_18__.formatDate)(currentTime),
    _formatDate2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_formatDate, 2),
    date = _formatDate2[0],
    hours = _formatDate2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      color: _global__WEBPACK_IMPORTED_MODULE_19__.darkTheme.mainText,
      padding: '20px'

      // minHeight: window.innerHeight * 0.8,
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '6px'
    }
  }, Array.from({
    length: options.length + 1
  }).map(function (_, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
      style: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        margin: '0 3px',
        backgroundColor: index === selectedIndex ? _global__WEBPACK_IMPORTED_MODULE_19__.darkTheme.active : _global__WEBPACK_IMPORTED_MODULE_19__.darkTheme.mainText
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '6px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_24__.ActionIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_25__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_EmblaCarousel__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_24__.ActionIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_26__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Flex__WEBPACK_IMPORTED_MODULE_22__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    style: styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    style: styles.weather
  }, weather, "\xB0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    style: styles.weather
  }, "C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    style: styles.dateContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    style: _objectSpread(_objectSpread({}, styles.dateContainer), styles.date)
  }, date), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    style: styles.date
  }, "".concat((0,_utils_utils__WEBPACK_IMPORTED_MODULE_18__.getTime)(Date.now()))))));
};
var styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexDirection: 'row',
    width: '100%'
  },
  weather: {
    fontSize: ' 40px',
    fontWeight: 'bold'
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    textWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  date: {
    fontSize: '20px',
    fontWeight: 'bold'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainInfo);

/***/ }),

/***/ 12376:
/*!*******************************!*\
  !*** ./src/components/Map.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 64467);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 10467);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 57528);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ 54756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ 58476);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 5086);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 58379);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ 18772);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise.js */ 69193);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7899);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ 63534);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 17);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ 10678);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ 3101);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ 36012);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ 15852);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mapbox-gl */ 60842);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Slider */ 21149);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-redux */ 71468);
/* harmony import */ var _svg_Fly__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../svg/Fly */ 6117);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @emotion/styled */ 69815);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ActionButton */ 85158);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../global */ 73134);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @tabler/icons-react */ 49118);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @tabler/icons-react */ 37257);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @tabler/icons-react */ 62545);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ 56347);
/* harmony import */ var _ColorLegend__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ColorLegend */ 99872);
/* harmony import */ var _BottomDrawer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./BottomDrawer */ 34674);




var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }













 // or "const mapboxgl = require('mapbox-gl');"











var layers = ["precipitation_new", "clouds_new", "pressure_new", "wind_new", "temp_new"];
var MapWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_21__["default"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  position: relative;\n  height: 65vh;\n  min-height: 65vh;\n"])));
function Map(_ref) {
  var lat = _ref.lat,
    lon = _ref.lon,
    _ref$zoom = _ref.zoom,
    zoom = _ref$zoom === void 0 ? 0 : _ref$zoom,
    _ref$setShowInput = _ref.setShowInput,
    setShowInput = _ref$setShowInput === void 0 ? function () {} : _ref$setShowInput;
  var current = (0,react_redux__WEBPACK_IMPORTED_MODULE_26__.useSelector)(function (state) {
    return state.location.current;
  });
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useHistory)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(0),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    selectedLayer = _useState2[0],
    setSelectedLayer = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)([]),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    maps = _useState4[0],
    setMaps = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(10),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    count = _useState6[0],
    setCount = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
    play = _useState8[0],
    setPlay = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(0),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
    time = _useState10[0],
    setTime = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)({
      clouds_new: 0,
      precipitation_new: 0,
      pressure_new: 0,
      wind_new: 0,
      temp_new: 0
    }),
    _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
    source = _useState12[0],
    addSource = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
    loaded = _useState14[0],
    setLoaded = _useState14[1];
  var mapContainer = (0,react__WEBPACK_IMPORTED_MODULE_18__.useRef)(null);
  var map = (0,react__WEBPACK_IMPORTED_MODULE_18__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    if (map.current) return; // initialize map only once
    map.current = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_17___default().Map)({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [lon, lat],
      zoom: zoom
      // attributionControl: false,
    });
    // map.current.addControl(new mapboxgl.AttributionControl(), "top-left");
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    if (!map.current) return; // wait for map to initialize
    map.current.on("load", function () {
      map.current.resize();
      setLoaded(true);
    });
  }, []);

  // `https://tile.openweathermap.org/map/${layers[selectedLayer]}/{z}/{x}/{y}.png?appid=${process.env.EXPO_PUBLIC_OPENWEATHERMAP_KEY}`

  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    var finished = false;
    if (!loaded || maps.length === 0 || finished) return;
    finished = true;
    maps.forEach(function (tile, index) {
      map.current.addLayer({
        id: "rainviewer_".concat(tile.path),
        type: "raster",
        source: {
          type: "raster",
          tiles: ["https://tilecache.rainviewer.com/v2/radar/".concat(tile.path, "/512/{z}/{x}/{y}/2/1_1.png")],
          tileSize: 256
        },
        layout: {
          visibility: index === 0 ? "visible" : "none"
        },
        minzoom: 0,
        maxzoom: 22
      });
    });
  }, [loaded, maps.length]);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    if (!loaded || maps.length === 0 || !play) return;
    var handle = null;
    var i2 = null;
    maps.forEach(function (frame, index) {
      map.current.setLayoutProperty("rainviewer_".concat(frame.path), "visibility", index === time || index === time - 1 ? "visible" : "none");
    });
    if (time - 1 >= 0) {
      var frame = maps[time - 1];
      var opacity = 1;
      handle = setTimeout(function () {
        i2 = setInterval(function () {
          if (opacity <= 0) {
            return clearInterval(i2);
          }
          map.current.setPaintProperty("rainviewer_".concat(frame.path), "raster-opacity", opacity);
          opacity -= 0.1;
        }, 50);
      }, 400);
    }
    return function () {
      if (handle) clearTimeout(handle);
      if (i2) clearInterval(i2);
    };
  }, [play, maps.length, loaded, time]);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    if (!loaded || maps.length === 0 || !play) return;
    var interval = setInterval(function () {
      setTime(function (count) {
        return (count + 1) % maps.length;
      });
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [maps.length, play, loaded]);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    if (!loaded || maps.length === 0 || !play || time > 0) return;
    maps.forEach(function (frame, index) {
      map.current.setLayoutProperty("rainviewer_".concat(frame.path), "visibility", index === 0 ? "visible" : "none");
      map.current.setPaintProperty("rainviewer_".concat(frame.path), "raster-opacity", 1);
    });
  }, [maps.length, play, loaded, time]);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    var getWeatherMaps = /*#__PURE__*/function () {
      var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://api.rainviewer.com/public/weather-maps.json");
            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();
            case 5:
              data = _context.sent;
              // Assuming you want the latest radar data

              setMaps(data.radar.past);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function getWeatherMaps() {
        return _ref2.apply(this, arguments);
      };
    }();
    getWeatherMaps();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    if (!loaded) return;
    map.current.flyTo(_objectSpread(_objectSpread({}, {
      center: [lon, lat],
      zoom: 4
    }), {}, {
      // Fly to the selected target
      duration: 6000,
      // Animate over 12 seconds
      essential: true // This animation is considered essential with
      //respect to prefers-reduced-motion
    }));
  }, [loaded, lat, lon]);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    if (!loaded || maps.length === 0 || !play) return;
    var interval = setInterval(function () {
      setCount(function (count) {
        return (count + 1) % maps.length;
      });
    }, 500);
    return function () {
      return clearInterval(interval);
    };
  }, [maps, play]);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    if (!loaded) return;
    var img = new Image(190, 190);
    img.onload = function () {
      return map.current.addImage("cat", img);
    };
    img.src = "./images/target.svg";

    // Add a data source containing one point feature.
    map.current.addSource("point", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [{
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [lon, lat]
          }
        }]
      }
    });

    // Add a layer to use the image to represent the data.
    map.current.addLayer({
      id: "points",
      type: "symbol",
      source: "point",
      // reference the data source
      layout: {
        "icon-image": "current",
        // reference the image
        "icon-size": 0.25
      }
    });
  }, [loaded]);
  var goToStart = function goToStart() {
    var lon = current.lon,
      lat = current.lat;
    map.current.flyTo({
      center: [lon, lat],
      zoom: 4,
      duration: 4000,
      // Animate over 12 seconds
      essential: true // This animation is considered essential with
    });
  };
  var handleDrag = function handleDrag(val) {
    setTime(val);
    setPlay(false);
    maps.forEach(function (frame, index) {
      map.current.setLayoutProperty("rainviewer_".concat(frame.path), "visibility", time === index ? "visible" : "none");
      map.current.setPaintProperty("rainviewer_".concat(frame.path), "raster-opacity", 1);
    });
  };

  // // hook to if scrolled
  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(MapWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    ref: mapContainer,
    className: "map-container",
    style: {
      height: "100%"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Slider__WEBPACK_IMPORTED_MODULE_19__["default"], {
    time: time,
    overlays: maps,
    play: play,
    sliderCallback: handleDrag,
    onClick: function onClick() {
      setPlay(!play);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_22__.ActionButton, {
    onClick: goToStart
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_28__["default"], {
    size: 20,
    stroke: _global__WEBPACK_IMPORTED_MODULE_23__.darkTheme.active
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_22__.ActionButton, {
    style: {
      top: "20px"
    },
    onClick: function onClick() {
      history.push("/settings");
    },
    stroke: _global__WEBPACK_IMPORTED_MODULE_23__.darkTheme.active
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_29__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_22__.ActionButton, {
    style: {
      top: "20px",
      left: " 15px"
    },
    onClick: function onClick() {
      setShowInput(true);
    },
    stroke: _global__WEBPACK_IMPORTED_MODULE_23__.darkTheme.active
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_30__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_ColorLegend__WEBPACK_IMPORTED_MODULE_24__["default"], null));
}

/***/ }),

/***/ 94771:
/*!************************************!*\
  !*** ./src/components/MuiChart.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MuiChart: () => (/* binding */ MuiChart),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ 79389);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ 35231);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 17);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 5086);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ 59581);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ 14913);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_x_charts_LineChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/x-charts/LineChart */ 85788);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global */ 73134);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ 48590);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ 71468);











var MuiChart = function MuiChart() {
  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {
    return state.data;
  });
  var _ref = (data === null || data === void 0 ? void 0 : data.data) || {},
    hourly = _ref.hourly;
  var _ref2 = hourly || {},
    _ref2$temperature_2m = _ref2.temperature_2m,
    temperature_2m = _ref2$temperature_2m === void 0 ? [] : _ref2$temperature_2m,
    _ref2$time = _ref2.time,
    time = _ref2$time === void 0 ? [] : _ref2$time;

  // filter historic data and show only present and future up to 48 hours
  var now = new Date().getTime();
  var filteredTime = time.map(function (t) {
    return new Date(t);
  }).filter(function (t) {
    return t > now && t < now + 24 * 60 * 60 * 1000;
  }).sort(function (a, b) {
    return a - b;
  });

  //slice the temperature data to match the filtered time
  var filteredTemperature = temperature_2m.slice(0, filteredTime.length);
  console.log(filteredTime);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_x_charts_LineChart__WEBPACK_IMPORTED_MODULE_10__.LineChart, {
    xAxis: [{
      id: "Time",
      data: filteredTime,
      scaleType: "time",
      valueFormatter: function valueFormatter(date) {
        return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__.getTime)(date.getTime());
      }
    }],
    series: [{
      showMark: function showMark(_ref3) {
        var index = _ref3.index;
        return index % 4 === 0;
      },
      data: filteredTemperature
    }],
    width: 500,
    height: 300
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MuiChart);

// xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
//     series={[
//       {
//         data: [2, 5.5, 2, 8.5, 1.5, 5],
//       },
//     ]}

/***/ }),

/***/ 58352:
/*!***************************************!*\
  !*** ./src/components/PageWrapper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageWrapper: () => (/* binding */ PageWrapper),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 57528);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ 69815);

var _templateObject;

var PageWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  padding: 20px;\n  min-height: 100vh;\n  background: #1f1f1f;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);

/***/ }),

/***/ 61553:
/*!************************************!*\
  !*** ./src/components/Settings.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ 63534);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 17);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 5086);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ 10678);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ 58476);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 58379);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ 3101);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ 36012);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ 15852);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ 80045);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 64467);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ 59581);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ 84095);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7899);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ 71468);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mantine/core */ 59958);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/utils */ 48590);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/store */ 29338);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../global */ 73134);












var _excluded = ["theme"];



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





 // Assuming you have a GlobalStyles module

var ClickAble = function ClickAble(_ref) {
  var text = _ref.text,
    handleClick = _ref.handleClick,
    active = _ref.active,
    last = _ref.last,
    first = _ref.first;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_19__.Button, {
    style: _objectSpread(_objectSpread(_objectSpread({
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      borderRadius: 0
    }, active === text ? {
      backgroundColor: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.active
    } : {
      backgroundColor: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.backgroundColor
    }), first ? {
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10
    } : {}), last ? {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10
    } : {}),
    onClick: function onClick() {
      return handleClick(text);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
    style: _objectSpread({
      fontFamily: "Roboto-Regular"
    }, active === text ? {
      color: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.backgroundColor
    } : {
      color: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.seconDaryText
    })
  }, text));
};
var StackedSettings = function StackedSettings(_ref2) {
  var data = _ref2.data;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_20__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    style: styles.preferences
  }, Object.entries(data).map(function (_ref3, index) {
    var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    var selected = value.selected,
      options = value.options;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      key: index,
      style: styles.preferenceName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      style: _objectSpread(_objectSpread({
        display: "flex",
        flexDirection: "column",
        padding: 13,
        backgroundColor: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.secondaryBackgroundColor,
        marginBottom: 1
      }, index === 0 ? {
        borderTopLeftRadius: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.borderRadius,
        borderTopRightRadius: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.borderRadius
      } : {}), index === Object.keys(data).length - 1 ? {
        borderBottomLeftRadius: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.borderRadius,
        borderBottomRightRadius: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.borderRadius
      } : {})
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
      style: styles.header
    }, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.firstLetterUppercase)(key)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
      }
    }, options.map(function (option, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(ClickAble, {
        key: index,
        text: option,
        handleClick: function handleClick() {
          dispatch((0,_utils_store__WEBPACK_IMPORTED_MODULE_17__.setPreferences)((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])({}, key, _objectSpread(_objectSpread({}, value), {}, {
            selected: option
          }))));
        },
        active: selected,
        first: index === 0,
        last: index === options.length - 1
      });
    }))));
  }));
};
function Settings(_ref5) {
  var navigation = _ref5.navigation;
  var preferences = (0,react_redux__WEBPACK_IMPORTED_MODULE_20__.useSelector)(function (state) {
    return state.preferences;
  });
  var uiTheme = preferences.theme,
    rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__["default"])(preferences, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    style: styles.scrollView
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h1", {
    style: {
      marginTop: 20,
      color: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.secondaryText,
      fontSize: 18,
      marginBottom: 20,
      fontFamily: "Roboto-Bold"
    }
  }, "PREFERENCES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(StackedSettings, {
    data: _objectSpread({}, rest)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h1", {
    style: {
      marginTop: 20,
      color: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.secondaryText,
      fontSize: 18,
      marginBottom: 20,
      fontFamily: "Roboto-Bold"
    }
  }, "APPEARANCE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(StackedSettings, {
    data: {
      theme: uiTheme
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    style: {
      height: 100
    }
  }));
}
var styles = {
  scrollView: {
    flex: 1,
    // backgroundColor: darkTheme.secondaryBackgroundColor,

    position: "relative",
    borderRadius: 10
  },
  preferences: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  preferenceName: {},
  header: {
    color: _global__WEBPACK_IMPORTED_MODULE_18__.darkTheme.mainText,
    marginBottom: "10px",
    fontFamily: "Roboto-Regular"
  }
};

/***/ }),

/***/ 21149:
/*!**********************************!*\
  !*** ./src/components/Slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slider: () => (/* binding */ Slider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ 80045);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 57528);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ 59581);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ 533);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 5086);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mantine/core */ 50738);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ 69815);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tabler/icons-react */ 44030);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tabler/icons-react */ 78520);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global */ 73134);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ 48590);


var _excluded = ["overlays", "play", "time", "sliderCallback"];
var _templateObject, _templateObject2, _templateObject3;









var Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].button(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  background-color: ", ";\n  margin-left: 20px;\n  border-radius: 10px;\n  /* padding: 12px; */\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), _global__WEBPACK_IMPORTED_MODULE_7__.darkTheme.secondaryBackgroundColor);
var SliderContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .mantine-Slider-thumb {\n    background-color: ", ";\n    border: 6px solid ", ";\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);\n\n    transition: all 0.2s ease-in-out;\n  }\n  .mantine-Slider-track {\n    background-color: ", ";\n  }\n  .mantine-Slider-bar {\n    background-color: ", ";\n    transition: all 0.2s ease-in-out;\n  }\n  .mantine-m0g192::before {\n    background-color: ", ";\n  }\n  .play-icons path {\n    fill: ", ";\n  }\n  .mantine-Slider-root {\n    width: 70%;\n  }\n"])), _global__WEBPACK_IMPORTED_MODULE_7__.darkTheme.active, _global__WEBPACK_IMPORTED_MODULE_7__.darkTheme.backgroundColor, _global__WEBPACK_IMPORTED_MODULE_7__.darkTheme.secondaryBackgroundColor, _global__WEBPACK_IMPORTED_MODULE_7__.darkTheme.active, _global__WEBPACK_IMPORTED_MODULE_7__.darkTheme.secondaryBackgroundColor, _global__WEBPACK_IMPORTED_MODULE_7__.darkTheme.active);
var SliderWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: absolute;\n  top: -64px;\n  width: 200px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ", ";\n\n  border-radius: 10px;\n  padding: 5px 5px 5px 6px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n"])), _global__WEBPACK_IMPORTED_MODULE_7__.darkTheme.card);
var Slider = function Slider(_ref) {
  var overlays = _ref.overlays,
    _ref$play = _ref.play,
    play = _ref$play === void 0 ? false : _ref$play,
    time = _ref.time,
    sliderCallback = _ref.sliderCallback,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);
  var timeArray = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__.getTimeArray)(overlays.length);
  var marks = timeArray.map(function (time, index) {
    return {
      value: index + 1,
      label: time
    };
  });
  var marksMap = timeArray.reduce(function (acc, time, index) {
    acc[index + 1] = time;
    return acc;
  }, {});
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(SliderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(SliderWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_9__.Slider, {
    thumbSize: 20,
    label: function label(val) {
      console.log(val, marksMap[val]);
      return marksMap[val];
    },
    min: 1,
    step: 1,
    max: overlays.length,
    labelAlwaysOn: true,
    value: time,
    styles: {
      markLabel: {
        display: "none"
      },
      track: {
        "background-color": _global__WEBPACK_IMPORTED_MODULE_7__.darkTheme.secondaryBackgroundColor,
        border: _global__WEBPACK_IMPORTED_MODULE_7__.darkTheme.secondaryBackgroundColor
      }
    },
    onChange: sliderCallback
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(Button, props, !play ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "play-icons",
    size: 16
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "play-icons",
    size: 16
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ 79934:
/*!***************************************!*\
  !*** ./src/components/WeatherData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherData: () => (/* binding */ WeatherData),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 57528);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ 35231);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7899);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ 18636);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 5086);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ 71468);
/* harmony import */ var _svg_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../svg/index */ 26056);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ 69815);
/* harmony import */ var _IconText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IconText */ 8938);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global */ 73134);

var _templateObject;










var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n  margin: 20px;\n"])));
var WeatherData = function WeatherData() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (state) {
      return state.data;
    }),
    selectedDay = _useSelector.selectedDay,
    weatherMap = _useSelector.weatherMap,
    currentTime = _useSelector.currentTime;
  var keys = Object.keys(weatherMap).sort(function (a, b) {
    return a - b;
  });
  // get first key that is over current time
  var date = keys.find(function (k) {
    return k > currentTime;
  });
  var data = weatherMap[date];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_IconText__WEBPACK_IMPORTED_MODULE_8__.IconText, {
    text: "Feels like",
    number: "".concat(data["apparent_temperature"], "\xB0"),
    units: "C"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_svg_index__WEBPACK_IMPORTED_MODULE_6__.FeelsLike, {
    fill: _global__WEBPACK_IMPORTED_MODULE_9__.darkTheme.mainText
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_IconText__WEBPACK_IMPORTED_MODULE_8__.IconText, {
    text: "Precipitation",
    number: "".concat(data["precipitation"]),
    units: "h"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_svg_index__WEBPACK_IMPORTED_MODULE_6__.Precipitation, {
    fill: _global__WEBPACK_IMPORTED_MODULE_9__.darkTheme.mainText
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_IconText__WEBPACK_IMPORTED_MODULE_8__.IconText, {
    text: "Cloud cover",
    number: "".concat(data["cloud_cover"]),
    units: "%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_svg_index__WEBPACK_IMPORTED_MODULE_6__.CloudCover, {
    fill: _global__WEBPACK_IMPORTED_MODULE_9__.darkTheme.mainText
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_IconText__WEBPACK_IMPORTED_MODULE_8__.IconText, {
    text: "Wind",
    number: "".concat(data["wind_speed_10m"]),
    units: "km/h"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_svg_index__WEBPACK_IMPORTED_MODULE_6__.Wind, {
    fill: _global__WEBPACK_IMPORTED_MODULE_9__.darkTheme.mainText
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_IconText__WEBPACK_IMPORTED_MODULE_8__.IconText, {
    text: "Pressure",
    number: "".concat(data["surface_pressure"]),
    units: "mBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_svg_index__WEBPACK_IMPORTED_MODULE_6__.Pressure, {
    fill: _global__WEBPACK_IMPORTED_MODULE_9__.darkTheme.mainText
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_IconText__WEBPACK_IMPORTED_MODULE_8__.IconText, {
    text: "Humidity",
    number: "".concat(data["relative_humidity_2m"]),
    units: "%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_svg_index__WEBPACK_IMPORTED_MODULE_6__.Humidity, {
    fill: _global__WEBPACK_IMPORTED_MODULE_9__.darkTheme.mainText
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_IconText__WEBPACK_IMPORTED_MODULE_8__.IconText, {
    text: "Dew point",
    number: "".concat(data["dew_point_2m"], "\xB0"),
    units: "C"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_svg_index__WEBPACK_IMPORTED_MODULE_6__.DrewPoint, {
    fill: _global__WEBPACK_IMPORTED_MODULE_9__.darkTheme.mainText
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_IconText__WEBPACK_IMPORTED_MODULE_8__.IconText, {
    text: "UV index",
    number: "".concat(data["uv_index"]),
    units: "/11"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_svg_index__WEBPACK_IMPORTED_MODULE_6__.UVindex, {
    fill: _global__WEBPACK_IMPORTED_MODULE_9__.darkTheme.mainText
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_IconText__WEBPACK_IMPORTED_MODULE_8__.IconText, {
    text: "UV index",
    number: 4,
    units: "/11"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_svg_index__WEBPACK_IMPORTED_MODULE_6__.UVindex, {
    fill: _global__WEBPACK_IMPORTED_MODULE_9__.darkTheme.mainText
  }))));
};
var styles = {
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
    width: "100%"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "20px"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherData);

/***/ }),

/***/ 73134:
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   darkTheme: () => (/* binding */ darkTheme),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   lightTheme: () => (/* binding */ lightTheme)
/* harmony export */ });
var lightTheme = {
  secondaryBackgroundColor: "#F3F6FB",
  backgroundColor: "#FEFEFE",
  card: "#F3F6FB",
  active: "#7364CE",
  mainText: "#2C2727",
  seconDaryText: "#888888",
  disabledText: "#B6B0B0",
  borderRadius: 10,
  borderColor: "#888888"
};
var darkTheme = {
  secondaryBackgroundColor: "#292a29",
  backgroundColor: "#1f1f1f",
  card: "#353535",
  active: "#4cbeff",
  mainText: "#e8e4e4",
  secondaryText: "#aaa9a9",
  disabledText: "#B6B0B0",
  borderRadius: 10,
  borderColor: "#888888"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  lightTheme: lightTheme,
  darkTheme: darkTheme
});

/***/ }),

/***/ 50183:
/*!*************************************!*\
  !*** ./src/hooks/useGeolocation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useGeolocation: () => (/* binding */ useGeolocation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useGeolocation = function useGeolocation() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      lat: null,
      lon: null
    }),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    _useState2$ = _useState2[0],
    lat = _useState2$.lat,
    lon = _useState2$.lon,
    setCoords = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  }, []);

  // return [lat, lon];
  return [51.4744023, -0.035605];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGeolocation);

/***/ }),

/***/ 11661:
/*!************************************!*\
  !*** ./src/hooks/useGetAddress.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGetAddress: () => (/* binding */ useGetAddress)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 10467);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ 54756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 5086);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ 69193);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ 80115);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var useGetAddress = function useGetAddress(_ref) {
  var lon = _ref.lon,
    lat = _ref.lat;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (!lon || !lat) return;
    var getLocation = /*#__PURE__*/function () {
      var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(lat, ",").concat(lon, "&key=").concat("AIzaSyBOVs2opYG0FI8rJRUK7r9_9zEKG4F9mMA")));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function getLocation() {
        return _ref2.apply(this, arguments);
      };
    }();
    getLocation().then(function (response) {
      return response.json();
    }).then(function (data) {
      setState(data);
    })["catch"](function (error) {
      console.log("error", error);
    });
  }, [lon, lat]);
  return state ? state.results[0].formatted_address : null;
};

/***/ }),

/***/ 47123:
/*!***********************************!*\
  !*** ./src/hooks/useGetLatLon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGetLatLon: () => (/* binding */ useGetLatLon)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 10467);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ 54756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 5086);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ 69193);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ 18772);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var useGetLatLon = function useGetLatLon(address) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
      results: []
    }),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    results = _useState2[0].results,
    setState = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    console.log('address123', address, results.length);
    if (!address && results.length > 0) {
      setState({
        results: []
      });
    }
    if (!address) return;
    var getLocation = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", fetch("https://geocoding-api.open-meteo.com/v1/search?name=".concat(encodeURIComponent(address))));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function getLocation() {
        return _ref.apply(this, arguments);
      };
    }();

    // This function will be invoked after 700ms of inactivity
    var timer = setTimeout(function () {
      return getLocation().then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.results) setState(data);
      })["catch"](function (error) {
        console.log('error', error);
      });
    }, 700);

    // Cleanup function to clear the timeout if the dependency changes before the timeout

    return function () {
      return clearTimeout(timer);
    };
  }, [address]);
  return results || [];
};

/***/ }),

/***/ 38141:
/*!**************************************!*\
  !*** ./src/hooks/useQueryWeather.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultParams: () => (/* binding */ defaultParams),
/* harmony export */   useQueryWeather: () => (/* binding */ useQueryWeather)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 89394);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ 80115);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 5086);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ 69193);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ 80475);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ 533);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ 79389);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ 58476);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ 71468);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/store */ 29338);












var defaultParams = ['temperature_2m', 'relative_humidity_2m', 'dew_point_2m', 'apparent_temperature', 'precipitation_probability', 'precipitation', 'rain', 'showers', 'snowfall', 'weather_code', 'surface_pressure', 'cloud_cover', 'visibility', 'wind_speed_10m', 'wind_direction_10m', 'wind_gusts_10m', 'soil_temperature_0cm', 'soil_moisture_0_to_1cm', 'uv_index', 'is_day', 'sunshine_duration'];
var useQueryWeather = function useQueryWeather() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(function (state) {
      return {
        cash: state.cash,
        location: state.location
      };
    }),
    cash = _useSelector.cash,
    _useSelector$location = _useSelector.location,
    current = _useSelector$location.current,
    selectedIndex = _useSelector$location.selectedIndex,
    options = _useSelector$location.options;
  var _selectedIndex = [current].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(options))[selectedIndex],
    lat = _selectedIndex.lat,
    lon = _selectedIndex.lon;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    weather = _useState2[0],
    setWeather = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    if (lat === null) return;
    //get current lon lat
    if (cash[lat + '' + lon]) {
      setWeather(null);
      dispatch((0,_utils_store__WEBPACK_IMPORTED_MODULE_10__.setData)(cash[lat + '' + lon]));
      return;
    }
    fetch("https://api.open-meteo.com/v1/forecast?latitude=".concat(lat, "&longitude=").concat(lon, "&current=temperature_2m,wind_speed_10m&hourly=").concat(defaultParams.join(','))).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.current) setWeather(data);
    })["catch"](function (error) {
      console.error('Error:', error);
    });
  }, [lat, lon, selectedIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    if (!weather) return;

    // make days' weather map

    var hourly = weather.hourly,
      current = weather.current;
    var currentTemp = current.temperature_2m,
      currentTime = current.time;
    var time = hourly.time;
    var weatherMap = time.reduce(function (acc, cur, idx) {
      var milliseconds = Date.parse(cur);
      acc[milliseconds] = {};
      defaultParams.forEach(function (param) {
        acc[milliseconds][param] = hourly[param][idx];
      });
      return acc;
    }, {});
    dispatch((0,_utils_store__WEBPACK_IMPORTED_MODULE_10__.setData)({
      data: weather,
      weatherMap: weatherMap,
      currentTemperature: currentTemp,
      currentTime: Date.parse(currentTime),
      lon: lon,
      lat: lat
    }));
    dispatch((0,_utils_store__WEBPACK_IMPORTED_MODULE_10__.setCash)({
      key: lat + '' + lon,
      data: {
        data: weather,
        weatherMap: weatherMap,
        currentTemperature: currentTemp,
        currentTime: Date.parse(currentTime),
        lon: lon,
        lat: lat
      }
    }));
  }, [weather]);
};

/***/ }),

/***/ 41162:
/*!*******************************!*\
  !*** ./src/pages/MainPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/react */ 18472);
/* harmony import */ var _MainPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainPage.css */ 91325);
/* harmony import */ var _components_PageWrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageWrapper.js */ 58352);
/* harmony import */ var _components_WeatherData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/WeatherData.js */ 79934);
/* harmony import */ var _components_MainInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainInfo.js */ 41333);
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global.js */ 73134);
/* harmony import */ var _components_BottomDrawer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BottomDrawer.js */ 34674);
/* harmony import */ var _components_Map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Map.js */ 12376);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ 71468);
/* harmony import */ var _components_MuiChart_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MuiChart.js */ 94771);












var MainPage = function MainPage() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(function (state) {
      return state.location;
    }),
    current = _useSelector.current,
    options = _useSelector.options,
    selectedIndex = _useSelector.selectedIndex;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    showInput = _useState2[0],
    setShowInput = _useState2[1];
  var _ref = selectedIndex > 0 ? options[selectedIndex - 1] : current,
    lat = _ref.lat,
    lon = _ref.lon;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var isDismissed = function isDismissed() {
      setShowInput(false);
    };
    document.addEventListener("ionModalDidDismiss", isDismissed);
    return function () {
      return document.removeEventListener("ionModalDidDismiss", isDismissed);
    };
  }, []);
  var handleScroll = function handleScroll(e) {
    var node = document.querySelector(".base-Popper-root");
    if (node) {
      node.style.display = "none";
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_2__.IonPage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_2__.IonContent, {
    scrollEvents: true,
    onIonScroll: handleScroll,
    fullscreen: true,
    style: {
      "--background": _global_js__WEBPACK_IMPORTED_MODULE_7__.darkTheme.backgroundColor
      // '--overflow': 'hidden',
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PageWrapper_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      padding: "0px"
    }
  }, lat && lon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Map_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    lat: lat || 0,
    lon: lon || 0,
    setShowInput: setShowInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_MainInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_MuiChart_js__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_WeatherData_js__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_BottomDrawer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: showInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      height: "100px",
      width: "100%",
      color: "transparent"
    }
  }, "a"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ }),

/***/ 93302:
/*!***********************************!*\
  !*** ./src/pages/SettingsPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 57528);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/react */ 18472);
/* harmony import */ var _SettingsPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsPage.css */ 3693);
/* harmony import */ var _components_PageWrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageWrapper.js */ 58352);
/* harmony import */ var _components_Settings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Settings.js */ 61553);
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.js */ 73134);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ 56347);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ 69815);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tabler/icons-react */ 60575);
/* harmony import */ var _components_ActionButton_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ActionButton.js */ 85158);

var _templateObject;










var GoBack = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: flex-start;\n"])));
var SettingsPage = function SettingsPage() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_2__.IonPage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ionic_react__WEBPACK_IMPORTED_MODULE_2__.IonContent, {
    fullscreen: true,
    style: {
      "--background": _global_js__WEBPACK_IMPORTED_MODULE_6__.darkTheme.backgroundColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PageWrapper_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(GoBack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_ActionButton_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      position: "unset"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: function onClick() {
      return history.goBack();
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Settings_js__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);

/***/ }),

/***/ 14750:
/*!*******************************!*\
  !*** ./src/svg/CloudCover.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ 58168);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ 80045);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ 32982);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["fill"];


var CloudCover = function CloudCover(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "#2C2727" : _ref$fill,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    fill: "none"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    fill: fill,
    d: "M15.625 3.516a8.993 8.993 0 0 0-7.91 4.722 6.64 6.64 0 1 0-.684 13.246h8.594a8.984 8.984 0 0 0 0-17.968Zm0 15.625H7.03a4.297 4.297 0 1 1-.178-8.594A8.97 8.97 0 0 0 6.64 12.5a1.172 1.172 0 1 0 2.344 0 6.64 6.64 0 1 1 6.64 6.64Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloudCover);

/***/ }),

/***/ 9764:
/*!******************************!*\
  !*** ./src/svg/DrewPoint.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ 58168);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ 80045);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ 32982);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["fill"];


var DewPoint = function DewPoint(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "#2C2727" : _ref$fill,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    fill: "none"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    fill: fill,
    d: "M17.325 7.865a.781.781 0 0 1 .2-1.086c1.016-.7 2.606-.7 3.622 0 .488.34 1.355.34 1.847 0a.781.781 0 0 1 .887 1.285 3.383 3.383 0 0 1-3.621 0c-.489-.338-1.356-.338-1.848 0a.78.78 0 0 1-1.087-.199Zm5.67 2.04c-.49.338-1.356.338-1.849 0-1.015-.702-2.605-.702-3.62 0a.782.782 0 1 0 .886 1.285c.488-.34 1.356-.34 1.848 0a3.383 3.383 0 0 0 3.62 0 .782.782 0 0 0-.886-1.286Zm-8.151 8.064a3.125 3.125 0 1 1-3.906-3.028V4.687a.781.781 0 1 1 1.562 0v10.254a3.13 3.13 0 0 1 2.344 3.028Zm-1.563 0a1.562 1.562 0 1 0-3.124 0 1.562 1.562 0 0 0 3.124 0Zm4.688 0a6.25 6.25 0 1 1-10.157-4.883V4.687a3.906 3.906 0 0 1 7.813 0v8.399a6.258 6.258 0 0 1 2.344 4.883Zm-1.563 0a4.695 4.695 0 0 0-2.01-3.848.782.782 0 0 1-.334-.644v-8.79a2.344 2.344 0 1 0-4.687 0v8.79a.781.781 0 0 1-.334.64 4.687 4.687 0 1 0 7.365 3.852Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DewPoint);

/***/ }),

/***/ 83114:
/*!******************************!*\
  !*** ./src/svg/FeelsLike.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ 58168);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ 80045);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ 32982);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["fill"];


var FeelsLike = function FeelsLike(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "#2C2727" : _ref$fill,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    fill: "none"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    fill: fill,
    d: "M20.703 5.469a2.734 2.734 0 1 0 0 5.468 2.734 2.734 0 0 0 0-5.468Zm0 3.906a1.172 1.172 0 1 1 0-2.344 1.172 1.172 0 0 1 0 2.344ZM12.5 14.941V8.594a.781.781 0 1 0-1.563 0v6.347a3.125 3.125 0 1 0 1.563 0Zm-.781 4.59a1.562 1.562 0 1 1 0-3.124 1.562 1.562 0 0 1 0 3.124Zm3.906-6.445V4.687a3.907 3.907 0 0 0-7.813 0v8.399a6.25 6.25 0 1 0 7.813 0Zm-3.906 9.57a4.687 4.687 0 0 1-2.678-8.535.782.782 0 0 0 .334-.644v-8.79a2.344 2.344 0 1 1 4.688 0v8.79a.78.78 0 0 0 .333.64 4.687 4.687 0 0 1-2.677 8.54Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeelsLike);

/***/ }),

/***/ 6117:
/*!************************!*\
  !*** ./src/svg/Fly.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ 58168);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ 80045);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ 32982);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["fill"];


var Fly = function Fly(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "#000" : _ref$fill,
    rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    fill: fill,
    d: "M20.891 2.006 20.997 2l.13.008.09.016.123.035.107.046.1.057.09.067.082.075.052.059.082.116.052.096c.047.1.077.206.09.316l.005.106c0 .075-.008.149-.024.22l-.035.123-6.532 18.077a1.55 1.55 0 0 1-2.172.705 1.546 1.546 0 0 1-.566-.549l-.065-.127-3.352-6.702-6.67-3.336a1.55 1.55 0 0 1-.898-1.259L1.68 10c0-.56.301-1.072.841-1.37l.14-.07 18.017-6.506.106-.03.107-.018Z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fly);

/***/ }),

/***/ 97015:
/*!*****************************!*\
  !*** ./src/svg/Humidity.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ 58168);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ 32982);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var Humidity = function Humidity(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "#2C2727" : _ref$fill,
    props = _ref.props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 15,
    height: 20,
    fill: "none"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
    fill: fill,
    d: "M12.872 8.588 7.693.34a.812.812 0 0 0-1.323 0L1.167 8.628A7.801 7.801 0 0 0 0 12.5a7.031 7.031 0 1 0 14.063 0 7.862 7.862 0 0 0-1.191-3.912Zm-5.84 9.38a5.476 5.476 0 0 1-5.47-5.468 6.233 6.233 0 0 1 .952-3.08l.73-1.165 7.87 7.87a5.451 5.451 0 0 1-4.083 1.843Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Humidity);

/***/ }),

/***/ 96119:
/*!**********************************!*\
  !*** ./src/svg/Precipitation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ 58168);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ 80045);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ 32982);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["fill"];


var Precipitation = function Precipitation(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "#2C2727" : _ref$fill,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    fill: "none"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    fill: fill,
    d: "M1.979.863c.97 1.246 10.937 14.007 13.323 16.083 3.003 2.615 5.184-.149 2.851-2.851C16.114 11.732 3.72 2.06 2.183.863H1.98Zm7.37 0c1.77 2.398 5.176 6.963 6.454 8.075 2.1 1.828 3.639-.118 2.008-2.007C16.773 5.73 12.77 2.705 10.283.863h-.935Zm5.131 0c.563.628 1.06 1.16 1.301 1.369 1.603 1.395 2.78.068 1.802-1.369H14.48ZM.679 5.175v2.121c1.668 2.146 3.414 4.317 4.22 5.019 2.1 1.827 3.638-.096 2.008-1.985C6.07 9.36 3.165 7.078.679 5.175Zm0 6.478v2.213c1.796 2.146 3.53 4.182 4.151 4.723 1.862 1.62 3.202-.105 1.757-1.78-.642-.744-3.312-3.005-5.908-5.156Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Precipitation);

/***/ }),

/***/ 92869:
/*!*****************************!*\
  !*** ./src/svg/Pressure.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ 58168);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ 80045);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ 32982);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["fill"];


var Pressure = function Pressure(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "#2C2727" : _ref$fill,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    fill: "none"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    stroke: fill,
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M21.555 18.053a9.375 9.375 0 1 0-18.11 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    stroke: fill,
    strokeWidth: 2,
    d: "M13.298 16.232c.507.74.15 1.867-.798 2.518-.948.652-2.128.581-2.635-.157-.542-.788-2.41-5.216-3.545-7.956-.214-.515.417-.949.823-.564 2.15 2.041 5.614 5.372 6.155 6.16Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    stroke: fill,
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M12.5 6.25v2.083m-6.63.663 1.474 1.473m11.785-1.473-1.473 1.473m3.9 7.583-2.012-.54m-16.1.54 2.012-.54"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pressure);

/***/ }),

/***/ 96281:
/*!****************************!*\
  !*** ./src/svg/UVindex.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ 58168);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ 80045);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ 32982);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["fill"];


var UVindex = function UVindex(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "#2C2727" : _ref$fill,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    fill: "none"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    stroke: fill,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3.125 12.5h1.042m16.666 0h1.042M5.833 5.833l.73.73m12.604-.73-.73.73M8.334 12.5a4.167 4.167 0 1 1 8.334 0M12.5 4.167V3.125m1.042 13.542 2.083 5.208h1.042l2.083-5.208m-12.5 0v3.125a2.083 2.083 0 0 0 4.167 0v-3.125"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UVindex);

/***/ }),

/***/ 60340:
/*!*************************!*\
  !*** ./src/svg/Wind.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ 58168);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ 80045);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ 32982);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 96540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["fill"];


var Wind = function Wind(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "#2C2727" : _ref$fill,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    fill: "none"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    fill: fill,
    d: "M2.344 10.156a1.172 1.172 0 1 1 0-2.344h9.375a1.172 1.172 0 0 0 0-2.343 1.472 1.472 0 0 0-1.002.434 1.172 1.172 0 0 1-1.66-1.65 3.842 3.842 0 0 1 2.662-1.128 3.516 3.516 0 0 1 0 7.031H2.344Zm17.968-3.515a3.842 3.842 0 0 0-2.666 1.128 1.172 1.172 0 0 0 1.66 1.65 1.472 1.472 0 0 1 1.006-.435 1.172 1.172 0 1 1 0 2.344H3.125a1.172 1.172 0 0 0 0 2.344h17.188a3.516 3.516 0 0 0 0-7.031Zm-5.468 8.203H3.906a1.172 1.172 0 1 0 0 2.344h10.938a1.172 1.172 0 0 1 0 2.343 1.475 1.475 0 0 1-1.003-.434 1.17 1.17 0 0 0-1.697-.047 1.172 1.172 0 0 0 .037 1.697 3.842 3.842 0 0 0 2.663 1.128 3.516 3.516 0 0 0 0-7.031Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wind);

/***/ }),

/***/ 26056:
/*!**************************!*\
  !*** ./src/svg/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudCover: () => (/* reexport safe */ _CloudCover__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   DrewPoint: () => (/* reexport safe */ _DrewPoint__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   FeelsLike: () => (/* reexport safe */ _FeelsLike__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   Humidity: () => (/* reexport safe */ _Humidity__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Precipitation: () => (/* reexport safe */ _Precipitation__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Pressure: () => (/* reexport safe */ _Pressure__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   UVindex: () => (/* reexport safe */ _UVindex__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Wind: () => (/* reexport safe */ _Wind__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _CloudCover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloudCover */ 14750);
/* harmony import */ var _DrewPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrewPoint */ 9764);
/* harmony import */ var _Humidity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Humidity */ 97015);
/* harmony import */ var _Pressure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pressure */ 92869);
/* harmony import */ var _UVindex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UVindex */ 96281);
/* harmony import */ var _Wind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Wind */ 60340);
/* harmony import */ var _Precipitation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Precipitation */ 96119);
/* harmony import */ var _FeelsLike__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FeelsLike */ 83114);
//import and re-export all svg files









/***/ }),

/***/ 29338:
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCurrentLocation: () => (/* binding */ addCurrentLocation),
/* harmony export */   addLocation: () => (/* binding */ addLocation),
/* harmony export */   cashSlice: () => (/* binding */ cashSlice),
/* harmony export */   dataSlice: () => (/* binding */ dataSlice),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   locationSlice: () => (/* binding */ locationSlice),
/* harmony export */   pickLocation: () => (/* binding */ pickLocation),
/* harmony export */   preferencesSlice: () => (/* binding */ preferencesSlice),
/* harmony export */   removeLocation: () => (/* binding */ removeLocation),
/* harmony export */   selectSlide: () => (/* binding */ selectSlide),
/* harmony export */   setCash: () => (/* binding */ setCash),
/* harmony export */   setData: () => (/* binding */ setData),
/* harmony export */   setPreferences: () => (/* binding */ setPreferences),
/* harmony export */   setSelectedDay: () => (/* binding */ setSelectedDay),
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 89394);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 64467);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ 80115);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7899);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ 63534);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 17);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 5086);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ 10678);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ 58476);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 58379);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ 3101);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ 36012);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ 15852);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @reduxjs/toolkit */ 20038);













function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

var initialState = {
  data: {
    data: {},
    selectedDay: null,
    weatherMap: {},
    currentTemperature: null,
    currentTime: null,
    lon: null,
    lat: null
  },
  location: {
    selectedIndex: 0,
    current: {
      lon: null,
      lat: null,
      name: null
    },
    options: []
  },
  cash: {},
  preferences: {
    timeFormat: {
      selected: '24h',
      options: ['24h', '12h']
    },
    temperatureUnit: {
      selected: 'C',
      options: ['C', 'F']
    },
    precipitationUnit: {
      selected: 'mm',
      options: ['mm', 'inches']
    },
    windSpeed: {
      selected: 'm/s',
      options: ['m/s', 'km/s', 'mph', 'knots']
    },
    pressure: {
      selected: 'mm',
      options: ['inches', 'mm', 'mbar']
    },
    distance: {
      selected: 'km',
      options: ['km', 'miles']
    },
    theme: {
      selected: 'light',
      options: ['light', 'dark']
    }
  }
};

// Preferences Slice
var preferencesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__.createSlice)({
  name: 'preferences',
  initialState: initialState.preferences,
  reducers: {
    setPreferences: function setPreferences(state, action) {
      return _objectSpread(_objectSpread({}, state), action.payload);
    }
  }
});
var cashSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__.createSlice)({
  name: 'cash',
  initialState: initialState.preferences,
  reducers: {
    setCash: function setCash(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.payload.key, action.payload.data));
    }
  }
});
var locationSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__.createSlice)({
  name: 'location',
  initialState: initialState.location,
  reducers: {
    pickLocation: function pickLocation(state, action) {
      return _objectSpread(_objectSpread({}, state), action.payload);
    },
    addLocation: function addLocation(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        options: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.options), [action.payload])
      });
    },
    removeLocation: function removeLocation(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedIndex: 0,
        current: action.payload
      });
    },
    addCurrentLocation: function addCurrentLocation(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        current: action.payload
      });
    },
    selectSlide: function selectSlide(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedIndex: action.payload
      });
    }
  }
});
var setPreferences = preferencesSlice.actions.setPreferences;

// Data Slice

var dataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__.createSlice)({
  name: 'data',
  initialState: initialState.data,
  reducers: {
    setData: function setData(state, action) {
      return _objectSpread(_objectSpread({}, state), action.payload);
    },
    setSelectedDay: function setSelectedDay(state, action) {
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedDay: action.payload
      });
    }
  }
});
var _locationSlice$action = locationSlice.actions,
  pickLocation = _locationSlice$action.pickLocation,
  addLocation = _locationSlice$action.addLocation,
  removeLocation = _locationSlice$action.removeLocation,
  addCurrentLocation = _locationSlice$action.addCurrentLocation,
  selectSlide = _locationSlice$action.selectSlide;

var _dataSlice$actions = dataSlice.actions,
  setData = _dataSlice$actions.setData,
  setSelectedDay = _dataSlice$actions.setSelectedDay;

var setCash = cashSlice.actions.setCash;
// Combine Reducers

var rootReducer = {
  preferences: preferencesSlice.reducer,
  data: dataSlice.reducer,
  cash: cashSlice.reducer,
  location: locationSlice.reducer
};
var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__.configureStore)({
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      immutableCheck: {
        warnAfter: 128
      },
      serializableCheck: {
        warnAfter: 128
      }
    });
  },
  reducer: rootReducer
});

/***/ }),

/***/ 48590:
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dbzToRain: () => (/* binding */ dbzToRain),
/* harmony export */   firstLetterUppercase: () => (/* binding */ firstLetterUppercase),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   getTime: () => (/* binding */ getTime),
/* harmony export */   getTimeArray: () => (/* binding */ getTimeArray)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3453);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ 79389);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ 80115);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ 89560);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ 59581);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ 32982);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 87136);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ 58649);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ 14913);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);









var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var formatDate = function formatDate(milliseconds) {
  var date = new Date(milliseconds);
  var time = getTime(milliseconds);
  var dayOfTheWeek = DAYS[date.getDay()];
  var day = date.getDate();
  return ["".concat(day, " ").concat(dayOfTheWeek), "".concat(time)];
};
var getTime = function getTime(milliseconds) {
  var date = new Date(milliseconds);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  return "".concat(hours, ":").concat(minutes === 0 ? "00" : minutes);
};
var getTimeArray = function getTimeArray(size) {
  var milliseconds = Date.now();
  //round to the nearest 10 minutes
  milliseconds -= milliseconds % (1000 * 60 * 10);
  return new Array(size).fill(0).map(function (_, i) {
    var currentM = milliseconds + i * (1000 * 60 * 10);
    // const date = new Date(currentM);
    // get hours and minutes;
    return getTime(currentM);
  });
};
var firstLetterUppercase = function firstLetterUppercase(string) {
  // assume that the string might be in style of the camelCase
  var _string$split = string.split(/(?=[A-Z])/),
    _string$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_string$split, 2),
    first = _string$split2[0],
    last = _string$split2[1];
  // if the last exist, there are 2 words
  if (last) {
    return first.charAt(0).toUpperCase() + first.slice(1) + " " + last.toLowerCase();
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var dbzToRain = function dbzToRain(dbz) {
  return 0.036 * Math.pow(10, 0.0625 * dBZ);
};

/***/ }),

/***/ 4294:
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/MainPage.css ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9622:
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/SettingsPage.css ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 76660:
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Urbanist:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n.switch-btn {\n  @apply bg-bgray-300;\n}\n\n.switch-btn.active {\n  @apply bg-success-300;\n}\n\n.switch-btn span {\n  @apply translate-x-0;\n}\n\n.switch-btn.active span {\n  @apply translate-x-[23px];\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.secondFont {\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.slider-hours {\n  position: relative;\n  width: 15px;\n  color: transparent;\n  font-size: 12px;\n  display: flex;\n  text-align: center;\n}\n\n.slider-hours::before {\n  left: 0;\n  display: inline-block;\n  content: attr(data-hour);\n  z-index: 1;\n  color: black;\n  position: absolute;\n  width: 50px;\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  pointer-events: none;\n}\n\n.slider-days {\n  color: transparent;\n  position: relative;\n  width: 10px;\n  font-size: 12px;\n  display: flex;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.slider-days::before {\n  display: inline-block;\n  content: attr(data-day);\n  z-index: 1;\n  color: #888888;\n  position: absolute;\n  width: 50px;\n  left: 11px;\n  margin-left: -5px;\n  pointer-events: none;\n}\n\n.react-horizontal-scrolling-menu--wrapper {\n  width: 80%;\n  margin: 0 auto;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding: 10px 15px;\n  background-color: #fff;\n  margin-bottom: 30px;\n  height: 70px;\n}\n\n*::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  background-color: transparent;\n}\n\n.mantine-Slider-root {\n  width: 100%;\n}\n\n.mapboxgl-ctrl-bottom-left {\n  bottom: 40% !important;\n  width: 106% !important;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.mapboxgl-ctrl-logo {\n  transform: rotate(-90deg);\n}\n\n.mapboxgl-ctrl-bottom-right {\n  bottom: 55% !important;\n}\n\n.tint0 {\n  background: linear-gradient(360deg, #dfdfdf 0%, #9bea8f 100%);\n}\n\n.tint1 {\n  background: linear-gradient(360deg, #9bea8f 0%, #58ff42 100%);\n}\n\n.tint2 {\n  background: linear-gradient(360deg, #58ff42 0%, #47c278 100%);\n}\n\n.tint3 {\n  background: linear-gradient(360deg, #47c278 0%, #4793f9 100%);\n}\n\n.tint4 {\n  background: linear-gradient(360deg, #4793f9 0%, #0c59ff 100%);\n}\n\n.tint5 {\n  background: linear-gradient(360deg, #0c59ff 0%, #6153c1 100%);\n}\n\n.tint6 {\n  background: linear-gradient(360deg, #6153c1 0%, #ff93a3 100%);\n}\n\n.tint7 {\n  background: linear-gradient(360deg, #ff93a3 0%, #ff3f35 100%);\n}\n\n.tint8 {\n  background: linear-gradient(360deg, #ff3f35 0%, #c20511 100%);\n}\n\n.tint9 {\n  background: linear-gradient(360deg, #c20511 0%, #ffeb0a 100%);\n}\n\n.tint {\n  margin-bottom: -1px;\n}\n\n.mantine-UnstyledButton-root:active {\n  background-color: initial;\n}\n\nion-modal,\nion-modal ion-backdrop {\n  pointer-events: none;\n}\n\n.mapboxgl-canvas-container {\n  height: 100%;\n}\n\n/* .embla {\n  overflow: hidden;\n}\n.embla__container {\n  display: flex;\n}\n.embla__slide {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 100%;\n  min-width: 0;\n} */\n.embla__slide {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 100%;\n  min-width: 0;\n  font-size: 24px;\n}\n\n.embla {\n  max-width: 48rem;\n  margin: auto;\n  --slide-height: 19rem;\n  --slide-spacing: 1rem;\n  --slide-size: 100%;\n}\n\n.embla__viewport {\n  overflow: hidden;\n}\n\n.embla__container {\n  backface-visibility: hidden;\n  display: flex;\n  touch-action: pan-y;\n  margin-left: calc(var(--slide-spacing) * -1);\n}\n\n.embla__slide {\n  flex: 0 0 var(--slide-size);\n  min-width: 0;\n  padding-left: var(--slide-spacing);\n  text-align: center;\n}\n\n.embla__slide__number {\n  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);\n  border-radius: 1.8rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.MuiChartsAxis-line {\n  display: none;\n}\n\n.MuiChartsAxis-tick {\n  stroke: white !important;\n}\n\n.MuiChartsAxis-tickLabel {\n  stroke: white !important;\n}\n\n.MuiHighlightElement-root {\n  r: 10;\n  fill: #4cbeff !important;\n}\n\n.MuiChartsTooltip-mark {\n  background-color: #4cbeff !important;\n  border: none !important;\n}\n\n.MuiChartsTooltip-root {\n  background: #353535 !important;\n}\n\n.MuiTypography-root {\n  color: white;\n}\n\n.MuiChartsAxisHighlight-root {\n  stroke: white !important;\n}\n\n.MuiChartsLegend-mark {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,cAAA;AACA,oBAAA;AACA,mBAAA;AAEA;EACE,mBAAA;AADF;;AAGA;EACE,qBAAA;AAAF;;AAEA;EACE,oBAAA;AACF;;AACA;EACE,yBAAA;AAEF;;AACA;EACE,iCAAA;AAEF;;AAAA;EACE,2CAAA;AAGF;;AADA;EACE,aAAA;EACA,mBAAA;AAIF;;AAFA;EACE,aAAA;EACA,sBAAA;AAKF;;AAFA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;AAKF;;AAFA;EACE,OAAA;EACA,qBAAA;EACA,wBAAA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,MAAA;EACA,SAAA;EACA,iBAAA;EACA,oBAAA;AAKF;;AAHA;EACE,kBAAA;EACA,kBAAA;EACA,WAAA;EAEA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;AAKF;;AAFA;EACE,qBAAA;EACA,uBAAA;EACA,UAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,iBAAA;EACA,oBAAA;AAKF;;AAFA;EACE,UAAA;EACA,cAAA;EACA,wCAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;AAKF;;AAFA;EACE,QAAA;EACA,SAAA;EACA,6BAAA;AAKF;;AAHA;EACE,WAAA;AAMF;;AAHA;EACE,sBAAA;EACA,sBAAA;EACA,aAAA;EACA,yBAAA;AAMF;;AAJA;EACE,yBAAA;AAOF;;AALA;EACE,sBAAA;AAQF;;AALA;EACE,6DAAA;AAQF;;AANA;EACE,6DAAA;AASF;;AAPA;EACE,6DAAA;AAUF;;AAPA;EACE,6DAAA;AAUF;;AARA;EACE,6DAAA;AAWF;;AARA;EACE,6DAAA;AAWF;;AARA;EACE,6DAAA;AAWF;;AARA;EACE,6DAAA;AAWF;;AARA;EACE,6DAAA;AAWF;;AARA;EACE,6DAAA;AAWF;;AATA;EACE,mBAAA;AAYF;;AAVA;EACE,yBAAA;AAaF;;AAXA;;EAEE,oBAAA;AAcF;;AAZA;EACE,YAAA;AAeF;;AAZA;;;;;;;;;;;;;GAAA;AAeA;EACE,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,YAAA;EACA,eAAA;AAcF;;AAZA;EACE,gBAAA;EACA,YAAA;EACA,qBAAA;EACA,qBAAA;EACA,kBAAA;AAeF;;AAbA;EACE,gBAAA;AAgBF;;AAdA;EACE,2BAAA;EACA,aAAA;EACA,mBAAA;EACA,4CAAA;AAiBF;;AAfA;EACE,2BAAA;EACA,YAAA;EACA,kCAAA;EACA,kBAAA;AAkBF;;AAhBA;EACE,4DAAA;EACA,qBAAA;EAEA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAkBF;;AAfA;EACE,aAAA;AAkBF;;AAhBA;EACE,wBAAA;AAmBF;;AAjBA;EACE,wBAAA;AAoBF;;AAjBA;EACE,KAAA;EACA,wBAAA;AAoBF;;AAlBA;EACE,oCAAA;EACA,uBAAA;AAqBF;;AAnBA;EACE,8BAAA;AAsBF;;AApBA;EACE,YAAA;AAuBF;;AApBA;EACE,wBAAA;AAuBF;;AArBA;EACE,aAAA;AAwBF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Urbanist:wght@300;400;500;600;700&display=swap\");\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n.switch-btn {\n  @apply bg-bgray-300;\n}\n.switch-btn.active {\n  @apply bg-success-300;\n}\n.switch-btn span {\n  @apply translate-x-0;\n}\n.switch-btn.active span {\n  @apply translate-x-[23px];\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n}\n.secondFont {\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n.row {\n  display: flex;\n  flex-direction: row;\n}\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n.slider-hours {\n  position: relative;\n  width: 15px;\n  color: transparent;\n  font-size: 12px;\n  display: flex;\n  text-align: center;\n}\n\n.slider-hours::before {\n  left: 0;\n  display: inline-block;\n  content: attr(data-hour);\n  z-index: 1;\n  color: black;\n  position: absolute;\n  width: 50px;\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  pointer-events: none;\n}\n.slider-days {\n  color: transparent;\n  position: relative;\n  width: 10px;\n\n  font-size: 12px;\n  display: flex;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.slider-days::before {\n  display: inline-block;\n  content: attr(data-day);\n  z-index: 1;\n  color: #888888;\n  position: absolute;\n  width: 50px;\n  left: 11px;\n  margin-left: -5px;\n  pointer-events: none;\n}\n\n.react-horizontal-scrolling-menu--wrapper {\n  width: 80%;\n  margin: 0 auto;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding: 10px 15px;\n  background-color: #fff;\n  margin-bottom: 30px;\n  height: 70px;\n}\n\n*::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  background-color: transparent;\n}\n.mantine-Slider-root {\n  width: 100%;\n}\n\n.mapboxgl-ctrl-bottom-left {\n  bottom: 40% !important;\n  width: 106% !important;\n  display: flex;\n  justify-content: flex-end;\n}\n.mapboxgl-ctrl-logo {\n  transform: rotate(-90deg);\n}\n.mapboxgl-ctrl-bottom-right {\n  bottom: 55% !important;\n}\n\n.tint0 {\n  background: linear-gradient(360deg, #dfdfdfff 0%, #9bea8fff 100%);\n}\n.tint1 {\n  background: linear-gradient(360deg, #9bea8fff 0%, #58ff42ff 100%);\n}\n.tint2 {\n  background: linear-gradient(360deg, #58ff42ff 0%, #47c278ff 100%);\n}\n\n.tint3 {\n  background: linear-gradient(360deg, #47c278ff 0%, #4793f9ff 100%);\n}\n.tint4 {\n  background: linear-gradient(360deg, #4793f9ff 0%, #0c59ffff 100%);\n}\n\n.tint5 {\n  background: linear-gradient(360deg, #0c59ffff 0%, #6153c1ff 100%);\n}\n\n.tint6 {\n  background: linear-gradient(360deg, #6153c1ff 0%, #ff93a3ff 100%);\n}\n\n.tint7 {\n  background: linear-gradient(360deg, #ff93a3ff 0%, #ff3f35ff 100%);\n}\n\n.tint8 {\n  background: linear-gradient(360deg, #ff3f35ff 0%, #c20511ff 100%);\n}\n\n.tint9 {\n  background: linear-gradient(360deg, #c20511ff 0%, #ffeb0aff 100%);\n}\n.tint {\n  margin-bottom: -1px;\n}\n.mantine-UnstyledButton-root:active {\n  background-color: initial;\n}\nion-modal,\nion-modal ion-backdrop {\n  pointer-events: none;\n}\n.mapboxgl-canvas-container {\n  height: 100%;\n}\n\n/* .embla {\n  overflow: hidden;\n}\n.embla__container {\n  display: flex;\n}\n.embla__slide {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 100%;\n  min-width: 0;\n} */\n\n.embla__slide {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 100%;\n  min-width: 0;\n  font-size: 24px;\n}\n.embla {\n  max-width: 48rem;\n  margin: auto;\n  --slide-height: 19rem;\n  --slide-spacing: 1rem;\n  --slide-size: 100%;\n}\n.embla__viewport {\n  overflow: hidden;\n}\n.embla__container {\n  backface-visibility: hidden;\n  display: flex;\n  touch-action: pan-y;\n  margin-left: calc(var(--slide-spacing) * -1);\n}\n.embla__slide {\n  flex: 0 0 var(--slide-size);\n  min-width: 0;\n  padding-left: var(--slide-spacing);\n  text-align: center;\n}\n.embla__slide__number {\n  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);\n  border-radius: 1.8rem;\n\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.MuiChartsAxis-line {\n  display: none;\n}\n.MuiChartsAxis-tick {\n  stroke: white !important;\n}\n.MuiChartsAxis-tickLabel {\n  stroke: white !important;\n}\n\n.MuiHighlightElement-root {\n  r: 10;\n  fill: #4cbeff !important;\n}\n.MuiChartsTooltip-mark {\n  background-color: #4cbeff !important;\n  border: none !important;\n}\n.MuiChartsTooltip-root {\n  background: #353535 !important;\n}\n.MuiTypography-root {\n  color: white;\n}\n\n.MuiChartsAxisHighlight-root {\n  stroke: white !important;\n}\n.MuiChartsLegend-mark {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 40750:
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/postcss-loader/dist/cjs.js!./src/theme/variables.css ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Ionic Variables and Theming. For more info, please see:\nhttp://ionicframework.com/docs/theming/ */\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  /* body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66, 140, 255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255, 255, 255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80, 200, 255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255, 255, 255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106, 100, 255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47, 223, 117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0, 0, 0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255, 213, 52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0, 0, 0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255, 73, 97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255, 255, 255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244, 245, 248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0, 0, 0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152, 154, 162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0, 0, 0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34, 36, 40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255, 255, 255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  /* .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0, 0, 0;\n\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255, 255, 255;\n\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n\n    --ion-item-background: #000000;\n\n    --ion-card-background: #1c1c1d;\n  } */\n  /* .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }  */\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  /* .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18, 18, 18;\n\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255, 255, 255;\n\n    --ion-border-color: #222222;\n\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n\n    --ion-item-background: #1e1e1e;\n\n    --ion-toolbar-background: #1f1f1f;\n\n    --ion-tab-bar-background: #1f1f1f;\n\n    --ion-card-background: #1e1e1e;\n  } */\n}", "",{"version":3,"sources":["webpack://./src/theme/variables.css"],"names":[],"mappings":"AAAA;yCAAA;AAGA,0BAAA;AACA;EACE,cAAA;EACA,4BAAA;EACA,qCAAA;EACA,qCAAA;EACA,+CAAA;EACA,kCAAA;EACA,iCAAA;EAEA,gBAAA;EACA,8BAAA;EACA,uCAAA;EACA,uCAAA;EACA,iDAAA;EACA,oCAAA;EACA,mCAAA;EAEA,eAAA;EACA,6BAAA;EACA,qCAAA;EACA,sCAAA;EACA,gDAAA;EACA,mCAAA;EACA,kCAAA;EAEA,cAAA;EACA,4BAAA;EACA,qCAAA;EACA,qCAAA;EACA,+CAAA;EACA,kCAAA;EACA,iCAAA;EAEA,cAAA;EACA,4BAAA;EACA,oCAAA;EACA,qCAAA;EACA,yCAAA;EACA,kCAAA;EACA,iCAAA;EAEA,aAAA;EACA,2BAAA;EACA,mCAAA;EACA,oCAAA;EACA,8CAAA;EACA,iCAAA;EACA,gCAAA;EAEA,WAAA;EACA,yBAAA;EACA,gCAAA;EACA,kCAAA;EACA,4CAAA;EACA,+BAAA;EACA,8BAAA;EAEA,aAAA;EACA,2BAAA;EACA,qCAAA;EACA,oCAAA;EACA,8CAAA;EACA,iCAAA;EACA,gCAAA;EAEA,YAAA;EACA,0BAAA;EACA,oCAAA;EACA,mCAAA;EACA,uCAAA;EACA,gCAAA;EACA,+BAAA;AARF;;AAWA;EACE;;;IAAA;EAKA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAAA;EAsEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAAA;EAgCA;;;;MAAA;EAMA;;;IAAA;EAKA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAAA;AAuBF","sourcesContent":["/* Ionic Variables and Theming. For more info, please see:\nhttp://ionicframework.com/docs/theming/ */\n\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n\n  /* body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66, 140, 255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255, 255, 255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80, 200, 255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255, 255, 255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106, 100, 255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47, 223, 117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0, 0, 0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255, 213, 52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0, 0, 0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255, 73, 97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255, 255, 255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244, 245, 248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0, 0, 0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152, 154, 162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0, 0, 0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34, 36, 40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255, 255, 255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n\n  /* .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0, 0, 0;\n\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255, 255, 255;\n\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n\n    --ion-item-background: #000000;\n\n    --ion-card-background: #1c1c1d;\n  } */\n\n  /* .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }  */\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n\n  /* .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18, 18, 18;\n\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255, 255, 255;\n\n    --ion-border-color: #222222;\n\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n\n    --ion-item-background: #1e1e1e;\n\n    --ion-toolbar-background: #1f1f1f;\n\n    --ion-tab-bar-background: #1f1f1f;\n\n    --ion-card-background: #1e1e1e;\n  } */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 60483:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ionicons/node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 60483;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 91325:
/*!********************************!*\
  !*** ./src/pages/MainPage.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 85072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 97825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 77659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 55056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 10540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 41113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_MainPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/postcss-loader/dist/cjs.js!./MainPage.css */ 4294);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_MainPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_MainPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_MainPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_MainPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 3693:
/*!************************************!*\
  !*** ./src/pages/SettingsPage.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 85072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 97825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 77659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 55056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 10540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 41113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_SettingsPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/postcss-loader/dist/cjs.js!./SettingsPage.css */ 9622);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_SettingsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_SettingsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_SettingsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_SettingsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 74357:
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 85072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 97825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ 77659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 55056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 10540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 41113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/postcss-loader/dist/cjs.js!./style.css */ 76660);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 15187:
/*!*********************************!*\
  !*** ./src/theme/variables.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 85072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 97825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 77659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 55056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 10540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 41113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/postcss-loader/dist/cjs.js!./variables.css */ 40750);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_postcss_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 59098:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27 fill=%27%23fff%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27 fill=%27%23fff%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E";

/***/ }),

/***/ 78548:
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E";

/***/ }),

/***/ 96008:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ 41991:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ 72990:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27 display=%27none%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27 display=%27none%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ 70311:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ 55721:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23666%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23666%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E";

/***/ }),

/***/ 51340:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23999%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23999%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E";

/***/ }),

/***/ 13764:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23aaa%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23aaa%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E";

/***/ }),

/***/ 63200:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e54e33%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27 display=%27none%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e54e33%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27 display=%27none%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ 80020:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e58978%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e58978%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ 55454:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ 43825:
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 5565:
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E";

/***/ }),

/***/ 56686:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 22556:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 2912:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 90426:
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 13750:
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E";

/***/ }),

/***/ 63873:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 76827:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 36839:
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 20577:
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23999%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23999%27/%3E%3C/svg%3E";

/***/ }),

/***/ 72591:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 24262:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 70690:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 37324:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 87138:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%270.3%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%270.9%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%270.3%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%270.9%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ 87256:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%271%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%271%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%271%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%271%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ 17354:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%271%27 stroke=%27%23fff%27 stroke-width=%273%27 fill=%27%23fff%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%271%27 fill=%27%23000%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%271%27 stroke=%27%23fff%27 stroke-width=%273%27 fill=%27%23fff%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%271%27 fill=%27%23000%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(17186)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtDQUFrQyw2QkFBNkIsR0FBRywyQkFBMkIsa0JBQWtCLEdBQUcsT0FBTyxxRkFBcUYsV0FBVyxXQUFXLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0saUJBQWlCLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxLQUFLLFdB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QUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQThPO0FBQzlPO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbU5BQU87Ozs7QUFJd0w7QUFDaE4sT0FBTyxpRUFBZSxtTkFBTyxJQUFJLG1OQUFPLFVBQVUsbU5BQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBMlA7QUFDM1A7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1TkFBTzs7OztBQUlxTTtBQUM3TixPQUFPLGlFQUFlLHVOQUFPLElBQUksdU5BQU8sVUFBVSx1TkFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZXRncmFwaC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzLiokIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGlldGdyYXBoLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvY29tcG9uZW50cy9BY3Rpb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vZGlldGdyYXBoLy4vc3JjL2NvbXBvbmVudHMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9jb21wb25lbnRzL0NvbG9yTGVnZW5kLmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9jb21wb25lbnRzL0VtYmxhQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vZGlldGdyYXBoLy4vc3JjL2NvbXBvbmVudHMvRmxleC5qcyIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvY29tcG9uZW50cy9JY29uVGV4dC5qcyIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vZGlldGdyYXBoLy4vc3JjL2NvbXBvbmVudHMvTWFpbkluZm8uanMiLCJ3ZWJwYWNrOi8vZGlldGdyYXBoLy4vc3JjL2NvbXBvbmVudHMvTWFwLmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9jb21wb25lbnRzL011aUNoYXJ0LmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9jb21wb25lbnRzL1BhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9jb21wb25lbnRzL1NldHRpbmdzLmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9jb21wb25lbnRzL1NsaWRlci5qcyIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvY29tcG9uZW50cy9XZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvZ2xvYmFsLmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9ob29rcy91c2VHZW9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvaG9va3MvdXNlR2V0QWRkcmVzcy5qcyIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvaG9va3MvdXNlR2V0TGF0TG9uLmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9ob29rcy91c2VRdWVyeVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vZGlldGdyYXBoLy4vc3JjL3BhZ2VzL01haW5QYWdlLmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9wYWdlcy9TZXR0aW5nc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZGlldGdyYXBoLy4vc3JjL3N2Zy9DbG91ZENvdmVyLmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9zdmcvRHJld1BvaW50LmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9zdmcvRmVlbHNMaWtlLmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9zdmcvRmx5LmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9zdmcvSHVtaWRpdHkuanMiLCJ3ZWJwYWNrOi8vZGlldGdyYXBoLy4vc3JjL3N2Zy9QcmVjaXBpdGF0aW9uLmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9zdmcvUHJlc3N1cmUuanMiLCJ3ZWJwYWNrOi8vZGlldGdyYXBoLy4vc3JjL3N2Zy9VVmluZGV4LmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9zdmcvV2luZC5qcyIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvc3ZnL2luZGV4LmpzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy91dGlscy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZGlldGdyYXBoLy4vc3JjL3BhZ2VzL01haW5QYWdlLmNzcyIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvcGFnZXMvU2V0dGluZ3NQYWdlLmNzcyIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy90aGVtZS92YXJpYWJsZXMuY3NzIiwid2VicGFjazovL2RpZXRncmFwaC8uL25vZGVfbW9kdWxlcy9pb25pY29ucy9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcy4qJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9wYWdlcy9NYWluUGFnZS5jc3M/OTM4NCIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvcGFnZXMvU2V0dGluZ3NQYWdlLmNzcz9hMDFhIiwid2VicGFjazovL2RpZXRncmFwaC8uL3NyYy9zdHlsZS5jc3M/ZjUxMCIsIndlYnBhY2s6Ly9kaWV0Z3JhcGgvLi9zcmMvdGhlbWUvdmFyaWFibGVzLmNzcz85MzVlIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMzE5OTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQuanMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7IC8vIEltcG9ydCBQcm92aWRlclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL3V0aWxzL3N0b3JlJzsgLy8gSW1wb3J0IHlvdXIgUmVkdXggc3RvcmVcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2dsb2JhbC5qcyc7XG5pbXBvcnQgJ21hcGJveC1nbC9kaXN0L21hcGJveC1nbC5jc3MnO1xuXG5pbXBvcnQgbWFwYm94Z2wgZnJvbSAnIW1hcGJveC1nbCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLXdlYnBhY2stbG9hZGVyLXN5bnRheFxuXG5tYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52Lk1BUEJPWF9BQ0NFU1NfVE9LRU47XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxMYXlvdXQgLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbi8vcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcblxuLy8gaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbi8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbi8vICAgICAgIC5yZWdpc3RlcignL3N3LmpzJylcbi8vICAgICAgIC50aGVuKChyZWdpc3RyYXRpb24pID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1NXIHJlZ2lzdGVyZWQ6ICcsIHJlZ2lzdHJhdGlvbik7XG4vLyAgICAgICB9KVxuLy8gICAgICAgLmNhdGNoKChyZWdpc3RyYXRpb25FcnJvcikgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnU1cgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgcmVnaXN0cmF0aW9uRXJyb3IpO1xuLy8gICAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfVxuIiwiaW1wb3J0IHsgQWN0aW9uSWNvbiB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBkYXJrVGhlbWUgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbmV4cG9ydCBjb25zdCBBY3Rpb25CdXR0b24gPSBzdHlsZWQoQWN0aW9uSWNvbilgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMTVweDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya1RoZW1lLmNhcmR9O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xyXG4gIHN2ZyB7XHJcbiAgICBmaWxsOiAke2RhcmtUaGVtZS5hY3RpdmV9O1xyXG4gIH1cclxuICBzdmcgcGF0aCB7XHJcbiAgICBzdHJva2U6ICR7ZGFya1RoZW1lLmFjdGl2ZX07XHJcbiAgICBmaWxsOiAke2RhcmtUaGVtZS5hY3RpdmV9O1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtUaGVtZS5jYXJkfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgSW9uQnV0dG9uLFxyXG4gIElvbk1vZGFsLFxyXG4gIElvbkhlYWRlcixcclxuICBJb25Db250ZW50LFxyXG4gIElvblRvb2xiYXIsXHJcbiAgSW9uVGl0bGUsXHJcbiAgSW9uUGFnZSxcclxuICBJb25MaXN0LFxyXG4gIElvbkl0ZW0sXHJcbiAgSW9uTGFiZWwsXHJcbiAgSW9uQXZhdGFyLFxyXG4gIElvbkltZyxcclxuICBJb25CdXR0b25zLFxyXG4gIElvblNlYXJjaGJhcixcclxufSBmcm9tICdAaW9uaWMvcmVhY3QnO1xyXG5pbXBvcnQgeyBkYXJrVGhlbWUgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyB1c2VHZXRMYXRMb24gfSBmcm9tICcuLi9ob29rcy91c2VHZXRMYXRMb24nO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGFkZExvY2F0aW9uLCByZW1vdmVMb2NhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3N0b3JlJztcclxuaW1wb3J0IHsgQWN0aW9uSWNvbiB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uTW9vZEVtcHR5RmlsbGVkLCBJY29uVHJhc2hGaWxsZWQgfSBmcm9tICdAdGFibGVyL2ljb25zLXJlYWN0JztcclxuZXhwb3J0IGNvbnN0IEJvdHRvbURyYXdlciA9ICh7IHNob3cgfSkgPT4ge1xyXG4gIGNvbnN0IG1vZGFsID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG9wdGlvbnMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubG9jYXRpb24pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRvY3VtZW50KSByZXR1cm47XHJcbiAgICBjb25zdCBzZXRTdGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgc2V0VmFsdWUoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW9uSW5wdXQnLCBzZXRTdGF0ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW9uSW5wdXQnLCBzZXRTdGF0ZSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG1hdGNoZWRMb2NhdGlvbnMgPSB1c2VHZXRMYXRMb24odmFsdWUpO1xyXG4gIGNvbnNvbGUubG9nKG1hdGNoZWRMb2NhdGlvbnMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW9uTW9kYWxcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICAnLS1pb24tYmFja2dyb3VuZC1jb2xvcic6IGRhcmtUaGVtZS5zZWNvbmRhcnlCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgIH19XHJcbiAgICAgIHJlZj17bW9kYWx9XHJcbiAgICAgIGluaXRpYWxCcmVha3BvaW50PXswLjY1fVxyXG4gICAgICBpc09wZW49e3Nob3d9XHJcbiAgICA+XHJcbiAgICAgIHsnICd9XHJcbiAgICAgIDxJb25IZWFkZXI+XHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICA8SW9uVG9vbGJhciBzdHlsZT17eyBwb3NpdGlvbjogJ3N0aWNreScgfX0+XHJcbiAgICAgICAgICA8SW9uQnV0dG9ucyBzbG90PVwiZW5kXCI+XHJcbiAgICAgICAgICAgIDxJb25CdXR0b24gY29sb3I9XCJsaWdodFwiIG9uQ2xpY2s9eygpID0+IG1vZGFsLmN1cnJlbnQ/LmRpc21pc3MoKX0+XHJcbiAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgPC9Jb25CdXR0b24+XHJcbiAgICAgICAgICA8L0lvbkJ1dHRvbnM+XHJcbiAgICAgICAgPC9Jb25Ub29sYmFyPlxyXG4gICAgICAgIDxJb25TZWFyY2hiYXJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICctLWJhY2tncm91bmQnOiBkYXJrVGhlbWUuY2FyZCxcclxuICAgICAgICAgICAgJy0tY29sb3InOiBkYXJrVGhlbWUubWFpblRleHQsXHJcbiAgICAgICAgICAgICctLWljb24tY29sb3InOiBkYXJrVGhlbWUuYWN0aXZlLFxyXG4gICAgICAgICAgICAnLS1jbGVhci1idXR0b24tY29sb3InOiBkYXJrVGhlbWUuYWN0aXZlLFxyXG4gICAgICAgICAgICAnLS1ib3JkZXItcmFkaXVzJzogJzEwcHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICA+PC9Jb25TZWFyY2hiYXI+XHJcbiAgICAgIDwvSW9uSGVhZGVyPlxyXG4gICAgICA8SW9uQ29udGVudCBjbGFzc05hbWU9XCJpb24tcGFkZGluZ1wiPlxyXG4gICAgICAgIDx1bFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bWF0Y2hlZExvY2F0aW9ucy5tYXAoKGxvY2F0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUsIGFkbWluMSwgbmFtZSB9ID0gbG9jYXRpb247XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPElvbkl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAnLS1jb2xvcic6IGRhcmtUaGVtZS5tYWluVGV4dCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElvbkxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhZGRMb2NhdGlvbih7IGxhdDogbGF0aXR1ZGUsIGxvbjogbG9uZ2l0dWRlLCBuYW1lOiBgJHtuYW1lfSwgJHthZG1pbjF9YCB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmN1cnJlbnQ/LmRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGgyPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnthZG1pbjF9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Jb25MYWJlbD5cclxuICAgICAgICAgICAgICA8L0lvbkl0ZW0+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIHttYXRjaGVkTG9jYXRpb25zLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge29wdGlvbnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrVGhlbWUubWFpblRleHQsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFlvdXIgc2F2ZWQgbG9jYXRpb25zXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8SW9uTGlzdCBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgoeyBsb24sIGxhdCwgbmFtZSB9LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJb25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChyZW1vdmVMb2NhdGlvbihuYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmN1cnJlbnQ/LmRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnLS1jb2xvcic6IGRhcmtUaGVtZS5tYWluVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElvbkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW9uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFzaEZpbGxlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9BY3Rpb25JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvSW9uTGlzdD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczMDBweCcgfX0+PC9kaXY+XHJcbiAgICAgIDwvSW9uQ29udGVudD5cclxuICAgIDwvSW9uTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvdHRvbURyYXdlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIi4vQWN0aW9uQnV0dG9uXCI7XHJcbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xyXG5pbXBvcnQgeyBJY29uQ2FyZXRSaWdodCwgSWNvbkNhcmV0TGVmdCB9IGZyb20gXCJAdGFibGVyL2ljb25zLXJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBkYXJrVGhlbWUgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcIi4vRmxleFwiO1xyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgMDogXCIjZGZkZmRmZmZcIixcclxuICAxNTogXCIjOWJlYThmZmZcIixcclxuICAyMDogXCIjNThmZjQyZmZcIixcclxuICAyNTogXCIjNDdjMjc4ZmZcIixcclxuICAzMDogXCIjNDc5M2Y5ZmZcIixcclxuICAzNTogXCIjMGM1OWZmZmZcIixcclxuICA0MDogXCIjNjE1M2MxZmZcIixcclxuICA0NTogXCIjZmY5M2EzZmZcIixcclxuICA1MDogXCIjZmYzZjM1ZmZcIixcclxuICA1NTogXCIjYzIwNTExZmZcIixcclxuICA2MDogXCIjZmZlYjBhZmZcIixcclxufTtcclxuXHJcbmNvbnN0IENvbG9yTWV0ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb2xvckxlZ2VuZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya1RoZW1lLmNhcmR9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTAwcHg7XHJcbiAgbGVmdDogMTVweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG5gO1xyXG5jb25zdCBDb2xvck1ldGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sb3JNZXRlcldyYXBwZXI+XHJcbiAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoXywgaSkgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHRpbnQkezkgLSBpfSB0aW50YH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvQ29sb3JNZXRlcldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke2RhcmtUaGVtZS5tYWluVGV4dH07XHJcbmA7XHJcbmNvbnN0IFN1YlRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogJHtkYXJrVGhlbWUuc2Vjb25EYXJ5VGV4dH07XHJcbmA7XHJcblxyXG5jb25zdCB0ZXh0cyA9IFtcclxuICBbXCJMaWdodCByYWluXCIsIFwiMC4xIG1tL2hcIl0sXHJcbiAgW1wiTGlnaHQgcmFpblwiLCBcIjIuNSBtbS9oXCJdLFxyXG4gIFtcIk1vZGVyYXRlIHJhaW5cIiwgXCI3LjYgbW0vaFwiXSxcclxuICBbXCJIZWF2eSByYWluXCIsIFwiMTUuMCBtbS9oXCJdLFxyXG4gIFtcIkludGVuc2UgcmFpblwiLCBcIjMwLjAgbW0vaFwiXSxcclxuICBbXCJFeHRyZW1lIHJhaW5cIiwgXCI+MzAuMCBtbS9oXCJdLFxyXG5dO1xyXG5cclxuY29uc3QgQ29sb3JMZWdlbmRUZXh0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjRweCAyMHB4IDRweCAyMHB4XCIsXHJcbiAgICAgICAgdGV4dFdyYXA6IFwibm93cmFwXCIsXHJcbiAgICAgICAgZmxleFdyYXA6IFwibm93cmFwXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtbXCIjNThmZjQyXCIsIFwiI2ZmNWY1ZVwiLCBcIiM0ZjU0Y2ZcIiwgXCIjNDc5OGVjXCIsIFwiIzU4ZmQ0NFwiLCBcIiNjOWUyYzVcIl0ubWFwKFxyXG4gICAgICAgIChjb2xvciwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e3RleHRzW2ldWzBdfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxTdWJUZXh0Pnt0ZXh0c1tpXVsxXX08L1N1YlRleHQ+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgQ29sb3JMZWdlbmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sb3JMZWdlbmRXcmFwcGVyIHN0eWxlPXt7IHdpZHRoOiBzaG93ID8gXCIyMDBweFwiIDogXCI0MHB4XCIgfX0+XHJcbiAgICAgIDxDb2w+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2xvck1ldGVyIC8+XHJcbiAgICAgICAgICA8Q29sb3JMZWdlbmRUZXh0IC8+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPEFjdGlvbkljb25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbjogXCI2cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNob3coKHByZXYpID0+ICFwcmV2KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Nob3cgPyAoXHJcbiAgICAgICAgICAgIDxJY29uQ2FyZXRMZWZ0IGZpbGw9e2RhcmtUaGVtZS5hY3RpdmV9IHN0cm9rZT17ZGFya1RoZW1lLmFjdGl2ZX0gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxJY29uQ2FyZXRSaWdodCBmaWxsPXtkYXJrVGhlbWUuYWN0aXZlfSBzdHJva2U9e2RhcmtUaGVtZS5hY3RpdmV9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQWN0aW9uSWNvbj5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L0NvbG9yTGVnZW5kV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb2xvckxlZ2VuZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgdXNlRW1ibGFDYXJvdXNlbCBmcm9tICdlbWJsYS1jYXJvdXNlbC1yZWFjdCc7XG5pbXBvcnQgeyBzZWxlY3RTbGlkZSB9IGZyb20gJy4uL3V0aWxzL3N0b3JlJztcblxuY29uc3QgRW1ibGFDYXJvdXNlbCA9ICgpID0+IHtcbiAgY29uc3QgW2VtYmxhUmVmLCBlbWJsYUFwaV0gPSB1c2VFbWJsYUNhcm91c2VsKHsgbG9vcDogdHJ1ZSB9KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7XG4gICAgY3VycmVudDogeyBuYW1lLCBsYXQsIGxvbiB9LFxuICAgIHNlbGVjdGVkSW5kZXgsXG4gICAgb3B0aW9ucyxcbiAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS5sb2NhdGlvbjtcbiAgfSk7XG5cbiAgY29uc3QgbG9nU2xpZGVzSW5WaWV3ID0gKCkgPT4ge1xuICAgIGlmIChlbWJsYUFwaSkge1xuICAgICAgY29uc3Qgc2xpZGVzID0gZW1ibGFBcGkuc2xpZGVzSW5WaWV3KCk7XG4gICAgICBpZiAoc2xpZGVzLmxlbmd0aCA9PT0gMSAmJiBzbGlkZXNbMF0gIT09IHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgZGlzcGF0Y2goc2VsZWN0U2xpZGUoc2xpZGVzWzBdKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVtYmxhQXBpKSBlbWJsYUFwaS5vbignc2xpZGVzSW5WaWV3JywgbG9nU2xpZGVzSW5WaWV3KTtcbiAgfSwgW2VtYmxhQXBpLCBsb2dTbGlkZXNJblZpZXddKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJlbWJsYVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWJsYV9fdmlld3BvcnRcIiByZWY9e2VtYmxhUmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWJsYV9fY29udGFpbmVyXCI+XG4gICAgICAgICAge1tuYW1lLCAuLi5vcHRpb25zLm1hcCgoZSkgPT4gZS5uYW1lKV1cbiAgICAgICAgICAgIC5maWx0ZXIoKGUpID0+IGUpXG4gICAgICAgICAgICAubWFwKChuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1ibGFfX3NsaWRlXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmxhX19zbGlkZV9fbnVtYmVyXCI+e25hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWJsYUNhcm91c2VsO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29sID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZGFya1RoZW1lIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb25UZXh0ID0gKHsgY2hpbGRyZW4sIHRleHQsIG51bWJlciwgdW5pdHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnRleHR9Pnt0ZXh0fTwvc3Bhbj5cclxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLm51bWJlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5udW1iZXJ9PntudW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICZuYnNwO1xyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBkYXJrVGhlbWUuc2Vjb25kYXJ5VGV4dCB9fT57dW5pdHN9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBjb2xvcjogZGFya1RoZW1lLnNlY29uZGFyeVRleHQsXHJcbiAgfSxcclxuICB1bml0czoge1xyXG4gICAgY29sb3I6IGRhcmtUaGVtZS5zZWNvbmRhcnlUZXh0LFxyXG4gIH0sXHJcbiAgbnVtYmVyQ29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsXHJcbiAgfSxcclxuICBudW1iZXI6IHtcclxuICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgIGNvbG9yOiBkYXJrVGhlbWUubWFpblRleHQsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25UZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IElvbkFwcCwgSW9uUm91dGVyT3V0bGV0LCBzZXR1cElvbmljUmVhY3QgfSBmcm9tICdAaW9uaWMvcmVhY3QnO1xuaW1wb3J0IHsgSW9uUmVhY3RSb3V0ZXIgfSBmcm9tICdAaW9uaWMvcmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUdlb2xvY2F0aW9uIH0gZnJvbSAnLi4vaG9va3MvdXNlR2VvbG9jYXRpb24nO1xuaW1wb3J0IHsgdXNlUXVlcnlXZWF0aGVyLCBkZWZhdWx0UGFyYW1zIH0gZnJvbSAnLi4vaG9va3MvdXNlUXVlcnlXZWF0aGVyJztcbmltcG9ydCB7IHNldERhdGEsIGFkZEN1cnJlbnRMb2NhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3N0b3JlJztcbmltcG9ydCBNYWluUGFnZSBmcm9tICcuLi9wYWdlcy9NYWluUGFnZSc7XG5pbXBvcnQgU2V0dGluZ3NQYWdlIGZyb20gJy4uL3BhZ2VzL1NldHRpbmdzUGFnZSc7XG5pbXBvcnQgeyB1c2VHZXRBZGRyZXNzIH0gZnJvbSAnLi4vaG9va3MvdXNlR2V0QWRkcmVzcyc7XG4vKiBDb3JlIENTUyByZXF1aXJlZCBmb3IgSW9uaWMgY29tcG9uZW50cyB0byB3b3JrIHByb3Blcmx5ICovXG5pbXBvcnQgJ0Bpb25pYy9yZWFjdC9jc3MvY29yZS5jc3MnO1xuXG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xuaW1wb3J0ICdAaW9uaWMvcmVhY3QvY3NzL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICdAaW9uaWMvcmVhY3QvY3NzL3N0cnVjdHVyZS5jc3MnO1xuaW1wb3J0ICdAaW9uaWMvcmVhY3QvY3NzL3R5cG9ncmFwaHkuY3NzJztcblxuLyogT3B0aW9uYWwgQ1NTIHV0aWxzIHRoYXQgY2FuIGJlIGNvbW1lbnRlZCBvdXQgKi9cbmltcG9ydCAnQGlvbmljL3JlYWN0L2Nzcy9wYWRkaW5nLmNzcyc7XG5pbXBvcnQgJ0Bpb25pYy9yZWFjdC9jc3MvZmxvYXQtZWxlbWVudHMuY3NzJztcbmltcG9ydCAnQGlvbmljL3JlYWN0L2Nzcy90ZXh0LWFsaWdubWVudC5jc3MnO1xuaW1wb3J0ICdAaW9uaWMvcmVhY3QvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzJztcbmltcG9ydCAnQGlvbmljL3JlYWN0L2Nzcy9mbGV4LXV0aWxzLmNzcyc7XG5pbXBvcnQgJ0Bpb25pYy9yZWFjdC9jc3MvZGlzcGxheS5jc3MnO1xuXG4vKiBUaGVtZSB2YXJpYWJsZXMgKi9cbmltcG9ydCAnLi4vdGhlbWUvdmFyaWFibGVzLmNzcyc7XG5zZXR1cElvbmljUmVhY3QoKTtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIC8vIGNvbnN0IHsgc2VsZWN0ZWRJbmRleCwgb3B0aW9ucywgY3VycmVudCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sb2NhdGlvbik7XG4gIC8vIGNvbnN0IHsgbGF0OiBzYXZlZExhdCwgbG9uOiBzYXZlZExvbiB9ID0gc2VsZWN0ZWRJbmRleCA+IDAgPyBvcHRpb25zW3NlbGVjdGVkSW5kZXhdIDogY3VycmVudDtcbiAgY29uc3QgW2xhdCwgbG9uXSA9IHVzZUdlb2xvY2F0aW9uKCk7XG4gIGNvbnN0IGFkZHJlc3MgPSB1c2VHZXRBZGRyZXNzKHsgbG9uLCBsYXQgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWFkZHJlc3MpIHJldHVybjtcblxuICAgIGRpc3BhdGNoKGFkZEN1cnJlbnRMb2NhdGlvbih7IG5hbWU6IGFkZHJlc3MsIGxhdCwgbG9uIH0pKTtcbiAgfSwgW2FkZHJlc3NdKTtcblxuICB1c2VRdWVyeVdlYXRoZXIoKTtcblxuICAvLyBjb25zdCBhZGRyZXNzID0gdXNlR2V0QWRkcmVzcyhsb2NhdGlvbj8ubGF0aXR1ZGUsIGxvY2F0aW9uPy5sb25naXR1ZGUpO1xuXG4gIHJldHVybiAoXG4gICAgPElvbkFwcD5cbiAgICAgIDxJb25SZWFjdFJvdXRlcj5cbiAgICAgICAgPElvblJvdXRlck91dGxldD5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIj5cbiAgICAgICAgICAgIDxNYWluUGFnZSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxTZXR0aW5nc1BhZ2UgLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L0lvblJvdXRlck91dGxldD5cbiAgICAgIDwvSW9uUmVhY3RSb3V0ZXI+XG4gICAgPC9Jb25BcHA+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIFJlbW92ZSBSZWFjdCBOYXRpdmUgc3BlY2lmaWMgaW1wb3J0c1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlLCBnZXRUaW1lIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBkYXJrVGhlbWUgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCBFbWJsYUNhcm91c2VsIGZyb20gJy4vRW1ibGFDYXJvdXNlbCc7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vRmxleCc7XHJcbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tICdAbWFudGluZS9jb3JlJztcclxuaW1wb3J0IHsgSWNvbkNhcmV0TGVmdCwgSWNvbkNhcmV0UmlnaHQgfSBmcm9tICdAdGFibGVyL2ljb25zLXJlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluSW5mbyA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiB7IGN1cnJlbnRUZW1wZXJhdHVyZSwgY3VycmVudFRpbWUgfSxcclxuICAgIGxvY2F0aW9uOiB7IHNlbGVjdGVkSW5kZXgsIG9wdGlvbnMgfSxcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4geyBkYXRhOiBzdGF0ZS5kYXRhLCBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24gfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlciA9IGN1cnJlbnRUZW1wZXJhdHVyZTtcclxuICBjb25zdCBbZGF0ZSwgaG91cnNdID0gZm9ybWF0RGF0ZShjdXJyZW50VGltZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGNvbG9yOiBkYXJrVGhlbWUubWFpblRleHQsXHJcbiAgICAgICAgcGFkZGluZzogJzIwcHgnLFxyXG5cclxuICAgICAgICAvLyBtaW5IZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuOCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgbWFyZ2luOiAnNnB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IG9wdGlvbnMubGVuZ3RoICsgMSB9KS5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMnB4JyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMnB4JyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogJzAgM3B4JyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZGV4ID09PSBzZWxlY3RlZEluZGV4ID8gZGFya1RoZW1lLmFjdGl2ZSA6IGRhcmtUaGVtZS5tYWluVGV4dCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICBtYXJnaW46ICc2cHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QWN0aW9uSWNvbj5cclxuICAgICAgICAgIDxJY29uQ2FyZXRMZWZ0IC8+XHJcbiAgICAgICAgPC9BY3Rpb25JY29uPlxyXG4gICAgICAgIDxFbWJsYUNhcm91c2VsIC8+XHJcbiAgICAgICAgPEFjdGlvbkljb24+XHJcbiAgICAgICAgICA8SWNvbkNhcmV0UmlnaHQgLz5cclxuICAgICAgICA8L0FjdGlvbkljb24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy53ZWF0aGVyfT57d2VhdGhlcn3CsDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLndlYXRoZXJ9PkM8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZGF0ZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5kYXRlQ29udGFpbmVyLCAuLi5zdHlsZXMuZGF0ZSB9fT57ZGF0ZX08L2Rpdj5cclxuICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmRhdGV9PntgJHtnZXRUaW1lKERhdGUubm93KCkpfWB9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2xlZnQnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcblxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIHdlYXRoZXI6IHtcclxuICAgIGZvbnRTaXplOiAnIDQwcHgnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbiAgZGF0ZUNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgdGV4dFdyYXA6ICdub3dyYXAnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluSW5mbztcclxuIiwiaW1wb3J0IG1hcGJveGdsIGZyb20gXCJtYXBib3gtZ2xcIjsgLy8gb3IgXCJjb25zdCBtYXBib3hnbCA9IHJlcXVpcmUoJ21hcGJveC1nbCcpO1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9TbGlkZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEZseSBmcm9tIFwiLi4vc3ZnL0ZseVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IHsgQWN0aW9uQnV0dG9uIH0gZnJvbSBcIi4vQWN0aW9uQnV0dG9uXCI7XHJcbmltcG9ydCB7IGRhcmtUaGVtZSB9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0IHtcclxuICBJY29uTG9jYXRpb25GaWxsZWQsXHJcbiAgSWNvbkFkanVzdG1lbnRzLFxyXG4gIEljb25QbHVzLFxyXG59IGZyb20gXCJAdGFibGVyL2ljb25zLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQ29sb3JMZWdlbmQgZnJvbSBcIi4vQ29sb3JMZWdlbmRcIjtcclxuaW1wb3J0IEJvdHRvbURyYXdlciBmcm9tIFwiLi9Cb3R0b21EcmF3ZXJcIjtcclxuY29uc3QgbGF5ZXJzID0gW1xyXG4gIFwicHJlY2lwaXRhdGlvbl9uZXdcIixcclxuICBcImNsb3Vkc19uZXdcIixcclxuICBcInByZXNzdXJlX25ld1wiLFxyXG4gIFwid2luZF9uZXdcIixcclxuICBcInRlbXBfbmV3XCIsXHJcbl07XHJcblxyXG5jb25zdCBNYXBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA2NXZoO1xyXG4gIG1pbi1oZWlnaHQ6IDY1dmg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXAoeyBsYXQsIGxvbiwgem9vbSA9IDAsIHNldFNob3dJbnB1dCA9ICgpID0+IHt9IH0pIHtcclxuICBjb25zdCBjdXJyZW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sb2NhdGlvbi5jdXJyZW50KTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZExheWVyLCBzZXRTZWxlY3RlZExheWVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFttYXBzLCBzZXRNYXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDEwKTtcclxuICBjb25zdCBbcGxheSwgc2V0UGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NvdXJjZSwgYWRkU291cmNlXSA9IHVzZVN0YXRlKHtcclxuICAgIGNsb3Vkc19uZXc6IDAsXHJcbiAgICBwcmVjaXBpdGF0aW9uX25ldzogMCxcclxuICAgIHByZXNzdXJlX25ldzogMCxcclxuICAgIHdpbmRfbmV3OiAwLFxyXG4gICAgdGVtcF9uZXc6IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBtYXBDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbWFwID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWFwLmN1cnJlbnQpIHJldHVybjsgLy8gaW5pdGlhbGl6ZSBtYXAgb25seSBvbmNlXHJcbiAgICBtYXAuY3VycmVudCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG4gICAgICBjb250YWluZXI6IG1hcENvbnRhaW5lci5jdXJyZW50LFxyXG4gICAgICBzdHlsZTogXCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2RhcmstdjExXCIsXHJcbiAgICAgIGNlbnRlcjogW2xvbiwgbGF0XSxcclxuICAgICAgem9vbTogem9vbSxcclxuICAgICAgLy8gYXR0cmlidXRpb25Db250cm9sOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgLy8gbWFwLmN1cnJlbnQuYWRkQ29udHJvbChuZXcgbWFwYm94Z2wuQXR0cmlidXRpb25Db250cm9sKCksIFwidG9wLWxlZnRcIik7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIW1hcC5jdXJyZW50KSByZXR1cm47IC8vIHdhaXQgZm9yIG1hcCB0byBpbml0aWFsaXplXHJcbiAgICBtYXAuY3VycmVudC5vbihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICBtYXAuY3VycmVudC5yZXNpemUoKTtcclxuICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBgaHR0cHM6Ly90aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvJHtsYXllcnNbc2VsZWN0ZWRMYXllcl19L3t6fS97eH0ve3l9LnBuZz9hcHBpZD0ke3Byb2Nlc3MuZW52LkVYUE9fUFVCTElDX09QRU5XRUFUSEVSTUFQX0tFWX1gXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcclxuICAgIGlmICghbG9hZGVkIHx8IG1hcHMubGVuZ3RoID09PSAwIHx8IGZpbmlzaGVkKSByZXR1cm47XHJcbiAgICBmaW5pc2hlZCA9IHRydWU7XHJcbiAgICBtYXBzLmZvckVhY2goKHRpbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIG1hcC5jdXJyZW50LmFkZExheWVyKHtcclxuICAgICAgICBpZDogYHJhaW52aWV3ZXJfJHt0aWxlLnBhdGh9YCxcclxuICAgICAgICB0eXBlOiBcInJhc3RlclwiLFxyXG4gICAgICAgIHNvdXJjZToge1xyXG4gICAgICAgICAgdHlwZTogXCJyYXN0ZXJcIixcclxuICAgICAgICAgIHRpbGVzOiBbXHJcbiAgICAgICAgICAgIGBodHRwczovL3RpbGVjYWNoZS5yYWludmlld2VyLmNvbS92Mi9yYWRhci8ke3RpbGUucGF0aH0vNTEyL3t6fS97eH0ve3l9LzIvMV8xLnBuZ2AsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgdGlsZVNpemU6IDI1NixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxheW91dDogeyB2aXNpYmlsaXR5OiBpbmRleCA9PT0gMCA/IFwidmlzaWJsZVwiIDogXCJub25lXCIgfSxcclxuICAgICAgICBtaW56b29tOiAwLFxyXG4gICAgICAgIG1heHpvb206IDIyLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtsb2FkZWQsIG1hcHMubGVuZ3RoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWxvYWRlZCB8fCBtYXBzLmxlbmd0aCA9PT0gMCB8fCAhcGxheSkgcmV0dXJuO1xyXG4gICAgbGV0IGhhbmRsZSA9IG51bGw7XHJcbiAgICBsZXQgaTIgPSBudWxsO1xyXG4gICAgbWFwcy5mb3JFYWNoKChmcmFtZSwgaW5kZXgpID0+IHtcclxuICAgICAgbWFwLmN1cnJlbnQuc2V0TGF5b3V0UHJvcGVydHkoXHJcbiAgICAgICAgYHJhaW52aWV3ZXJfJHtmcmFtZS5wYXRofWAsXHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCIsXHJcbiAgICAgICAgaW5kZXggPT09IHRpbWUgfHwgaW5kZXggPT09IHRpbWUgLSAxID8gXCJ2aXNpYmxlXCIgOiBcIm5vbmVcIlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGltZSAtIDEgPj0gMCkge1xyXG4gICAgICBjb25zdCBmcmFtZSA9IG1hcHNbdGltZSAtIDFdO1xyXG4gICAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICAgIGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGkyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKG9wYWNpdHkgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChpMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtYXAuY3VycmVudC5zZXRQYWludFByb3BlcnR5KFxyXG4gICAgICAgICAgICBgcmFpbnZpZXdlcl8ke2ZyYW1lLnBhdGh9YCxcclxuICAgICAgICAgICAgXCJyYXN0ZXItb3BhY2l0eVwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgb3BhY2l0eSAtPSAwLjE7XHJcbiAgICAgICAgfSwgNTApO1xyXG4gICAgICB9LCA0MDApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGhhbmRsZSkgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICAgIGlmIChpMikgY2xlYXJJbnRlcnZhbChpMik7XHJcbiAgICB9O1xyXG4gIH0sIFtwbGF5LCBtYXBzLmxlbmd0aCwgbG9hZGVkLCB0aW1lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWxvYWRlZCB8fCBtYXBzLmxlbmd0aCA9PT0gMCB8fCAhcGxheSkgcmV0dXJuO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldFRpbWUoKGNvdW50KSA9PiAoY291bnQgKyAxKSAlIG1hcHMubGVuZ3RoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFttYXBzLmxlbmd0aCwgcGxheSwgbG9hZGVkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWxvYWRlZCB8fCBtYXBzLmxlbmd0aCA9PT0gMCB8fCAhcGxheSB8fCB0aW1lID4gMCkgcmV0dXJuO1xyXG4gICAgbWFwcy5mb3JFYWNoKChmcmFtZSwgaW5kZXgpID0+IHtcclxuICAgICAgbWFwLmN1cnJlbnQuc2V0TGF5b3V0UHJvcGVydHkoXHJcbiAgICAgICAgYHJhaW52aWV3ZXJfJHtmcmFtZS5wYXRofWAsXHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCIsXHJcbiAgICAgICAgaW5kZXggPT09IDAgPyBcInZpc2libGVcIiA6IFwibm9uZVwiXHJcbiAgICAgICk7XHJcbiAgICAgIG1hcC5jdXJyZW50LnNldFBhaW50UHJvcGVydHkoXHJcbiAgICAgICAgYHJhaW52aWV3ZXJfJHtmcmFtZS5wYXRofWAsXHJcbiAgICAgICAgXCJyYXN0ZXItb3BhY2l0eVwiLFxyXG4gICAgICAgIDFcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH0sIFttYXBzLmxlbmd0aCwgcGxheSwgbG9hZGVkLCB0aW1lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRXZWF0aGVyTWFwcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLnJhaW52aWV3ZXIuY29tL3B1YmxpYy93ZWF0aGVyLW1hcHMuanNvblwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIC8vIEFzc3VtaW5nIHlvdSB3YW50IHRoZSBsYXRlc3QgcmFkYXIgZGF0YVxyXG5cclxuICAgICAgc2V0TWFwcyhkYXRhLnJhZGFyLnBhc3QpO1xyXG4gICAgfTtcclxuICAgIGdldFdlYXRoZXJNYXBzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFsb2FkZWQpIHJldHVybjtcclxuICAgIG1hcC5jdXJyZW50LmZseVRvKHtcclxuICAgICAgLi4ue1xyXG4gICAgICAgIGNlbnRlcjogW2xvbiwgbGF0XSxcclxuICAgICAgICB6b29tOiA0LFxyXG4gICAgICB9LCAvLyBGbHkgdG8gdGhlIHNlbGVjdGVkIHRhcmdldFxyXG4gICAgICBkdXJhdGlvbjogNjAwMCwgLy8gQW5pbWF0ZSBvdmVyIDEyIHNlY29uZHNcclxuICAgICAgZXNzZW50aWFsOiB0cnVlLCAvLyBUaGlzIGFuaW1hdGlvbiBpcyBjb25zaWRlcmVkIGVzc2VudGlhbCB3aXRoXHJcbiAgICAgIC8vcmVzcGVjdCB0byBwcmVmZXJzLXJlZHVjZWQtbW90aW9uXHJcbiAgICB9KTtcclxuICB9LCBbbG9hZGVkLCBsYXQsIGxvbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFsb2FkZWQgfHwgbWFwcy5sZW5ndGggPT09IDAgfHwgIXBsYXkpIHJldHVybjtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRDb3VudCgoY291bnQpID0+IChjb3VudCArIDEpICUgbWFwcy5sZW5ndGgpO1xyXG4gICAgfSwgNTAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbbWFwcywgcGxheV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFsb2FkZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKDE5MCwgMTkwKTtcclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiBtYXAuY3VycmVudC5hZGRJbWFnZShcImNhdFwiLCBpbWcpO1xyXG4gICAgaW1nLnNyYyA9IFwiLi9pbWFnZXMvdGFyZ2V0LnN2Z1wiO1xyXG5cclxuICAgIC8vIEFkZCBhIGRhdGEgc291cmNlIGNvbnRhaW5pbmcgb25lIHBvaW50IGZlYXR1cmUuXHJcbiAgICBtYXAuY3VycmVudC5hZGRTb3VyY2UoXCJwb2ludFwiLCB7XHJcbiAgICAgIHR5cGU6IFwiZ2VvanNvblwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxyXG4gICAgICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgICAgICAgICBjb29yZGluYXRlczogW2xvbiwgbGF0XSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFkZCBhIGxheWVyIHRvIHVzZSB0aGUgaW1hZ2UgdG8gcmVwcmVzZW50IHRoZSBkYXRhLlxyXG4gICAgbWFwLmN1cnJlbnQuYWRkTGF5ZXIoe1xyXG4gICAgICBpZDogXCJwb2ludHNcIixcclxuICAgICAgdHlwZTogXCJzeW1ib2xcIixcclxuICAgICAgc291cmNlOiBcInBvaW50XCIsIC8vIHJlZmVyZW5jZSB0aGUgZGF0YSBzb3VyY2VcclxuICAgICAgbGF5b3V0OiB7XHJcbiAgICAgICAgXCJpY29uLWltYWdlXCI6IFwiY3VycmVudFwiLCAvLyByZWZlcmVuY2UgdGhlIGltYWdlXHJcbiAgICAgICAgXCJpY29uLXNpemVcIjogMC4yNSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0sIFtsb2FkZWRdKTtcclxuXHJcbiAgY29uc3QgZ29Ub1N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBsb24sIGxhdCB9ID0gY3VycmVudDtcclxuICAgIG1hcC5jdXJyZW50LmZseVRvKHtcclxuICAgICAgY2VudGVyOiBbbG9uLCBsYXRdLFxyXG4gICAgICB6b29tOiA0LFxyXG4gICAgICBkdXJhdGlvbjogNDAwMCwgLy8gQW5pbWF0ZSBvdmVyIDEyIHNlY29uZHNcclxuICAgICAgZXNzZW50aWFsOiB0cnVlLCAvLyBUaGlzIGFuaW1hdGlvbiBpcyBjb25zaWRlcmVkIGVzc2VudGlhbCB3aXRoXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnID0gKHZhbCkgPT4ge1xyXG4gICAgc2V0VGltZSh2YWwpO1xyXG4gICAgc2V0UGxheShmYWxzZSk7XHJcblxyXG4gICAgbWFwcy5mb3JFYWNoKChmcmFtZSwgaW5kZXgpID0+IHtcclxuICAgICAgbWFwLmN1cnJlbnQuc2V0TGF5b3V0UHJvcGVydHkoXHJcbiAgICAgICAgYHJhaW52aWV3ZXJfJHtmcmFtZS5wYXRofWAsXHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCIsXHJcbiAgICAgICAgdGltZSA9PT0gaW5kZXggPyBcInZpc2libGVcIiA6IFwibm9uZVwiXHJcbiAgICAgICk7XHJcbiAgICAgIG1hcC5jdXJyZW50LnNldFBhaW50UHJvcGVydHkoXHJcbiAgICAgICAgYHJhaW52aWV3ZXJfJHtmcmFtZS5wYXRofWAsXHJcbiAgICAgICAgXCJyYXN0ZXItb3BhY2l0eVwiLFxyXG4gICAgICAgIDFcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIC8vIGhvb2sgdG8gaWYgc2Nyb2xsZWRcclxuICAvLyBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gIC8vICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAwKSB7XHJcbiAgLy8gICAgICAgc2V0U2Nyb2xsZWQodHJ1ZSk7XHJcbiAgLy8gICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgc2V0U2Nyb2xsZWQoZmFsc2UpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG4gIC8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAvLyAgIH07XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1hcFdyYXBwZXI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e21hcENvbnRhaW5lcn1cclxuICAgICAgICBjbGFzc05hbWU9XCJtYXAtY29udGFpbmVyXCJcclxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTbGlkZXJcclxuICAgICAgICB0aW1lPXt0aW1lfVxyXG4gICAgICAgIG92ZXJsYXlzPXttYXBzfVxyXG4gICAgICAgIHBsYXk9e3BsYXl9XHJcbiAgICAgICAgc2xpZGVyQ2FsbGJhY2s9e2hhbmRsZURyYWd9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0UGxheSghcGxheSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPEFjdGlvbkJ1dHRvbiBvbkNsaWNrPXtnb1RvU3RhcnR9PlxyXG4gICAgICAgIDxJY29uTG9jYXRpb25GaWxsZWQgc2l6ZT17MjB9IHN0cm9rZT17ZGFya1RoZW1lLmFjdGl2ZX0gLz5cclxuICAgICAgPC9BY3Rpb25CdXR0b24+XHJcblxyXG4gICAgICA8QWN0aW9uQnV0dG9uXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBoaXN0b3J5LnB1c2goXCIvc2V0dGluZ3NcIik7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBzdHJva2U9e2RhcmtUaGVtZS5hY3RpdmV9XHJcbiAgICAgID5cclxuICAgICAgICA8SWNvbkFkanVzdG1lbnRzIC8+XHJcbiAgICAgIDwvQWN0aW9uQnV0dG9uPlxyXG5cclxuICAgICAgPEFjdGlvbkJ1dHRvblxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0b3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgbGVmdDogXCIgMTVweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2hvd0lucHV0KHRydWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgc3Ryb2tlPXtkYXJrVGhlbWUuYWN0aXZlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEljb25QbHVzIC8+XHJcbiAgICAgIDwvQWN0aW9uQnV0dG9uPlxyXG4gICAgICA8Q29sb3JMZWdlbmQgLz5cclxuICAgIDwvTWFwV3JhcHBlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluZUNoYXJ0IH0gZnJvbSBcIkBtdWkveC1jaGFydHMvTGluZUNoYXJ0XCI7XHJcbmltcG9ydCB7IGRhcmtUaGVtZSB9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgZ2V0VGltZSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5leHBvcnQgY29uc3QgTXVpQ2hhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZGF0YSk7XHJcbiAgY29uc3QgeyBob3VybHkgfSA9IGRhdGE/LmRhdGEgfHwge307XHJcbiAgY29uc3QgeyB0ZW1wZXJhdHVyZV8ybSA9IFtdLCB0aW1lID0gW10gfSA9IGhvdXJseSB8fCB7fTtcclxuXHJcbiAgLy8gZmlsdGVyIGhpc3RvcmljIGRhdGEgYW5kIHNob3cgb25seSBwcmVzZW50IGFuZCBmdXR1cmUgdXAgdG8gNDggaG91cnNcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBjb25zdCBmaWx0ZXJlZFRpbWUgPSB0aW1lXHJcbiAgICAubWFwKCh0KSA9PiBuZXcgRGF0ZSh0KSlcclxuICAgIC5maWx0ZXIoKHQpID0+IHQgPiBub3cgJiYgdCA8IG5vdyArIDI0ICogNjAgKiA2MCAqIDEwMDApXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG5cclxuICAvL3NsaWNlIHRoZSB0ZW1wZXJhdHVyZSBkYXRhIHRvIG1hdGNoIHRoZSBmaWx0ZXJlZCB0aW1lXHJcbiAgY29uc3QgZmlsdGVyZWRUZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlXzJtLnNsaWNlKDAsIGZpbHRlcmVkVGltZS5sZW5ndGgpO1xyXG4gIGNvbnNvbGUubG9nKGZpbHRlcmVkVGltZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGhlaWdodDogYDEwMCVgLFxyXG4gICAgICAgIHdpZHRoOiBgMTAwJWAsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICB4QXhpcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJUaW1lXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGZpbHRlcmVkVGltZSxcclxuICAgICAgICAgICAgc2NhbGVUeXBlOiBcInRpbWVcIixcclxuICAgICAgICAgICAgdmFsdWVGb3JtYXR0ZXI6IChkYXRlKSA9PiBnZXRUaW1lKGRhdGUuZ2V0VGltZSgpKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgICBzZXJpZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc2hvd01hcms6ICh7IGluZGV4IH0pID0+IGluZGV4ICUgNCA9PT0gMCxcclxuICAgICAgICAgICAgZGF0YTogZmlsdGVyZWRUZW1wZXJhdHVyZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11aUNoYXJ0O1xyXG5cclxuLy8geEF4aXM9e1t7IGRhdGE6IFsxLCAyLCAzLCA1LCA4LCAxMF0gfV19XHJcbi8vICAgICBzZXJpZXM9e1tcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGRhdGE6IFsyLCA1LjUsIDIsIDguNSwgMS41LCA1XSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF19XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5leHBvcnQgY29uc3QgUGFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiAjMWYxZjFmO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xyXG5pbXBvcnQgeyBmaXJzdExldHRlclVwcGVyY2FzZSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBzZXRQcmVmZXJlbmNlcyB9IGZyb20gXCIuLi91dGlscy9zdG9yZVwiO1xyXG5pbXBvcnQgeyBkYXJrVGhlbWUgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7IC8vIEFzc3VtaW5nIHlvdSBoYXZlIGEgR2xvYmFsU3R5bGVzIG1vZHVsZVxyXG5cclxuY29uc3QgQ2xpY2tBYmxlID0gKHsgdGV4dCwgaGFuZGxlQ2xpY2ssIGFjdGl2ZSwgbGFzdCwgZmlyc3QgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgLi4uKGFjdGl2ZSA9PT0gdGV4dFxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXJrVGhlbWUuYWN0aXZlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhcmtUaGVtZS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICAuLi4oZmlyc3RcclxuICAgICAgICAgID8geyBib3JkZXJUb3BMZWZ0UmFkaXVzOiAxMCwgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogMTAgfVxyXG4gICAgICAgICAgOiB7fSksXHJcbiAgICAgICAgLi4uKGxhc3RcclxuICAgICAgICAgID8geyBib3JkZXJUb3BSaWdodFJhZGl1czogMTAsIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAxMCB9XHJcbiAgICAgICAgICA6IHt9KSxcclxuICAgICAgfX1cclxuICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2sodGV4dCl9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIixcclxuICAgICAgICAgIC4uLihhY3RpdmUgPT09IHRleHRcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya1RoZW1lLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtUaGVtZS5zZWNvbkRhcnlUZXh0LFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0YWNrZWRTZXR0aW5ncyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLnByZWZlcmVuY2VzfT5cclxuICAgICAge09iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWQsIG9wdGlvbnMgfSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZXMucHJlZmVyZW5jZU5hbWV9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEzLFxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGFya1RoZW1lLnNlY29uZGFyeUJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMSxcclxuICAgICAgICAgICAgICAgIC4uLihpbmRleCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IGRhcmtUaGVtZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogZGFya1RoZW1lLmJvcmRlclJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDoge30pLFxyXG4gICAgICAgICAgICAgICAgLi4uKGluZGV4ID09PSBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogZGFya1RoZW1lLmJvcmRlclJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBkYXJrVGhlbWUuYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgOiB7fSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT57Zmlyc3RMZXR0ZXJVcHBlcmNhc2Uoa2V5KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDbGlja0FibGVcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZWZlcmVuY2VzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBba2V5XToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogb3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICBmaXJzdD17aW5kZXggPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdD17aW5kZXggPT09IG9wdGlvbnMubGVuZ3RoIC0gMX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzKHsgbmF2aWdhdGlvbiB9KSB7XHJcbiAgY29uc3QgcHJlZmVyZW5jZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByZWZlcmVuY2VzKTtcclxuICBjb25zdCB7IHRoZW1lOiB1aVRoZW1lLCAuLi5yZXN0IH0gPSBwcmVmZXJlbmNlcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLnNjcm9sbFZpZXd9PlxyXG4gICAgICA8aDFcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgbWFyZ2luVG9wOiAyMCxcclxuICAgICAgICAgIGNvbG9yOiBkYXJrVGhlbWUuc2Vjb25kYXJ5VGV4dCxcclxuICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXHJcbiAgICAgICAgICBmb250RmFtaWx5OiBcIlJvYm90by1Cb2xkXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFBSRUZFUkVOQ0VTXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxTdGFja2VkU2V0dGluZ3MgZGF0YT17eyAuLi5yZXN0IH19IC8+XHJcbiAgICAgIDxoMVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gICAgICAgICAgY29sb3I6IGRhcmtUaGVtZS5zZWNvbmRhcnlUZXh0LFxyXG4gICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvLUJvbGRcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgQVBQRUFSQU5DRVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8U3RhY2tlZFNldHRpbmdzIGRhdGE9e3sgdGhlbWU6IHVpVGhlbWUgfX0gLz5cclxuICAgICAgey8qIHNlcnZlcyBhcyBwYWRkaW5nICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMTAwIH19PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNjcm9sbFZpZXc6IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IGRhcmtUaGVtZS5zZWNvbmRhcnlCYWNrZ3JvdW5kQ29sb3IsXHJcblxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuXHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gIH0sXHJcbiAgcHJlZmVyZW5jZXM6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICB9LFxyXG4gIHByZWZlcmVuY2VOYW1lOiB7fSxcclxuICBoZWFkZXI6IHtcclxuICAgIGNvbG9yOiBkYXJrVGhlbWUubWFpblRleHQsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNsaWRlciBhcyBNYW5TbGlkZXIsIEFjdGlvbkljb24gfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IHtcclxuICBJY29uUGxheWVyUGF1c2VGaWxsZWQsXHJcbiAgSWNvblBsYXllclBsYXlGaWxsZWQsXHJcbn0gZnJvbSBcIkB0YWJsZXIvaWNvbnMtcmVhY3RcIjtcclxuaW1wb3J0IHsgZGFya1RoZW1lIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBnZXRUaW1lLCBnZXRUaW1lQXJyYXkgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrVGhlbWUuc2Vjb25kYXJ5QmFja2dyb3VuZENvbG9yfTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8qIHBhZGRpbmc6IDEycHg7ICovXHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAubWFudGluZS1TbGlkZXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrVGhlbWUuYWN0aXZlfTtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICR7ZGFya1RoZW1lLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLm1hbnRpbmUtU2xpZGVyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya1RoZW1lLnNlY29uZGFyeUJhY2tncm91bmRDb2xvcn07XHJcbiAgfVxyXG4gIC5tYW50aW5lLVNsaWRlci1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrVGhlbWUuYWN0aXZlfTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAubWFudGluZS1tMGcxOTI6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtUaGVtZS5zZWNvbmRhcnlCYWNrZ3JvdW5kQ29sb3J9O1xyXG4gIH1cclxuICAucGxheS1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6ICR7ZGFya1RoZW1lLmFjdGl2ZX07XHJcbiAgfVxyXG4gIC5tYW50aW5lLVNsaWRlci1yb290IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTbGlkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNjRweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya1RoZW1lLmNhcmR9O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDZweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZXIgPSAoe1xyXG4gIG92ZXJsYXlzLFxyXG4gIHBsYXkgPSBmYWxzZSxcclxuICB0aW1lLFxyXG4gIHNsaWRlckNhbGxiYWNrLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCB0aW1lQXJyYXkgPSBnZXRUaW1lQXJyYXkob3ZlcmxheXMubGVuZ3RoKTtcclxuICBjb25zdCBtYXJrcyA9IHRpbWVBcnJheS5tYXAoKHRpbWUsIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4geyB2YWx1ZTogaW5kZXggKyAxLCBsYWJlbDogdGltZSB9O1xyXG4gIH0pO1xyXG4gIGNvbnN0IG1hcmtzTWFwID0gdGltZUFycmF5LnJlZHVjZSgoYWNjLCB0aW1lLCBpbmRleCkgPT4ge1xyXG4gICAgYWNjW2luZGV4ICsgMV0gPSB0aW1lO1xyXG4gICAgcmV0dXJuIGFjYztcclxuICB9LCB7fSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTbGlkZXJDb250YWluZXI+XHJcbiAgICAgIDxTbGlkZXJXcmFwcGVyPlxyXG4gICAgICAgIDxNYW5TbGlkZXJcclxuICAgICAgICAgIHRodW1iU2l6ZT17MjB9XHJcbiAgICAgICAgICBsYWJlbD17KHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwsIG1hcmtzTWFwW3ZhbF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbWFya3NNYXBbdmFsXTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgbWF4PXtvdmVybGF5cy5sZW5ndGh9XHJcbiAgICAgICAgICBsYWJlbEFsd2F5c09uXHJcbiAgICAgICAgICB2YWx1ZT17dGltZX1cclxuICAgICAgICAgIHN0eWxlcz17e1xyXG4gICAgICAgICAgICBtYXJrTGFiZWw6IHsgZGlzcGxheTogXCJub25lXCIgfSxcclxuICAgICAgICAgICAgdHJhY2s6IHtcclxuICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogZGFya1RoZW1lLnNlY29uZGFyeUJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICBib3JkZXI6IGRhcmtUaGVtZS5zZWNvbmRhcnlCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NsaWRlckNhbGxiYWNrfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgeyFwbGF5ID8gKFxyXG4gICAgICAgICAgICA8SWNvblBsYXllclBsYXlGaWxsZWQgY2xhc3NOYW1lPVwicGxheS1pY29uc1wiIHNpemU9ezE2fSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEljb25QbGF5ZXJQYXVzZUZpbGxlZCBjbGFzc05hbWU9XCJwbGF5LWljb25zXCIgc2l6ZT17MTZ9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1NsaWRlcldyYXBwZXI+XHJcbiAgICA8L1NsaWRlckNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgSHVtaWRpdHksXHJcbiAgUHJlY2lwaXRhdGlvbixcclxuICBQcmVzc3VyZSxcclxuICBDbG91ZENvdmVyLFxyXG4gIEZlZWxzTGlrZSxcclxuICBEcmV3UG9pbnQsXHJcbiAgV2luZCxcclxuICBVVmluZGV4LFxyXG59IGZyb20gXCIuLi9zdmcvaW5kZXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCB7IEljb25UZXh0IH0gZnJvbSBcIi4vSWNvblRleHRcIjtcclxuXHJcbmltcG9ydCB7IGRhcmtUaGVtZSB9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBnYXA6IDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgV2VhdGhlckRhdGEgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzZWxlY3RlZERheSwgd2VhdGhlck1hcCwgY3VycmVudFRpbWUgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5kYXRhXHJcbiAgKTtcclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMod2VhdGhlck1hcCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gIC8vIGdldCBmaXJzdCBrZXkgdGhhdCBpcyBvdmVyIGN1cnJlbnQgdGltZVxyXG4gIGNvbnN0IGRhdGUgPSBrZXlzLmZpbmQoKGspID0+IGsgPiBjdXJyZW50VGltZSk7XHJcbiAgY29uc3QgZGF0YSA9IHdlYXRoZXJNYXBbZGF0ZV07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtkYXRhICYmIChcclxuICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgIDxJY29uVGV4dFxyXG4gICAgICAgICAgICB0ZXh0PXtcIkZlZWxzIGxpa2VcIn1cclxuICAgICAgICAgICAgbnVtYmVyPXtgJHtkYXRhW1wiYXBwYXJlbnRfdGVtcGVyYXR1cmVcIl19wrBgfVxyXG4gICAgICAgICAgICB1bml0cz17XCJDXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGZWVsc0xpa2UgZmlsbD17ZGFya1RoZW1lLm1haW5UZXh0fSAvPlxyXG4gICAgICAgICAgPC9JY29uVGV4dD5cclxuICAgICAgICAgIDxJY29uVGV4dFxyXG4gICAgICAgICAgICB0ZXh0PXtcIlByZWNpcGl0YXRpb25cIn1cclxuICAgICAgICAgICAgbnVtYmVyPXtgJHtkYXRhW1wicHJlY2lwaXRhdGlvblwiXX1gfVxyXG4gICAgICAgICAgICB1bml0cz17XCJoXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQcmVjaXBpdGF0aW9uIGZpbGw9e2RhcmtUaGVtZS5tYWluVGV4dH0gLz5cclxuICAgICAgICAgIDwvSWNvblRleHQ+XHJcbiAgICAgICAgICA8SWNvblRleHRcclxuICAgICAgICAgICAgdGV4dD17XCJDbG91ZCBjb3ZlclwifVxyXG4gICAgICAgICAgICBudW1iZXI9e2Ake2RhdGFbXCJjbG91ZF9jb3ZlclwiXX1gfVxyXG4gICAgICAgICAgICB1bml0cz17XCIlXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDbG91ZENvdmVyIGZpbGw9e2RhcmtUaGVtZS5tYWluVGV4dH0gLz5cclxuICAgICAgICAgIDwvSWNvblRleHQ+XHJcblxyXG4gICAgICAgICAgPEljb25UZXh0XHJcbiAgICAgICAgICAgIHRleHQ9e1wiV2luZFwifVxyXG4gICAgICAgICAgICBudW1iZXI9e2Ake2RhdGFbXCJ3aW5kX3NwZWVkXzEwbVwiXX1gfVxyXG4gICAgICAgICAgICB1bml0cz17XCJrbS9oXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxXaW5kIGZpbGw9e2RhcmtUaGVtZS5tYWluVGV4dH0gLz5cclxuICAgICAgICAgIDwvSWNvblRleHQ+XHJcbiAgICAgICAgICA8SWNvblRleHRcclxuICAgICAgICAgICAgdGV4dD17XCJQcmVzc3VyZVwifVxyXG4gICAgICAgICAgICBudW1iZXI9e2Ake2RhdGFbXCJzdXJmYWNlX3ByZXNzdXJlXCJdfWB9XHJcbiAgICAgICAgICAgIHVuaXRzPXtcIm1CYXJcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFByZXNzdXJlIGZpbGw9e2RhcmtUaGVtZS5tYWluVGV4dH0gLz5cclxuICAgICAgICAgIDwvSWNvblRleHQ+XHJcbiAgICAgICAgICA8SWNvblRleHRcclxuICAgICAgICAgICAgdGV4dD17XCJIdW1pZGl0eVwifVxyXG4gICAgICAgICAgICBudW1iZXI9e2Ake2RhdGFbXCJyZWxhdGl2ZV9odW1pZGl0eV8ybVwiXX1gfVxyXG4gICAgICAgICAgICB1bml0cz17XCIlXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxIdW1pZGl0eSBmaWxsPXtkYXJrVGhlbWUubWFpblRleHR9IC8+XHJcbiAgICAgICAgICA8L0ljb25UZXh0PlxyXG5cclxuICAgICAgICAgIDxJY29uVGV4dFxyXG4gICAgICAgICAgICB0ZXh0PXtcIkRldyBwb2ludFwifVxyXG4gICAgICAgICAgICBudW1iZXI9e2Ake2RhdGFbXCJkZXdfcG9pbnRfMm1cIl19wrBgfVxyXG4gICAgICAgICAgICB1bml0cz17XCJDXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxEcmV3UG9pbnQgZmlsbD17ZGFya1RoZW1lLm1haW5UZXh0fSAvPlxyXG4gICAgICAgICAgPC9JY29uVGV4dD5cclxuICAgICAgICAgIDxJY29uVGV4dFxyXG4gICAgICAgICAgICB0ZXh0PXtcIlVWIGluZGV4XCJ9XHJcbiAgICAgICAgICAgIG51bWJlcj17YCR7ZGF0YVtcInV2X2luZGV4XCJdfWB9XHJcbiAgICAgICAgICAgIHVuaXRzPXtcIi8xMVwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VVZpbmRleCBmaWxsPXtkYXJrVGhlbWUubWFpblRleHR9IC8+XHJcbiAgICAgICAgICA8L0ljb25UZXh0PlxyXG4gICAgICAgICAgPEljb25UZXh0IHRleHQ9e1wiVVYgaW5kZXhcIn0gbnVtYmVyPXs0fSB1bml0cz17XCIvMTFcIn0+XHJcbiAgICAgICAgICAgIDxVVmluZGV4IGZpbGw9e2RhcmtUaGVtZS5tYWluVGV4dH0gLz5cclxuICAgICAgICAgIDwvSWNvblRleHQ+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJsZWZ0XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgcm93OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJEYXRhO1xyXG4iLCJleHBvcnQgY29uc3QgbGlnaHRUaGVtZSA9IHtcclxuICBzZWNvbmRhcnlCYWNrZ3JvdW5kQ29sb3I6IFwiI0YzRjZGQlwiLFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjRkVGRUZFXCIsXHJcbiAgY2FyZDogXCIjRjNGNkZCXCIsXHJcbiAgYWN0aXZlOiBcIiM3MzY0Q0VcIixcclxuICBtYWluVGV4dDogXCIjMkMyNzI3XCIsXHJcbiAgc2Vjb25EYXJ5VGV4dDogXCIjODg4ODg4XCIsXHJcbiAgZGlzYWJsZWRUZXh0OiBcIiNCNkIwQjBcIixcclxuICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gIGJvcmRlckNvbG9yOiBcIiM4ODg4ODhcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXJrVGhlbWUgPSB7XHJcbiAgc2Vjb25kYXJ5QmFja2dyb3VuZENvbG9yOiBcIiMyOTJhMjlcIixcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFmMWYxZlwiLFxyXG4gIGNhcmQ6IFwiIzM1MzUzNVwiLFxyXG4gIGFjdGl2ZTogXCIjNGNiZWZmXCIsXHJcbiAgbWFpblRleHQ6IFwiI2U4ZTRlNFwiLFxyXG4gIHNlY29uZGFyeVRleHQ6IFwiI2FhYTlhOVwiLFxyXG5cclxuICBkaXNhYmxlZFRleHQ6IFwiI0I2QjBCMFwiLFxyXG4gIGJvcmRlclJhZGl1czogMTAsXHJcbiAgYm9yZGVyQ29sb3I6IFwiIzg4ODg4OFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUgfTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHZW9sb2NhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbeyBsYXQsIGxvbiB9LCBzZXRDb29yZHNdID0gdXNlU3RhdGUoeyBsYXQ6IG51bGwsIGxvbjogbnVsbCB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcclxuICAgICAgc2V0Q29vcmRzKHtcclxuICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICBsb246IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyByZXR1cm4gW2xhdCwgbG9uXTtcclxuICByZXR1cm4gWzUxLjQ3NDQwMjMsIC0wLjAzNTYwNV07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VHZW9sb2NhdGlvbjtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdldEFkZHJlc3MgPSAoeyBsb24sIGxhdCB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghbG9uIHx8ICFsYXQpIHJldHVybjtcclxuICAgIGNvbnN0IGdldExvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/bGF0bG5nPSR7bGF0fSwke2xvbn0ma2V5PSR7cHJvY2Vzcy5lbnYuRVhQT19QVUJMSUNfR0VPTE9DQVRJT05fQVBJfWBcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgICBnZXRMb2NhdGlvbigpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtsb24sIGxhdF0pO1xyXG5cclxuICByZXR1cm4gc3RhdGUgPyBzdGF0ZS5yZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzIDogbnVsbDtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHZXRMYXRMb24gPSAoYWRkcmVzcykgPT4ge1xyXG4gIGNvbnN0IFt7IHJlc3VsdHMgfSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyByZXN1bHRzOiBbXSB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdhZGRyZXNzMTIzJywgYWRkcmVzcywgcmVzdWx0cy5sZW5ndGgpO1xyXG4gICAgaWYgKCFhZGRyZXNzICYmIHJlc3VsdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRTdGF0ZSh7IHJlc3VsdHM6IFtdIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCFhZGRyZXNzKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZ2V0TG9jYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9nZW9jb2RpbmctYXBpLm9wZW4tbWV0ZW8uY29tL3YxL3NlYXJjaD9uYW1lPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGFkZHJlc3MpfWApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCBhZnRlciA3MDBtcyBvZiBpbmFjdGl2aXR5XHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YS5yZXN1bHRzKSBzZXRTdGF0ZShkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIDcwMCk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvbiB0byBjbGVhciB0aGUgdGltZW91dCBpZiB0aGUgZGVwZW5kZW5jeSBjaGFuZ2VzIGJlZm9yZSB0aGUgdGltZW91dFxyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gIH0sIFthZGRyZXNzXSk7XHJcblxyXG4gIHJldHVybiByZXN1bHRzIHx8IFtdO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldERhdGEsIHNldENhc2ggfSBmcm9tICcuLi91dGlscy9zdG9yZSc7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0UGFyYW1zID0gW1xyXG4gICd0ZW1wZXJhdHVyZV8ybScsXHJcbiAgJ3JlbGF0aXZlX2h1bWlkaXR5XzJtJyxcclxuICAnZGV3X3BvaW50XzJtJyxcclxuICAnYXBwYXJlbnRfdGVtcGVyYXR1cmUnLFxyXG4gICdwcmVjaXBpdGF0aW9uX3Byb2JhYmlsaXR5JyxcclxuICAncHJlY2lwaXRhdGlvbicsXHJcbiAgJ3JhaW4nLFxyXG4gICdzaG93ZXJzJyxcclxuICAnc25vd2ZhbGwnLFxyXG4gICd3ZWF0aGVyX2NvZGUnLFxyXG4gICdzdXJmYWNlX3ByZXNzdXJlJyxcclxuICAnY2xvdWRfY292ZXInLFxyXG4gICd2aXNpYmlsaXR5JyxcclxuICAnd2luZF9zcGVlZF8xMG0nLFxyXG4gICd3aW5kX2RpcmVjdGlvbl8xMG0nLFxyXG4gICd3aW5kX2d1c3RzXzEwbScsXHJcbiAgJ3NvaWxfdGVtcGVyYXR1cmVfMGNtJyxcclxuICAnc29pbF9tb2lzdHVyZV8wX3RvXzFjbScsXHJcbiAgJ3V2X2luZGV4JyxcclxuICAnaXNfZGF5JyxcclxuICAnc3Vuc2hpbmVfZHVyYXRpb24nLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVF1ZXJ5V2VhdGhlciA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjYXNoLFxyXG4gICAgbG9jYXRpb246IHsgY3VycmVudCwgc2VsZWN0ZWRJbmRleCwgb3B0aW9ucyB9LFxyXG4gIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7IGNhc2g6IHN0YXRlLmNhc2gsIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbiB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IGxhdCwgbG9uIH0gPSBbY3VycmVudCwgLi4ub3B0aW9uc11bc2VsZWN0ZWRJbmRleF07XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxhdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgLy9nZXQgY3VycmVudCBsb24gbGF0XHJcbiAgICBpZiAoY2FzaFtsYXQgKyAnJyArIGxvbl0pIHtcclxuICAgICAgc2V0V2VhdGhlcihudWxsKTtcclxuICAgICAgZGlzcGF0Y2goc2V0RGF0YShjYXNoW2xhdCArICcnICsgbG9uXSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVuLW1ldGVvLmNvbS92MS9mb3JlY2FzdD9sYXRpdHVkZT0ke2xhdH0mbG9uZ2l0dWRlPSR7bG9ufSZjdXJyZW50PXRlbXBlcmF0dXJlXzJtLHdpbmRfc3BlZWRfMTBtJmhvdXJseT0ke2RlZmF1bHRQYXJhbXMuam9pbihcclxuICAgICAgICAnLCdcclxuICAgICAgKX1gXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmN1cnJlbnQpIHNldFdlYXRoZXIoZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtsYXQsIGxvbiwgc2VsZWN0ZWRJbmRleF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF3ZWF0aGVyKSByZXR1cm47XHJcblxyXG4gICAgLy8gbWFrZSBkYXlzJyB3ZWF0aGVyIG1hcFxyXG5cclxuICAgIGNvbnN0IHsgaG91cmx5LCBjdXJyZW50IH0gPSB3ZWF0aGVyO1xyXG4gICAgY29uc3QgeyB0ZW1wZXJhdHVyZV8ybTogY3VycmVudFRlbXAsIHRpbWU6IGN1cnJlbnRUaW1lIH0gPSBjdXJyZW50O1xyXG5cclxuICAgIGNvbnN0IHsgdGltZSB9ID0gaG91cmx5O1xyXG4gICAgY29uc3Qgd2VhdGhlck1hcCA9IHRpbWUucmVkdWNlKChhY2MsIGN1ciwgaWR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IERhdGUucGFyc2UoY3VyKTtcclxuICAgICAgYWNjW21pbGxpc2Vjb25kc10gPSB7fTtcclxuICAgICAgZGVmYXVsdFBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xyXG4gICAgICAgIGFjY1ttaWxsaXNlY29uZHNdW3BhcmFtXSA9IGhvdXJseVtwYXJhbV1baWR4XTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgIGRpc3BhdGNoKFxyXG4gICAgICBzZXREYXRhKHtcclxuICAgICAgICBkYXRhOiB3ZWF0aGVyLFxyXG4gICAgICAgIHdlYXRoZXJNYXAsXHJcbiAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlOiBjdXJyZW50VGVtcCxcclxuICAgICAgICBjdXJyZW50VGltZTogRGF0ZS5wYXJzZShjdXJyZW50VGltZSksXHJcbiAgICAgICAgbG9uLFxyXG4gICAgICAgIGxhdCxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICBkaXNwYXRjaChcclxuICAgICAgc2V0Q2FzaCh7XHJcbiAgICAgICAga2V5OiBsYXQgKyAnJyArIGxvbixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBkYXRhOiB3ZWF0aGVyLFxyXG4gICAgICAgICAgd2VhdGhlck1hcCxcclxuICAgICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZTogY3VycmVudFRlbXAsXHJcbiAgICAgICAgICBjdXJyZW50VGltZTogRGF0ZS5wYXJzZShjdXJyZW50VGltZSksXHJcbiAgICAgICAgICBsb24sXHJcbiAgICAgICAgICBsYXQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfSwgW3dlYXRoZXJdKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElvbkNvbnRlbnQsIElvblBhZ2UgfSBmcm9tIFwiQGlvbmljL3JlYWN0XCI7XG5pbXBvcnQgXCIuL01haW5QYWdlLmNzc1wiO1xuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VXcmFwcGVyLmpzXCI7XG5pbXBvcnQgV2VhdGhlckRhdGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvV2VhdGhlckRhdGEuanNcIjtcbmltcG9ydCBNYWluSW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluSW5mby5qc1wiO1xuaW1wb3J0IHsgZGFya1RoZW1lIH0gZnJvbSBcIi4uL2dsb2JhbC5qc1wiO1xuXG5pbXBvcnQgQm90dG9tRHJhd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL0JvdHRvbURyYXdlci5qc1wiO1xuaW1wb3J0IE1hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9NYXAuanNcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTXVpQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXVpQ2hhcnQuanNcIjtcblxuY29uc3QgTWFpblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3VycmVudCwgb3B0aW9ucywgc2VsZWN0ZWRJbmRleCB9ID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5sb2NhdGlvblxuICApO1xuICBjb25zdCBbc2hvd0lucHV0LCBzZXRTaG93SW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGxhdCwgbG9uIH0gPSBzZWxlY3RlZEluZGV4ID4gMCA/IG9wdGlvbnNbc2VsZWN0ZWRJbmRleCAtIDFdIDogY3VycmVudDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpc0Rpc21pc3NlZCA9ICgpID0+IHtcbiAgICAgIHNldFNob3dJbnB1dChmYWxzZSk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW9uTW9kYWxEaWREaXNtaXNzXCIsIGlzRGlzbWlzc2VkKTtcbiAgICByZXR1cm4gKCkgPT5cbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpb25Nb2RhbERpZERpc21pc3NcIiwgaXNEaXNtaXNzZWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNlLVBvcHBlci1yb290XCIpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPElvblBhZ2U+XG4gICAgICA8SW9uQ29udGVudFxuICAgICAgICBzY3JvbGxFdmVudHM9e3RydWV9XG4gICAgICAgIG9uSW9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9XG4gICAgICAgIGZ1bGxzY3JlZW49e3RydWV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgXCItLWJhY2tncm91bmRcIjogZGFya1RoZW1lLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAvLyAnLS1vdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8UGFnZVdyYXBwZXIgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiB9fT5cbiAgICAgICAgICB7bGF0ICYmIGxvbiAmJiAoXG4gICAgICAgICAgICA8TWFwIGxhdD17bGF0IHx8IDB9IGxvbj17bG9uIHx8IDB9IHNldFNob3dJbnB1dD17c2V0U2hvd0lucHV0fSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPE1haW5JbmZvIC8+XG4gICAgICAgICAgPE11aUNoYXJ0IC8+XG4gICAgICAgICAgPFdlYXRoZXJEYXRhIC8+XG4gICAgICAgICAgPEJvdHRvbURyYXdlciBzaG93PXtzaG93SW5wdXR9IC8+XG4gICAgICAgICAgey8qIHRoZSBvbmx5IHdheSB0byBhZGQgcGFkZGluZy4gQ2FwYWNpdG9yLCB3dGY/ICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiwgY29sb3I6IFwidHJhbnNwYXJlbnRcIiB9fT5cbiAgICAgICAgICAgIGFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYWdlV3JhcHBlcj5cbiAgICAgIDwvSW9uQ29udGVudD5cbiAgICA8L0lvblBhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElvbkNvbnRlbnQsIElvblBhZ2UgfSBmcm9tIFwiQGlvbmljL3JlYWN0XCI7XG5pbXBvcnQgXCIuL1NldHRpbmdzUGFnZS5jc3NcIjtcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlV3JhcHBlci5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi9jb21wb25lbnRzL1NldHRpbmdzLmpzXCI7XG5pbXBvcnQgeyBkYXJrVGhlbWUgfSBmcm9tIFwiLi4vZ2xvYmFsLmpzXCI7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgSWNvbkNoZXZyb25MZWZ0IH0gZnJvbSBcIkB0YWJsZXIvaWNvbnMtcmVhY3RcIjtcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWN0aW9uQnV0dG9uLmpzXCI7XG5cbmNvbnN0IEdvQmFjayA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmA7XG5cbmNvbnN0IFNldHRpbmdzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgcmV0dXJuIChcbiAgICA8SW9uUGFnZT5cbiAgICAgIDxJb25Db250ZW50XG4gICAgICAgIGZ1bGxzY3JlZW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBcIi0tYmFja2dyb3VuZFwiOiBkYXJrVGhlbWUuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8UGFnZVdyYXBwZXI+XG4gICAgICAgICAgPEdvQmFjaz5cbiAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gc3R5bGU9e3sgcG9zaXRpb246IFwidW5zZXRcIiB9fT5cbiAgICAgICAgICAgICAgPEljb25DaGV2cm9uTGVmdCBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LmdvQmFjaygpfSAvPlxuICAgICAgICAgICAgPC9BY3Rpb25CdXR0b24+XG4gICAgICAgICAgPC9Hb0JhY2s+XG4gICAgICAgICAgPFNldHRpbmdzIC8+XG4gICAgICAgIDwvUGFnZVdyYXBwZXI+XG4gICAgICA8L0lvbkNvbnRlbnQ+XG4gICAgPC9Jb25QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NQYWdlO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IENsb3VkQ292ZXIgPSAoeyBmaWxsID0gXCIjMkMyNzI3XCIsIC4uLnByb3BzIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHdpZHRoPXsyNX1cclxuICAgIGhlaWdodD17MjV9XHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD17ZmlsbH1cclxuICAgICAgZD1cIk0xNS42MjUgMy41MTZhOC45OTMgOC45OTMgMCAwIDAtNy45MSA0LjcyMiA2LjY0IDYuNjQgMCAxIDAtLjY4NCAxMy4yNDZoOC41OTRhOC45ODQgOC45ODQgMCAwIDAgMC0xNy45NjhabTAgMTUuNjI1SDcuMDNhNC4yOTcgNC4yOTcgMCAxIDEtLjE3OC04LjU5NEE4Ljk3IDguOTcgMCAwIDAgNi42NCAxMi41YTEuMTcyIDEuMTcyIDAgMSAwIDIuMzQ0IDAgNi42NCA2LjY0IDAgMSAxIDYuNjQgNi42NFpcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgQ2xvdWRDb3ZlcjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IERld1BvaW50ID0gKHsgZmlsbCA9IFwiIzJDMjcyN1wiLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB3aWR0aD17MjV9XHJcbiAgICBoZWlnaHQ9ezI1fVxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgey4uLnByb3BzfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIGZpbGw9e2ZpbGx9XHJcbiAgICAgIGQ9XCJNMTcuMzI1IDcuODY1YS43ODEuNzgxIDAgMCAxIC4yLTEuMDg2YzEuMDE2LS43IDIuNjA2LS43IDMuNjIyIDAgLjQ4OC4zNCAxLjM1NS4zNCAxLjg0NyAwYS43ODEuNzgxIDAgMCAxIC44ODcgMS4yODUgMy4zODMgMy4zODMgMCAwIDEtMy42MjEgMGMtLjQ4OS0uMzM4LTEuMzU2LS4zMzgtMS44NDggMGEuNzguNzggMCAwIDEtMS4wODctLjE5OVptNS42NyAyLjA0Yy0uNDkuMzM4LTEuMzU2LjMzOC0xLjg0OSAwLTEuMDE1LS43MDItMi42MDUtLjcwMi0zLjYyIDBhLjc4Mi43ODIgMCAxIDAgLjg4NiAxLjI4NWMuNDg4LS4zNCAxLjM1Ni0uMzQgMS44NDggMGEzLjM4MyAzLjM4MyAwIDAgMCAzLjYyIDAgLjc4Mi43ODIgMCAwIDAtLjg4Ni0xLjI4NlptLTguMTUxIDguMDY0YTMuMTI1IDMuMTI1IDAgMSAxLTMuOTA2LTMuMDI4VjQuNjg3YS43ODEuNzgxIDAgMSAxIDEuNTYyIDB2MTAuMjU0YTMuMTMgMy4xMyAwIDAgMSAyLjM0NCAzLjAyOFptLTEuNTYzIDBhMS41NjIgMS41NjIgMCAxIDAtMy4xMjQgMCAxLjU2MiAxLjU2MiAwIDAgMCAzLjEyNCAwWm00LjY4OCAwYTYuMjUgNi4yNSAwIDEgMS0xMC4xNTctNC44ODNWNC42ODdhMy45MDYgMy45MDYgMCAwIDEgNy44MTMgMHY4LjM5OWE2LjI1OCA2LjI1OCAwIDAgMSAyLjM0NCA0Ljg4M1ptLTEuNTYzIDBhNC42OTUgNC42OTUgMCAwIDAtMi4wMS0zLjg0OC43ODIuNzgyIDAgMCAxLS4zMzQtLjY0NHYtOC43OWEyLjM0NCAyLjM0NCAwIDEgMC00LjY4NyAwdjguNzlhLjc4MS43ODEgMCAwIDEtLjMzNC42NCA0LjY4NyA0LjY4NyAwIDEgMCA3LjM2NSAzLjg1MlpcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgRGV3UG9pbnQ7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBGZWVsc0xpa2UgPSAoeyBmaWxsID0gXCIjMkMyNzI3XCIsIC4uLnByb3BzIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHdpZHRoPXsyNX1cclxuICAgIGhlaWdodD17MjV9XHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD17ZmlsbH1cclxuICAgICAgZD1cIk0yMC43MDMgNS40NjlhMi43MzQgMi43MzQgMCAxIDAgMCA1LjQ2OCAyLjczNCAyLjczNCAwIDAgMCAwLTUuNDY4Wm0wIDMuOTA2YTEuMTcyIDEuMTcyIDAgMSAxIDAtMi4zNDQgMS4xNzIgMS4xNzIgMCAwIDEgMCAyLjM0NFpNMTIuNSAxNC45NDFWOC41OTRhLjc4MS43ODEgMCAxIDAtMS41NjMgMHY2LjM0N2EzLjEyNSAzLjEyNSAwIDEgMCAxLjU2MyAwWm0tLjc4MSA0LjU5YTEuNTYyIDEuNTYyIDAgMSAxIDAtMy4xMjQgMS41NjIgMS41NjIgMCAwIDEgMCAzLjEyNFptMy45MDYtNi40NDVWNC42ODdhMy45MDcgMy45MDcgMCAwIDAtNy44MTMgMHY4LjM5OWE2LjI1IDYuMjUgMCAxIDAgNy44MTMgMFptLTMuOTA2IDkuNTdhNC42ODcgNC42ODcgMCAwIDEtMi42NzgtOC41MzUuNzgyLjc4MiAwIDAgMCAuMzM0LS42NDR2LTguNzlhMi4zNDQgMi4zNDQgMCAxIDEgNC42ODggMHY4Ljc5YS43OC43OCAwIDAgMCAuMzMzLjY0IDQuNjg3IDQuNjg3IDAgMCAxLTIuNjc3IDguNTRaXCJcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEZlZWxzTGlrZTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IEZseSA9ICh7IGZpbGwgPSBcIiMwMDBcIiwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB7Li4ucmVzdH0+XHJcbiAgICA8ZyBjbGlwUGF0aD1cInVybCgjYSlcIj5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPXtmaWxsfVxyXG4gICAgICAgIGQ9XCJNMjAuODkxIDIuMDA2IDIwLjk5NyAybC4xMy4wMDguMDkuMDE2LjEyMy4wMzUuMTA3LjA0Ni4xLjA1Ny4wOS4wNjcuMDgyLjA3NS4wNTIuMDU5LjA4Mi4xMTYuMDUyLjA5NmMuMDQ3LjEuMDc3LjIwNi4wOS4zMTZsLjAwNS4xMDZjMCAuMDc1LS4wMDguMTQ5LS4wMjQuMjJsLS4wMzUuMTIzLTYuNTMyIDE4LjA3N2ExLjU1IDEuNTUgMCAwIDEtMi4xNzIuNzA1IDEuNTQ2IDEuNTQ2IDAgMCAxLS41NjYtLjU0OWwtLjA2NS0uMTI3LTMuMzUyLTYuNzAyLTYuNjctMy4zMzZhMS41NSAxLjU1IDAgMCAxLS44OTgtMS4yNTlMMS42OCAxMGMwLS41Ni4zMDEtMS4wNzIuODQxLTEuMzdsLjE0LS4wNyAxOC4wMTctNi41MDYuMTA2LS4wMy4xMDctLjAxOFpcIlxyXG4gICAgICAvPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBGbHk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBIdW1pZGl0eSA9ICh7IGZpbGwgPSBcIiMyQzI3MjdcIiwgcHJvcHMgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgd2lkdGg9ezE1fVxyXG4gICAgaGVpZ2h0PXsyMH1cclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHsuLi5wcm9wc31cclxuICA+XHJcbiAgICA8cGF0aFxyXG4gICAgICBmaWxsPXtmaWxsfVxyXG4gICAgICBkPVwiTTEyLjg3MiA4LjU4OCA3LjY5My4zNGEuODEyLjgxMiAwIDAgMC0xLjMyMyAwTDEuMTY3IDguNjI4QTcuODAxIDcuODAxIDAgMCAwIDAgMTIuNWE3LjAzMSA3LjAzMSAwIDEgMCAxNC4wNjMgMCA3Ljg2MiA3Ljg2MiAwIDAgMC0xLjE5MS0zLjkxMlptLTUuODQgOS4zOGE1LjQ3NiA1LjQ3NiAwIDAgMS01LjQ3LTUuNDY4IDYuMjMzIDYuMjMzIDAgMCAxIC45NTItMy4wOGwuNzMtMS4xNjUgNy44NyA3Ljg3YTUuNDUxIDUuNDUxIDAgMCAxLTQuMDgzIDEuODQzWlwiXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBIdW1pZGl0eTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFByZWNpcGl0YXRpb24gPSAoeyBmaWxsID0gXCIjMkMyNzI3XCIsIC4uLnByb3BzIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHdpZHRoPXsyMH1cclxuICAgIGhlaWdodD17MjB9XHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD17ZmlsbH1cclxuICAgICAgZD1cIk0xLjk3OS44NjNjLjk3IDEuMjQ2IDEwLjkzNyAxNC4wMDcgMTMuMzIzIDE2LjA4MyAzLjAwMyAyLjYxNSA1LjE4NC0uMTQ5IDIuODUxLTIuODUxQzE2LjExNCAxMS43MzIgMy43MiAyLjA2IDIuMTgzLjg2M0gxLjk4Wm03LjM3IDBjMS43NyAyLjM5OCA1LjE3NiA2Ljk2MyA2LjQ1NCA4LjA3NSAyLjEgMS44MjggMy42MzktLjExOCAyLjAwOC0yLjAwN0MxNi43NzMgNS43MyAxMi43NyAyLjcwNSAxMC4yODMuODYzaC0uOTM1Wm01LjEzMSAwYy41NjMuNjI4IDEuMDYgMS4xNiAxLjMwMSAxLjM2OSAxLjYwMyAxLjM5NSAyLjc4LjA2OCAxLjgwMi0xLjM2OUgxNC40OFpNLjY3OSA1LjE3NXYyLjEyMWMxLjY2OCAyLjE0NiAzLjQxNCA0LjMxNyA0LjIyIDUuMDE5IDIuMSAxLjgyNyAzLjYzOC0uMDk2IDIuMDA4LTEuOTg1QzYuMDcgOS4zNiAzLjE2NSA3LjA3OC42NzkgNS4xNzVabTAgNi40Nzh2Mi4yMTNjMS43OTYgMi4xNDYgMy41MyA0LjE4MiA0LjE1MSA0LjcyMyAxLjg2MiAxLjYyIDMuMjAyLS4xMDUgMS43NTctMS43OC0uNjQyLS43NDQtMy4zMTItMy4wMDUtNS45MDgtNS4xNTZaXCJcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFByZWNpcGl0YXRpb247XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBQcmVzc3VyZSA9ICh7IGZpbGwgPSBcIiMyQzI3MjdcIiwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgd2lkdGg9ezI1fVxyXG4gICAgaGVpZ2h0PXsyNX1cclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHsuLi5wcm9wc31cclxuICA+XHJcbiAgICA8cGF0aFxyXG4gICAgICBzdHJva2U9e2ZpbGx9XHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBkPVwiTTIxLjU1NSAxOC4wNTNhOS4zNzUgOS4zNzUgMCAxIDAtMTguMTEgMFwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgc3Ryb2tlPXtmaWxsfVxyXG4gICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgZD1cIk0xMy4yOTggMTYuMjMyYy41MDcuNzQuMTUgMS44NjctLjc5OCAyLjUxOC0uOTQ4LjY1Mi0yLjEyOC41ODEtMi42MzUtLjE1Ny0uNTQyLS43ODgtMi40MS01LjIxNi0zLjU0NS03Ljk1Ni0uMjE0LS41MTUuNDE3LS45NDkuODIzLS41NjQgMi4xNSAyLjA0MSA1LjYxNCA1LjM3MiA2LjE1NSA2LjE2WlwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgc3Ryb2tlPXtmaWxsfVxyXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgZD1cIk0xMi41IDYuMjV2Mi4wODNtLTYuNjMuNjYzIDEuNDc0IDEuNDczbTExLjc4NS0xLjQ3My0xLjQ3MyAxLjQ3M20zLjkgNy41ODMtMi4wMTItLjU0bS0xNi4xLjU0IDIuMDEyLS41NFwiXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBQcmVzc3VyZTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFVWaW5kZXggPSAoeyBmaWxsID0gXCIjMkMyNzI3XCIsIC4uLnByb3BzIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHdpZHRoPXsyNX1cclxuICAgIGhlaWdodD17MjV9XHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgc3Ryb2tlPXtmaWxsfVxyXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgIGQ9XCJNMy4xMjUgMTIuNWgxLjA0Mm0xNi42NjYgMGgxLjA0Mk01LjgzMyA1LjgzM2wuNzMuNzNtMTIuNjA0LS43My0uNzMuNzNNOC4zMzQgMTIuNWE0LjE2NyA0LjE2NyAwIDEgMSA4LjMzNCAwTTEyLjUgNC4xNjdWMy4xMjVtMS4wNDIgMTMuNTQyIDIuMDgzIDUuMjA4aDEuMDQybDIuMDgzLTUuMjA4bS0xMi41IDB2My4xMjVhMi4wODMgMi4wODMgMCAwIDAgNC4xNjcgMHYtMy4xMjVcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgVVZpbmRleDtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFdpbmQgPSAoeyBmaWxsID0gXCIjMkMyNzI3XCIsIC4uLnByb3BzIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHdpZHRoPXsyNX1cclxuICAgIGhlaWdodD17MjV9XHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgZmlsbD17ZmlsbH1cclxuICAgICAgZD1cIk0yLjM0NCAxMC4xNTZhMS4xNzIgMS4xNzIgMCAxIDEgMC0yLjM0NGg5LjM3NWExLjE3MiAxLjE3MiAwIDAgMCAwLTIuMzQzIDEuNDcyIDEuNDcyIDAgMCAwLTEuMDAyLjQzNCAxLjE3MiAxLjE3MiAwIDAgMS0xLjY2LTEuNjUgMy44NDIgMy44NDIgMCAwIDEgMi42NjItMS4xMjggMy41MTYgMy41MTYgMCAwIDEgMCA3LjAzMUgyLjM0NFptMTcuOTY4LTMuNTE1YTMuODQyIDMuODQyIDAgMCAwLTIuNjY2IDEuMTI4IDEuMTcyIDEuMTcyIDAgMCAwIDEuNjYgMS42NSAxLjQ3MiAxLjQ3MiAwIDAgMSAxLjAwNi0uNDM1IDEuMTcyIDEuMTcyIDAgMSAxIDAgMi4zNDRIMy4xMjVhMS4xNzIgMS4xNzIgMCAwIDAgMCAyLjM0NGgxNy4xODhhMy41MTYgMy41MTYgMCAwIDAgMC03LjAzMVptLTUuNDY4IDguMjAzSDMuOTA2YTEuMTcyIDEuMTcyIDAgMSAwIDAgMi4zNDRoMTAuOTM4YTEuMTcyIDEuMTcyIDAgMCAxIDAgMi4zNDMgMS40NzUgMS40NzUgMCAwIDEtMS4wMDMtLjQzNCAxLjE3IDEuMTcgMCAwIDAtMS42OTctLjA0NyAxLjE3MiAxLjE3MiAwIDAgMCAuMDM3IDEuNjk3IDMuODQyIDMuODQyIDAgMCAwIDIuNjYzIDEuMTI4IDMuNTE2IDMuNTE2IDAgMCAwIDAtNy4wMzFaXCJcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFdpbmQ7XHJcbiIsIi8vaW1wb3J0IGFuZCByZS1leHBvcnQgYWxsIHN2ZyBmaWxlc1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENsb3VkQ292ZXIgfSBmcm9tIFwiLi9DbG91ZENvdmVyXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJld1BvaW50IH0gZnJvbSBcIi4vRHJld1BvaW50XCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSHVtaWRpdHkgfSBmcm9tIFwiLi9IdW1pZGl0eVwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZXNzdXJlIH0gZnJvbSBcIi4vUHJlc3N1cmVcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBVVmluZGV4IH0gZnJvbSBcIi4vVVZpbmRleFwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFdpbmQgfSBmcm9tIFwiLi9XaW5kXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJlY2lwaXRhdGlvbiB9IGZyb20gXCIuL1ByZWNpcGl0YXRpb25cIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGZWVsc0xpa2UgfSBmcm9tIFwiLi9GZWVsc0xpa2VcIjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRhdGE6IHtcbiAgICBkYXRhOiB7fSxcbiAgICBzZWxlY3RlZERheTogbnVsbCxcbiAgICB3ZWF0aGVyTWFwOiB7fSxcbiAgICBjdXJyZW50VGVtcGVyYXR1cmU6IG51bGwsXG4gICAgY3VycmVudFRpbWU6IG51bGwsXG4gICAgbG9uOiBudWxsLFxuICAgIGxhdDogbnVsbCxcbiAgfSxcblxuICBsb2NhdGlvbjoge1xuICAgIHNlbGVjdGVkSW5kZXg6IDAsXG4gICAgY3VycmVudDoge1xuICAgICAgbG9uOiBudWxsLFxuICAgICAgbGF0OiBudWxsLFxuICAgICAgbmFtZTogbnVsbCxcbiAgICB9LFxuICAgIG9wdGlvbnM6IFtdLFxuICB9LFxuICBjYXNoOiB7fSxcbiAgcHJlZmVyZW5jZXM6IHtcbiAgICB0aW1lRm9ybWF0OiB7XG4gICAgICBzZWxlY3RlZDogJzI0aCcsXG4gICAgICBvcHRpb25zOiBbJzI0aCcsICcxMmgnXSxcbiAgICB9LFxuICAgIHRlbXBlcmF0dXJlVW5pdDoge1xuICAgICAgc2VsZWN0ZWQ6ICdDJyxcbiAgICAgIG9wdGlvbnM6IFsnQycsICdGJ10sXG4gICAgfSxcbiAgICBwcmVjaXBpdGF0aW9uVW5pdDoge1xuICAgICAgc2VsZWN0ZWQ6ICdtbScsXG4gICAgICBvcHRpb25zOiBbJ21tJywgJ2luY2hlcyddLFxuICAgIH0sXG4gICAgd2luZFNwZWVkOiB7XG4gICAgICBzZWxlY3RlZDogJ20vcycsXG4gICAgICBvcHRpb25zOiBbJ20vcycsICdrbS9zJywgJ21waCcsICdrbm90cyddLFxuICAgIH0sXG4gICAgcHJlc3N1cmU6IHtcbiAgICAgIHNlbGVjdGVkOiAnbW0nLFxuICAgICAgb3B0aW9uczogWydpbmNoZXMnLCAnbW0nLCAnbWJhciddLFxuICAgIH0sXG4gICAgZGlzdGFuY2U6IHtcbiAgICAgIHNlbGVjdGVkOiAna20nLFxuICAgICAgb3B0aW9uczogWydrbScsICdtaWxlcyddLFxuICAgIH0sXG4gICAgdGhlbWU6IHtcbiAgICAgIHNlbGVjdGVkOiAnbGlnaHQnLFxuICAgICAgb3B0aW9uczogWydsaWdodCcsICdkYXJrJ10sXG4gICAgfSxcbiAgfSxcbn07XG5cbi8vIFByZWZlcmVuY2VzIFNsaWNlXG5leHBvcnQgY29uc3QgcHJlZmVyZW5jZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3ByZWZlcmVuY2VzJyxcbiAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUucHJlZmVyZW5jZXMsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0UHJlZmVyZW5jZXM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9LFxuICB9LFxufSk7XG5leHBvcnQgY29uc3QgY2FzaFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnY2FzaCcsXG4gIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLnByZWZlcmVuY2VzLFxuICByZWR1Y2Vyczoge1xuICAgIHNldENhc2g6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgW2FjdGlvbi5wYXlsb2FkLmtleV06IGFjdGlvbi5wYXlsb2FkLmRhdGEgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2NhdGlvblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnbG9jYXRpb24nLFxuICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZS5sb2NhdGlvbixcbiAgcmVkdWNlcnM6IHtcbiAgICBwaWNrTG9jYXRpb246IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9LFxuICAgIGFkZExvY2F0aW9uOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG9wdGlvbnM6IFsuLi5zdGF0ZS5vcHRpb25zLCBhY3Rpb24ucGF5bG9hZF0gfTtcbiAgICB9LFxuICAgIHJlbW92ZUxvY2F0aW9uOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXG4gICAgICAgIGN1cnJlbnQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGFkZEN1cnJlbnRMb2NhdGlvbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZWxlY3RTbGlkZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWxlY3RlZEluZGV4OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRQcmVmZXJlbmNlcyB9ID0gcHJlZmVyZW5jZXNTbGljZS5hY3Rpb25zO1xuXG4vLyBEYXRhIFNsaWNlXG5leHBvcnQgY29uc3QgZGF0YVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnZGF0YScsXG4gIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLmRhdGEsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0RGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgIH0sXG4gICAgc2V0U2VsZWN0ZWREYXk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VsZWN0ZWREYXk6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBwaWNrTG9jYXRpb24sIGFkZExvY2F0aW9uLCByZW1vdmVMb2NhdGlvbiwgYWRkQ3VycmVudExvY2F0aW9uLCBzZWxlY3RTbGlkZSB9ID0gbG9jYXRpb25TbGljZS5hY3Rpb25zO1xuZXhwb3J0IGNvbnN0IHsgc2V0RGF0YSwgc2V0U2VsZWN0ZWREYXkgfSA9IGRhdGFTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGNvbnN0IHsgc2V0Q2FzaCB9ID0gY2FzaFNsaWNlLmFjdGlvbnM7XG4vLyBDb21iaW5lIFJlZHVjZXJzXG5jb25zdCByb290UmVkdWNlciA9IHtcbiAgcHJlZmVyZW5jZXM6IHByZWZlcmVuY2VzU2xpY2UucmVkdWNlcixcbiAgZGF0YTogZGF0YVNsaWNlLnJlZHVjZXIsXG4gIGNhc2g6IGNhc2hTbGljZS5yZWR1Y2VyLFxuICBsb2NhdGlvbjogbG9jYXRpb25TbGljZS5yZWR1Y2VyLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XG4gICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xuICAgICAgaW1tdXRhYmxlQ2hlY2s6IHsgd2FybkFmdGVyOiAxMjggfSxcbiAgICAgIHNlcmlhbGl6YWJsZUNoZWNrOiB7IHdhcm5BZnRlcjogMTI4IH0sXG4gICAgfSksXG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxufSk7XG4iLCJjb25zdCBEQVlTID0gW1xyXG4gIFwiU3VuZGF5XCIsXHJcbiAgXCJNb25kYXlcIixcclxuICBcIlR1ZXNkYXlcIixcclxuICBcIldlZG5lc2RheVwiLFxyXG4gIFwiVGh1cnNkYXlcIixcclxuICBcIkZyaWRheVwiLFxyXG4gIFwiU2F0dXJkYXlcIixcclxuXTtcclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAobWlsbGlzZWNvbmRzKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG1pbGxpc2Vjb25kcyk7XHJcbiAgY29uc3QgdGltZSA9IGdldFRpbWUobWlsbGlzZWNvbmRzKTtcclxuICBjb25zdCBkYXlPZlRoZVdlZWsgPSBEQVlTW2RhdGUuZ2V0RGF5KCldO1xyXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gIHJldHVybiBbYCR7ZGF5fSAke2RheU9mVGhlV2Vla31gLCBgJHt0aW1lfWBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRpbWUgPSAobWlsbGlzZWNvbmRzKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG1pbGxpc2Vjb25kcyk7XHJcbiAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gIGNvbnN0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuXHJcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXMgPT09IDAgPyBcIjAwXCIgOiBtaW51dGVzfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGltZUFycmF5ID0gKHNpemUpID0+IHtcclxuICBsZXQgbWlsbGlzZWNvbmRzID0gRGF0ZS5ub3coKTtcclxuICAvL3JvdW5kIHRvIHRoZSBuZWFyZXN0IDEwIG1pbnV0ZXNcclxuICBtaWxsaXNlY29uZHMgLT0gbWlsbGlzZWNvbmRzICUgKDEwMDAgKiA2MCAqIDEwKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBBcnJheShzaXplKS5maWxsKDApLm1hcCgoXywgaSkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudE0gPSBtaWxsaXNlY29uZHMgKyBpICogKDEwMDAgKiA2MCAqIDEwKTtcclxuICAgIC8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50TSk7XHJcbiAgICAvLyBnZXQgaG91cnMgYW5kIG1pbnV0ZXM7XHJcbiAgICByZXR1cm4gZ2V0VGltZShjdXJyZW50TSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmlyc3RMZXR0ZXJVcHBlcmNhc2UgPSAoc3RyaW5nKSA9PiB7XHJcbiAgLy8gYXNzdW1lIHRoYXQgdGhlIHN0cmluZyBtaWdodCBiZSBpbiBzdHlsZSBvZiB0aGUgY2FtZWxDYXNlXHJcbiAgY29uc3QgW2ZpcnN0LCBsYXN0XSA9IHN0cmluZy5zcGxpdCgvKD89W0EtWl0pLyk7XHJcbiAgLy8gaWYgdGhlIGxhc3QgZXhpc3QsIHRoZXJlIGFyZSAyIHdvcmRzXHJcbiAgaWYgKGxhc3QpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGZpcnN0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmlyc3Quc2xpY2UoMSkgKyBcIiBcIiArIGxhc3QudG9Mb3dlckNhc2UoKVxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYnpUb1JhaW4gPSAoZGJ6KSA9PiB7XHJcbiAgcmV0dXJuIDAuMDM2ICogMTAgKiogKDAuMDYyNSAqIGRCWik7XHJcbn07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVVyYmFuaXN0OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcbi5zd2l0Y2gtYnRuIHtcXG4gIEBhcHBseSBiZy1iZ3JheS0zMDA7XFxufVxcblxcbi5zd2l0Y2gtYnRuLmFjdGl2ZSB7XFxuICBAYXBwbHkgYmctc3VjY2Vzcy0zMDA7XFxufVxcblxcbi5zd2l0Y2gtYnRuIHNwYW4ge1xcbiAgQGFwcGx5IHRyYW5zbGF0ZS14LTA7XFxufVxcblxcbi5zd2l0Y2gtYnRuLmFjdGl2ZSBzcGFuIHtcXG4gIEBhcHBseSB0cmFuc2xhdGUteC1bMjNweF07XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2Vjb25kRm9udCB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2xpZGVyLWhvdXJzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNsaWRlci1ob3Vyczo6YmVmb3JlIHtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtaG91cik7XFxuICB6LWluZGV4OiAxO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwcHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2xpZGVyLWRheXMge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnNsaWRlci1kYXlzOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29udGVudDogYXR0cihkYXRhLWRheSk7XFxuICB6LWluZGV4OiAxO1xcbiAgY29sb3I6ICM4ODg4ODg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTBweDtcXG4gIGxlZnQ6IDExcHg7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucmVhY3QtaG9yaXpvbnRhbC1zY3JvbGxpbmctbWVudS0td3JhcHBlciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubWFudGluZS1TbGlkZXItcm9vdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1hcGJveGdsLWN0cmwtYm90dG9tLWxlZnQge1xcbiAgYm90dG9tOiA0MCUgIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxMDYlICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLm1hcGJveGdsLWN0cmwtbG9nbyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbn1cXG5cXG4ubWFwYm94Z2wtY3RybC1ib3R0b20tcmlnaHQge1xcbiAgYm90dG9tOiA1NSUgIWltcG9ydGFudDtcXG59XFxuXFxuLnRpbnQwIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNkZmRmZGYgMCUsICM5YmVhOGYgMTAwJSk7XFxufVxcblxcbi50aW50MSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjOWJlYThmIDAlLCAjNThmZjQyIDEwMCUpO1xcbn1cXG5cXG4udGludDIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzU4ZmY0MiAwJSwgIzQ3YzI3OCAxMDAlKTtcXG59XFxuXFxuLnRpbnQzIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICM0N2MyNzggMCUsICM0NzkzZjkgMTAwJSk7XFxufVxcblxcbi50aW50NCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjNDc5M2Y5IDAlLCAjMGM1OWZmIDEwMCUpO1xcbn1cXG5cXG4udGludDUge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzBjNTlmZiAwJSwgIzYxNTNjMSAxMDAlKTtcXG59XFxuXFxuLnRpbnQ2IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICM2MTUzYzEgMCUsICNmZjkzYTMgMTAwJSk7XFxufVxcblxcbi50aW50NyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjZmY5M2EzIDAlLCAjZmYzZjM1IDEwMCUpO1xcbn1cXG5cXG4udGludDgge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI2ZmM2YzNSAwJSwgI2MyMDUxMSAxMDAlKTtcXG59XFxuXFxuLnRpbnQ5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNjMjA1MTEgMCUsICNmZmViMGEgMTAwJSk7XFxufVxcblxcbi50aW50IHtcXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XFxufVxcblxcbi5tYW50aW5lLVVuc3R5bGVkQnV0dG9uLXJvb3Q6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxufVxcblxcbmlvbi1tb2RhbCxcXG5pb24tbW9kYWwgaW9uLWJhY2tkcm9wIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubWFwYm94Z2wtY2FudmFzLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIC5lbWJsYSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZW1ibGFfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZW1ibGFfX3NsaWRlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMCAwIDEwMCU7XFxuICBtaW4td2lkdGg6IDA7XFxufSAqL1xcbi5lbWJsYV9fc2xpZGUge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAwIDAgMTAwJTtcXG4gIG1pbi13aWR0aDogMDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmVtYmxhIHtcXG4gIG1heC13aWR0aDogNDhyZW07XFxuICBtYXJnaW46IGF1dG87XFxuICAtLXNsaWRlLWhlaWdodDogMTlyZW07XFxuICAtLXNsaWRlLXNwYWNpbmc6IDFyZW07XFxuICAtLXNsaWRlLXNpemU6IDEwMCU7XFxufVxcblxcbi5lbWJsYV9fdmlld3BvcnQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmVtYmxhX19jb250YWluZXIge1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XFxuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1zbGlkZS1zcGFjaW5nKSAqIC0xKTtcXG59XFxuXFxuLmVtYmxhX19zbGlkZSB7XFxuICBmbGV4OiAwIDAgdmFyKC0tc2xpZGUtc2l6ZSk7XFxuICBtaW4td2lkdGg6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNsaWRlLXNwYWNpbmcpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW1ibGFfX3NsaWRlX19udW1iZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMC4ycmVtIHZhcigtLWRldGFpbC1tZWRpdW0tY29udHJhc3QpO1xcbiAgYm9yZGVyLXJhZGl1czogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5NdWlDaGFydHNBeGlzLWxpbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLk11aUNoYXJ0c0F4aXMtdGljayB7XFxuICBzdHJva2U6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5NdWlDaGFydHNBeGlzLXRpY2tMYWJlbCB7XFxuICBzdHJva2U6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5NdWlIaWdobGlnaHRFbGVtZW50LXJvb3Qge1xcbiAgcjogMTA7XFxuICBmaWxsOiAjNGNiZWZmICFpbXBvcnRhbnQ7XFxufVxcblxcbi5NdWlDaGFydHNUb29sdGlwLW1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYmVmZiAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5NdWlDaGFydHNUb29sdGlwLXJvb3Qge1xcbiAgYmFja2dyb3VuZDogIzM1MzUzNSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTXVpVHlwb2dyYXBoeS1yb290IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLk11aUNoYXJ0c0F4aXNIaWdobGlnaHQtcm9vdCB7XFxuICBzdHJva2U6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5NdWlDaGFydHNMZWdlbmQtbWFyayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLGNBQUE7QUFDQSxvQkFBQTtBQUNBLG1CQUFBO0FBRUE7RUFDRSxtQkFBQTtBQURGOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsaUNBQUE7QUFFRjs7QUFBQTtFQUNFLDJDQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUtGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBRkE7RUFDRSxPQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUZBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFLRjs7QUFGQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFLRjs7QUFGQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7QUFNRjs7QUFIQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFNRjs7QUFKQTtFQUNFLHlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxzQkFBQTtBQVFGOztBQUxBO0VBQ0UsNkRBQUE7QUFRRjs7QUFOQTtFQUNFLDZEQUFBO0FBU0Y7O0FBUEE7RUFDRSw2REFBQTtBQVVGOztBQVBBO0VBQ0UsNkRBQUE7QUFVRjs7QUFSQTtFQUNFLDZEQUFBO0FBV0Y7O0FBUkE7RUFDRSw2REFBQTtBQVdGOztBQVJBO0VBQ0UsNkRBQUE7QUFXRjs7QUFSQTtFQUNFLDZEQUFBO0FBV0Y7O0FBUkE7RUFDRSw2REFBQTtBQVdGOztBQVJBO0VBQ0UsNkRBQUE7QUFXRjs7QUFUQTtFQUNFLG1CQUFBO0FBWUY7O0FBVkE7RUFDRSx5QkFBQTtBQWFGOztBQVhBOztFQUVFLG9CQUFBO0FBY0Y7O0FBWkE7RUFDRSxZQUFBO0FBZUY7O0FBWkE7Ozs7Ozs7Ozs7Ozs7R0FBQTtBQWVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBY0Y7O0FBWkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFlRjs7QUFiQTtFQUNFLGdCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQWlCRjs7QUFmQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsNERBQUE7RUFDQSxxQkFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFrQkY7O0FBZkE7RUFDRSxhQUFBO0FBa0JGOztBQWhCQTtFQUNFLHdCQUFBO0FBbUJGOztBQWpCQTtFQUNFLHdCQUFBO0FBb0JGOztBQWpCQTtFQUNFLEtBQUE7RUFDQSx3QkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0FBcUJGOztBQW5CQTtFQUNFLDhCQUFBO0FBc0JGOztBQXBCQTtFQUNFLFlBQUE7QUF1QkY7O0FBcEJBO0VBQ0Usd0JBQUE7QUF1QkY7O0FBckJBO0VBQ0UsYUFBQTtBQXdCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9VXJiYW5pc3Q6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuLnN3aXRjaC1idG4ge1xcbiAgQGFwcGx5IGJnLWJncmF5LTMwMDtcXG59XFxuLnN3aXRjaC1idG4uYWN0aXZlIHtcXG4gIEBhcHBseSBiZy1zdWNjZXNzLTMwMDtcXG59XFxuLnN3aXRjaC1idG4gc3BhbiB7XFxuICBAYXBwbHkgdHJhbnNsYXRlLXgtMDtcXG59XFxuLnN3aXRjaC1idG4uYWN0aXZlIHNwYW4ge1xcbiAgQGFwcGx5IHRyYW5zbGF0ZS14LVsyM3B4XTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5zZWNvbmRGb250IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIENvbmRlbnNlZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zbGlkZXItaG91cnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2xpZGVyLWhvdXJzOjpiZWZvcmUge1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1ob3VyKTtcXG4gIHotaW5kZXg6IDE7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTBweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5zbGlkZXItZGF5cyB7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTBweDtcXG5cXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc2xpZGVyLWRheXM6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtZGF5KTtcXG4gIHotaW5kZXg6IDE7XFxuICBjb2xvcjogIzg4ODg4ODtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbGVmdDogMTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5yZWFjdC1ob3Jpem9udGFsLXNjcm9sbGluZy1tZW51LS13cmFwcGVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5tYW50aW5lLVNsaWRlci1yb290IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFwYm94Z2wtY3RybC1ib3R0b20tbGVmdCB7XFxuICBib3R0b206IDQwJSAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDEwNiUgIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubWFwYm94Z2wtY3RybC1sb2dvIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxufVxcbi5tYXBib3hnbC1jdHJsLWJvdHRvbS1yaWdodCB7XFxuICBib3R0b206IDU1JSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGludDAge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI2RmZGZkZmZmIDAlLCAjOWJlYThmZmYgMTAwJSk7XFxufVxcbi50aW50MSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjOWJlYThmZmYgMCUsICM1OGZmNDJmZiAxMDAlKTtcXG59XFxuLnRpbnQyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICM1OGZmNDJmZiAwJSwgIzQ3YzI3OGZmIDEwMCUpO1xcbn1cXG5cXG4udGludDMge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzQ3YzI3OGZmIDAlLCAjNDc5M2Y5ZmYgMTAwJSk7XFxufVxcbi50aW50NCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjNDc5M2Y5ZmYgMCUsICMwYzU5ZmZmZiAxMDAlKTtcXG59XFxuXFxuLnRpbnQ1IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICMwYzU5ZmZmZiAwJSwgIzYxNTNjMWZmIDEwMCUpO1xcbn1cXG5cXG4udGludDYge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzYxNTNjMWZmIDAlLCAjZmY5M2EzZmYgMTAwJSk7XFxufVxcblxcbi50aW50NyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjZmY5M2EzZmYgMCUsICNmZjNmMzVmZiAxMDAlKTtcXG59XFxuXFxuLnRpbnQ4IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNmZjNmMzVmZiAwJSwgI2MyMDUxMWZmIDEwMCUpO1xcbn1cXG5cXG4udGludDkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI2MyMDUxMWZmIDAlLCAjZmZlYjBhZmYgMTAwJSk7XFxufVxcbi50aW50IHtcXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XFxufVxcbi5tYW50aW5lLVVuc3R5bGVkQnV0dG9uLXJvb3Q6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxufVxcbmlvbi1tb2RhbCxcXG5pb24tbW9kYWwgaW9uLWJhY2tkcm9wIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ubWFwYm94Z2wtY2FudmFzLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIC5lbWJsYSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZW1ibGFfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZW1ibGFfX3NsaWRlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMCAwIDEwMCU7XFxuICBtaW4td2lkdGg6IDA7XFxufSAqL1xcblxcbi5lbWJsYV9fc2xpZGUge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAwIDAgMTAwJTtcXG4gIG1pbi13aWR0aDogMDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLmVtYmxhIHtcXG4gIG1heC13aWR0aDogNDhyZW07XFxuICBtYXJnaW46IGF1dG87XFxuICAtLXNsaWRlLWhlaWdodDogMTlyZW07XFxuICAtLXNsaWRlLXNwYWNpbmc6IDFyZW07XFxuICAtLXNsaWRlLXNpemU6IDEwMCU7XFxufVxcbi5lbWJsYV9fdmlld3BvcnQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmVtYmxhX19jb250YWluZXIge1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XFxuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1zbGlkZS1zcGFjaW5nKSAqIC0xKTtcXG59XFxuLmVtYmxhX19zbGlkZSB7XFxuICBmbGV4OiAwIDAgdmFyKC0tc2xpZGUtc2l6ZSk7XFxuICBtaW4td2lkdGg6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNsaWRlLXNwYWNpbmcpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZW1ibGFfX3NsaWRlX19udW1iZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMC4ycmVtIHZhcigtLWRldGFpbC1tZWRpdW0tY29udHJhc3QpO1xcbiAgYm9yZGVyLXJhZGl1czogMS44cmVtO1xcblxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5NdWlDaGFydHNBeGlzLWxpbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLk11aUNoYXJ0c0F4aXMtdGljayB7XFxuICBzdHJva2U6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcbi5NdWlDaGFydHNBeGlzLXRpY2tMYWJlbCB7XFxuICBzdHJva2U6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5NdWlIaWdobGlnaHRFbGVtZW50LXJvb3Qge1xcbiAgcjogMTA7XFxuICBmaWxsOiAjNGNiZWZmICFpbXBvcnRhbnQ7XFxufVxcbi5NdWlDaGFydHNUb29sdGlwLW1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYmVmZiAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5NdWlDaGFydHNUb29sdGlwLXJvb3Qge1xcbiAgYmFja2dyb3VuZDogIzM1MzUzNSAhaW1wb3J0YW50O1xcbn1cXG4uTXVpVHlwb2dyYXBoeS1yb290IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLk11aUNoYXJ0c0F4aXNIaWdobGlnaHQtcm9vdCB7XFxuICBzdHJva2U6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcbi5NdWlDaGFydHNMZWdlbmQtbWFyayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XFxuaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvICovXFxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXFxuOnJvb3Qge1xcbiAgLyoqIHByaW1hcnkgKiovXFxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzg4MGZmO1xcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcXG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XFxuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzMTcxZTA7XFxuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XFxuICAvKiogc2Vjb25kYXJ5ICoqL1xcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xcbiAgLyoqIHRlcnRpYXJ5ICoqL1xcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XFxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XFxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XFxuICAvKiogc3VjY2VzcyAqKi9cXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XFxuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcXG4gIC8qKiB3YXJuaW5nICoqL1xcbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XFxuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XFxuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XFxuICAvKiogZGFuZ2VyICoqL1xcbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XFxuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XFxuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XFxuICAvKiogZGFyayAqKi9cXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XFxuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcXG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XFxuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XFxuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XFxuICAvKiogbWVkaXVtICoqL1xcbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XFxuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcXG4gIC8qKiBsaWdodCAqKi9cXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XFxuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XFxuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIC8qXFxuICAgKiBEYXJrIENvbG9yc1xcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICovXFxuICAvKiBib2R5IHtcXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LCAxNDAsIDI1NTtcXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XFxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcXG5cXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XFxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcXG5cXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XFxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XFxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XFxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XFxuXFxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XFxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywgMjIzLCAxMTc7XFxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XFxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XFxuXFxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XFxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XFxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XFxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XFxuXFxuICAgIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XFxuICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcXG5cXG4gICAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcXG4gICAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwgMjQ1LCAyNDg7XFxuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XFxuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xcbiAgICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xcbiAgICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XFxuXFxuICAgIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcXG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcXG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XFxuICAgIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xcblxcbiAgICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcXG4gICAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xcbiAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcXG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcXG4gICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcXG4gIH1cXG5cXG4gIC8qXFxuICAgKiBpT1MgRGFyayBUaGVtZVxcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICovXFxuICAvKiAuaW9zIGJvZHkge1xcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcXG5cXG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuXFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcXG4gICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcXG4gICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcXG4gICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcXG4gICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcXG4gICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XFxuXFxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcXG5cXG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xcbiAgfSAqL1xcbiAgLyogLmlvcyBpb24tbW9kYWwge1xcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XFxuICAgIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xcbiAgfSAgKi9cXG4gIC8qXFxuICAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICovXFxuICAvKiAubWQgYm9keSB7XFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xcblxcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcXG5cXG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xcblxcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcXG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcXG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcXG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcXG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcXG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcXG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xcblxcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XFxuXFxuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcXG5cXG4gICAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xcblxcbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XFxuICB9ICovXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90aGVtZS92YXJpYWJsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO3lDQUFBO0FBR0EsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUFSRjs7QUFXQTtFQUNFOzs7SUFBQTtFQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBO0VBc0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FBQTtFQWdDQTs7OztNQUFBO0VBTUE7OztJQUFBO0VBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUFBO0FBdUJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcXG5odHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy8gKi9cXG5cXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cXG46cm9vdCB7XFxuICAvKiogcHJpbWFyeSAqKi9cXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzODgwZmY7XFxuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcXG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcXG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcXG5cXG4gIC8qKiBzZWNvbmRhcnkgKiovXFxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XFxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XFxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XFxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XFxuXFxuICAvKiogdGVydGlhcnkgKiovXFxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XFxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcXG5cXG4gIC8qKiBzdWNjZXNzICoqL1xcbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XFxuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xcblxcbiAgLyoqIHdhcm5pbmcgKiovXFxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcXG5cXG4gIC8qKiBkYW5nZXIgKiovXFxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XFxuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcXG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcXG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XFxuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcXG5cXG4gIC8qKiBkYXJrICoqL1xcbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcXG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcXG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcXG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcXG5cXG4gIC8qKiBtZWRpdW0gKiovXFxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XFxuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcXG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xcblxcbiAgLyoqIGxpZ2h0ICoqL1xcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XFxuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XFxuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcXG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgLypcXG4gICAqIERhcmsgQ29sb3JzXFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgKi9cXG5cXG4gIC8qIGJvZHkge1xcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xcblxcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XFxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLCAyMDAsIDI1NTtcXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XFxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xcblxcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcXG5cXG4gICAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XFxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XFxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcXG5cXG4gICAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcXG4gICAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjEzLCA1MjtcXG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcXG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XFxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XFxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcXG5cXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XFxuICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xcblxcbiAgICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xcbiAgICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcXG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcXG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XFxuICAgIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XFxuICAgIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcXG5cXG4gICAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XFxuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XFxuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcXG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XFxuXFxuICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xcbiAgICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XFxuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xcbiAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xcbiAgICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xcbiAgfVxcblxcbiAgLypcXG4gICAqIGlPUyBEYXJrIFRoZW1lXFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgKi9cXG5cXG4gIC8qIC5pb3MgYm9keSB7XFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xcblxcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcXG5cXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcXG4gICAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcXG4gICAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcXG4gICAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcXG4gICAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcXG4gICAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcXG4gICAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcXG5cXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xcblxcbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XFxuICB9ICovXFxuXFxuICAvKiAuaW9zIGlvbi1tb2RhbCB7XFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XFxuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcXG4gICAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XFxuICB9ICAqL1xcblxcbiAgLypcXG4gICAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgKi9cXG5cXG4gIC8qIC5tZCBib2R5IHtcXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XFxuXFxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XFxuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xcblxcbiAgICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XFxuXFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcXG4gICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcXG4gICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcXG4gICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcXG4gICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XFxuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcXG4gICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XFxuXFxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcXG5cXG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xcblxcbiAgICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XFxuXFxuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcXG4gIH0gKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gNjA0ODM7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01haW5QYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01haW5QYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2V0dGluZ3NQYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NldHRpbmdzUGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmFyaWFibGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcmlhYmxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiTGF5b3V0IiwiUHJvdmlkZXIiLCJzdG9yZSIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiTUFQQk9YX0FDQ0VTU19UT0tFTiIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIkFjdGlvbkljb24iLCJzdHlsZWQiLCJkYXJrVGhlbWUiLCJBY3Rpb25CdXR0b24iLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiY2FyZCIsImFjdGl2ZSIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW9uQnV0dG9uIiwiSW9uTW9kYWwiLCJJb25IZWFkZXIiLCJJb25Db250ZW50IiwiSW9uVG9vbGJhciIsIklvblRpdGxlIiwiSW9uUGFnZSIsIklvbkxpc3QiLCJJb25JdGVtIiwiSW9uTGFiZWwiLCJJb25BdmF0YXIiLCJJb25JbWciLCJJb25CdXR0b25zIiwiSW9uU2VhcmNoYmFyIiwidXNlR2V0TGF0TG9uIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImFkZExvY2F0aW9uIiwicmVtb3ZlTG9jYXRpb24iLCJJY29uTW9vZEVtcHR5RmlsbGVkIiwiSWNvblRyYXNoRmlsbGVkIiwiQm90dG9tRHJhd2VyIiwiX3JlZiIsInNob3ciLCJtb2RhbCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInZhbHVlIiwic2V0VmFsdWUiLCJkaXNwYXRjaCIsIl91c2VTZWxlY3RvciIsInN0YXRlIiwibG9jYXRpb24iLCJvcHRpb25zIiwic2V0U3RhdGUiLCJlIiwiZGF0YSIsImRldGFpbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWF0Y2hlZExvY2F0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsInNlY29uZGFyeUJhY2tncm91bmRDb2xvciIsInJlZiIsImluaXRpYWxCcmVha3BvaW50IiwiaXNPcGVuIiwicG9zaXRpb24iLCJzbG90IiwiY29sb3IiLCJvbkNsaWNrIiwiX21vZGFsJGN1cnJlbnQiLCJjdXJyZW50IiwiZGlzbWlzcyIsIm1haW5UZXh0IiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJvdmVyZmxvdyIsIm1hcCIsImluZGV4IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJhZG1pbjEiLCJuYW1lIiwia2V5IiwiX21vZGFsJGN1cnJlbnQyIiwibGF0IiwibG9uIiwiY29uY2F0IiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJoZWlnaHQiLCJfcmVmMiIsIl9tb2RhbCRjdXJyZW50MyIsIkljb25DYXJldFJpZ2h0IiwiSWNvbkNhcmV0TGVmdCIsIlJvdyIsIkNvbCIsImNvbG9ycyIsIkNvbG9yTWV0ZXJXcmFwcGVyIiwiZGl2IiwiQ29sb3JMZWdlbmRXcmFwcGVyIiwiX3RlbXBsYXRlT2JqZWN0MiIsIkNvbG9yTWV0ZXIiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsIndpZHRoIiwiVGV4dCIsIl90ZW1wbGF0ZU9iamVjdDMiLCJTdWJUZXh0IiwiX3RlbXBsYXRlT2JqZWN0NCIsInNlY29uRGFyeVRleHQiLCJ0ZXh0cyIsIkNvbG9yTGVnZW5kVGV4dCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJ0ZXh0V3JhcCIsImZsZXhXcmFwIiwiYWxpZ25JdGVtcyIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblJpZ2h0IiwiQ29sb3JMZWdlbmQiLCJzZXRTaG93IiwicHJldiIsImZpbGwiLCJzdHJva2UiLCJ1c2VDYWxsYmFjayIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJzZWxlY3RTbGlkZSIsIkVtYmxhQ2Fyb3VzZWwiLCJfdXNlRW1ibGFDYXJvdXNlbCIsImxvb3AiLCJfdXNlRW1ibGFDYXJvdXNlbDIiLCJlbWJsYVJlZiIsImVtYmxhQXBpIiwiX3VzZVNlbGVjdG9yJGN1cnJlbnQiLCJzZWxlY3RlZEluZGV4IiwibG9nU2xpZGVzSW5WaWV3Iiwic2xpZGVzIiwic2xpZGVzSW5WaWV3Iiwib24iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJmaWx0ZXIiLCJJY29uVGV4dCIsImNoaWxkcmVuIiwidGV4dCIsIm51bWJlciIsInVuaXRzIiwic3R5bGVzIiwibnVtYmVyQ29udGFpbmVyIiwic2Vjb25kYXJ5VGV4dCIsImZvbnRTaXplIiwiUm91dGUiLCJJb25BcHAiLCJJb25Sb3V0ZXJPdXRsZXQiLCJzZXR1cElvbmljUmVhY3QiLCJJb25SZWFjdFJvdXRlciIsInVzZUdlb2xvY2F0aW9uIiwidXNlUXVlcnlXZWF0aGVyIiwiZGVmYXVsdFBhcmFtcyIsInNldERhdGEiLCJhZGRDdXJyZW50TG9jYXRpb24iLCJNYWluUGFnZSIsIlNldHRpbmdzUGFnZSIsInVzZUdldEFkZHJlc3MiLCJBcHAiLCJfdXNlR2VvbG9jYXRpb24iLCJfdXNlR2VvbG9jYXRpb24yIiwiYWRkcmVzcyIsImV4YWN0IiwicGF0aCIsImZvcm1hdERhdGUiLCJnZXRUaW1lIiwiTWFpbkluZm8iLCJfdXNlU2VsZWN0b3IkZGF0YSIsImN1cnJlbnRUZW1wZXJhdHVyZSIsImN1cnJlbnRUaW1lIiwiX3VzZVNlbGVjdG9yJGxvY2F0aW9uIiwid2VhdGhlciIsIl9mb3JtYXREYXRlIiwiX2Zvcm1hdERhdGUyIiwiZGF0ZSIsImhvdXJzIiwicGFkZGluZyIsImRhdGVDb250YWluZXIiLCJfb2JqZWN0U3ByZWFkIiwiRGF0ZSIsIm5vdyIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJTbGlkZXIiLCJGbHkiLCJJY29uTG9jYXRpb25GaWxsZWQiLCJJY29uQWRqdXN0bWVudHMiLCJJY29uUGx1cyIsInVzZUhpc3RvcnkiLCJsYXllcnMiLCJNYXBXcmFwcGVyIiwiTWFwIiwiX3JlZiR6b29tIiwiem9vbSIsIl9yZWYkc2V0U2hvd0lucHV0Iiwic2V0U2hvd0lucHV0IiwiaGlzdG9yeSIsInNlbGVjdGVkTGF5ZXIiLCJzZXRTZWxlY3RlZExheWVyIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJtYXBzIiwic2V0TWFwcyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiY291bnQiLCJzZXRDb3VudCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwicGxheSIsInNldFBsYXkiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJ0aW1lIiwic2V0VGltZSIsIl91c2VTdGF0ZTExIiwiY2xvdWRzX25ldyIsInByZWNpcGl0YXRpb25fbmV3IiwicHJlc3N1cmVfbmV3Iiwid2luZF9uZXciLCJ0ZW1wX25ldyIsIl91c2VTdGF0ZTEyIiwic291cmNlIiwiYWRkU291cmNlIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImxvYWRlZCIsInNldExvYWRlZCIsIm1hcENvbnRhaW5lciIsImNlbnRlciIsInJlc2l6ZSIsImZpbmlzaGVkIiwiZm9yRWFjaCIsInRpbGUiLCJhZGRMYXllciIsImlkIiwidHlwZSIsInRpbGVzIiwidGlsZVNpemUiLCJsYXlvdXQiLCJ2aXNpYmlsaXR5IiwibWluem9vbSIsIm1heHpvb20iLCJoYW5kbGUiLCJpMiIsImZyYW1lIiwic2V0TGF5b3V0UHJvcGVydHkiLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldFBhaW50UHJvcGVydHkiLCJjbGVhclRpbWVvdXQiLCJpbnRlcnZhbCIsImdldFdlYXRoZXJNYXBzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwibmV4dCIsImZldGNoIiwic2VudCIsImpzb24iLCJyYWRhciIsInBhc3QiLCJzdG9wIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmbHlUbyIsImR1cmF0aW9uIiwiZXNzZW50aWFsIiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJhZGRJbWFnZSIsInNyYyIsImZlYXR1cmVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImdvVG9TdGFydCIsImhhbmRsZURyYWciLCJ2YWwiLCJvdmVybGF5cyIsInNsaWRlckNhbGxiYWNrIiwic2l6ZSIsInRvcCIsInB1c2giLCJsZWZ0IiwiTGluZUNoYXJ0IiwiTXVpQ2hhcnQiLCJob3VybHkiLCJfcmVmMiR0ZW1wZXJhdHVyZV8ybSIsInRlbXBlcmF0dXJlXzJtIiwiX3JlZjIkdGltZSIsImZpbHRlcmVkVGltZSIsInQiLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXJlZFRlbXBlcmF0dXJlIiwic2xpY2UiLCJ4QXhpcyIsInNjYWxlVHlwZSIsInZhbHVlRm9ybWF0dGVyIiwic2VyaWVzIiwic2hvd01hcmsiLCJfcmVmMyIsIlBhZ2VXcmFwcGVyIiwiQnV0dG9uIiwiZmlyc3RMZXR0ZXJVcHBlcmNhc2UiLCJzZXRQcmVmZXJlbmNlcyIsIkNsaWNrQWJsZSIsImhhbmRsZUNsaWNrIiwibGFzdCIsImZpcnN0IiwiZmxleCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImZvbnRGYW1pbHkiLCJTdGFja2VkU2V0dGluZ3MiLCJwcmVmZXJlbmNlcyIsIk9iamVjdCIsImVudHJpZXMiLCJfcmVmNCIsInNlbGVjdGVkIiwicHJlZmVyZW5jZU5hbWUiLCJtYXJnaW5Cb3R0b20iLCJrZXlzIiwiaGVhZGVyIiwib3B0aW9uIiwiX2RlZmluZVByb3BlcnR5IiwiU2V0dGluZ3MiLCJfcmVmNSIsIm5hdmlnYXRpb24iLCJ1aVRoZW1lIiwidGhlbWUiLCJyZXN0IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwic2Nyb2xsVmlldyIsIm1hcmdpblRvcCIsIk1hblNsaWRlciIsIkljb25QbGF5ZXJQYXVzZUZpbGxlZCIsIkljb25QbGF5ZXJQbGF5RmlsbGVkIiwiZ2V0VGltZUFycmF5IiwiYnV0dG9uIiwiU2xpZGVyQ29udGFpbmVyIiwiU2xpZGVyV3JhcHBlciIsIl9yZWYkcGxheSIsInByb3BzIiwidGltZUFycmF5IiwibWFya3MiLCJsYWJlbCIsIm1hcmtzTWFwIiwicmVkdWNlIiwiYWNjIiwidGh1bWJTaXplIiwibWluIiwic3RlcCIsIm1heCIsImxhYmVsQWx3YXlzT24iLCJtYXJrTGFiZWwiLCJ0cmFjayIsImJvcmRlciIsIm9uQ2hhbmdlIiwiSHVtaWRpdHkiLCJQcmVjaXBpdGF0aW9uIiwiUHJlc3N1cmUiLCJDbG91ZENvdmVyIiwiRmVlbHNMaWtlIiwiRHJld1BvaW50IiwiV2luZCIsIlVWaW5kZXgiLCJXcmFwcGVyIiwiV2VhdGhlckRhdGEiLCJzZWxlY3RlZERheSIsIndlYXRoZXJNYXAiLCJmaW5kIiwiayIsInJvdyIsImxpZ2h0VGhlbWUiLCJkaXNhYmxlZFRleHQiLCJib3JkZXJDb2xvciIsIl91c2VTdGF0ZTIkIiwic2V0Q29vcmRzIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb29yZHMiLCJnZXRMb2NhdGlvbiIsImFicnVwdCIsIkVYUE9fUFVCTElDX0dFT0xPQ0FUSU9OX0FQSSIsInRoZW4iLCJlcnJvciIsInJlc3VsdHMiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInRpbWVyIiwic2V0Q2FzaCIsImNhc2giLCJfc2VsZWN0ZWRJbmRleCIsInNldFdlYXRoZXIiLCJqb2luIiwiY3VycmVudFRlbXAiLCJjdXIiLCJpZHgiLCJtaWxsaXNlY29uZHMiLCJwYXJzZSIsInBhcmFtIiwic2hvd0lucHV0IiwiaXNEaXNtaXNzZWQiLCJoYW5kbGVTY3JvbGwiLCJub2RlIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEV2ZW50cyIsIm9uSW9uU2Nyb2xsIiwiZnVsbHNjcmVlbiIsIkljb25DaGV2cm9uTGVmdCIsIkdvQmFjayIsImdvQmFjayIsIl9yZWYkZmlsbCIsIl9leHRlbmRzIiwieG1sbnMiLCJkIiwiRGV3UG9pbnQiLCJjbGlwUGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVqb2luIiwiZGVmYXVsdCIsImNyZWF0ZVNsaWNlIiwiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJ0aW1lRm9ybWF0IiwidGVtcGVyYXR1cmVVbml0IiwicHJlY2lwaXRhdGlvblVuaXQiLCJ3aW5kU3BlZWQiLCJwcmVzc3VyZSIsImRpc3RhbmNlIiwicHJlZmVyZW5jZXNTbGljZSIsInJlZHVjZXJzIiwiYWN0aW9uIiwicGF5bG9hZCIsImNhc2hTbGljZSIsImxvY2F0aW9uU2xpY2UiLCJwaWNrTG9jYXRpb24iLCJhY3Rpb25zIiwiZGF0YVNsaWNlIiwic2V0U2VsZWN0ZWREYXkiLCJfbG9jYXRpb25TbGljZSRhY3Rpb24iLCJfZGF0YVNsaWNlJGFjdGlvbnMiLCJyb290UmVkdWNlciIsInJlZHVjZXIiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJpbW11dGFibGVDaGVjayIsIndhcm5BZnRlciIsInNlcmlhbGl6YWJsZUNoZWNrIiwiREFZUyIsImRheU9mVGhlV2VlayIsImdldERheSIsImRheSIsImdldERhdGUiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJjdXJyZW50TSIsInN0cmluZyIsIl9zdHJpbmckc3BsaXQiLCJzcGxpdCIsIl9zdHJpbmckc3BsaXQyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsImRielRvUmFpbiIsImRieiIsIk1hdGgiLCJwb3ciLCJkQloiXSwic291cmNlUm9vdCI6IiJ9