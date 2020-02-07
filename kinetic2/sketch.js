const size = 50
const cols = 10
const gutter = 0
const grid = new Grid({
	col: cols,
	row: cols,
	size: size
})
let img

function wave(m) {
	return map(Math.tan(frameCount * 0.02 - Math.cos(m * 0.05) * 0.2), -1, 1, -100, 100)
}

function wave2(m) {
	return map(Math.tan(frameCount * 0.02 - Math.cos(m * 0.05) * 0.2), -1, 1, -100, 100)
}

function preload() {
  img = loadImage('slice1.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)
	translate(100, 100)
	const tSize = img.width / cols
	grid.go(({col, row, index}) => {
		push()
		translate((size +gutter)* col , (size +gutter) * row)
		image(img, 0 , 0, size * map(Math.sin(frameCount * 0.1 + col), -1, 1, 0, 1) , size, tSize * col, tSize * row , tSize, tSize,)
		// image(img, 0 , 0, size , size * Math.sin(frameCount * 0.1 + index * 0.1), tSize * col + wave(col + index * 0.5), tSize * row , tSize, tSize,)
		pop()
	})
}
