fetch('data/data.json')
    .then(rev => rev.json())
    .then(data => {

        document.querySelector('.Logo-Here').innerHTML = data[0].LogoHere
        document.querySelector('.login-subtitle').innerHTML = data[0].loginsubtitle
        document.querySelector('.login-title').innerHTML = data[0].logintitle
        document.querySelector('.forgot-password-link').innerHTML = data[0].forgotpasswordlink
        document.querySelector('.login-button').innerHTML = data[0].loginbutton
        document.querySelector('.signup-text').innerHTML = data[0].signuptext
        document.querySelector('.signup-link').innerHTML = data[0].signuplink

    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });