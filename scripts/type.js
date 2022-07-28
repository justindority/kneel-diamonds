import { getOrderBuilder, getTypes, setType } from "./dataAccess.js";
const jewelryTypes = getTypes()

//type value listener to invoke setter
document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "type"){
            setType(parseInt(event.target.value))
        }
    }
)


export const typesHtml = () => {

    let html = '<ul>'
    let order = getOrderBuilder()
    // Use .map() for converting objects to <li> elements
    const typesArray = jewelryTypes.map((jewelryType) => {
        if(jewelryType.id === order.typeId){
            return `<li><input type="radio" class="typeOption" name="type" checked value="${jewelryType.id}" /> ${jewelryType.type}
            </li>`
        } else {
            return `<li><input type="radio" class="typeOption" name="type" value="${jewelryType.id}" /> ${jewelryType.type}
            </li>` 
        }
        
    })


    // Join all of the strings in the array into a single string
    html += typesArray.join("")

    html += "</ul>"
    return html
}