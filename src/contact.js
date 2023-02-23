import { elementBuild } from "./pageload"
import contactPhoto from './di-scott-ico-pizza-oven.png'
function contactPage() {

    let contactHero  = elementBuild('div', {'class' : 'contactHero'},
        elementBuild('div', {'class' : 'formDiv'},
            elementBuild('div', {'class' : 'formTopper'}, 
                elementBuild('h4', {'class': 'formHeader'}, 'We are located at the historic Point Arena Cove, 790 Port Road in Point Arena. We’re open 5 nights a week – 3pm to 8pm, Wednesday through Sunday.')),
                elementBuild('p', {'class' : 'formText'}, 'If you have any questions, please feel free to contact us via the form below. You can also call us at 707-882-1960.')
            ,
            
            elementBuild('form', {'class' : 'form'},
                elementBuild('label', {'class' : 'nameLabel', 'for' : 'nameInput'}, 'Name'),
                elementBuild('input', {'type' : 'text', 'class' : 'nameInput', 'name' : 'nameInput', 'id' : 'nameInput'}),
                elementBuild('label', {'class' : 'emailLabel', 'for' : 'emailInput'}, 'Email'),
                elementBuild('input', {'type' : 'email', 'class' : 'emailInput', 'name' : 'emailInput', 'id' : 'emailInput'}),
                elementBuild('label', {'class' : 'commentsLabel', 'for' : 'commentsInput'}, 'Comments'),
                elementBuild('textarea', {'rows' : '10', 'class' : 'commentsInput', 'name' : 'commentsInput', 'id' : 'commentsInput'}),
                elementBuild('input', {'type' : 'submit', 'value' : 'submit', 'id' : 'submit'}),
                )
            
        ),
        
        elementBuild('div', { 'class' : 'photoDiv'},
            elementBuild('img', {'class' : 'contactPhoto', 'src' : contactPhoto})
        )
    )
    
    return contactHero;
}

export {contactPage}