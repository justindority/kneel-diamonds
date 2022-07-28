import { getMetals, getOrderBuilder, setMetal } from "./dataAccess.js"

const metals = getMetals()

//value change listener to invoke metal setter
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

//prints metals html
export const Metals = () => {
    let order = getOrderBuilder()
    
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        if(metal.id === order.metalId){
            html += `<li>
            <input type="radio" name="metal" value="${metal.id}" checked/> ${metal.metal}
        </li>`
        } else {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
        }
    }
    html += "</ul>"
    return html
}

