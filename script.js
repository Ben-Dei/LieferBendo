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


function renderToOderList(){
    let content = document.getElementById('to_oder');
    content.innerHTML = "";
    for (let foodOderIndex = 0; foodOderIndex < foodToOrder.length; foodOderIndex++) {
        let foodItem = foodToOrder[foodOderIndex];
        content.innerHTML += templateOderList(foodItem, foodOderIndex)
    
    }
}
