import { getInteriors } from "./database.js";

const interiors= getInteriors()

export const Interiors = () => {
    let html = `<ul>`
    const interiorsList = interiors.map((interior) => {
        return `<li> <input type="radio" name="interior" value="${interior.id}" /> ${interior.material}</li>`
    })
    html += interiorsList.join("")
    html += "</ul>"
    return html
}

document.addEventListener("change",(changeEvent) => {
        if (changeEvent.target.name === "interior") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)
        }
    }
)