const size = 50
const cols = 10
const gutter = 0
const grid = new Grid({
	col: cols,
	row: cols,
	size: size
})
let img
const wSize = size * cols

function preload() {
  img = loadImage('slice1.png');
}

function setup() {
	createCanvas(600, 600)
}

function draw() {
	background(0)
	translate(50, 50)
	const tSize = img.width / cols
	grid.go(({col, row, index}) => {
		push()
		translate(size * col , size * row)
		image(img, Math.sin(frameCount * 0.06 + row * 0.5 + col) * 10 , Math.cos(frameCount * 0.1 + row * 0.5 + col) * 10, size - Math.sin(frameCount * 0.1 + row * 0.5 + col) * 10, size - Math.sin(frameCount * 0.1 + row * 0.5 + col) * 10, tSize * col, tSize * row , tSize, tSize,)
		pop()
	})
}
