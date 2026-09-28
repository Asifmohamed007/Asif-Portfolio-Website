/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show_menu')
    })
}   

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // When we click on each nav_link, we remove the show_menu class
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = scrollReveal ({
    distance: '90px',
    duration: 3000,
})

sr.reveal(`.home_data`, {origin: 'top', delay: 400})
sr.reveal(`.home_img`, {origin: 'buttom', delay: 600})
sr.reveal(`.home_footer`, {origin: 'buttom', delay: 800})