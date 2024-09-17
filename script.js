let foodToOrder = [
    {
        "name" : "Pizza Salami",
        "price" : 8.99,
        "information" : "Fluffiger Pizzateig mit Tomatensoße bestrichen, mit feinster Salami belegt und mit zarrtem Mozerella überstreuselt",
        "amount" : 1
    },
    {
        "name" : "Pizza Fungi",
        "price" : 8.99,
        "information" : "Fluffiger Pizzateig mit Tomatensoße bestrichen, mit zarrter Modzerella und mit klein geschnittenen Championstückchen",
        "amount" : 1
    },
    {
        
        "name" : "Pizza Magarita",
        "price" : 8.99,
        "information" : "Fluffiger Pizzateig mit Tomatensoße bestrichen, mit zarrter Modzerella",
        "amount" : 1
    },
    {
        
        "name" : "Chicken Nuggets",
        "price" : 10.99,
        "information" : "feinstes Hähchenbrustfleich panniert und frittriert",
        "amount" : 1
    },
    {
        
        "name" : "Chicken Wings",
        "price" : 23.99,
        "information" : "feinste Hünchenkeulen und -flügel gebraten",
        "amount" : 1
    },
    {
        
        "name" : "Hähnchenschnitzel im Brötchen",
        "price" : 25.99,
        "information" : "frisch paniertes Schnitzel vom Huhn zwischen zwei Brötchen",
        "amount" : 1
    },
];

let basket = [ 
    {
        "name" : [],
        "price" : [],
        "amount" : [],
    }, 
    
];


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
   if(foodOderIndex == -1){
      foodToOrder[foodOderIndex].name.push(basket[0].name);
      foodToOrder[foodOderIndex].price.push(basket[0].price);
      foodToOrder[foodOderIndex.amount].push(basket[0].amount, 1);
   } else {
      foodToOrder[foodOderIndex].amount += 1
   }
}