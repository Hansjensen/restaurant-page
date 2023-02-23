import { elementBuild } from "./pageload";

function homePage() {

    const homeload = elementBuild(
        'div', 
        {'class': 'homeHero'}, 
        elementBuild(
            'h2',
             {'class': 'homeHeroTitle'},
             'Point Arena Pizza is open five nights a week'
        ),
        elementBuild(
            'p',
            {'class': 'homeHeroP'},
            'Wednesday, Thursday, Friday, Saturday, Sunday, from 3pm to 8pm'
        ),
        elementBuild(
            'p',
            {'class': 'homeHeroP'},
            'Eat inside or On our deck'
        ),
        elementBuild(
            'p',
            {'class': 'homeHeroP'},
            'or call in your order to go: 707-882-1960'
        )
    )


    
    return homeload           
}



export { homePage}