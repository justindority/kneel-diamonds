import { getOrderBuilder, getSizes, setSize } from "./dataAccess.js"

const sizes = getSizes()

//value listener on the size radio buttons to invoke setter for temp order
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

//sizes html using map and join
export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        let order = getOrderBuilder()
        if(order.sizeId === size.id){
            return `<li>
            <input type="radio" name="size" value="${size.id}" checked/> ${size.carets}
            </li>`    
        } else {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>` 
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

