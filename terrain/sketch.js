let cols, rows;
let scl = 30;

let w = 900;
let h = 900;
let depth = 110
let offsetCon = 0.12

let terrain = []

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
  cols =  height/ scl;
	rows = width / scl;
}

function draw() {
	background(0);
	push()
  stroke('rgba(255, 255, 255, 0.3)');
  noFill();
  strokeWeight(1)
  rotateX(PI/3);

	translate(-width/2, -height/2);
	let offsetX = mouseX * 0.01
	let offsetY = mouseY * 0.01
	for(let y = 0; y < cols; y++) {
    beginShape(TRIANGLE_STRIP);
		for(let x = 0; x < rows; x++) {  
      vertex(x*scl, y*scl, map(noise(x * offsetCon + offsetX, y * offsetCon + offsetY), 0, 1, -depth, depth));
      vertex(x*scl, (y+1)*scl, map(noise(x * offsetCon + offsetX, (y + 1) * offsetCon +  offsetY), 0, 1, -depth, depth));
    }
    endShape();
	}
	pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}