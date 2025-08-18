// TODO: ADDING TYPESCRIPT AT SOME POINT!!!

const canvas = document.getElementById("text-box")
const ctx = canvas.getContext("2d")

let text = ["Write stuff here", "Tuduluuuu"] // String array
function drawText() {

    ctx.font = "bold 18px Arial"
    let lineOffset = 20
    for (line of text) {
        ctx.fillText(line, 10, lineOffset)
        lineOffset += 25
    }
}

let state = {
    line: 0,
    char: 0,
}

function drawCursor() {
    
}

function writeMode() {
    drawCursor(state.line, state.char)
    addEventListener("keydown", function(event) {
        event.preventDefault();
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
            // Move state
        } else if (event.key == 'Enter') {
            // Add newline
        } else if (event.key == 'Backspace') {
            // Remove char at position and remove line if nessecary
        } else {
            // Add character at position
        }
    })
}

function draw() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    drawText()
}
// Main events

addEventListener("resize", () => {
    draw()
})

canvas.addEventListener("click", () => {
    console.log("Writing mode")
    writeMode()
})
draw()

