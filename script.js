let foodToOrder = [
    {
        "name" : "Pizza Salami",
        "price" : 8.99,
        "information" : "Fluffiger Pizzateig mit Tomatensoße bestrichen, mit feinster Salami belegt und mit zarrtem Mozerella überstreuselt",

    },
    {
        "name" : "Pizza Fungi",
        "price" : 8.99,
        "information" : "Fluffiger Pizzateig mit Tomatensoße bestrichen, mit zarrter Modzerella und mit klein geschnittenen Championstückchen",

    },
    {
        
        "name" : "Pizza Magarita",
        "price" : 8.99,
        "information" : "Fluffiger Pizzateig mit Tomatensoße bestrichen, mit zarrter Modzerella",

    },
    {
        
        "name" : "Chicken Nuggets",
        "price" : 10.99,
        "information" : "feinstes Hähchenbrustfleich panniert und frittriert",

    },
    {
        
        "name" : "Chicken Wings",
        "price" : 23.99,
        "information" : "feinste Hünchenkeulen und -flügel gebraten",

    },
    {
        
        "name" : "Hähnchenschnitzel im Brötchen",
        "price" : 25.99,
        "information" : "frisch paniertes Schnitzel vom Huhn zwischen zwei Brötchen",

    },
];

let basket = [ 
    {
        "name" : "",
        "price" : "",
        "information" : "",

    }, 
    {
        "name" : "",
        "price" : "",
        "information" : "",

    }, 
    {
        "name" : "",
        "price" : "",
        "information" : "",

    }, 
    {
        "name" : "",
        "price" : "",
        "information" : "",

    }, 
    {
        "name" : "",
        "price" : "",
        "information" : "",

    },

];


function init(){
    renderToOderList();
    renderBasket();
}


function renderToOderList(){
    let content = document.getElementById('to_oder');
    content.innerHTML = "";
    for (let foodOderIndex = 0; foodOderIndex < foodToOrder.length; foodOderIndex++) {
        let foodItem = foodToOrder[foodOderIndex];
        content.innerHTML += templateOderList(foodItem, foodOderIndex);
    
    }
}

function renderBasket(){
    let basketContent = document.getElementById('basket_content');
    basketContent.innerHTML = "";
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++){
        let basketItem = basket[basketIndex];
        basketContent.innerHTML += templateBasketList(basketItem, basketIndex);
    }
}

function fromDishesToBasket(foodOderIndex){
    let addToBasket = foodToOrder.splice(foodOderIndex, 1);
    addToBasket.push(basket[0]);
    if (basket[basketIndex].name != 0) {
        addToBasket.innerHTML = `${basket[basketIndex] += 1}`
    } else {
        
    };
    if (basket[basketIndex].price != 0) {
        addToBasket.innerHTML = `${basket[basketIndex] += 1}`
    }
}