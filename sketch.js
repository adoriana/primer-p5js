function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    console.log("x:" + mouseX + "y:" + mouseY);
  
    background(204, 153, 0);
    //cambio de color de fondo
    if (mouseIsPressed) {
      background(255, 191, 0);
    }
    
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
  
    fill(204, 0, 0);
    triangle(18, 18, 18, 360, 81, 360);
    //cambio de color del triángulo
    fill(204, 0, 0);
    if (mouseIsPressed) {
      fill(255, 128, 0);
      triangle(18, 18, 18, 360, 81, 360);
    }
  
    fill(255, 191, 0);
    ellipse(178, 234, 306, 249);
    //cambio de color del círculo grande
    if (mouseIsPressed) {
      fill(204, 153, 0);
      ellipse(178, 234, 306, 249);
    }
  
    fill(255, 128, 0);
    ellipse(252, 144, 72, 72);
    //cambio de color del círculo chiquito
    if (mouseIsPressed) {
      fill(204, 0, 0);
      ellipse(252, 144, 72, 72);
    }
    //líneas
    line(374, 35, 227, 243);
    line(7, 113, 204, 307);
    
  }
  