class CircleGrid {
	constructor(levels, divisions, radius, divisionGrow = 2) {
		this.levels = levels
		this.divisions = divisions
		this.radius = radius
		this.divisionGrow = divisionGrow
		this.offset = radius / levels
		this.angle = (2 * Math.PI) / divisions
	}

	iterate = callback => {
		let sum = 0
		for (let i = 0; i < this.levels; i++) {
			let activeDivisions = this.divisionGrow * this.divisions* i
			let activeAngle = (2 * Math.PI) / activeDivisions
			for (let j = 0; j < activeDivisions; j++) {
				let expectedPos = createVector(
					i * this.offset * Math.cos(activeAngle * j),
					i * this.offset * Math.sin(activeAngle * j)
				)
				push()
				rotate(activeAngle * j)
				translate(i * this.offset, 0)
				callback({
					offset: i * this.offset,
					angle: activeAngle,
					pos: expectedPos,
					division: j,
					levels: i,
					index: sum
				})
				sum ++
				pop()
			}	
		}
	}
}

const W = 500
const H = 500
const SRC_W =250
const SRC_H = 250

const grid = new CircleGrid(18, 12, 250)
let src
let dictionary = []
function setup() {
	createCanvas(500, 500);
	background(0)
}

function draw() {
	translate(200, 200)
	push()
	translate(frameCount * 0.01, 0)
	rotate(frameCount * 0.006)
	stroke(Math.abs(frameCount % 510 - 255))
	let size = (Math.cos(frameCount * 0.002) + 1) * 50
	line(size, 0, -size, 0)
	pop()
}

function lookUp(x, y, srcPixels) {
	let srcX = Math.floor(x * (SRC_W / W))
	let srcY = Math.floor(y * (SRC_H / H))
	let index = srcY * SRC_W + srcX
	// console.log(index)
	let c = color(srcPixels[index * 4], srcPixels[index * 4 + 1], srcPixels[index * 4 + 2])
	return brightness(c) < 50
}