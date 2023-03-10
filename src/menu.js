import { elementBuild } from "./pageload"

const pizzaMenu = [
    {
        item: 'Hawaiian',
        desc: 'Bacon & Pineapple',
        price: '20'
    },
    {
        item:'Veg-O-Matic',
        desc:'Seasonal Greens, Red Bell Peppers, Onion',
        price: '21'

    },
    {
        item:'Meat',
        desc:'Pepperoni, Sausage & Herbs',
        price: '21'
    },
    {
        item: 'Waimea',
        desc: 'Bacon, Pineapple, & Jalapeno',
        price: '22'

    },
    {
        item: 'Vert',
        desc: 'Pesto Sauce Base, Spinach, Artichoke Hearts',
        price: '22'

    },
    {
        item:'Split Hog',
        desc: '1/2 Bacon, 1/2 Homemade Sausage, & Garlic',
        price: '22'

    },
    {
        item: 'Sid Fishes',
        desc: 'Anchovies, Capers & Artichoke Hearts',
        price: '22'

    },
    {
        item: "Dog's Bollocks AKA Combo",
        desc: 'Sausage, Pepperoni, Mushrooms, Olives',
        price: '23'
    },
    {
        item:'The Pearl',
        desc:'Olive Oil Base, Red Onion, Garlic, Kalamatas, Herbs',
        price: '23'

    },
    {
        item:'Hildabaum',
        desc:'Red Sauce, Goat Cheese, Pesto, Red Bells, Olives',
        price: '24'

    },
    {
        item:'Greek',
        desc: 'Feta, Kalamatas, Spinach, & Artichokes',
        price: '24'

    },
    {
        item: 'Surf Or Die Trying',
        desc:'Walnuts, Red Onion, Kale, Goat & Pecorino Cheeses',
        price: '24'

    },
]

const otherMenu = [
    {
        item:'Pizza By The Slice',
        desc: 'Tomato Sauce And Cheese Base, Extra Toppings $.50 Each',
        price: '5' 
    },
    {
        item:'Green Salad',
        desc: 'With Fresh Organic Veggies And Roasted Pumpkin Seeds',
        price: '8' 
    },
    {
        item:'Pizza Salad',
        desc: 'Add 5 Toppings Of Your Choice',
        price: '15' 
    },
    {
        item:'Garlic Bread',
        desc: '',
        price: '6' 
    },
    {
        item:'Cheese Bread',
        desc: '',
        price: '6' 
    },
    {
        item:'Garlicky Cheese Bread',
        desc: '',
        price: '8' 
    },
]

const toppingsBasic = ['Pepperoni', 'Mushrooms', 'Black Olives', 'Jalapenos', 'Pineapple', 'Garlic', 'Basil', 'Kale', 'Herbs', 'Capers', 'Spinach', 'Red Onion']

const nextLevelToppings = ['Pesto', 'Bacon', 'Sausage', 'Feta Cheese', 'Goat Cheese', 'Pecorino Cheese', 'Sun Dried Tomatoes', 'Roasted Bell Peppers', 'Fresh Summer Tomatoes', 'Artichoke Hearts', 'Kalamata Olives', 'Anchovies', 'Walnuts']


function menuPage (){
        
        // update and append menu containers
        let pizzaContainer = elementBuild('div', {'class': 'pizzaContainer'} )
        menuBuild(pizzaContainer, pizzaMenu);
        let sidesContainer = elementBuild('div', {'class': 'sidesContainer'})
        menuBuild(sidesContainer, otherMenu);

        let toppingsCont =  elementBuild('div', {'class': 'topps'}, )


        let menuHero = elementBuild('div', {'class': 'menuHero' }, 
        elementBuild('div', {'class' : 'pizzaTitle' }, elementBuild('h2', {"class" : 'pizzaHeader'}, 'PIZZA')),
        pizzaContainer,
        elementBuild('div', {'class' : 'pizzaTitle' }, elementBuild('h2', {"class" : 'sidesHeader'}, 'SIDES')),
        sidesContainer,
        elementBuild('div', {'class': 'toppingsHero'},
            elementBuild('div', {'class': 'buildYourOwn'}, elementBuild('h2', {'class' : 'toppingsHeader'}, 'BUILD YOUR OWN'), elementBuild('div', {'class' : 'toppsCont'}, 
            elementBuild('p', {'class' : 'buildBuild'}, '16$ MEDIUM PIZZA 14" WITH TOMATO SAUCE AND CHEESE'),
            elementBuild('p', {'class' : 'buildBuild'}, '12" GLUTTEN FREE CRUST AVAILABLE'),
            elementBuild('p', {'class' : 'buildBuild'}, 'TOPPINGS $1.75'),
            elementBuild('p', {'class' : 'buildBuild'}, 'NEXT LEVEL TOPPINGS $2.25'))),
            elementBuild('div', {'class' : 'toppingsTitle' }, elementBuild('h2', {"class" : 'toppingsHeader'}, 'TOPPINGS'), toppings(toppingsBasic)
            ),
            
            elementBuild('div', {'class' : 'toppingsTitle' }, elementBuild('h2', {'class' : 'toppingsHeader'}, 'NEXT LEVEL TOPPINGS'),toppings(nextLevelToppings)),

            
            
        )

        );

        console.log(menuHero )
       
        
        
        

    return menuHero
}

function menuBuild(x, menu){
   
    for (let i = 0; i < menu.length; i++) {
        
        const item = 
        elementBuild('div', {'class' : 'menuCard'}, 
            elementBuild('h2', {'class' : 'menuCardTitle'}, menu[i].item),
            elementBuild('p', {'class' : 'menuCardDesc'}, menu[i].desc), 
            elementBuild('p', {'class' : 'menuCardPrice'}, '$ ' + menu[i].price)
        );
        x.appendChild(item)
        
     };
     
    return x

}

function toppings(x) {
    let toppingsP = elementBuild('div', {'class' : 'toppsCont'})
    for (let i = 0; i < x.length; i++) {
        let toppingsBuild = elementBuild('p', {'class' : 'topps'});
        toppingsBuild.textContent = x[i]
        toppingsP.appendChild(toppingsBuild)
    }

    return toppingsP;

}


export {menuPage}