let slider;

function setup() {
    createCanvas(1000, 120); 
    colorMode(HSB);
    slider = createSlider(0, 400, 200);
    slider2 = createSlider(0, 300,150); 
    slider3 = createSlider(0,250,125);
    
  }
  function draw() {
    background(slider.value(),slider2.value(),slider3.value());

    textSize(80);
    text("chevy trucks suck", 210, 100);
  }
