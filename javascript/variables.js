var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var heat_source_temperature = 0;
var particles = [];
if(windowWidth/4 <= 150 && windowHeight/2 <= 200) {
  alert("Your window is too small! Some functions may not perform correctly or may not work at all. Increase your window width to atleast 600 pixels wide and 200 pixels tall for optimal performance.");  
}
