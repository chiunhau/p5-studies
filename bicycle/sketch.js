let lC, rC, bb, tt, ft, lr, rr

function setup() {
	createCanvas(windowWidth, windowHeight);
	lC = createVector(300, 500)
	lr = 100
	rr = 100
	rC = createVector(500, 500)
	bb = createVector(380, 500)
	tt = createVector(350, 420)
	ft = createVector(460, 420)
}

function draw() {
	background(0)
	noFill()
	strokeWeight(6)
	stroke(255)
	ft.x = (460 + Math.sin(frameCount * 0.02 - 2) * 10)
	ft.y = (410 + Math.sin(frameCount * 0.015) * 10)
	bb.x = (380 + Math.sin(frameCount * 0.023 + 1) * 20)
	tt.y = (420 + Math.cos(frameCount * 0.020 + 2) * 20)
	tt.x = (350 + Math.cos(frameCount * 0.025 + 5) * 10)
	lC.x = (300 + Math.cos(frameCount * 0.028 + 3) * 10)
	lC.y = (500 - map(Math.cos(frameCount * 0.014), -1, 1, 0, 2) * 8)
	rC.x = (500 + Math.sin(frameCount * 0.029) * 10)
	rC.y = (500 - map(Math.cos(frameCount * 0.02 + 1), -1, 1, 0, 2) * 8)
	lr = 550 - lC.y
	rr = 550 - rC.y
	let s = p5.Vector.mult(tt.copy().sub(bb), 1.3).add(bb)
	let h = p5.Vector.mult(ft.copy().sub(rC), 1.3).add(rC)
	drawTyre(lC.x, lC.y, lr, frameCount)
	drawTyre(rC.x, rC.y, rr, frameCount)
	ellipse(lC.x, lC.y, lr * 2, lr * 2)
	ellipse(rC.x, rC.y, rr * 2, rr * 2)

	line(lC.x, lC.y, bb.x, bb.y)
	line(lC.x, lC.y, tt.x, tt.y)
	line(bb.x, bb.y, s.x, s.y)
	line(tt.x, tt.y, ft.x, ft.y)
	line(bb.x, bb.y, ft.x, ft.y)
	line(h.x, h.y, rC.x, rC.y)
	line(s.x - 5, s.y, s.x + 15, s.y)
	line(h.x, h.y, h.x - 30, h.y)
	let bbAngle = frameCount * 0.05
	let stepA = createVector(bb.x + Math.cos(bbAngle) * 25, bb.y + Math.sin(bbAngle) * 25)
	let stepB = createVector(bb.x - Math.cos(bbAngle) * 25, bb.y - Math.sin(bbAngle) * 25)
	line(stepA.x, stepA.y, stepB.x, stepB.y)
	line(stepA.x - 4, stepA.y, stepA.x + 4, stepA.y)
	line(stepB.x - 4, stepB.y, stepB.x + 4, stepB.y)
	// line(0, 550, 1000, 550)
}

function drawTyre(x, y, r, t) {
	strokeWeight(2)
	stroke(100)
	for (let i = 0; i < 8; i ++) {
		let angle = (Math.PI / 8 ) * i + t * (0.026)
		line(x - Math.cos(angle) * r, y - Math.sin(angle) * r, x + Math.cos(angle) * r, y + Math.sin(angle) * r)
	}
	stroke(255)
	strokeWeight(6)
	// landscape()
}

function landscape(t) {
	let w = 800
	for (let i = 0; i < 10; i ++) {
		line(i * (w / 10), 550, i * (w / 10), 800)
	}
}

function light() {

}
