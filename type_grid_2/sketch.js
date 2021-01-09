const FULL_SIZE = 600
const SRC_SIZE = 100
const COLS = 50
const ROWS = 50
const words = 'ABCDEFG'
const grid = new Grid({
	col: COLS,
	row: ROWS
})
let src

function setup() {
	createCanvas(FULL_SIZE, FULL_SIZE)
	pixelDensity(1)



	src = createGraphics(SRC_SIZE, SRC_SIZE)
	src.pixelDensity(1)
	src.background(255)
	src.fill(0)
	src.textSize(40)
	src.textAlign(CENTER)
	src.textFont('Helvetica')
	src.textStyle(BOLD)
	src.text('SOS', 50, 68)
	src.loadPixels()
}

function draw() {
	// image(src, 0, 0, FULL_SIZE, FULL_SIZE )
	background(0)
	grid.go(({col, row}) => {
		const steps = SRC_SIZE / COLS
		const index = (row * steps + steps / 2) * COLS * steps + col * steps + steps / 2
		const srcColor = color(src.pixels[index * 4], src.pixels[index * 4 + 1], src.pixels[index * 4 + 2])
		const fullSteps = FULL_SIZE / COLS
		push()
		translate(col * fullSteps, row * fullSteps)

		strokeCap(SQUARE)
		if (brightness(srcColor) < 0.5) {
			strokeWeight(8)
			stroke(255)
			line(0, fullSteps / 2, fullSteps, fullSteps / 2)
		}
		else {
			strokeWeight(1)
			stroke(255)
			line(0, fullSteps / 2, fullSteps, fullSteps / 2)
		}
		pop()
	})
}
