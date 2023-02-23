import logo1 from './web-logo-300x90-gradient-new.png'
import facebook from './icons8-facebook-48.png'
import instagram from './icons8-instagram-48.png'

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
 
        const logo = elementBuild('div', {'class': 'logo'}, elementBuild('img', {'src': logo1}));
       
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
            {'src': facebook}),
         elementBuild('img',
          {'src': instagram}
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



export { elementBuild, headerBuild, pageBuild, footerBuild, active}