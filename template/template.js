
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
                <div>${basketIndex.name}</div>
                <div>${basketItem.price}</div>
            </div>
        `;
}