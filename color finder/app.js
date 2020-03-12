/* eslint-disable no-eval */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */

function setup() {
    var randButtonId;
    setBoard()
    function setBoard(){
        randButtonId = "button"+random(1,4)
    let randButtonId = 1
    let currentPlayer = 1
    let p1Score = 0
    let p2Score = 0
    
    // Get UI Elements
    const p1ScoreDisplay = select('#score1')
    const p2ScoreDisplay = select('#score2')
    const button1 = select('#button1')
    const button2 = select('#button2')
    const button3 = select('#button3')
    const button4 = select('#button4')
    
    
    let R = random(0,255)
    let G = random(0,255)
    let B = random(0,255)
    let color = `RGB(${R}, ${G}, ${B})`
    let diffColor = `RGB(${R}, ${G}, ${B})`
    R +=20  //add 20 to current value of R
    G +=20
    B +=20
    

    button1.style('background-color', color)
    button2.style('background-color', color)
    button3.style('background-color', diffColor)
    button4.style('background-color', color)
    console.log(randButtonId)
    
    randButtonId = `button${Math.floor(random(1, 5))}`
    select(`#${randButtonId}`).style('background-color', diffColor)
    console.log(`correct button is: ${randButtonId}`)
}
function checkCorrect(buttonId){
    if(buttonId == randButtonId){
button1.mousePressed()
checkCorrect("button1")
button2.mousePressed()
checkCorrect("button2")
button3.mousePressed()
checkCorrect("button3")
button4.mousePressed()
checkCorrect("button4")
    }
}

}