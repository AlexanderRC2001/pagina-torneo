var slideIndex = 1;

showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}



function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-cilindro");
  var dots = document.getElementsByClassName("selecionador");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
     
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}



/*
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("img-cilindro");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}
*/