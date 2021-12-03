import { getPaints, setPaint } from "./database.js";

const paints= getPaints()

export const paintColors = () => {
    let html = `<ul>`
    const paintColorsList = paints.map((paint) => {
        return `<li> <input type="radio" name="paint" value="${paint.id}" /> ${paint.color}</li>`
    })
    html += paintColorsList.join("")
    html += "</ul>"
    return html
}

document.addEventListener("change",(changeEvent) => {
    if (changeEvent.target.name === "paint") {
        setPaint(parseInt(changeEvent.target.value)) 
    }
}
)
