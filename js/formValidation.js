let email = document.querySelector('.email');
let password = document.querySelector('.password');
let btn = document.querySelector('.login-button')

function form() {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        let emailError = document.querySelector('.form-error-email');
        let passwordError = document.querySelector('.form-error-password');
        if (email.value === "") {
            emailError.innerHTML = "Please fill in this field.";
        } else if (email.value.length < 6) {
            emailError.innerHTML = "The field must be greater than 6 characters.";
        } else if (!email.value.includes('@')) {
            emailError.innerHTML = "The field must contain an element @.";
        }
        else {
            emailError.innerHTML = "";
        }
        if (password.value === "") {
            passwordError.innerHTML = "Please fill in this field.";
        } else {
            passwordError.innerHTML = "";
        }
    });
}
form();

//


let body = document.body;
let page = document.querySelector('.page-login');
let togglebtn = document.querySelector('.toggle-btn');
let darktext = document.querySelectorAll('.dark')
let logincontainer = document.querySelector('.login-container')
console.log(page)
function b() {
    togglebtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        page.classList.toggle('dark-mode');
        logincontainer.classList.toggle('dark-shadow');
        darktext.forEach(el => {
            el.classList.toggle('dark-text')
        })
    })
}
b()