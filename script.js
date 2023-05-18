
window.addEventListener('load', function() {

  var svg = document.getElementById('mySvg');


  var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("d", "M100,50 L200,200 L50,200 Z");
  path1.setAttribute("fill", "red");

  var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M200,200 L300,50 L350,200 Z");
  path2.setAttribute("fill", "green");

  var path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("d", "M350,200 L250,300 L150,300 Z");
  path3.setAttribute("fill", "blue");

  svg.appendChild(path1);
  svg.appendChild(path2);
  svg.appendChild(path3);
});
