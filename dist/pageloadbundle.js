"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["pageload"],{

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementBuild": () => (/* binding */ elementBuild),
/* harmony export */   "head": () => (/* binding */ head),
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _web_logo_300x90_gradient_new_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-logo-300x90-gradient-new.png */ "./src/web-logo-300x90-gradient-new.png");


function elementBuild (type, attributes, ...children) {

    const element = document.createElement(type)
    
    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child))
        } else {
            element.appendChild(child)
        }
    })

    return element;
}

const head = header()


function header() {
    
    const headelement = elementBuild('header', null, logo(), navBar())
    return headelement;

}

function logo() {
    const myLogo = new Image();
    myLogo.src = _web_logo_300x90_gradient_new_png__WEBPACK_IMPORTED_MODULE_0__
    const logo = elementBuild('div', {'class': 'logo'});
    logo.appendChild(_web_logo_300x90_gradient_new_png__WEBPACK_IMPORTED_MODULE_0__)
    return logo
}

function navBar(active) {

    
    const navBar = elementBuild(
        'nav',
        {
            'class': 'nav-bar'
        },
        elementBuild(
            'ul',
            {'class':'links'},
            elementBuild(
                'li',
                {'class':'link'},
                elementBuild(
                    'a',
                    {},
                    'Home'
                )
            ),
            elementBuild(
                'li',
                {'class':'link'},
                elementBuild(
                    'a',
                    {},
                    'Menu'
                )
            ),
            elementBuild(
                'li',
                {'class':'link'},
                elementBuild(
                    'a',
                    {},
                    'Contact'
                )
            )

        )
    )

    return navBar;
}



/***/ }),

/***/ "./src/web-logo-300x90-gradient-new.png":
/*!**********************************************!*\
  !*** ./src/web-logo-300x90-gradient-new.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "769be58c6c83767a1d40.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageload.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWRidW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDs7QUFFdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiw4REFBSztBQUN0QixzQ0FBc0MsZ0JBQWdCO0FBQ3RELHFCQUFxQiw4REFBSztBQUMxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZ28xIGZyb20gJy4vd2ViLWxvZ28tMzAweDkwLWdyYWRpZW50LW5ldy5wbmcnXG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZCAodHlwZSwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pIHtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pXG4gICAgfVxuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IGhlYWQgPSBoZWFkZXIoKVxuXG5cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBcbiAgICBjb25zdCBoZWFkZWxlbWVudCA9IGVsZW1lbnRCdWlsZCgnaGVhZGVyJywgbnVsbCwgbG9nbygpLCBuYXZCYXIoKSlcbiAgICByZXR1cm4gaGVhZGVsZW1lbnQ7XG5cbn1cblxuZnVuY3Rpb24gbG9nbygpIHtcbiAgICBjb25zdCBteUxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBteUxvZ28uc3JjID0gbG9nbzFcbiAgICBjb25zdCBsb2dvID0gZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2NsYXNzJzogJ2xvZ28nfSk7XG4gICAgbG9nby5hcHBlbmRDaGlsZChsb2dvMSlcbiAgICByZXR1cm4gbG9nb1xufVxuXG5mdW5jdGlvbiBuYXZCYXIoYWN0aXZlKSB7XG5cbiAgICBcbiAgICBjb25zdCBuYXZCYXIgPSBlbGVtZW50QnVpbGQoXG4gICAgICAgICduYXYnLFxuICAgICAgICB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnbmF2LWJhcidcbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKFxuICAgICAgICAgICAgJ3VsJyxcbiAgICAgICAgICAgIHsnY2xhc3MnOidsaW5rcyd9LFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKFxuICAgICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgICAgeydjbGFzcyc6J2xpbmsnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICdIb21lJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgICB7J2NsYXNzJzonbGluayd9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZChcbiAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgJ01lbnUnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZChcbiAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgIHsnY2xhc3MnOidsaW5rJ30sXG4gICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKFxuICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAnQ29udGFjdCdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cbiAgICAgICAgKVxuICAgIClcblxuICAgIHJldHVybiBuYXZCYXI7XG59XG5cbmV4cG9ydCB7IGVsZW1lbnRCdWlsZCwgaGVhZGVyLCBoZWFkIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=