"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/bin/sumfetch.ts":
/*!***********************************!*\
  !*** ./src/utils/bin/sumfetch.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Azis_Sukmawan_LiveTerm_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Azis_Sukmawan_LiveTerm_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Azis_Sukmawan_LiveTerm_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config.json */ \"./config.json\");\n/* harmony import */ var _assets_profile_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/profile.jpg */ \"./src/assets/profile.jpg\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\nvar sumfetch = function() {\n    var _ref = _asyncToGenerator(C_Users_Azis_Sukmawan_LiveTerm_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(args) {\n        return C_Users_Azis_Sukmawan_LiveTerm_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    return _ctx.abrupt(\"return\", '\\n    <div style=\"display: inline-flex; align-items: center;\">\\n    <img style=\"margin-right: 2em;\" src='.concat(_assets_profile_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src, ' width=\"180px\" />       \\n    <div/>                                           \\n    \\uF2BC sumfetch : Summary display\\n    -----------\\n    \\uF489 ABOUT\\n    \\uF415 ').concat(_config_json__WEBPACK_IMPORTED_MODULE_1__.name, '\\n    \\uF767 <u><a href=\"').concat(_config_json__WEBPACK_IMPORTED_MODULE_1__.resume_url, '\" target=\"_blank\">resume</a></u>\\n    \\uFA9E <u><a href=\"').concat(_config_json__WEBPACK_IMPORTED_MODULE_1__.repo, '\" target=\"_blank\">Github repo</a></u>\\n    -----------\\n    \\uF84B CONTACT\\n    \\uF6EF <u><a href=\"mailto:').concat(_config_json__WEBPACK_IMPORTED_MODULE_1__.email, '\" target=\"_blank\">').concat(_config_json__WEBPACK_IMPORTED_MODULE_1__.email, '</a></u>\\n    \\uF09B <u><a href=\"https://github.com/').concat(_config_json__WEBPACK_IMPORTED_MODULE_1__.social.github, '\" target=\"_blank\">github.com/').concat(_config_json__WEBPACK_IMPORTED_MODULE_1__.social.github, \"</a></u>\\n    -----------\\n\"));\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function sumfetch(args) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (sumfetch);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYmluL3N1bWZldGNoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNLO0FBRS9DLElBQU1FLFFBQVE7ZUFBRyw2S0FBT0MsSUFBYyxFQUFzQjs7OztpREFDakQsMEdBRTZCLENBS2hDSCxNQUFhLENBTHFCQywrREFBVyxFQUFDLHdLQUs5QyxDQUFjLENBQ0FELE1BQWlCLENBRDdCQSw4Q0FBVyxFQUFDLDJCQUNGLENBQW9CLENBQ2xCQSxNQUFXLENBRFhBLG9EQUFpQixFQUFDLDJEQUNwQixDQUFjLENBR0xBLE1BQVksQ0FIbkJBLDhDQUFXLEVBQUMsNEdBR1AsQ0FBZSxDQUFvQkEsTUFBWSxDQUE3Q0EsK0NBQVksRUFBQyxvQkFBa0IsQ0FBZSxDQUNsQ0EsTUFBa0IsQ0FER0EsK0NBQVksRUFBQyxzREFDdEMsQ0FBdUIsQ0FBK0JBLE1BQW9CLENBQXhFQSx1REFBb0IsRUFBQywrQkFBNkIsQ0FBdUIsT0FFaEgsQ0FGMkZBLHVEQUFvQixFQUFDLDZCQUVoSCxDQUFDOzs7Ozs7S0FDQTtvQkFqQktFLFFBQVEsQ0FBVUMsSUFBYzs7O0dBaUJyQztBQUVELCtEQUFlRCxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2Jpbi9zdW1mZXRjaC50cz82NDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vLi4vY29uZmlnLmpzb24nO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi8uLi9hc3NldHMvcHJvZmlsZS5qcGcnO1xyXG5cclxuY29uc3Qgc3VtZmV0Y2ggPSBhc3luYyAoYXJnczogc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cclxuICAgIDxpbWcgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDJlbTtcIiBzcmM9JHtQcm9maWxlLnNyY30gd2lkdGg9XCIxODBweFwiIC8+ICAgICAgIFxyXG4gICAgPGRpdi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAg74q8IHN1bWZldGNoIDogU3VtbWFyeSBkaXNwbGF5XHJcbiAgICAtLS0tLS0tLS0tLVxyXG4gICAg75KJIEFCT1VUXHJcbiAgICDvkJUgJHtjb25maWcubmFtZX1cclxuICAgIO+dpyA8dT48YSBocmVmPVwiJHtjb25maWcucmVzdW1lX3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5yZXN1bWU8L2E+PC91PlxyXG4gICAg76qeIDx1PjxhIGhyZWY9XCIke2NvbmZpZy5yZXBvfVwiIHRhcmdldD1cIl9ibGFua1wiPkdpdGh1YiByZXBvPC9hPjwvdT5cclxuICAgIC0tLS0tLS0tLS0tXHJcbiAgICDvoYsgQ09OVEFDVFxyXG4gICAg75uvIDx1PjxhIGhyZWY9XCJtYWlsdG86JHtjb25maWcuZW1haWx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHtjb25maWcuZW1haWx9PC9hPjwvdT5cclxuICAgIO+CmyA8dT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tLyR7Y29uZmlnLnNvY2lhbC5naXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Z2l0aHViLmNvbS8ke2NvbmZpZy5zb2NpYWwuZ2l0aHVifTwvYT48L3U+XHJcbiAgICAtLS0tLS0tLS0tLVxyXG5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3VtZmV0Y2g7XHJcbiJdLCJuYW1lcyI6WyJjb25maWciLCJQcm9maWxlIiwic3VtZmV0Y2giLCJhcmdzIiwic3JjIiwibmFtZSIsInJlc3VtZV91cmwiLCJyZXBvIiwiZW1haWwiLCJzb2NpYWwiLCJnaXRodWIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/bin/sumfetch.ts\n");

/***/ })

});