var sketchProc_left=function(processingInstance){ with (processingInstance){
    setup = function() {
        size(windowWidth/4-5, windowHeight/2);
        background(227, 220, 209);
        strokeWeight(3);
    };
    var barX = heat_source_temperature;
    var changeSourceTemperature = function() {
        
    }
    
    draw = function() {
        background(227, 220, 209);
        //line centered in canvas. -25 to 125
        line(((windowWidth/4)/2)-75, 30, ((windowHeight/4)/2)+75, 30);
    };

}};
