let img
const cols = 25
const rows = 25
const size = 20

const grid = new Grid({
	col: cols,
	row: rows,
	size: size
})

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1)

	pg = createGraphics(50, 50)
	pg.pixelDensity(1)
	pg.background(255)
	pg.fill(0)
	pg.rect(15, 2, 20, 20)

	// image(pg, 0, 0, 500, 500)
	// image(pg, 500, 500)

	stroke('#000')
	strokeCap(PROJECT);
	pg.loadPixels()
	let p = pg.pixels
	console.log(p.length / 4)
	const sampleSize = 2
	let sum = 0
	grid.go(({col, row, index}) => {

		let x = col * size + size / 2
		let y = row * size + size / 2
		// console.log(index)
		// console.log(p.length)
		let i = row * cols + col
		let c = color(p[i * sampleSize * 4], p[i * sampleSize *4 + 1], p[i * sampleSize *4 + 2])
		push()
		translate(x, y)
		b = brightness(c)
		if (b < 0.5) {
			sum ++
			// strokeWeight(15)
			// line(- size / 2, 0,  size / 2, 0)
			fill(0)
			ellipse(0, 0, 5, 5)
		}
		else {
			// strokeWeight(10)
			// line(0, -size/2, 0, size/2)
		}
		pop()
	})
	console.log(sum)

}

function draw() {

}
