"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/BasicMenu.tsx":
/*!**************************************!*\
  !*** ./src/components/BasicMenu.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BasicMenu)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var node_modules_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node_modules/@mui/material/Button */ \"./node_modules/@mui/material/node/Button/index.js\");\n/* harmony import */ var node_modules_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_modules_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var node_modules_mui_material_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node_modules/@mui/material/Menu */ \"./node_modules/@mui/material/node/Menu/index.js\");\n/* harmony import */ var node_modules_mui_material_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_modules_mui_material_Menu__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var node_modules_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/@mui/material/MenuItem */ \"./node_modules/@mui/material/node/MenuItem/index.js\");\n/* harmony import */ var node_modules_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_modules_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction BasicMenu() {\n    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((node_modules_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        id: \"basic-button\",\n                        \"aria-controls\": open ? \"basic-menu\" : undefined,\n                        \"aria-haspopup\": \"true\",\n                        \"aria-expanded\": open ? \"true\" : undefined,\n                        onClick: handleClick,\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((node_modules_mui_material_Menu__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        id: \"basic-menu\",\n                        anchorEl: anchorEl,\n                        open: open,\n                        onClose: handleClose,\n                        MenuListProps: {\n                            \"aria-labelledby\": \"basic-button\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((node_modules_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                onClick: handleClose,\n                                children: \"Home 1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((node_modules_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                onClick: handleClose,\n                                children: \"Home 2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((node_modules_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                onClick: handleClose,\n                                children: \"Home 3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((node_modules_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        id: \"basic-button\",\n                        \"aria-controls\": open ? \"basic-menu\" : undefined,\n                        \"aria-haspopup\": \"true\",\n                        \"aria-expanded\": open ? \"true\" : undefined,\n                        onClick: handleClick,\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((node_modules_mui_material_Menu__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        id: \"basic-menu\",\n                        anchorEl: anchorEl,\n                        open: open,\n                        onClose: handleClose,\n                        MenuListProps: {\n                            \"aria-labelledby\": \"basic-button\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((node_modules_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                onClick: handleClose,\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((node_modules_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                onClick: handleClose,\n                                children: \"My account\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((node_modules_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                onClick: handleClose,\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/BasicMenu.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYXNpY01lbnUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUN3QjtBQUNKO0FBQ1E7QUFFNUMsU0FBU0k7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLDJDQUFjLENBQXFCO0lBQ25FLE1BQU1RLE9BQU9DLFFBQVFKO0lBQ3JCLE1BQU1LLGNBQWMsQ0FBQ0M7UUFDbkJMLFlBQVlLLE1BQU1DLGFBQWE7SUFDakM7SUFDQSxNQUFNQyxjQUFjO1FBQ2xCUCxZQUFZO0lBQ2Q7SUFFQSxxQkFDRTs7MEJBQUUsOERBQUNROztrQ0FDRyw4REFBQ2IseUVBQU1BO3dCQUNIYyxJQUFHO3dCQUNIQyxpQkFBZVIsT0FBTyxlQUFlUzt3QkFDckNDLGlCQUFjO3dCQUNkQyxpQkFBZVgsT0FBTyxTQUFTUzt3QkFDL0JHLFNBQVNWO2tDQUNaOzs7Ozs7a0NBR0QsOERBQUNSLHVFQUFJQTt3QkFDRGEsSUFBRzt3QkFDSFYsVUFBVUE7d0JBQ1ZHLE1BQU1BO3dCQUNOYSxTQUFTUjt3QkFDVFMsZUFBZTs0QkFDWCxtQkFBbUI7d0JBQ3ZCOzswQ0FFQSw4REFBQ25CLDJFQUFRQTtnQ0FBQ2lCLFNBQVNQOzBDQUFhOzs7Ozs7MENBQ2hDLDhEQUFDViwyRUFBUUE7Z0NBQUNpQixTQUFTUDswQ0FBYTs7Ozs7OzBDQUNoQyw4REFBQ1YsMkVBQVFBO2dDQUFDaUIsU0FBU1A7MENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFbEMsOERBQUNDOztrQ0FDQyw4REFBQ2IseUVBQU1BO3dCQUNIYyxJQUFHO3dCQUNIQyxpQkFBZVIsT0FBTyxlQUFlUzt3QkFDckNDLGlCQUFjO3dCQUNkQyxpQkFBZVgsT0FBTyxTQUFTUzt3QkFDL0JHLFNBQVNWO2tDQUNaOzs7Ozs7a0NBR0QsOERBQUNSLHVFQUFJQTt3QkFDRGEsSUFBRzt3QkFDSFYsVUFBVUE7d0JBQ1ZHLE1BQU1BO3dCQUNOYSxTQUFTUjt3QkFDVFMsZUFBZTs0QkFDWCxtQkFBbUI7d0JBQ3ZCOzswQ0FFQSw4REFBQ25CLDJFQUFRQTtnQ0FBQ2lCLFNBQVNQOzBDQUFhOzs7Ozs7MENBQ2hDLDhEQUFDViwyRUFBUUE7Z0NBQUNpQixTQUFTUDswQ0FBYTs7Ozs7OzBDQUNoQyw4REFBQ1YsMkVBQVFBO2dDQUFDaUIsU0FBU1A7MENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0ZXJpYWwtdWktbmV4dGpzLXRzLy4vc3JjL2NvbXBvbmVudHMvQmFzaWNNZW51LnRzeD8yYTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL01lbnVJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNNZW51KCkge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD48ZGl2PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1idXR0b25cIlxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuID8gJ2Jhc2ljLW1lbnUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e29wZW4gPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgIGlkPVwiYmFzaWMtbWVudVwiXG4gICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgIE1lbnVMaXN0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiAnYmFzaWMtYnV0dG9uJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+SG9tZSAxPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Ib21lIDI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PkhvbWUgMzwvTWVudUl0ZW0+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgPC9kaXY+PGRpdj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17b3BlbiA/ICdiYXNpYy1tZW51JyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e29wZW4gPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1tZW51XCJcbiAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgIE1lbnVMaXN0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogJ2Jhc2ljLWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlByb2ZpbGU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5NeSBhY2NvdW50PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TG9nb3V0PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvZGl2PjwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIk1lbnUiLCJNZW51SXRlbSIsIkJhc2ljTWVudSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImRpdiIsImlkIiwiYXJpYS1jb250cm9scyIsInVuZGVmaW5lZCIsImFyaWEtaGFzcG9wdXAiLCJhcmlhLWV4cGFuZGVkIiwib25DbGljayIsIm9uQ2xvc2UiLCJNZW51TGlzdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/BasicMenu.tsx\n");

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavItem */ \"./src/components/NavItem.tsx\");\n/* harmony import */ var _BasicMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasicMenu */ \"./src/components/BasicMenu.tsx\");\n\n\n // Update the import path if necessary\n\nconst Layout = ({ children })=>{\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BasicMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"bg-blue-500 p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container mx-auto flex justify-between items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/\",\n                                    className: \"text-white font-bold text-lg\",\n                                    children: \"Next.js App\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: `md:flex space-x-4 ${isOpen ? \"block\" : \"hidden\"} md:space-x-8 md:items-center`,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                                            lineNumber: 21,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/about\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/services\",\n                                            children: \"Services\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/account\",\n                                            children: \"Account\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/contact\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container mx-auto mt-8\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/Layout.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ25CLENBQUMsc0NBQXNDO0FBQ25DO0FBTXBDLE1BQU1JLFNBQWdDLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQy9DLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVyQyxxQkFDSTs7MEJBQ0EsOERBQUNFLGtEQUFTQTs7Ozs7MEJBRVYsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ1gsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0U7b0NBQUVDLE1BQUs7b0NBQUlILFdBQVU7OENBQStCOzs7Ozs7OENBQ3JELDhEQUFDSTtvQ0FBR0osV0FBVyxDQUFDLGtCQUFrQixFQUFFSCxTQUFTLFVBQVUsU0FBUyw2QkFBNkIsQ0FBQzs7c0RBQzFGLDhEQUFDSixnREFBT0E7NENBQUNVLE1BQUs7c0RBQUk7Ozs7OztzREFDbEIsOERBQUNWLGdEQUFPQTs0Q0FBQ1UsTUFBSztzREFBUzs7Ozs7O3NEQUN2Qiw4REFBQ1YsZ0RBQU9BOzRDQUFDVSxNQUFLO3NEQUFZOzs7Ozs7c0RBQzFCLDhEQUFDVixnREFBT0E7NENBQUNVLE1BQUs7c0RBQVc7Ozs7OztzREFDekIsOERBQUNWLGdEQUFPQTs0Q0FBQ1UsTUFBSztzREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXJDLDhEQUFDSjt3QkFBSUMsV0FBVTtrQ0FDVko7Ozs7Ozs7Ozs7Ozs7O0FBSWpCO0FBRUEsaUVBQWVELE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRlcmlhbC11aS1uZXh0anMtdHMvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4P2RlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2SXRlbSBmcm9tICcuL05hdkl0ZW0nOyAvLyBVcGRhdGUgdGhlIGltcG9ydCBwYXRoIGlmIG5lY2Vzc2FyeVxuaW1wb3J0IEJhc2ljTWVudSBmcm9tICcuL0Jhc2ljTWVudSc7XG5cbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTsgLy8gRGVmaW5lIGNoaWxkcmVuIGFzIFJlYWN0Tm9kZSB0eXBlXG59XG5cbmNvbnN0IExheW91dDogUmVhY3QuRkM8TGF5b3V0UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8QmFzaWNNZW51PlxuICAgICAgICA8L0Jhc2ljTWVudT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtbGdcIj5OZXh0LmpzIEFwcDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YG1kOmZsZXggc3BhY2UteC00ICR7aXNPcGVuID8gJ2Jsb2NrJyA6ICdoaWRkZW4nfSBtZDpzcGFjZS14LTggbWQ6aXRlbXMtY2VudGVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL1wiPkhvbWU8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL3NlcnZpY2VzXCI+U2VydmljZXM8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL2FjY291bnRcIj5BY2NvdW50PC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtdC04XCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdkl0ZW0iLCJCYXNpY01lbnUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzT3BlbiIsInNldElzT3BlbiIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsImEiLCJocmVmIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout.tsx\n");

/***/ }),

/***/ "./src/components/NavItem.tsx":
/*!************************************!*\
  !*** ./src/components/NavItem.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst NavItem = ({ href, children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: href,\n            className: \"text-white hover:text-gray-200\",\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/NavItem.tsx\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/components/NavItem.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZJdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFPMUIsTUFBTUMsVUFBa0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRTtJQUN2RCxxQkFDSSw4REFBQ0M7a0JBQ0csNEVBQUNDO1lBQUVILE1BQU1BO1lBQU1JLFdBQVU7c0JBQWtDSDs7Ozs7Ozs7Ozs7QUFHdkU7QUFFQSxpRUFBZUYsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGVyaWFsLXVpLW5leHRqcy10cy8uL3NyYy9jb21wb25lbnRzL05hdkl0ZW0udHN4P2Y3N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIE5hdkl0ZW1Qcm9wcyB7XG4gICAgaHJlZjogc3RyaW5nO1xuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlOyAvLyBEZWZpbmUgY2hpbGRyZW4gYXMgYW4gb3B0aW9uYWwgUmVhY3QuUmVhY3ROb2RlXG59XG5cbmNvbnN0IE5hdkl0ZW06IFJlYWN0LkZDPE5hdkl0ZW1Qcm9wcz4gPSAoeyBocmVmLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktMjAwXCI+e2NoaWxkcmVufTwvYT5cbiAgICAgICAgPC9saT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdkl0ZW0iLCJocmVmIiwiY2hpbGRyZW4iLCJsaSIsImEiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavItem.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/pages/_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 1\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/johnzeren/git/next_testing_with_mui/src/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 1\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDMEM7QUFHMUMsTUFBTUMsUUFBUSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzdDLHFCQUdKLDhEQUFDSCwwREFBTUE7a0JBQ1AsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFJeEI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGVyaWFsLXVpLW5leHRqcy10cy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbm9kZV9tb2R1bGVzL25leHQvYXBwJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEJhc2ljTWVudSBmcm9tICdAL2NvbXBvbmVudHMvQmFzaWNNZW51JztcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG5cblxuPExheW91dD5cbjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbjwvTGF5b3V0PlxuKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@mui/base/FocusTrap":
/*!**************************************!*\
  !*** external "@mui/base/FocusTrap" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/base/FocusTrap");

/***/ }),

/***/ "@mui/base/Portal":
/*!***********************************!*\
  !*** external "@mui/base/Portal" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@mui/base/Portal");

/***/ }),

/***/ "@mui/base/unstable_useModal":
/*!**********************************************!*\
  !*** external "@mui/base/unstable_useModal" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/base/unstable_useModal");

/***/ }),

/***/ "@mui/base/utils":
/*!**********************************!*\
  !*** external "@mui/base/utils" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@mui/base/utils");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils/HTMLElementType":
/*!*********************************************!*\
  !*** external "@mui/utils/HTMLElementType" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/HTMLElementType");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/chainPropTypes");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/elementAcceptingRef");

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/elementTypeAcceptingRef");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/getScrollbarSize":
/*!**********************************************!*\
  !*** external "@mui/utils/getScrollbarSize" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/getScrollbarSize");

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/integerPropType");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/refType");

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/resolveProps");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useIsFocusVisible":
/*!***********************************************!*\
  !*** external "@mui/utils/useIsFocusVisible" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useIsFocusVisible");

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useTimeout");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("react-is");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();