var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function (event) {
  var element = document.querySelectorAll(".dot");
  element.forEach(function (dot) {
    dot.parentNode.removeChild(dot);
  });
  // Stop the propagation of events
  event.stopPropagation();
});

addEventListener("click", function (event) {
  var color = document.getElementById("color").value;
  var size = document.getElementById("size").value;
  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.width = size + "px";
  dot.style.height = size + "px";
  dot.style.backgroundColor = color;
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});
