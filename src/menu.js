import { elementBuild } from "./pageload"

const pizzaMenu = [
    {
        pizza: 'Hawaiian',
        desc: 'Bacon & Pineapple',
        price: '20'
    },
    {
        pizza:'Veg-O-Matic',
        desc:'Seasonal Greens, Red Bell Peppers, Onion',
        price: '21'

    },
    {
        pizza:'Meat',
        desc:'Pepperoni, Sausage & Herbs',
        price: '21'
    },
    {
        pizza: 'Waimea',
        desc: 'Bacon, Pineapple, & Jalapeno',
        price: '22'

    },
    {
        pizza: 'Vert',
        desc: 'Pesto Sauce Base, Spinach, Artichoke Hearts',
        price: '22'

    },
    {
        pizza:'Split Hog',
        desc: '1/2 Bacon, 1/2 Homemade Sausage, & Garlic',
        price: '22'

    },
    {
        pizza: 'Sid Fishes',
        desc: 'Anchovies, Capers & Artichoke Hearts',
        price: '22'

    },
    {
        pizza: "Dog's Bollocks AKA Combo",
        desc: 'Sausage, Pepperoni, Mushrooms, Olives',
        price: '23'
    },
    {
        pizza:'The Pearl',
        desc:'Olive Oil Base, Red Onion, Garlic, Kalamatas, Herbs',
        price: '23'

    },
    {
        pizza:'Hildabaum',
        desc:'Red Sauce, Goat Cheese, Pesto, Red Bells, Olives',
        price: '24'

    },
    {
        pizza:'Greek',
        desc: 'Feta, Kalamatas, Spinach, & Artichokes',
        price: '24'

    },
    {
        pizza: 'Surf Or Die Trying',
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

const toppings = ['Pepperoni', 'Mushrooms', 'Black Olives', 'Jalapenos', 'Pineapple', 'Garlic', 'Basil', 'Kale', 'Herbs', 'Capers', 'Spinach', 'Red Onion']

const nextLevelToppings = ['Pesto', 'Bacon', 'Sausage', 'Feta Cheese', 'Goat Cheese', 'Pecorino Cheese', 'Sun Dried Tomatoes', 'Roasted Bell Peppers', 'Fresh Summer Tomatoes', 'Artichoke Hearts', 'Kalamata Olives', 'Anchovies', 'Walnuts']


function 