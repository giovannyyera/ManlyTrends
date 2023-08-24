var slideIndex = 0;
var carouselItems = document.getElementsByClassName("carousel-item");

function showSlide(n) {
  if (n >= carouselItems.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = carouselItems.length - 1;
  } else {
    slideIndex = n;
  }
  
  for (var i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.display = "none";
  }
  
  carouselItems[slideIndex].style.display = "block";
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Mostra o slide inicial ao carregar a página
showSlide(slideIndex);


