import { getWheels, setWheel } from "./database.js";

const wheels= getWheels()

export const Wheels = () => {
    let html = `<ul>`
    const wheelsList = wheels.map((wheel) => {
        return `<li> <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheel}</li>`
    })
    html += wheelsList.join("")
    html += "</ul>"
    return html
}

document.addEventListener("change",(changeEvent) => {
    if (changeEvent.target.name === "wheel") {
        setWheel(parseInt(changeEvent.target.value)) 
    }
}
)
