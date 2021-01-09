const SIZE = 500
function setup() {
	createCanvas(SIZE, SIZE);
	pixelDensity(2)
	background(0)
	loadPixels()
	render(2000)

	// save(`${random(100)}.png`)
}

function draw() {
	// render(frameCount)
}

function scaling(x, y, t = 0) {
	// return map(Math.sin(y * 0.1 + Math.sin(x * 0.05 + Math.sin(x * 0.01 + y * 0.01)) * 10), -1, 1, 0, 255)
	// return map(Math.sin(y * 0.05 + Math.sin(x * 0.02) * 5), -1, 1, 0, 255)
	const original = createVector(x, y)
 	const transformed = original.rotate(PI / 4).mult(1)
	// return Math.sin(transformed.y * 0.5 + Math.sin(transformed.x * 0.02 + transformed.y  * map(Math.sin(t * 0.01), -1, 1, -0.05, 0.05)) * 10)
	return Math.sin(transformed.y * 0.5)
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


// r = [ cos, -sin,
// 			sin, cos ]


// rr = [ cos, sin,
// 			-sin, cos ]
