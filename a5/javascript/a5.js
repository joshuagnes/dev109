var indexValue = 1;
var autoplayInterval;

showImg(indexValue);

function side_slide(e) {
  showImg(indexValue += e);
}

function showImg(e) {
  var i;
  const img = document.getElementById("slideshow-img");
  const description = document.getElementById("description");
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg"
  ];
  
  const imageDescriptions = [
    "Sydney Opera House",
    "London Tower Bridge",
    "New York Empire State Building",
    "Shanghai Oriental Pearl Tower",
    "Hong Kong IFC tower"
  ];
  
  if (e > images.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = images.length;
  }
  img.src = images[indexValue - 1];
  description.textContent = imageDescriptions[indexValue - 1];
}

function toggleAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
    document.querySelector(".autoplay").textContent = "Autoplay";
  } else {
    autoplayInterval = setInterval(function() {
      side_slide(1);
    }, 2000);
    document.querySelector(".autoplay").textContent = "Stop Autoplay";
  }
}
