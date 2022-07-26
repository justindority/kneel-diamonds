
import { addCustomOrder, getSizes, getStyles, getTempOrder } from "./database.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals } from "./Metals.js"
import { Orders } from "./Orders.js"
import { typesHtml } from "./type.js"






//set empty object to store temp order
let tempOrder = {}

//click listener for the button
document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === 'orderButton'){
            tempOrder = getTempOrder() //grab the temp order
            if (tempOrder.metalId && tempOrder.styleId && tempOrder.sizeId){ //make sure selections were made
                addCustomOrder() //commit custom order to orders
            } else {
                window.alert(`Please select all 3 options.`) //or show error message

            }
        }
    }
)


//all html
export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>${JewelryStyles()}
            </section>
        </article>
        <article class="types">${typesHtml()}</article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
    
        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>${Orders()}
        </article>
    `
}

