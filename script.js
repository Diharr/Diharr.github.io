const hamburger = document.querySelector(".hamburger");
const headerBar = document.querySelector('.icon-nav-container');


hamburger.addEventListener('click', e=>{
    console.log('button clicked');
    headerBar.classList.toggle('active');
});



