let clearButton;
let canvas;

let doodleClassifier;
let resultsDiv;

function setup() {
  canvas = createCanvas(400, 400);
  clearButton = createButton("clear");
  clearButton.mousePressed(clearCanvas);
  background(255);

  doodleClassifier = ml5.imageClassifier("Doodlenet", modelReady);
  resultsDiv = createDiv("model loading");
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(results);

  let content = `${results[0].label}
                 ${nf(100 * results[0].confidence, 2, 1)}%<br/>
                 ${results[1].label}`;
  resultsDiv;
}

function clearCanvas() {
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(8);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
