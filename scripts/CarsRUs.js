import { addCustomOrder } from "./database.js"
import { Interiors } from "./Interior.js"
import { Orders } from "./Orders.js"
import { paintColors } from "./Paint.js"
import { Technologies } from "./Tech.js"
import { Wheels } from "./Wheels.js"

export const CarsRUs = () => {
    let html = `
    <h1>Cars R Us</h1>
    <article>
        <div class="options">
            <div class="individualOptions">    
                <h3>Paint</h3>
                ${paintColors()}
            </div>    
            <div class="individualOptions">
                <h3>Wheels</h3>
                ${Wheels()}
            </div>    
            <div class="individualOptions">
                <h3>Interior</h3>
                ${Interiors()}
            </div>    
            <div class="individualOptions">
                <h3>Technology</h3>
                ${Technologies()}
            </div    
        </div>
    </article>    
    <article>
        <button id="orderButton">Create Your Order</button>
    </article>
    <article>
        <h2>Your Order:</h2>
        ${Orders()}
    </article>

    `
    return html
}

document.addEventListener("click",(clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id === "orderButton") {
        addCustomOrder()
    }
}
)