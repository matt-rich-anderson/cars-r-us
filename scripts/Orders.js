import { getInteriors, getPaints, getTechnologies, getWheels, getOrders } from "./database.js";

const paints = getPaints()
const wheels = getWheels()
const interiors = getInteriors()
const technologies = getTechnologies()



const buildOrderListItem = (order) => {

    const foundPaint = paints.find(
        (paint) => {return paint.id === order.paintId}) 
    const foundWheel = wheels.find(
        (wheel) => {return wheel.id === order.wheelId})
    const foundInteriors = interiors.find(
        (interior) => {return interior.id === order.interiorId})
    const foundTechnologies = technologies.find(
        (technologies) => {return technologies.id === order.technologiesId})
     
    // const totalCost = foundPaint.price + foundWheel.price + foundInteriors.price +  foundTechnologies.price 

    // const costString = totalCost.toLocaleString("en-US", {
    //     style: "currency",
    //     currency: "USD"
    // })
    
    return `<li>
        Your order # is ${order.id}, and was placed at ${order.timestamp}
    </li>`
}




export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"
    return html
} 
