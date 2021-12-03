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
    const foundInterior = interiors.find(
        (interior) => {return interior.id === order.interiorId})
    const foundTechnology = technologies.find(
        (tech) => {return tech.id === order.techId})
     
    const totalCost = foundPaint.price + foundWheel.price + foundInterior.price + foundTechnology.price 

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        ${foundPaint.color} car with ${foundWheel.wheel} wheels, ${foundInterior.material} interior, and ${foundTechnology.tech} for a total cost of ${costString}
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
