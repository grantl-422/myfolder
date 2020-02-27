let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title
let slider

// Initialize Game Variables
let lives = 3
let score = 0
let winningNum = 5

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)
background('blue')

  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)


  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')
  slider = createSlider(0, 100, 20);

}

function draw() {
  // Adjust frameRate according to slider
   frameRate(slider)

  // Randomly Position Banana
  bananaImg.position(random(width), random(height))


}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.X, bananaImg.Y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {

}

function decreaseLives() {

}

function checkWin() {


}

function checkLose() {

}