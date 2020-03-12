const WIDTH = 500,
			HEIGHT = 500,
			COL = 10,
			ROW = 10,
			SIZE = 50

const grid = new Grid({
	COL, ROW, SIZE
})

function setup() {
	createCanvas(WIDTH, HEIGHT)
	// colorMode(HSB)
}

function draw() {
	background('rgba(0, 0, 0, .05)')
	grid.go(({col, row, index}) => {
		push()
		translate(col * SIZE + SIZE / 2, row * SIZE + SIZE / 2)
		stroke(255)
		let angle = Math.PI * Math.sin(frameCount * 0.01 + index * 0.01)
		// let angle = frameCount * 0.02 + index * 0.1
		// line(- SIZE * Math.cos(angle + index * 0.1), SIZE * Math.sin(angle), SIZE, SIZE)
		line(- SIZE * Math.cos(angle) , SIZE , -SIZE * Math.sin(angle), -SIZE * Math.cos(angle * 0.1))
		pop()
	})
}
