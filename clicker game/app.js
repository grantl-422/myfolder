let bananaImg 
let heading

function setup(){
    createCanvas(windowWidth, windowHeight);
    bananaImg = createImg('/banana.png','banana image');
    bananaImg.size(200,100)
    heading = createElement('h2','click the banana!')
    heading.position(width/3,height/4)
}
function draw(){
bananaImg.position(random(width),random(height))
mousePressed(bananaImg)


}