const canvas = document.getElementById("text-box")
const ctx = canvas.getContext("2d")

function draw() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    ctx.fillStyle = "rgb(200 0 0)"
    ctx.fillRect(10, 10, 20, 40)
}

addEventListener("resize", () => {
    draw()
})

draw()

