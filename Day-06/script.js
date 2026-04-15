let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    if (!emailAns) {
        emailError.textContent = "Email is incorrect";
        emailError.style.visibility = "visible";
    }

    if (!passwordAns) {
        passwordError.textContent = "Password is incorrect";
        passwordError.style.visibility = "visible";
    }
});
