
function templateOderList(foodItem, foodOderIndex){
    return /*html*/`
            <div>
                <div class="line"></div>
                <div class="top-bar">${foodItem.name}<div class="addSome" id="addSome${foodOderIndex}" onclick ="fromDishesToBasket(${foodOderIndex})">➕</div></div><br>
                <div class="txt">${foodItem.price} €</div>
                <div class="txt"><p>${foodItem.information}<br><br></p></div>
            </div>
        `;
}

function templateBasketList(basketItem){
    return /*html*/`
            <div>
                <div class="top-bar">${basketItem.name}<div><img id="deleteChoosenDish" onclick="deletedish()" src="./assets/img/trash-solid-24.png"></div></div>
                <div class="txt">${basketItem.price}</div>
                <div class="txt"><img onclick="addFood()" class="add-img" src="./assets/img/message-rounded-add-solid-24.png"> ${basketItem.amount} <img onclick="minusFood()" class="minus-img" src="./assets/img/message-rounded-minus-solid-24.png"> </div>
            </div>
        `;
}