const COLS = 50
const ROWS = 50
const W = 500
const H = 500
const OFFSET_X = W / COLS
const OFFSET_Y = H / ROWS

const srcW = 50
const srcH = 50
const SRC_OFFSET_X = srcW / COLS
const SRC_OFFSET_Y = srcH / ROWS
let src
const words = 'A'

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
	src.textSize(50)
	src.textAlign(CENTER)
	
}

function draw() {
	src.background(255)
	src.text(words[(frameCount - 1) % 26], 25, 43)
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
	}
	console.log(rowsData)
	// image(src, 0, 0, W, H)
	for (let i = 0; i < rowsData.length; i ++) {
		for (let j = 0; j < rowsData[i].length - 1; j ++) {
			fill(0)
			noStroke()
			triangle(
				rowsData[i][j] * OFFSET_X, i * OFFSET_Y + 1,
				rowsData[i][j] * OFFSET_X, (i + 1) * OFFSET_Y - 1,
				rowsData[i][j + 1] * OFFSET_X, i * OFFSET_Y + OFFSET_Y / 2  
			)
		}
	}
}

function lookUp(c, r, srcPixels) {
	const index = srcW * r * SRC_OFFSET_Y + c * SRC_OFFSET_X
	const b = color(srcPixels[index * 4], srcPixels[index * 4 + 1], srcPixels[index * 4 + 2])
	return brightness(b) < 0.5 ? 1 : 0
}

