function loadOrderDetails() {
    // Retrieve the order details from local storage or any other data source
    var orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
  
    if (orderDetails) {
      var orderDetailsContainer = document.getElementById("orderDetails");
      orderDetailsContainer.innerHTML = ""; // Clear existing order details
  
      for (var i = 0; i < orderDetails.length; i++) {
        var subName = orderDetails[i].subName;
        var subCost = orderDetails[i].subCost;
  
        var subElement = document.createElement("div");
        subElement.textContent = subName + " - $" + subCost.toFixed(2);
  
        orderDetailsContainer.appendChild(subElement);
      }
    }
  }
  
  function applyCoupon() {
    var couponCode = document.getElementById("couponCode").value;
    // Apply the coupon logic and update the final amount
  }
  
  window.addEventListener("load", function() {
    loadOrderDetails();
  });
  

  var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 