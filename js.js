let sun=document.querySelector('#sun');
let moon=document.querySelector('#moon');
let body=document.querySelector('body');

moon.onclick = function (){
    body.classList.add('darkmode');
    moon.style.display = 'none';
    sun.style.display = 'block';
}
sun.onclick = function (){
    body.classList.remove('darkmode');
    sun.style.display = 'none';
    moon.style.display = 'block';
}
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
