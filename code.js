var sketchProc=function(processingInstance){ with (processingInstance){
    setup = function() {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        size(windowWidth/2, windowHeight/2);
        frameRate(20);
    };
    
    //[{state: , speed: , temperature:}]
    var particles = [];
    
    var createParticle(state, speed, temperature, locationX, locationY) {
        particles.push({state:speed, speed:speed, temperature:temperature});
    };
    
    draw = function() {  
        background(255, 255, 255);
        fill(0, 0, 255);
        text("I know where you live at night", 200, 200);
        //println("Hi");
    };
    
    mouseClicked = function() {
        createParticles(1,2,3,mouseX,mouseY);
        println(particles);
    };
}};
