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
/* harmony export */   "footerBuild": () => (/* binding */ footerBuild),
/* harmony export */   "headerBuild": () => (/* binding */ headerBuild),
/* harmony export */   "pageBuild": () => (/* binding */ pageBuild)
/* harmony export */ });
/* harmony import */ var _web_logo_300x90_gradient_new_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-logo-300x90-gradient-new.png */ "./src/web-logo-300x90-gradient-new.png");
/* harmony import */ var _icons8_facebook_48_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons8-facebook-48.png */ "./src/icons8-facebook-48.png");
/* harmony import */ var _icons8_instagram_48_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons8-instagram-48.png */ "./src/icons8-instagram-48.png");




function elementBuild (type, attributes, ...children) {

    const element = document.createElement(type)
    
    for (let key in attributes) {
        element.setAttribute(key, attributes[key])
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child))
        }  else{
            element.appendChild(child)
        }
    })

    return element;
}

function headerBuild() {
    
    const headelement = elementBuild('header', null, logo(), navBar())
    return headelement;

    function logo() {
 
        const logo = elementBuild('div', {'class': 'logo'}, elementBuild('img', {'src': _web_logo_300x90_gradient_new_png__WEBPACK_IMPORTED_MODULE_0__}));
       
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


}

function pageBuild(x) {
   return elementBuild('div', {'class':'page'}, x )
}

function footerBuild() {
    
    const social = elementBuild(
        'div', 
        {'class': 'social'}, 
        elementBuild('img', 
            {'src': _icons8_facebook_48_png__WEBPACK_IMPORTED_MODULE_1__}),
         elementBuild('img',
          {'src': _icons8_instagram_48_png__WEBPACK_IMPORTED_MODULE_2__}
        )
        
    )
    
    const about = elementBuild(
        'div',
        {'class': 'about'},
        elementBuild('p', null, 'Brick Oven Pizza' ),
        elementBuild('p', null, 'Beer & Wine' ),
        elementBuild('p', null, 'Organic Salads' ),
        elementBuild('p', null, 'Eat In or Takeout' ),
        elementBuild('p', null, 'Outdoor Seating with Ocean View' ),
    )

    const contact = elementBuild(
        'div',
        {'class': 'contact'},
        elementBuild('h3', null, 'At The Historic Point Arena Cove'),
        elementBuild('p', null, '790 Port Road Pt Arena, CA 95468'),
        elementBuild('p', null, '707-882-1960')
    )
    
    const footer = elementBuild('div', {'class': 'footer'}, social, about, contact)

    
    return footer
}






/***/ }),

/***/ "./src/icons8-facebook-48.png":
/*!************************************!*\
  !*** ./src/icons8-facebook-48.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "129efe193a21734e2f65.png";

/***/ }),

/***/ "./src/icons8-instagram-48.png":
/*!*************************************!*\
  !*** ./src/icons8-instagram-48.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b6e2b3dfccfc29601c9.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWRidW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNQO0FBQ0U7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxnQkFBZ0IsdUJBQXVCLE9BQU8sOERBQUssQ0FBQztBQUM5RjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtCQUFrQjtBQUMzQjtBQUNBLGFBQWEsT0FBTyxvREFBUSxDQUFDO0FBQzdCO0FBQ0EsV0FBVyxPQUFPLHFEQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUJBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxtQkFBbUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxrQkFBa0I7O0FBRTFEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nbzEgZnJvbSAnLi93ZWItbG9nby0zMDB4OTAtZ3JhZGllbnQtbmV3LnBuZydcbmltcG9ydCBmYWNlYm9vayBmcm9tICcuL2ljb25zOC1mYWNlYm9vay00OC5wbmcnXG5pbXBvcnQgaW5zdGFncmFtIGZyb20gJy4vaWNvbnM4LWluc3RhZ3JhbS00OC5wbmcnXG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZCAodHlwZSwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pIHtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pXG4gICAgfVxuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSlcbiAgICAgICAgfSAgZWxzZXtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckJ1aWxkKCkge1xuICAgIFxuICAgIGNvbnN0IGhlYWRlbGVtZW50ID0gZWxlbWVudEJ1aWxkKCdoZWFkZXInLCBudWxsLCBsb2dvKCksIG5hdkJhcigpKVxuICAgIHJldHVybiBoZWFkZWxlbWVudDtcblxuICAgIGZ1bmN0aW9uIGxvZ28oKSB7XG4gXG4gICAgICAgIGNvbnN0IGxvZ28gPSBlbGVtZW50QnVpbGQoJ2RpdicsIHsnY2xhc3MnOiAnbG9nbyd9LCBlbGVtZW50QnVpbGQoJ2ltZycsIHsnc3JjJzogbG9nbzF9KSk7XG4gICAgICAgXG4gICAgICAgIHJldHVybiBsb2dvXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmF2QmFyKGFjdGl2ZSkge1xuXG4gICAgXG4gICAgICAgIGNvbnN0IG5hdkJhciA9IGVsZW1lbnRCdWlsZChcbiAgICAgICAgICAgICduYXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdjbGFzcyc6ICduYXYtYmFyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZChcbiAgICAgICAgICAgICAgICAndWwnLFxuICAgICAgICAgICAgICAgIHsnY2xhc3MnOidsaW5rcyd9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZChcbiAgICAgICAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgeydjbGFzcyc6J2xpbmsnfSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAnSG9tZSdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICB7J2NsYXNzJzonbGluayd9LFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdNZW51J1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgICAgICAgIHsnY2xhc3MnOidsaW5rJ30sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRhY3QnXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICBcbiAgICAgICAgcmV0dXJuIG5hdkJhcjtcbiAgICB9XG5cblxufVxuXG5mdW5jdGlvbiBwYWdlQnVpbGQoeCkge1xuICAgcmV0dXJuIGVsZW1lbnRCdWlsZCgnZGl2JywgeydjbGFzcyc6J3BhZ2UnfSwgeCApXG59XG5cbmZ1bmN0aW9uIGZvb3RlckJ1aWxkKCkge1xuICAgIFxuICAgIGNvbnN0IHNvY2lhbCA9IGVsZW1lbnRCdWlsZChcbiAgICAgICAgJ2RpdicsIFxuICAgICAgICB7J2NsYXNzJzogJ3NvY2lhbCd9LCBcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdpbWcnLCBcbiAgICAgICAgICAgIHsnc3JjJzogZmFjZWJvb2t9KSxcbiAgICAgICAgIGVsZW1lbnRCdWlsZCgnaW1nJyxcbiAgICAgICAgICB7J3NyYyc6IGluc3RhZ3JhbX1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICApXG4gICAgXG4gICAgY29uc3QgYWJvdXQgPSBlbGVtZW50QnVpbGQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7J2NsYXNzJzogJ2Fib3V0J30sXG4gICAgICAgIGVsZW1lbnRCdWlsZCgncCcsIG51bGwsICdCcmljayBPdmVuIFBpenphJyApLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3AnLCBudWxsLCAnQmVlciAmIFdpbmUnICksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgncCcsIG51bGwsICdPcmdhbmljIFNhbGFkcycgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdwJywgbnVsbCwgJ0VhdCBJbiBvciBUYWtlb3V0JyApLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3AnLCBudWxsLCAnT3V0ZG9vciBTZWF0aW5nIHdpdGggT2NlYW4gVmlldycgKSxcbiAgICApXG5cbiAgICBjb25zdCBjb250YWN0ID0gZWxlbWVudEJ1aWxkKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeydjbGFzcyc6ICdjb250YWN0J30sXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaDMnLCBudWxsLCAnQXQgVGhlIEhpc3RvcmljIFBvaW50IEFyZW5hIENvdmUnKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdwJywgbnVsbCwgJzc5MCBQb3J0IFJvYWQgUHQgQXJlbmEsIENBIDk1NDY4JyksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgncCcsIG51bGwsICc3MDctODgyLTE5NjAnKVxuICAgIClcbiAgICBcbiAgICBjb25zdCBmb290ZXIgPSBlbGVtZW50QnVpbGQoJ2RpdicsIHsnY2xhc3MnOiAnZm9vdGVyJ30sIHNvY2lhbCwgYWJvdXQsIGNvbnRhY3QpXG5cbiAgICBcbiAgICByZXR1cm4gZm9vdGVyXG59XG5cblxuXG5cbmV4cG9ydCB7IGVsZW1lbnRCdWlsZCwgaGVhZGVyQnVpbGQsIHBhZ2VCdWlsZCwgZm9vdGVyQnVpbGR9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9