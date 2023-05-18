
window.addEventListener('load', function() {

  var svg = document.getElementById('mySvg');


  var rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect1.setAttribute("x", "20");
  rect1.setAttribute("y", "20");
  rect1.setAttribute("width", "160");
  rect1.setAttribute("height", "160");
  rect1.setAttribute("fill", "blue");

  var rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect2.setAttribute("x", "60");
  rect2.setAttribute("y", "60");
  rect2.setAttribute("width", "80");
  rect2.setAttribute("height", "80");
  rect2.setAttribute("fill", "yellow");


  svg.appendChild(rect1);
  svg.appendChild(rect2);
});
