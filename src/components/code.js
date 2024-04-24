import './code.css'
import  cellphone from "./img/smartphone.png";
import  whatsapp from "./img/whatsapp.png";
import  gmail from "./img/gmail.png";
import  linkedin from "./img/linkedin.png";
import  github from "./img/github.png";
import  upwork from "./img/upwork.png";
import  fiverr from "./img/fiverr.png";









function Code() {
  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
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
  
  
  
  return (

      

      <div className='code'>
        <div class="w3-container">
  <h2>Slideshow Indicators</h2>
  <p>An example of using buttons to indicate how many slides there are in the slideshow, and which slide the user is currently viewing.</p>
</div>

<div class="w3-content w3-display-container" >
  <img class="mySlides" src={cellphone} />
  <img class="mySlides" src={whatsapp} />
  <img class="mySlides" src={gmail} />
  <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle">
    <div class="w3-left w3-hover-text-khaki" onclick={plusDivs(-1)}>&#10094;</div>
    <div class="w3-right w3-hover-text-khaki" onclick={plusDivs(1)}>&#10095;</div>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick={currentDiv(1)}></span>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick={currentDiv(2)}></span>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick={currentDiv(3)}></span>
  </div>
</div>

      </div>
  );
}

export default Code;