//'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

//====CALCULAR CUENTA REGRESIVA CON DATE Y MATH=======

//let yearActual = new Date().getFullYear()

let yearNuevo = new Date("March 30, 2023 00:00:00").getTime()

let x = setInterval(() => {

  let fechaActual = new Date().getTime()
  let dife = (yearNuevo - fechaActual);

  let dias = Math.floor(dife / (1000 * 60 * 60 * 24))
  let horas = Math.floor((dife % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutos = Math.floor((dife % (1000 * 60 * 60)) / (1000 * 60))
  let segundos = Math.floor((dife % (1000* 60)) / 1000)

  document.getElementById('dia').innerHTML = dias
  document.getElementById('hora').innerHTML = horas
  document.getElementById('minuto').innerHTML = minutos < 10 ? '0' + minutos : minutos
  document.getElementById('segundo').innerHTML = segundos < 10 ? '0' + segundos : segundos

  if(dife < 0){
    document.getElementById('dia').innerHTML = '--'
    document.getElementById('hora').innerHTML = '00'
    document.getElementById('minuto').innerHTML = '00'
    document.getElementById('segundo').innerHTML = '--'
  }

  

},1000)

  




  
  
  //let dias = Math.floor(diferencia / 1000)
  //let horas = Math.floor((final % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  //let minutos = Math.floor((final % (1000 * 60 * 60)) / (1000 * 60))
  //let segundos = Math.floor((final % (1000 * 60)) / 1000)

  //document.getElementById('dia').innerHTML = dias
  //document.getElementById('hora').innerHTML = horas
  //document.getElementById('minuto').innerHTML = minutos
  
  
  /*if(final < 0){
    clearInterval(x)

    document.getElementById('dia').innerHTML = "00"
    document.getElementById('hora').innerHTML ="00"
    document.getElementById('minuto').innerHTML = "00"
    document.getElementById('segundo').innerHTML = "00"
  }*/



