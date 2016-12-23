var sketchProc=function(processingInstance){ with (processingInstance){
    setup = function() {
        size(windowWidth/2, windowHeight/2);
        frameRate(20);
        //background(0, 10, 0);
        strokeWeight(3);
    };
    
    var createParticle = function(state, speed, temperature, locationX, locationY, directionX, directionY, material) {
        particles.push([state, speed, temperature, locationX, locationY, directionX, directionY]);
        println("Hi");
    };
    
    var drawParticle = function(state, speed, temperature, locationX, locationY, directionX, directionY, material) {
        fill(0, 0, 0);
        pushMatrix();
        translate(locationX, locationY);
        ellipse(0, 0, 5, 5);
        line(0, 0, 3*speed, 0);
        line(3*speed, 0, 3*speed-7.5, 3*speed-5);
        line(3*speed, 0, 3*speed-7.5, 3*speed+5);
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
