document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'sabbir@gmail.com' && userPassword == '123456') {
        window.location.href = 'bank.html';
    }
    else {
        document.getElementById('error').innerText = "Invalid Input! Please Enter valid input."
        emailField.value = ''
        passwordField.value = ''
    }
});