import { getPaints } from "./database.js";

const paints= getPaints()

export const paintColors = () => {
    for (const paint of paints) {
        return `<input type="radio" value="1" name="resource"> ${paint.color}`
    }
}
