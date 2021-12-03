const database = {
    paints:[
        {id:1, color:"Silver", price:1010},
        {id:2, color:"Midnight Blue", price:2200},
        {id:3, color:"Firebrick Red", price:3003},
        {id:4, color:"Spring Green", price:4040}
    ],
    wheels:[
        {id:1, wheel:"17-inch Pair Radial", price:1010},
        {id:2, wheel:"17-inch Pair Radial Black", price:2200},
        {id:3, wheel:"18-inch Pair Spoke Silver", price:3003},
        {id:4, wheel:"18-inch Pair Spoke Black", price:4040}
    ],
    interiors:[
        {id:1, material:"Beige Fabric", price:1010},
        {id:2, material:"Charcoal Fabric", price:2200},
        {id:3, material:"White Leather", price:3003},
        {id:4, material:"Black Leather", price:4040}
    ],
    technologies:[
        {id:1, tech:"Basic Package", price:1010},
        {id:2, tech:"Navigation Package", price:2200},
        {id:3, tech:"Visibility Package", price:3003},
        {id:4, tech:"Ultra Package", price:4040}
    ],
    customOrders:[],
    orderBuilder:[]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    if(lastIndex === -1){
        newOrder.id = 1
    }
    else {
        newOrder.id = database.customOrders[lastIndex].id + 1
    }
    
    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
