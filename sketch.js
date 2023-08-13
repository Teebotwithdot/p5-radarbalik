let angle = 0;
let distance = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  fill(98, 245, 31);
  noStroke();
  fill(0, 4);
  rect(0, 0, width, height - height * 0.065);

  fill(98, 245, 31);
  drawRadar();
  drawLine();
  drawObject();
  drawText();
}

function drawRadar() {
  push();
  translate(width / 2, height - height * 0.074);
  noFill();
  strokeWeight(2);
  stroke(98, 245, 31);
  // Adjust the arc lines for the larger range
  arc(0, 0, width * 0.875, width * 0.875, PI, TWO_PI);
  arc(0, 0, width * 0.54, width * 0.54, PI, TWO_PI);
  arc(0, 0, width * 0.35, width * 0.35, PI, TWO_PI);
  arc(0, 0, width * 0.16, width * 0.16, PI, TWO_PI);
  line(-width / 2, 0, width / 2, 0);
  line(0, 0, (-width / 2) * cos(radians(45)), (-width / 2) * sin(radians(45)));
  line(0, 0, (-width / 2) * cos(radians(90)), (-width / 2) * sin(radians(90)));
  line(0, 0, (-width / 2) * cos(radians(135)), (-width / 2) * sin(radians(135)));
  line((-width / 2) * cos(radians(45)), 0, width / 2, 0);
  pop();
}

function drawObject() {
  push();
  translate(width / 2, height - height * 0.074);
  strokeWeight(10);
  stroke(255, 10, 10);

  let pixsDistance = min(distance, 400) * ((height - height * 0.1666) * 0.0025);

  if (distance <= 400) {
    let x = pixsDistance * cos(radians(angle));
    let y = -pixsDistance * sin(radians(angle));
    point(x, y);
  }

  pop();
}

function drawLine() {
  push();
  strokeWeight(5);
  stroke(30, 250, 60);
  translate(width / 2, height - height * 0.074);

  let lineLength = min(distance, 400) * ((width - width * 0.35) * 0.0025);
  let lineX = lineLength * cos(radians(angle));
  let lineY = -lineLength * sin(radians(angle));

  line(0, 0, lineX, lineY);

  pop();
}

function drawText() {
  push();
  fill(0);
  noStroke();
  rect(0, height - height * 0.0648, width, height);
  fill(98, 245, 31);
  textSize(25);

  text("100cm", width - width * 0.3854, height - height * 0.0833);
  text("200cm", width - width * 0.281, height - height * 0.0833);
  text("300cm", width - width * 0.177, height - height * 0.0833);
  text("400cm", width - width * 0.0729, height - height * 0.0833);
  textSize(40);
  text("Behind The Clutter", width - width * 0.875, height - height * 0.0277);
  text("Angle: " + angle + "°", width - width * 0.48, height - height * 0.0277);
  text("Distance: ", width - width * 0.26, height - height * 0.0277);
  if (distance < 400) {
    text("        " + distance + "cm", width - width * 0.225, height - height * 0.0277);
  }
  textSize(25);
  fill(98, 245, 60);
  translate(width - width * 0.4994 + width / 2 * cos(radians(30)), height - height * 0.0907 - width / 2 * sin(radians(30)));
  rotate(-radians(-60));
  text("30°", 0, 0);
  resetMatrix();
  translate(width - width * 0.503 + width / 2 * cos(radians(60)), height - height * 0.0888 - width / 2 * sin(radians(60)));
  rotate(-radians(-30));
  text("60°", 0, 0);
  resetMatrix();
  translate(width - width * 0.507 + width / 2 * cos(radians(90)), height - height * 0.0833 - width / 2 * sin(radians(90)));
  rotate(radians(0));
  text("90°", 0, 0);
  resetMatrix();
  translate(width - width * 0.513 + width / 2 * cos(radians(120)), height - height * 0.07129 - width / 2 * sin(radians(120)));
  rotate(radians(-30));
  text("120°", 0, 0);
  resetMatrix();
  translate(width - width * 0.5104 + width / 2 * cos(radians(150)), height - height * 0.0574 - width / 2 * sin(radians(150)));
  rotate(radians(-60));
  text("150°", 0, 0);
  pop();
}
