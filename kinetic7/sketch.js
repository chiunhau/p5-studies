const WIDTH = 500,
			HEIGHT = 500,
			COL = 10,
			ROW = 10,
			SIZE = 50

const grid = new Grid({
	COL, ROW, SIZE
})

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
}

function draw() {
	background('rgba(0, 0, 0, .01)')
	grid.go(({col, row, index}) => {
		push()
		translate(SIZE + col * SIZE, SIZE +row * SIZE)
		rotate((index * 0.1 + frameCount * 0.01) * (index % 2 === 0 ? 1 : -1))
		stroke(255)
		noFill()
		ellipse(SIZE * Math.sin(frameCount * 0.01), SIZE * Math.sin(frameCount * 0.01), 50 * Math.sin(frameCount* 0.01 + index * 0.1), 50 * Math.sin(frameCount* 0.01 + index * 0.1))
		pop()
	})
}
