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
        } else if(typeof child == 'object'){ 
            for (let i = 0; i < child.length; i++) {
                element.appendChild(child[i])
            }


        } else{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWRidW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNQO0FBQ0U7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTs7O0FBR0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxnQkFBZ0IsdUJBQXVCLE9BQU8sOERBQUssQ0FBQztBQUM5RjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtCQUFrQjtBQUMzQjtBQUNBLGFBQWEsT0FBTyxvREFBUSxDQUFDO0FBQzdCO0FBQ0EsV0FBVyxPQUFPLHFEQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUJBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxtQkFBbUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxrQkFBa0I7O0FBRTFEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nbzEgZnJvbSAnLi93ZWItbG9nby0zMDB4OTAtZ3JhZGllbnQtbmV3LnBuZydcbmltcG9ydCBmYWNlYm9vayBmcm9tICcuL2ljb25zOC1mYWNlYm9vay00OC5wbmcnXG5pbXBvcnQgaW5zdGFncmFtIGZyb20gJy4vaWNvbnM4LWluc3RhZ3JhbS00OC5wbmcnXG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZCAodHlwZSwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pIHtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pXG4gICAgfVxuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSlcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiBjaGlsZCA9PSAnb2JqZWN0Jyl7IFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRbaV0pXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBoZWFkZXJCdWlsZCgpIHtcbiAgICBcbiAgICBjb25zdCBoZWFkZWxlbWVudCA9IGVsZW1lbnRCdWlsZCgnaGVhZGVyJywgbnVsbCwgbG9nbygpLCBuYXZCYXIoKSlcbiAgICByZXR1cm4gaGVhZGVsZW1lbnQ7XG5cbiAgICBmdW5jdGlvbiBsb2dvKCkge1xuIFxuICAgICAgICBjb25zdCBsb2dvID0gZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2NsYXNzJzogJ2xvZ28nfSwgZWxlbWVudEJ1aWxkKCdpbWcnLCB7J3NyYyc6IGxvZ28xfSkpO1xuICAgICAgIFxuICAgICAgICByZXR1cm4gbG9nb1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5hdkJhcihhY3RpdmUpIHtcblxuICAgIFxuICAgICAgICBjb25zdCBuYXZCYXIgPSBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAnbmF2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbmF2LWJhcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAgICAgJ3VsJyxcbiAgICAgICAgICAgICAgICB7J2NsYXNzJzonbGlua3MnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgICAgICAgIHsnY2xhc3MnOidsaW5rJ30sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0hvbWUnXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZChcbiAgICAgICAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgeydjbGFzcyc6J2xpbmsnfSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAnTWVudSdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICB7J2NsYXNzJzonbGluayd9LFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250YWN0J1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgIFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgXG4gICAgICAgIHJldHVybiBuYXZCYXI7XG4gICAgfVxuXG5cbn1cblxuZnVuY3Rpb24gcGFnZUJ1aWxkKHgpIHtcbiAgIHJldHVybiBlbGVtZW50QnVpbGQoJ2RpdicsIHsnY2xhc3MnOidwYWdlJ30sIHggKVxufVxuXG5mdW5jdGlvbiBmb290ZXJCdWlsZCgpIHtcbiAgICBcbiAgICBjb25zdCBzb2NpYWwgPSBlbGVtZW50QnVpbGQoXG4gICAgICAgICdkaXYnLCBcbiAgICAgICAgeydjbGFzcyc6ICdzb2NpYWwnfSwgXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaW1nJywgXG4gICAgICAgICAgICB7J3NyYyc6IGZhY2Vib29rfSksXG4gICAgICAgICBlbGVtZW50QnVpbGQoJ2ltZycsXG4gICAgICAgICAgeydzcmMnOiBpbnN0YWdyYW19XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgKVxuICAgIFxuICAgIGNvbnN0IGFib3V0ID0gZWxlbWVudEJ1aWxkKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeydjbGFzcyc6ICdhYm91dCd9LFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3AnLCBudWxsLCAnQnJpY2sgT3ZlbiBQaXp6YScgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdwJywgbnVsbCwgJ0JlZXIgJiBXaW5lJyApLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3AnLCBudWxsLCAnT3JnYW5pYyBTYWxhZHMnICksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgncCcsIG51bGwsICdFYXQgSW4gb3IgVGFrZW91dCcgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdwJywgbnVsbCwgJ091dGRvb3IgU2VhdGluZyB3aXRoIE9jZWFuIFZpZXcnICksXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFjdCA9IGVsZW1lbnRCdWlsZChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsnY2xhc3MnOiAnY29udGFjdCd9LFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2gzJywgbnVsbCwgJ0F0IFRoZSBIaXN0b3JpYyBQb2ludCBBcmVuYSBDb3ZlJyksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgncCcsIG51bGwsICc3OTAgUG9ydCBSb2FkIFB0IEFyZW5hLCBDQSA5NTQ2OCcpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3AnLCBudWxsLCAnNzA3LTg4Mi0xOTYwJylcbiAgICApXG4gICAgXG4gICAgY29uc3QgZm9vdGVyID0gZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2NsYXNzJzogJ2Zvb3Rlcid9LCBzb2NpYWwsIGFib3V0LCBjb250YWN0KVxuXG4gICAgXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5cblxuXG5leHBvcnQgeyBlbGVtZW50QnVpbGQsIGhlYWRlckJ1aWxkLCBwYWdlQnVpbGQsIGZvb3RlckJ1aWxkfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==