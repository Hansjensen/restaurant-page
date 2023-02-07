
import {elementBuild, head} from './pageload.js'
import './style.css';



const content = elementBuild('div', {'id': 'content'}, head)



document.body.appendChild(content)


