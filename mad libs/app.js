let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  addInputOutputElements()

addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
false, 
false 
)
addTopic(
  'person',
  'I knew a person called' ,
  ' .they were really cool at first but when i started to get to know them they were just weird.',
true,
false,  
)
addTopic(
    'Thing',
    'OMG!! that soo cool', 
    ' I love those ',
true,
false, 
)
addTopic(
    'verb',
    'You should', 
    ' I heard that it boost your confidence',
true,
false,
)
addTopic(
    'hobby',
    'i love ', 
    ' It makes me so happy, filled up with joy. I used to have a friend that did it with me but he died a few years ago',
true, 
false, 
)
addTopic(
  'Number',
  'oh, wow', 
  ' thats ur lucky Number',
true,
false, 
)


  

  // Creates next button and styles it
  let outputDisplayBtn = createButton('NEXT')
  outputDisplayBtn.mousePressed(showOutputHandler)
  .parent(inputDivUI)

  function showOutputHandler() {
    outputDivUI.show()
    inputDivUI.hide()
  }
}

function addInputOutputElements() {
  createElement('h1', 'Mad Libs Game')
  createElement('h4', 'Enter Some Text to See The Result')

  inputDivUI = createDiv('').id('inputs')
  outputDivUI = createDiv('').id('outputs')
  outputDivUI.hide()
}

function addTopic(topic, intro, detail,uppercase,num) {
  createElement('p', `Name a ${topic.toUpperCase()}`)
    .id('input-label')
    .parent(inputDivUI)

  let inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI)


let userInput = inputFieldUI.value().toLowerCase()

inputFieldUI.changed(updateOutputHandler)
   
if(uppercase === true){
 userInput = userInput.toUpperCase()

}

if(num === true){
userInput = Number(userInput)
userInput = userInput+30 

}

function updateOutputHandler() {
  let output = createP('').parent(outputDivUI)
  output.html(intro + inputFieldUI.value() + detail)
  }
}