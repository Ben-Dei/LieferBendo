
function templateOderList(foodItem, foodOderIndex){
    return /*html*/`
            <div>
                <div class="line"></div>
                <div class="top-bar">${foodItem.name}<div class="addSome" id="addSome${foodOderIndex}">➕</div></div><br>
                <div>${foodItem.price} €</div>
                <div><p>${foodItem.information}<br><br></p></div>
                <div class="line"></div>
            </div>
        `;
}