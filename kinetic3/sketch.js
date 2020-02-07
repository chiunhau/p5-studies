const size = 8
const cols = 60
const gutter = 0
const grid = new Grid({
	col: cols,
	row: cols,
	size: size
})
let img

function wave(m) {
	return map(Math.sin(frameCount * 0.05 + m * 0.05), -1, 1, -100, 100)
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
		image(img, 0 , 0, size, size , tSize * col + wave(index), tSize * row , tSize, tSize,)
		pop()
	})
}
