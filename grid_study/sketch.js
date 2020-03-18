
const COLS = 7,
			ROWS = 7,
			SIZE = 80
const grid = new Grid({
	col: COLS,
	row: ROWS,
	size: SIZE
})
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
}

function draw() {
	background('rgba(0, 0, 0, 0.02)')
	stroke(255)
	grid.go(({col, row, index}) => {
		let levels = 4 - Math.abs(col - 3)
		push()
		translate(col * SIZE, row * SIZE)
		for (let i = 1; i < levels + 1  ; i ++) {
			line(
				0,
				(i  / (levels + 1)) * SIZE + Math.sin(frameCount * 0.02) * 20 * (index % 2 === 1 ? 1: -1),
				SIZE,
				(i / (levels + 1)) * SIZE + Math.sin(frameCount * 0.02) * 20 * (index% 2 === 1 ? 1: -1))
			// line(
			// 	-SIZE / 2,
			// 	(i  / (levels + 1)) * SIZE + Math.sin(frameCount * 0.02) * 25 * (index % 2 === 1 ? 1: -2),
			// 	SIZE,
			// 	(i / (levels + 1)) * SIZE + Math.cos(frameCount * 0.02) * 25 * (index% 2 === 1 ? 1: -2))
		}
		pop()
	})
}
