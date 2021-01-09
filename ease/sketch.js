const loop = (t, range) => t % range
const loopBack = (t, range) => {
	let temp = t % (range * 2)
	if (temp < range) return temp
	else return 2 * range - temp
}
const easeInOutQuad = t => t<.5 ? 2*t*t : -1+(4-2*t)*t
const easeInOutQuart = t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t
const easeInOutCubic = t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255)
	let offsetX1 = easeInOutQuad(loopBack(frameCount, 100) / 100) * 300
	let offsetX2 = easeInOutQuart(loopBack(frameCount, 100) / 100) * 300
	let offsetX3 = easeInOutCubic(loopBack(frameCount, 100) / 100) * 300
	ellipse(100 + offsetX1, 100, 50, 50)
	ellipse(100 + offsetX2, 250, 50, 50)
	ellipse(100 + offsetX3, 400, 50, 50)
}

