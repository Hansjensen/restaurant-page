

import './style.css';

const content = document.createElement('header')
content.setAttribute('id', content)
const header = document.createElement('header')
header.textContent ="hello yo"

content.appendChild(header)
document.body.appendChild(content)

