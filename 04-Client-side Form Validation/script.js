const form = document.getElementById('myform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault(); //停止事件預設行為
    checkInputs();
});
function checkInputs() {
    //get value
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'E-mail cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'E-mail is not valid');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, 'passwords does not match');
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
