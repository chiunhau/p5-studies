const COLS = 100
const ROWS = 40
const W = 1000
const H = 800
const OFFSET_X = W / COLS
const OFFSET_Y = H / ROWS

const srcW = 100
const srcH = 80
const SRC_OFFSET_X = srcW / COLS
const SRC_OFFSET_Y = srcH / ROWS
let src
let rowsData = []
// const words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const words = 'OH'

const grid = new Grid({
	col: COLS,
	row: ROWS
})

function setup() {
	createCanvas(W, H);
	src = createGraphics(srcW, srcH)
	src.pixelDensity(1)
	src.background(255)
	src.fill(0)
	src.noStroke()
	src.textStyle(BOLD)
	src.textFont('Arial')
	src.textSize(46)
	src.textAlign(CENTER)
	let t = words
	src.text(t, 50, 55)
	src.loadPixels()
	background(0)
	
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
	
}

function draw() {
	background(0)
	// image(src, 0, 0, W, H)
	for (let i = 0; i < rowsData.length; i ++) {
		for (let j = 0; j < rowsData[i].length - 1; j ++) {

			if (j % 2 === 0) {
				drawLine(
					rowsData[i][j] * OFFSET_X, 
					i * OFFSET_Y,
					(rowsData[i][j + 1] - rowsData[i][j]) * OFFSET_X,
					'HOR'
					)
			}
			else {
				drawLine(
					rowsData[i][j] * OFFSET_X, 
					i * OFFSET_Y,
					(rowsData[i][j + 1] - rowsData[i][j]) * OFFSET_X,
					'MOUNTAIN'
					)
			}			
		}
	}
	// save('type-grid-' + t + '.png')
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
	noFill();
	// Left to right gradient
	for (let i = x; i <= x + w; i++) {
		let inter = map(i, x, x + w, 0, 1);
		let c = lerpColor(c1, c2, inter);
		// let yOffset = Math.sin(i * 0.1) *4
		// let yOffset = Math.sin(i * 0.06) * 4
		let yOffset = 0
		stroke(c);
		line(i, y + yOffset, i, y + h + yOffset);
	}	
}

function drawLine(x, y, w, type) {
	stroke(255)
	strokeWeight(4)
	if (type === 'HOR') {
		noFill()
		line(x, y, x + w, y)
	}
	else if (type === 'MOUNTAIN') {
		// line(x, y, x + w / 2, y - 30)
		// line(x + w / 2 , y - 30, x + w, y)
		let peak = createVector(
			 w / 2 + Math.sin(frameCount * 0.02  ) * (w / 2),
			Math.abs(Math.sin(frameCount * 0.01) * 40),
		)
		fill(0)

		beginShape();
		vertex(x, y);
		vertex(x + peak.x, y -  peak.y);
		// vertex(x + w - 5, y + 10);
		vertex(x + w, y);
		// vertex(x + w / 2, y - 30);
		// vertex(x + w, y);
		endShape();
	}
}
