var sketchProc=function(processingInstance){ with (processingInstance){
    setup = function() {
        size(windowWidth/2, windowHeight/2);
        frameRate(20);
        //background(0, 10, 0);
        strokeWeight(2);
    };
    
    var createParticle = function(state, speed, temperature, locationX, locationY, directionX, directionY, material) {
        particles.push([state, speed, temperature, locationX, locationY, directionX, directionY]);
        println("Hi");
    };
    
    var drawParticle = function(state, speed, temperature, locationX, locationY, directionX, directionY, material) {
        fill(0, 0, 0);
        pushMatrix();
        translate(locationX, locationY);
        if(directionX => 0 && directionY => 0) {
            if(directionX > directionY) {
                angle(degree(directionX-directionY));    
            } else if(directionX > directionY) { {
                angle(degree(directionY-directionX));    
            } else {
                angle(degree(45));    
            }
        } else {
            angle(degree(0));
        }
        ellipse(0, 0, 2.5, 2.5);
        line(0, 0, 3*speed, 0);
        line(3*speed, 0, 3*speed-5, -4);
        line(3*speed, 0, 3*speed-5, +4);
        println("test");
        popMatrix();
    };
    
    
    draw = function() {  
        background(255, 255, 255);
        fill(0, 0, 255);
        //text("I know where you live at night", 200, 200);
        //println("Hi");
        for(var a = 0; a < particles.length; a++) {
            drawParticle(particles[a][0], particles[a][1], particles[a][2], particles[a][3], particles[a][4], particles[a][5], particles[a][6], particles[a][7]);
        }
    };
    
    mouseClicked = function() {
        println("test");
        createParticle(1, 3, 3, mouseX, mouseY, random(1, -1), random(1, -1), "water");
        println(particles);
    };
}};
