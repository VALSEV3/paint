let penColor = "black";
let colorChoosed = false;
let penClicked = false;
let strokeW = 5;
let popup, strokeSlider;
let fillPopup;
let fillClicked = false;
let currentBgColor = "white";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(currentBgColor);
  color;
  strokeWeight(strokeW);
  popup = select("#popup");
  fillPopup = select("#fillPopup");
  strokeSlider = createSlider(1, 20, strokeW);
  strokeSlider.id("slider");
  strokeSlider.parent("popup");

  const penBtn = select("#pen");
  const closeBtn = select("#close");
  const redBtn = select("#red");
  const blackBtn = select("#black");
  const blueBtn = select("#blue");
  const greenBtn = select("#green");
  const deleteAllBtn = select("#deleteAll");
  const fillBtn = select("#fill");
  const closeFill = select("#fillClose");
  const fillRed = select("#fillRed");
  const fillBlue = select("#fillBlue");
  const fillBlack = select("#fillBlack");
  const fillGreen = select("#fillGreen");

  deleteAllBtn.mousePressed(clearCanvas);

  penBtn.mousePressed(() => {
    if (!fillClicked) {
      penClicked = !penClicked;
      popup.style("display", penClicked ? "flex" : "none");
    }
  });

  fillBtn.mousePressed(() => {
    if (!penClicked) {
      fillClicked = !fillClicked;
      fillPopup.style("display", fillClicked ? "flex" : "none");
    }
  });

  closeFill.mousePressed(() => {
    fillClicked = false;
    fillPopup.style("display", "none");
  });

  closeBtn.mousePressed(() => {
    penClicked = false;
    popup.style("display", "none");
  });

  redBtn.mousePressed(() => changePenColor("red"));
  blackBtn.mousePressed(() => changePenColor("black"));
  blueBtn.mousePressed(() => changePenColor("blue"));
  greenBtn.mousePressed(() => changePenColor("green"));
  fillRed.mousePressed(() => fillCanvas("red"));
  fillBlack.mousePressed(() => fillCanvas("black"));
  fillBlue.mousePressed(() => fillCanvas("blue"));
  fillGreen.mousePressed(() => fillCanvas("green"));
}

function fillCanvas(color) {
  currentBgColor = color;
  background(currentBgColor);
  fillPopup.style("display", "none");
  fillClicked = false;
}

function changePenColor(color) {
  penColor = color;
  colorChoosed = true;
  popup.style("display", "none");
  penClicked = false;
}

function draw() {
  strokeW = strokeSlider.value();
  strokeWeight(strokeW);

  if (mouseIsPressed && colorChoosed && !penClicked) {
    stroke(penColor);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function clearCanvas() {
  if (confirm("Are you sure you want to clear the canvas?")) {
    clear();
    background(currentBgColor);
    colorChoosed = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(currentBgColor);
}
