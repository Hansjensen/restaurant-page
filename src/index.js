
import {elementBuild, headerBuild, pageBuild, footerBuild, active} from './pageload.js'
import './style.css';
import { homePage } from './home.js'
import {menuPage} from './menu.js'
import {contactPage} from './contact.js'
//Load HomePage and content
const content = elementBuild('div', {'class': 'content'}, headerBuild(), pageBuild(homePage()), footerBuild())
document.body.appendChild(content)
active('Home')


// add event listener on links and create 
const pageClicker = document.querySelectorAll('.link');
pageClicker.forEach( function (elem) {
    elem.addEventListener('click', (e) => {
        const tab = e.target.textContent
       // Remove active hightlight
        const activeLink = document.querySelector('.active')
        activeLink.classList.remove('active')

        
        
        
        const container = document.querySelector('.page')
        container.textContent = ''
        if (tab === "Home") {
            container.appendChild(homePage());
            active(tab);
            

        } else if (tab === "Menu") {
            container.appendChild(menuPage());
            active(tab);
            
        } else if (tab === 'Contact') {
            container.appendChild(contactPage());
            active(tab);
            
        }
        
        
    })

})







