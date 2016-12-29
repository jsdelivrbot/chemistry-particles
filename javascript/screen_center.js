var sketchProc=function(processingInstance){ with (processingInstance){
    setup = function() {
        size(windowWidth/2, windowHeight/2);
        frameRate(20);
        //background(0, 10, 0);
        strokeWeight(2);
        randomSeed(random(-1000000000, 1000000000));
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
            //y-axis collision test.
            if(particles[a][4] < 0 || particles[a][4] > windowHeight/2) {
                particles[a][5] *= -1;
                
                //if the particle is stuck in the wall
                if(particles[a][4] < -2) {
                   particles[a][4] = 0;
                } else if(particles[a][4] > (windowHeight/2)+2) {
                   particles[a][4] = windowHeight/2;   
                }
            //x-axis collision test
            } else if(particles[a][3] < 0 || particles[a][3] > windowWidth/2) {
                println("Y-Axis Collision " + (180 - particles[a][5]));
                particles[a][5] = 180 - particles[a][5];
                
                //if the particle is stuck in the wall
                if(particles[a][3] < -2) {
                   particles[a][3] = 0;
                } else if(particles[a][3] > (windowWidth/2)+2) {
                   particles[a][3] = windowWidth/2;   
                }
            }
            
            if(particles[a][0] === 'solid') {
                //particles[a][3] += particles[a][1] * cos(radians(particles[a][5]));
                //particles[a][4] += particles[a][1] * sin(radians(particles[a][5]));
            } else if(particles[a][0] === 'liquid') {
                //if liquid particles collide.
                for(var b = 0; b < particles.length; b++) {
                    if(a !== b && particles[a][3] > particles[b][3]-5 && particles[a][3] < particles[b][3]+5 && particles[a][4] > particles[b][4]-5 && particles[a][4] < particles[b][4]+5) {
                        particles[a][5] *= -1;
                        particles[b][5] *= -1;
                    }
                }
                
            } else if(particles[a][0] === 'gas') {
                //if gas particles collide. Larger range then liquid.
                for(var b = 0; b < particles.length; b++) {
                    if(a !== b && particles[a][3] > particles[b][3]-20 && particles[a][3] < particles[b][3]+20 && particles[a][4] > particles[b][4]-20 && particles[a][4] < particles[b][4]+20) {
                        particles[a][5] *= -1;
                        particles[b][5] *= -1;
                    }
                }
            }
            
            //detect if particles collide with each other.
            /**for(var b = 0; b < particles.length; b++) {
                if(a !== b && particles[a][3] > particles[b][3]-5 && particles[a][3] < particles[b][3]+5 && particles[a][4] > particles[b][4]-5 && particles[a][4] < particles[b][4]+5) {
                    particles[a][5] *= -1;
                    particles[b][5] *= -1;
                }
            }**/
            
            //change x and y axis of particle. All particles move at the same rate.
            particles[a][3] += particles[a][1] * cos(radians(particles[a][5]));
            particles[a][4] += particles[a][1] * sin(radians(particles[a][5]));
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
        createParticle('gas', 3, 3, mouseX, mouseY, random(0, 360), "water");
        println(particles);
    };

}};
