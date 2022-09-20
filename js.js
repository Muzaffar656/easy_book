const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger-btn');
const toggleImg = document.querySelector("#toggle-img");
hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
    isOpen = navLinks.classList.contains('open');
    if (isOpen){
        toggleImg.src = "images/icon-close.svg"
    }
    else {
        toggleImg.src = 'images/icon-hamburger.svg'
    }
});