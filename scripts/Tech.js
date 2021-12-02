import { getTechnologies } from "./database.js";

const technologies= getTechnologies()

export const Technologies = () => {
    let html = `<ul>`
    const technologiesList = technologies.map((technology) => {
        return `<li> <input type="radio" name="technology" value="${technology.id}" /> ${technology.tech}</li>`
    })
    html += technologiesList.join("")
    html += "</ul>"
    return html
}