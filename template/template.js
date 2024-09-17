
function templateOderList(foodItem, foodOderIndex){
    return /*html*/`
            <div>
                <div class="line"></div>
                <div class="top-bar">${foodItem.name}<div class="addSome" id="addSome${foodOderIndex}" onclick ="fromDishesToBasket(${foodOderIndex})">➕</div></div><br>
                <div>${foodItem.price} €</div>
                <div><p>${foodItem.information}<br><br></p></div>
            </div>
        `;
}

function templateBasketList(basketItem, basketIndex){
    return /*html*/`
            <div>
                <div><p>${basketIndex.name}</p></div>
                <div><p>${basketItem.price}</p></div>
                <div><p>${basketItem.amount}</p></div>
            </div>
        `;
}