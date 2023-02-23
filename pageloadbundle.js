"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["pageload"],{

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "active": () => (/* binding */ active),
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

    function navBar() {

    
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
                    {'class':'link', 'id' : 'Home'},
                    elementBuild(
                        'a',
                        {},
                        'Home'
                    )
                ),
                elementBuild(
                    'li',
                    {'class':'link', 'id' : 'Menu'},
                    elementBuild(
                        'a',
                        {},
                        'Menu'
                    )
                ),
                elementBuild(
                    'li',
                    {'class':'link', 'id' : 'Contact'},
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

function active(x) {
    const currentActive = document.getElementById(x)
    currentActive.classList.add('active')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWRidW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDUDtBQUNFOztBQUVqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCLHVCQUF1QixPQUFPLDhEQUFLLENBQUM7QUFDOUY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRDtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrQkFBa0I7QUFDM0I7QUFDQSxhQUFhLE9BQU8sb0RBQVEsQ0FBQztBQUM3QjtBQUNBLFdBQVcsT0FBTyxxREFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlCQUFpQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsbUJBQW1CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0JBQWtCOztBQUUxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZ28xIGZyb20gJy4vd2ViLWxvZ28tMzAweDkwLWdyYWRpZW50LW5ldy5wbmcnXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnLi9pY29uczgtZmFjZWJvb2stNDgucG5nJ1xuaW1wb3J0IGluc3RhZ3JhbSBmcm9tICcuL2ljb25zOC1pbnN0YWdyYW0tNDgucG5nJ1xuXG5mdW5jdGlvbiBlbGVtZW50QnVpbGQgKHR5cGUsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKSB7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuICAgIFxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgIH1cblxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpXG4gICAgICAgIH0gIGVsc2V7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBoZWFkZXJCdWlsZCgpIHtcbiAgICBcbiAgICBjb25zdCBoZWFkZWxlbWVudCA9IGVsZW1lbnRCdWlsZCgnaGVhZGVyJywgbnVsbCwgbG9nbygpLCBuYXZCYXIoKSlcbiAgICByZXR1cm4gaGVhZGVsZW1lbnQ7XG5cbiAgICBmdW5jdGlvbiBsb2dvKCkge1xuIFxuICAgICAgICBjb25zdCBsb2dvID0gZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2NsYXNzJzogJ2xvZ28nfSwgZWxlbWVudEJ1aWxkKCdpbWcnLCB7J3NyYyc6IGxvZ28xfSkpO1xuICAgICAgIFxuICAgICAgICByZXR1cm4gbG9nb1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5hdkJhcigpIHtcblxuICAgIFxuICAgICAgICBjb25zdCBuYXZCYXIgPSBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAnbmF2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbmF2LWJhcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAgICAgJ3VsJyxcbiAgICAgICAgICAgICAgICB7J2NsYXNzJzonbGlua3MnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgICAgICAgIHsnY2xhc3MnOidsaW5rJywgJ2lkJyA6ICdIb21lJ30sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0hvbWUnXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZChcbiAgICAgICAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgeydjbGFzcyc6J2xpbmsnLCAnaWQnIDogJ01lbnUnfSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAnTWVudSdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICB7J2NsYXNzJzonbGluaycsICdpZCcgOiAnQ29udGFjdCd9LFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250YWN0J1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgIFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgXG4gICAgICAgIHJldHVybiBuYXZCYXI7XG4gICAgfVxuXG5cbn1cblxuZnVuY3Rpb24gcGFnZUJ1aWxkKHgpIHtcbiAgIHJldHVybiBlbGVtZW50QnVpbGQoJ2RpdicsIHsnY2xhc3MnOidwYWdlJ30sIHggKVxufVxuXG5mdW5jdGlvbiBmb290ZXJCdWlsZCgpIHtcbiAgICBcbiAgICBjb25zdCBzb2NpYWwgPSBlbGVtZW50QnVpbGQoXG4gICAgICAgICdkaXYnLCBcbiAgICAgICAgeydjbGFzcyc6ICdzb2NpYWwnfSwgXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaW1nJywgXG4gICAgICAgICAgICB7J3NyYyc6IGZhY2Vib29rfSksXG4gICAgICAgICBlbGVtZW50QnVpbGQoJ2ltZycsXG4gICAgICAgICAgeydzcmMnOiBpbnN0YWdyYW19XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgKVxuICAgIFxuICAgIGNvbnN0IGFib3V0ID0gZWxlbWVudEJ1aWxkKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeydjbGFzcyc6ICdhYm91dCd9LFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3AnLCBudWxsLCAnQnJpY2sgT3ZlbiBQaXp6YScgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdwJywgbnVsbCwgJ0JlZXIgJiBXaW5lJyApLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3AnLCBudWxsLCAnT3JnYW5pYyBTYWxhZHMnICksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgncCcsIG51bGwsICdFYXQgSW4gb3IgVGFrZW91dCcgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdwJywgbnVsbCwgJ091dGRvb3IgU2VhdGluZyB3aXRoIE9jZWFuIFZpZXcnICksXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFjdCA9IGVsZW1lbnRCdWlsZChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsnY2xhc3MnOiAnY29udGFjdCd9LFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2gzJywgbnVsbCwgJ0F0IFRoZSBIaXN0b3JpYyBQb2ludCBBcmVuYSBDb3ZlJyksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgncCcsIG51bGwsICc3OTAgUG9ydCBSb2FkIFB0IEFyZW5hLCBDQSA5NTQ2OCcpLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ3AnLCBudWxsLCAnNzA3LTg4Mi0xOTYwJylcbiAgICApXG4gICAgXG4gICAgY29uc3QgZm9vdGVyID0gZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2NsYXNzJzogJ2Zvb3Rlcid9LCBzb2NpYWwsIGFib3V0LCBjb250YWN0KVxuXG4gICAgXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5mdW5jdGlvbiBhY3RpdmUoeCkge1xuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh4KVxuICAgIGN1cnJlbnRBY3RpdmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbn1cblxuXG5cbmV4cG9ydCB7IGVsZW1lbnRCdWlsZCwgaGVhZGVyQnVpbGQsIHBhZ2VCdWlsZCwgZm9vdGVyQnVpbGQsIGFjdGl2ZX0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=