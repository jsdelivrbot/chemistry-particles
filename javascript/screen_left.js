var sketchProc_left=function(processingInstance){ with (processingInstance){
    setup = function() {
        size(innerWidth/4-5, innerHeight/2);
        background(227, 220, 209);
        strokeWeight(3);
    };
    var barX = heat_source_temperature;
    var changeSourceTemperature = function() {
        
    }
    
    draw = function() {
        background(227, 220, 209);
        //line centered in canvas. -25 to 125
        line(((innerWidth/4)/2)-75, 30, ((innerWidth/4)/2)+75, 30);
    };

}};
