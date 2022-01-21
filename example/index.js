import Mosaic from "../dist/index"



const src = require("./assets/123.png")
const img = new Image()
img.src = src

document.body.appendChild(img)


const _enum = [
    [3.125, 3.125],
    [6.25, 6.25],
    [12.5, 12.5],
    [12.5, 6.25],
    [6.25, 12.5],


]
_enum.map(([nw, nh]) => {
    const mosaic = new Mosaic({
        src,
        nw,
        nh,
    })
    document.body.appendChild(mosaic.canvas)
})
