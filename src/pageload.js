import logo1 from './web-logo-300x90-gradient-new.png'

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
 
    const logo = elementBuild('div', {'class': 'logo'}, elementBuild('img', {'src': logo1}));
   
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

export { elementBuild, header, head }