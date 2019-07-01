var slider = document.getElementById("myRange");
var output = document.getElementById("sliderOut");
output.innerHTML = slider.value; // Display the default slider value

//Run the following initially
function loadPage(){
	run(4);
	openLoadNav();
	
}
// Update the current slider value (each time you drag the slider handle)
function run(functionName){
	closeNav();
	drawChart(functionName,output.innerHTML);
	slider.oninput = function() {
	  output.innerHTML = this.value;
	  drawChart(functionName,output.innerHTML);
	}
}

//sideBar
function openLoadNav() {
  document.getElementById("mySidenav").style.width = "100%";
  //document.getElementById("main").style.marginLeft = "250px";
}
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("main").style.marginLeft = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
