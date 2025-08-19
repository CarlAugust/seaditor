// TODO: ADDING TYPESCRIPT AT SOME POINT!!!

const canvas = document.getElementById("text-box")
const ctx = canvas.getContext("2d")
const lineStart = 20

let text = ["Write stuff here", "Tuturururuaaaa"] // String array
function drawText() {

    ctx.font = "bold 18px Arial"
    let lineOffset = lineStart
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
    substr = text[state.line].substring(0, state.char)
    position = ctx.measureText(substr).width;
    ctx.fillRect(position + 10 - 1, lineStart + 25 * state.line, 1, -18)
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

