var sketchProc_left=function(processingInstance){ with (processingInstance){
    setup = function() {
        size(windowWidth/4-5, windowHeight/2);
        background(227, 220, 209);
        strokeWeight(3);
    };
    //define the x location of drag bar.
    var barX = windowWidth/4*0.5;
    var changeSourceTemperature = function() {
        heat_source_temperature = barX;
    }
    
    draw = function() {
        background(227, 220, 209);
        //line centered in canvas. -25 to 125
        line((windowWidth/4)*0.25, 30, (windowWidth/4)*0.75, 30);
        fill(0, 0, 0);
        ellipse(barX, 30, 10, 10);
    };
    
    mouseDragged = function() {
        if(mouseX >= (windowWidth/4)*0.25 && mouseX <= (windowWidth/4)*0.75) {
            barX = mouseX;
            changeSourceTemperature();
        }
    };
    
    mouseClicked = function() {
        
    };
    
    mouseReleased = function() {
        
    };

}};
