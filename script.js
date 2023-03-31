const hamburger = document.querySelector(".hamburger");
const headerBar = document.querySelector('.icon-nav-container');


hamburger.addEventListener('click', e=>{
    console.log('button clicked');
    headerBar.classList.toggle('active');
});

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ackrashid@gmail.com",
        Password : "Enderdude13#",
        To : 'ackrashid@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Website email",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

