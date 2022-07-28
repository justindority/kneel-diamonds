import { getMetals, getOrders, getSizes, getStyles, getTypes } from "./dataAccess.js"


//function to build the new list item and calculate price, will be invoked during the map callback
const buildOrderListItem = (order) => {

    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    const types = getTypes()
    
    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    
    
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )

    const totalCost = (foundMetal.price + foundSize.price + foundStyle.price) * foundType.multiplier


    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and cost $${totalCost}.
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

