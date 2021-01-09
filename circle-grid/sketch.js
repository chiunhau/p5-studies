class CircleGrid {
	constructor(levels, divisions, radius, divisionGrow = 1) {
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
const SRC_W = 100
const SRC_H = 100

const grid = new CircleGrid(18, 12, 250)
let src
let dictionary = []
function setup() {
	src = createGraphics(SRC_W, SRC_H)
	src.pixelDensity(1)
	src.background(255)
	src.textSize(100)
	src.textFont('Helvetica')
	src.textStyle(BOLD)
	src.textAlign(CENTER)
	src.fill('#000')
	src.text('O', 50, 87)
	src.loadPixels()
	createCanvas(500, 500);
	background(0)



	
}

function draw() {
	background(0)
	push()
	translate(250, 250)
	grid.iterate(({angle, offset, pos, index, levels}) => {
		fill(255)
		noStroke()
		translate(Math.sin(frameCount * 0.05 + index * 0.01) * 4, 0)
		if (lookUp(pos.x + 250, pos.y + 250, src.pixels)) {		
			ellipse(0, 0, Math.abs(Math.sin(index * 0.1 + frameCount * 0.04) * (8 + levels * 0.3)))
			// noFill()
			// stroke(255)
			// strokeWeight(10)
			// strokeCap(ROUND)
			// let a = (Math,PI - angle) / 2
			// let l = Math.sin(angle / 2) * offset * 2
			// let vec = createVector(-l * Math.cos(a), l * Math.sin(a)).mult(0.001)
			// line(0, 0, vec.x, vec.y)
		}



	})
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