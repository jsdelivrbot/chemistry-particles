var sketchProc=function(processingInstance){ with (processingInstance){
    setup = function() {
        size(screen.width/2,screen.height/2);
    };

    draw = function() {  
        background(255, 255, 255);
        fill(0, 0, 255);
        text("I know where you live at night", 200, 200);
        println("Hi");
    };
}};
