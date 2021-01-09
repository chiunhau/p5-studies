const COLS = 50
const ROWS = 25
const W = 500
const H = 500
const OFFSET_X = W / COLS
const OFFSET_Y = H / ROWS

const srcW = 50
const srcH = 50
const SRC_OFFSET_X = srcW / COLS
const SRC_OFFSET_Y = srcH / ROWS
let src
const words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const grid = new Grid({
	col: COLS,
	row: ROWS
})

function setup() {
	
	createCanvas(W, H);
	background(255)
	frameRate(1)
	src = createGraphics(srcW, srcH)
	src.pixelDensity(1)
	src.background(255)
	src.fill(0)
	src.noStroke()
	src.textStyle(BOLD)
	src.textFont('Arial')
	src.textSize(54)
	src.textAlign(CENTER)

}

function draw() {

	let t = words[(frameCount - 1) % words.length]
	src.background(255)
	
	src.text('R', 25, 44)
	// src.text('S', 25, 42)
	src.loadPixels()
	background(255)
	let rowsData = []
	for (let i = 0; i < ROWS; i ++) {
		let rowData= [0]
		let acc = 0
		let begin
		for (let j = 0; j < COLS; j ++) {
			let current = lookUp(j, i, src.pixels)
			if (j === 0) {
				begin = current
				acc ++
			}
			else {
				if (current === begin) {
					acc ++
				}
				else {
					rowData.push(acc)
					acc ++
					begin = current
				}
				if (j === COLS - 1) {
					rowData.push(acc)
				}
			}
		}
		rowsData.push(rowData)

		if
	}
	// image(src, 0, 0, W, H)
	for (let i = 0; i < rowsData.length; i ++) {
		for (let j = 0; j < rowsData[i].length - 1; j ++) {

			// noStroke()
			if (i % 2 === 0) {
				setGradient(
					rowsData[i][j] * OFFSET_X, 
					i * OFFSET_Y,
					(rowsData[i][j + 1] - rowsData[i][j]) * OFFSET_X,
					OFFSET_Y,
					color('#000'),
					color('#fff'),
				)
			}
			else {
				setGradient(
					rowsData[i][j] * OFFSET_X, 
					i * OFFSET_Y + 0,
					(rowsData[i][j + 1] - rowsData[i][j]) * OFFSET_X,
					OFFSET_Y - 0,
					color('#fff'),
					color('#000'),
				)
			}
			
		}
	}
	// save('type-grid-' + 'R' + '.png')
}

function lookUp(c, r, srcPixels) {
	const index = srcW * r * SRC_OFFSET_Y + c * SRC_OFFSET_X
	const b = color(srcPixels[index * 4], srcPixels[index * 4 + 1], srcPixels[index * 4 + 2])
	return brightness(b) < 0.5 ? 1 : 0
}

function setGradient(x, y, w, h, c1, c2, axis) {
	// fill(c1)
	// noStroke()
	// ellipse(x, y + h / 2 + 0.5, h + 1, h + 1)
	// noFill();
	// Left to right gradient
	for (let i = x; i <= x + w; i++) {
		let inter = map(i, x, x + w, 0, 1);
		let c = lerpColor(c1, c2, inter);
		// let yOffset = Math.sin(i * 0.1) *4
		let yOffset = Math.sin(i * 0.06) * 4
		// let yOffset = 0
		stroke(c);
		line(i, y + yOffset, i, y + h + yOffset);
	}

	
}

function mouseClicked() {
	save('type.png')
}