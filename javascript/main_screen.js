var sketchProc=function(processingInstance){ with (processingInstance){
    setup = function() {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        size(windowWidth/2, windowHeight/2);
        frameRate(20);
        //background(0, 10, 0);
    };
    
    var heat_source_temperature = 0; //Celcius, -25 upto 100.
    
    //[{state: , speed: , temperature:}]
    var particles = [];
    
    var createParticle = function(state, speed, temperature, locationX, locationY, directionX, directionY) {
        particles.push([state, speed, temperature, locationX, locationY, directionX, directionY]);
        println("Hi");
    };
    
    var drawParticle = function(state, speed, temperature, locationX, locationY) {
        fill(0, 0, 0);
        ellipse(locationX, locationY, 10, 10);
    };
    
    
    draw = function() {  
        background(255, 255, 255);
        fill(0, 0, 255);
        text("I know where you live at night", 200, 200);
        //println("Hi");
        for(var a = 0; a < particles.length; a++) {
            drawParticle(particles[a][0], particles[a][1], particles[a][2], particles[a][3], particles[a][4], particles[a][5], particles[a][6]);
        }
    };
    
    mouseClicked = function() {
        println("test");
        createParticle(1, 2, 3, mouseX, mouseY, random(1, -1), random(1, -1));
        println(particles);
    };
}};
