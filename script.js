

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

let basket = [];

let globalIndex = 0;








function renderToOderList(){
    let content = document.getElementById('to_oder');
    content.innerHTML = "";
    for (let foodOderIndex = 0; foodOderIndex < foodToOrder.length; foodOderIndex++) {
        let foodItem = foodToOrder[foodOderIndex];
        content.innerHTML += templateOderList(foodItem, foodOderIndex);
    
    }
}

function templateOderList(foodItem, foodOderIndex){
    return /*html*/`
            <div>
                <div class="line"></div>
                <div class="top-bar">${foodItem.name}<div class="addSome" id="addSome${foodOderIndex}" onclick ="fromDishesToBasket(${foodOderIndex})">➕</div></div>
                <div class="txt">${foodItem.price} €</div>
                <div class="txt"><p>${foodItem.information}<br><br></p></div>
            </div>
        `;
}

function renderBasket(){
    let basketContent = document.getElementById('basket_content');
    basketContent.innerHTML = "";
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++){
        let basketItem = basket[basketIndex];
        basketContent.innerHTML += templateBasketList(basketItem, basketIndex);
    }
    basketContent.innerHTML += /*html*/`
        <div id="txt"><p>Summe: ${rechneGesamtpreis()} €</p></div>
    `
}

function templateBasketList(basketItem, basketIndex){
    return /*html*/`
            <div>
                <div class="top-bar">${basketItem.name}<div><img id="deleteChoosenDish" onclick="deletedish(${basketIndex})" src="./assets/img/trash-solid-24.png"></div></div>
                <div class="txt">${basketItem.price}</div>
                <div class="txt"><img onclick="addFood(${basketIndex})" class="add-img" src="./assets/img/message-rounded-add-solid-24.png"> ${basketItem.amount} <img onclick="minusFood(${basketIndex})" class="minus-img" src="./assets/img/message-rounded-minus-solid-24.png"> </div><br><br>

            </div>
        `;
}


function rechneGesamtpreis(){
    let gesammtsumme = 0;
    for (let i = 0; i < basket.length; i++){
        gesammtsumme += basket[i].price*basket[i].amount;
    }
    return (gesammtsumme).toFixed(2);
}

function checkUpFood(food){
    return food.name == foodToOrder[globalIndex].name;
         
           
}
// meine addToBasket Function
function fromDishesToBasket(foodOderIndex){
    globalIndex = foodOderIndex;
    let indexInBasket = basket.findIndex(checkUpFood);
    console.log(indexInBasket)
    if (indexInBasket == -1){
        basket.push(foodToOrder[foodOderIndex]);
        console.log("wir sind im if Part");
        
    } else {
    
        console.log("wir sind im else Part");
        basket[indexInBasket].amount++
       
    }
    
    renderBasket();
}

function addFood(basketIndex){
        basket[basketIndex].amount++;
        renderBasket();
}

function minusFood(basketIndex){
    if (basket[basketIndex].amount > 1){
        basket[basketIndex].amount--;
    } else {
        deletedish(basketIndex);
    }
    renderBasket();
}

function deletedish(basketIndex){
    basket.splice(basketIndex, 1);
    renderBasket();
}
