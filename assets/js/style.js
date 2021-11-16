/*------------ SHOW MENU-------------*/
const showMneu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    /*valida se se existe as variaveis*/
    if (toggle && nav) {
        /*aqui adiciono a class show-menu na div com a class nav__menu*/
        toggle.addEventListener('click', () => {
            /*adicina a class show-menu na div que tem o id nav-menu */
            nav.classList.toggle('show-menu')
        })
    }
}
showMneu('nav-toggle', 'nav')

/*------------ REMOVER MENU MOBILE-------------*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav')
    /*Quando um link for clicado a class show-menu será removido*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== DEIXA O LINK CLICADO COM A CLASS ACTIVE-LINK ====================*/
const linkColor = document.querySelectorAll('.nav__item')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))

/**CONTAGEM REGRESSIVA */
const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const loadingContainer = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const eventDate = new Date('November 30 2021 00:00:00')/**inserir a data do final do evento */

const updateCountdown = () =>{
  const currenTime = new Date()
  const difference = eventDate - currenTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
  const minutes = Math.floor(difference / 1000 / 60 ) % 60
  const seconds = Math.floor(difference / 1000 ) % 60

  secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
  minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
  hoursContainer.textContent = hours < 10 ? '0' + hours : hours
  daysContainer.textContent = days < 10 ? '0' + days : days
}

setTimeout( () =>{
  loadingContainer.remove()
  countdownContainer.style.display = 'flex'
}, 1000)

setInterval(updateCountdown, 1000)


/** SWIPER */
var swiper = new Swiper("#hero", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

var swiper = new Swiper("#offer", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation:{
    nextEL: ".swiper-button-next",
    prevEL: ".swiper-button-prev",
  },
  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    860: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper("#inspiration-img", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});