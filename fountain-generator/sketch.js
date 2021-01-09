let bg, data, pics = []
const pick = [5, 24, 28, 31, 34, 39]
function setup() {
	createCanvas(1200, 630);
	console.log(data)
	console.log(pics)
	pixelDensity(1)
	// for (let i = 0; i < 15; i ++) {
	// 	// render(data[i].name, data[i].desc, pics[i])
	// 	// save(`fountain/fountain-${i + 1}.png`)
	// 	setTimeout(() => {
	// 		render(data[i].name, data[i].desc, pics[i])
	// 		save(`fountain/fountain-${i + 1}.png`)
	// 	}, 500)
	// }
	// let i = 0;
	// setInterval(() => {
	// 	render(data[i].name, data[i].desc, pics[i])
	// 	save(`fountain-${i + 1}.png`)
	// 	i ++
	// }, 500)

	for (let i = 0; i < pick.length; i ++) {
		render(data[pick[i]-1].name, data[pick[i]-1].desc, pics[pick[i]-1])
		save(`fountain-${pick[i]}.png`)
	}
	
	
}

function preload() {
	bg = loadImage('img/og.png');
	data = loadJSON('data.json')

	for(let i = 0; i < 42; i ++) {	
		pics[i] = loadImage(`img/${i+1}.jpg`)
	
	}
	
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		save()
	}
}

function render(item, descText, pic) {
	image(bg, 0, 0)
	image(pic, width / 2, height / 2, width / 2, height / 2, 0, 0, pic.width, pic.width * (height / width))
	filter(GRAY)
	fill(255)
	rect(33, 314, 550, 45)

	textSize(38)
	textStyle(BOLD)
	fill(0)
	text('2045年，我希望', 34, 351)
	text('消失', 500, 351)
	fill('#f00')

	textAlign(CENTER)
	text(item, 409, 351)
	textAlign(LEFT)
	textSize(30)
	textStyle(NORMAL)
	fill(255)
	text(descText, 34, 410)

	textSize(56)
	textStyle(BOLD)
	fill(255)
	text(`你想要什麼樣的未來？`, 34, 570)
}
