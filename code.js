var sketchProc=function(processingInstance){ with (processingInstance){
    setup = function() {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        size(windowWidth/2, windowHeight/2);
    };

    draw = function() {  
        background(255, 255, 255);
        fill(0, 0, 255);
        text("I know where you live at night", 200, 200);
        println("Hi");
    };
}};
