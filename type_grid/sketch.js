const SIZE = 500
let src, srcPixels
function setup() {
	createCanvas(SIZE, SIZE);
	pixelDensity(2)
	background(0)
	loadPixels()


	src = createGraphics(SIZE, SIZE)
	src.pixelDensity(1)
	src.fill(0)
	src.textSize(300)
	src.textAlign(CENTER)
	src.textFont('Helvetica')
	src.textStyle(BOLD)
	src.text('A', 250, 350)
	src.loadPixels()
	srcPixels = src.pixels
	//
	image(src, 0, 0)
	render(2000)

	save(`${random(100)}.png`)
}

function draw() {
	// render(frameCount)
}

function scaling(x, y, t = 0) {
	const original = createVector(x, y)
 	let transformed
	// if (brightness(getColorFromSrc(x, y, srcPixels)) < 0.5) {
	//
	// }
	// return Math.sin(transformed.y * 0.5 + Math.sin(transformed.x * 0.02 + transformed.y  * map(Math.sin(t * 0.01), -1, 1, -0.05, 0.05)) * 10)
	if ( x % 250 < 220 && x % 250 > 20 && y % 250 < 220 && y % 250 > 20) {
		transformed = original.rotate(PI / 4).mult(1)
		return Math.sin((transformed.y  + Math.sin(transformed.x * 0.04) * 10) * 0.1)
		// return Math.sin(transformed.y * 0.2 + Math.sin(transformed.x * 0.02) * 10)
	}
	else {
		transformed = original.rotate(PI / 4).mult(1)
		return Math.sin(transformed.y * 0.2)
	}

}

function binary(scaled) {
	return scaled > 0 ? 255 : 0
}

function render(t) {
	const resolution = 1;
	for (let i = 0; i < SIZE * pixelDensity(); i += resolution) {
		for (let j = 0; j < SIZE * pixelDensity(); j += resolution ) {
			let c = binary(scaling(j, i, t))
			pixels[(i * SIZE * pixelDensity()+ j) * 4] = c
			pixels[(i * SIZE * pixelDensity()+ j) * 4 + 1] = c
			pixels[(i * SIZE * pixelDensity()+ j) * 4 + 2] = c
		}
	}
	updatePixels()
}

function getColorFromSrc(x, y, srcPixels) {
	const index = (y * SIZE + x) * 4
	return color(srcPixels[index], srcPixels[index + 1], srcPixels[index + 2])
}
