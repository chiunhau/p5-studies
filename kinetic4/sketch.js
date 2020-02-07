const size = 10
const cols = 50
const gutter = 0
const grid = new Grid({
	col: cols,
	row: cols,
	size: size
})
let img
const wSize = size * cols

function blockTranslateX(c, r) {
	// const cW = map(Math.sin(r * 0.1 + frameCount * 0.01), -1, 1, 8, 12)
	// const cW = map(Math.sin(c * 0.001 * frameCount + r * 0.1), -1, 1, 0, 12)
	// const cW = map(Math.sin(r * 0.1+ frameCount * 0.05), -1, 1, 0, 12)
	const cW = map(Math.tan(r * 0.01 + frameCount * 0.02), -1, 1, 4, 10)
	// const cW = Math.abs(Math.tan(r * 0.01 + frameCount * 0.02)) + 9
	// return (c - (cols / 2)) * cW + wSize / 2
	return (c - (cols / 2)) * cW  + wSize / 2

}

function blockTranslateY(c, r) {
	// const cW = map(Math.sin(r * frameCount * 0.01), -1, 1, 0, 12)
	// const cW = map(Math.sin(r * 0.1+ frameCount * 0.05), -1, 1, 0, 12)
	// const rW = map(Math.sin(c * 0.1 + frameCount * 0.06), -1, 1, 8, 10)
	return (r - (cols / 2)) * 10 + wSize / 2

}

function blockScaleX(c, r) {
	return map(Math.sin(r * 0.1 + frameCount * 0.1), -1, 1, 0.5, 2)
}

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
		translate(blockTranslateX(col, row), blockTranslateY(col, row))
		image(img, 0 , 0, size, size, tSize * col, tSize * row , tSize, tSize,)
		pop()
	})
}
