var sketchProc=function(processingInstance){ with (processingInstance){
    setup = function() {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        size(windowWidth/2, windowHeight/2);
        frameRate(20);
        background(0, 10, 0);
    };
    
    //[{state: , speed: , temperature:}]
    var particles = [];
    
    var createParticle = function(state_, speed_, temperature_, locationX_, locationY_) {
        var object = {
            state: state_,
            speed: speed_,
            temperature: temperature_,
            locationX: locationX_,
            LocationY: locationY_
        };
        particles.push({object});
        println("Hi");
    };
    
    draw = function() {  
        background(255, 255, 255);
        fill(0, 0, 255);
        text("I know where you live at night", 200, 200);
        //println("Hi");
    };
    
    mouseClicked = function() {
        println("test");
        createParticles(1,2,3,mouseX,mouseY);
        println(particles);
    };
}};
