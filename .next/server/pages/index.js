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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAurpWhbyIbARN6oeLDOo1piMbYEMhoCHo\",\n    authDomain: \"my-chat-app-private.firebaseapp.com\",\n    projectId: \"my-chat-app-private\",\n    storageBucket: \"my-chat-app-private.appspot.com\",\n    messagingSenderId: \"726547814463\",\n    appId: \"1:726547814463:web:b7b146539eae77e8b4408a\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ0w7QUFFeEMsTUFBTUUsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBRVJDLFlBQVk7SUFFWkMsV0FBVztJQUVYQyxlQUFlO0lBRWZDLG1CQUFtQjtJQUVuQkMsT0FBTztBQUNUO0FBRU8sTUFBTUMsTUFBTVQsMkRBQWFBLENBQUNFLGdCQUFnQjtBQUMxQyxNQUFNUSxPQUFPVCxzREFBT0EsQ0FBQ1EsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vZmlyZWJhc2UudHM/OTJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBdXJwV2hieUliQVJONm9lTERPbzFwaU1iWUVNaG9DSG9cIixcclxuXHJcbiAgYXV0aERvbWFpbjogXCJteS1jaGF0LWFwcC1wcml2YXRlLmZpcmViYXNlYXBwLmNvbVwiLFxyXG5cclxuICBwcm9qZWN0SWQ6IFwibXktY2hhdC1hcHAtcHJpdmF0ZVwiLFxyXG5cclxuICBzdG9yYWdlQnVja2V0OiBcIm15LWNoYXQtYXBwLXByaXZhdGUuYXBwc3BvdC5jb21cIixcclxuXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzI2NTQ3ODE0NDYzXCIsXHJcblxyXG4gIGFwcElkOiBcIjE6NzI2NTQ3ODE0NDYzOndlYjpiN2IxNDY1MzllYWU3N2U4YjQ0MDhhXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./pages/AuthPage.tsx":
/*!****************************!*\
  !*** ./pages/AuthPage.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase */ \"./firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nfunction AuthPage() {\n    const onClick = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithRedirect)(_firebase__WEBPACK_IMPORTED_MODULE_1__.auth, new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo\",\n                children: \"\\uD83D\\uDC4B \\uD83D\\uDCAC \\uD83E\\uDD16 \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\AuthPage.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text\",\n                children: \"Welcome to ChatRCE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\AuthPage.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text\",\n                style: {\n                    paddingBottom: \"16px\"\n                },\n                children: \"Log in with your account to continue\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\AuthPage.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"neon-button\",\n                onClick: onClick,\n                children: \"Log In\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\AuthPage.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"neon-button\",\n                onClick: onClick,\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\AuthPage.tsx\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\AuthPage.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BdXRoUGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ3FDO0FBRXhELFNBQVNHLFdBQVc7SUFDakMsTUFBTUMsVUFBVSxJQUFNO1FBQ3BCSCxpRUFBa0JBLENBQUNELDJDQUFJQSxFQUFFLElBQUlFLDZEQUFrQkE7SUFDakQ7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFPOzs7Ozs7MEJBQ3RCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBTzs7Ozs7OzBCQUN0Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQU9DLE9BQU87b0JBQUVDLGVBQWU7Z0JBQU87MEJBQUc7Ozs7OzswQkFHeEQsOERBQUNDO2dCQUFPSCxXQUFVO2dCQUFjRixTQUFTQTswQkFBUzs7Ozs7O1lBRXpDOzBCQUFDLDhEQUFDSztnQkFBT0gsV0FBVTtnQkFBY0YsU0FBU0E7MEJBQVM7Ozs7Ozs7Ozs7OztBQUtsRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9BdXRoUGFnZS50c3g/MTMzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgc2lnbkluV2l0aFJlZGlyZWN0LCBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aFBhZ2UoKSB7XHJcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcclxuICAgIHNpZ25JbldpdGhSZWRpcmVjdChhdXRoLCBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+8J+RiyDwn5KsIPCfpJYgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPldlbGNvbWUgdG8gQ2hhdFJDRTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjE2cHhcIiB9fT5cclxuICAgICAgICBMb2cgaW4gd2l0aCB5b3VyIGFjY291bnQgdG8gY29udGludWVcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmVvbi1idXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICBMb2cgSW5cclxuICAgICAgPC9idXR0b24+IDxidXR0b24gY2xhc3NOYW1lPVwibmVvbi1idXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICBTaWduIFVwXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJhdXRoIiwic2lnbkluV2l0aFJlZGlyZWN0IiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiQXV0aFBhZ2UiLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwYWRkaW5nQm90dG9tIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/AuthPage.tsx\n");

/***/ }),

/***/ "./pages/ChatsPage.tsx":
/*!*****************************!*\
  !*** ./pages/ChatsPage.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase */ \"./firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var react_chat_engine_pretty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chat-engine-pretty */ \"react-chat-engine-pretty\");\n/* harmony import */ var react_chat_engine_pretty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chat_engine_pretty__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction Page(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    position: \"absolute\",\n                    top: \"0px\",\n                    left: \"0px\"\n                },\n                onClick: ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_1__.auth),\n                children: \"Sign Out\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\ChatsPage.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chat_engine_pretty__WEBPACK_IMPORTED_MODULE_3__.PrettyChatWindow, {\n                projectId: \"3b0b46aa-eddb-489d-bfe1-85f86a336b72\",\n                username: props.user.email || \"\",\n                secret: props.user.uid,\n                style: {\n                    height: \"100%\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\ChatsPage.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\ChatsPage.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9DaGF0c1BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1k7QUFDYztBQUs3QyxTQUFTRyxLQUFLQyxLQUFnQixFQUFFO0lBQzdDLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPO1lBQUVDLFFBQVE7UUFBUTs7MEJBQzVCLDhEQUFDQztnQkFDQ0YsT0FBTztvQkFBRUcsVUFBVTtvQkFBWUMsS0FBSztvQkFBT0MsTUFBTTtnQkFBTTtnQkFDdkRDLFNBQVMsSUFBTVgsc0RBQU9BLENBQUNELDJDQUFJQTswQkFDNUI7Ozs7OzswQkFHRCw4REFBQ0Usc0VBQWdCQTtnQkFDZlcsV0FBVTtnQkFDVkMsVUFBVVYsTUFBTVcsSUFBSSxDQUFDQyxLQUFLLElBQUk7Z0JBQzlCQyxRQUFRYixNQUFNVyxJQUFJLENBQUNHLEdBQUc7Z0JBQ3RCWixPQUFPO29CQUFFQyxRQUFRO2dCQUFPOzs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvQ2hhdHNQYWdlLnRzeD8xZWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBzaWduT3V0LCBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgUHJldHR5Q2hhdFdpbmRvdyB9IGZyb20gXCJyZWFjdC1jaGF0LWVuZ2luZS1wcmV0dHlcIjtcclxuaW50ZXJmYWNlIENoYXRQcm9wcyB7XHJcbiAgdXNlcjogVXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZShwcm9wczogQ2hhdFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIgfX0+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IFwiMHB4XCIsIGxlZnQ6IFwiMHB4XCIgfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KGF1dGgpfVxyXG4gICAgICA+XHJcbiAgICAgICAgU2lnbiBPdXRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxQcmV0dHlDaGF0V2luZG93XHJcbiAgICAgICAgcHJvamVjdElkPVwiM2IwYjQ2YWEtZWRkYi00ODlkLWJmZTEtODVmODZhMzM2YjcyXCJcclxuICAgICAgICB1c2VybmFtZT17cHJvcHMudXNlci5lbWFpbCB8fCBcIlwifVxyXG4gICAgICAgIHNlY3JldD17cHJvcHMudXNlci51aWR9XHJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJhdXRoIiwic2lnbk91dCIsIlByZXR0eUNoYXRXaW5kb3ciLCJQYWdlIiwicHJvcHMiLCJkaXYiLCJzdHlsZSIsImhlaWdodCIsImJ1dHRvbiIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIm9uQ2xpY2siLCJwcm9qZWN0SWQiLCJ1c2VybmFtZSIsInVzZXIiLCJlbWFpbCIsInNlY3JldCIsInVpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ChatsPage.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/firebase */ \"./firebase.ts\");\n/* harmony import */ var _AuthPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthPage */ \"./pages/AuthPage.tsx\");\n/* harmony import */ var _ChatsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatsPage */ \"./pages/ChatsPage.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, _AuthPage__WEBPACK_IMPORTED_MODULE_3__, _ChatsPage__WEBPACK_IMPORTED_MODULE_4__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, _AuthPage__WEBPACK_IMPORTED_MODULE_3__, _ChatsPage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction Home() {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    _firebase__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged((user)=>setUser(user));\n    if (user === undefined) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\index.tsx\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, this);\n    } else if (user === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\index.tsx\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatsPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            user: user\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\danny_chiu\\\\Documents\\\\GitHub\\\\NextJS_ChatApp\\\\frontend\\\\pages\\\\index.tsx\",\n            lineNumber: 16,\n            columnNumber: 12\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBRUM7QUFDRDtBQUNFO0FBRXBCLFNBQVNJLE9BQU87SUFDN0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQTtJQUNoQ0MsOERBQXVCLENBQUMsQ0FBQ0ksT0FBU0MsUUFBUUQ7SUFFMUMsSUFBSUEsU0FBU0csV0FBVztRQUN0QixxQkFBTyw4REFBQ0M7Ozs7O0lBQ1YsT0FBTyxJQUFJSixTQUFTLElBQUksRUFBRTtRQUN4QixxQkFBTyw4REFBQ0gsaURBQVFBOzs7OztJQUNsQixPQUFPO1FBQ0wscUJBQU8sOERBQUNDLGtEQUFTQTtZQUFDRSxNQUFNQTs7Ozs7O0lBQzFCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9maXJlYmFzZVwiO1xuaW1wb3J0IEF1dGhQYWdlIGZyb20gJy4vQXV0aFBhZ2UnXG5pbXBvcnQgQ2hhdHNQYWdlIGZyb20gJy4vQ2hhdHNQYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4oKTtcbiAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHNldFVzZXIodXNlcikpO1xuXG4gIGlmICh1c2VyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfSBlbHNlIGlmICh1c2VyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDxBdXRoUGFnZSAvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPENoYXRzUGFnZSB1c2VyPXt1c2VyfSAvPjtcbiAgfSAgXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhdXRoIiwiQXV0aFBhZ2UiLCJDaGF0c1BhZ2UiLCJIb21lIiwidXNlciIsInNldFVzZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1bmRlZmluZWQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-chat-engine-pretty":
/*!*******************************************!*\
  !*** external "react-chat-engine-pretty" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("react-chat-engine-pretty");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();