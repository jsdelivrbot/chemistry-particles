var sketchProc=function(processingInstance){ with (processingInstance){
    setup = function() {
        size(windowWidth/2, windowHeight/2);
        frameRate(20);
        //background(0, 10, 0);
        strokeWeight(2);
    };
    
    var createParticle = function(state, speed, temperature, locationX, locationY, rotation, material) {
        particles.push([state, speed, temperature, locationX, locationY, rotation, material]);
    };
    
    var drawParticle = function(state, speed, temperature, locationX, locationY, rotation, material) {
        fill(0, 0, 0);
        pushMatrix();
        translate(locationX, locationY);
        rotate(radians(rotation));
        ellipse(0, 0, 2.5, 2.5);
        line(0, 0, 3*speed, 0);
        line(3*speed, 0, 3*speed-5, -4);
        line(3*speed, 0, 3*speed-5, +4);
        //println("test");
        popMatrix();
    };
    var moveParticle = function() {
        
        for(var a = 0; a < particles.length; a++) {
            if(particles[a][0] === 'solid') {
                particles[a][3] += particles[a][1] * cos(radians(particles[a][5]));
                particles[a][4] += particles[a][1] * sin(radians(particles[a][5]));
            } else if(state === 'liquid') {

            } else if(state === 'gas') {

            }
            
            for(var b = 0; b < particles.length; b++) {
                if(a === b) {
                    //println("test2");
                    continue;
                } else if(particles[a][3]+10 > particles[b][3] && particles[a][3]-10 < particles[b][3] && particles[a][4]+10 > particles[b][4] && particles[a][4]+10 < particles[b][4]) {
                    var temp = particles[a][5]
                    particles[a][5] = particles[b][5];
                    particles[b][5] = temp;
                    println("hi");
                }
            }
        }
    };
    
    
    draw = function() {  
        background(255, 255, 255);
        fill(0, 0, 255);
        //text("I know where you live at night", 200, 200);
        //println("Hi");
        for(var a = 0; a < particles.length; a++) {
            drawParticle(particles[a][0], particles[a][1], particles[a][2], particles[a][3], particles[a][4], particles[a][5], particles[a][6]);
        }
        moveParticle();
    };
    
    mouseClicked = function() {
        println("test");
        createParticle('solid', 3, 3, mouseX, mouseY, random(0, 360), "water");
        println(particles);
    };
}};
