import { Interiors } from "./Interior.js"
import { paintColors } from "./Paint.js"
import { Technologies } from "./Tech.js"
import { Wheels } from "./Wheels.js"

export const CarsRUs = () => {
    let html = `
    <h1>Cars R Us</h1>
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
    `
    return html
}