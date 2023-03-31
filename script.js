const hamburger = document.querySelector(".hamburger");
const headerBar = document.querySelector('.icon-nav-container');
const buttons = document.querySelectorAll('.button-guy')
const contactSection = document.querySelector('.contact')



buttons.forEach( button => button.addEventListener('click', () => {
    contactSection.scrollIntoView();
} ))

hamburger.addEventListener('click', e=>{
    console.log('button clicked');
    headerBar.classList.toggle('active');
});

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}