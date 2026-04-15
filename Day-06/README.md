# 📅 Day 06 – Form Validation using JavaScript

## 📌 Overview

On Day 06, I built a **Login Form with Email & Password Validation** using **HTML, CSS, and JavaScript**.

This project focuses on validating user input using **Regular Expressions (Regex)** and displaying **custom error messages**.

---

## 🧠 Concepts Covered

* Form Handling in JavaScript
* Event Handling (`submit` event)
* Preventing Default Behavior (`preventDefault()`)
* DOM Manipulation
* Regular Expressions (Regex)
* Custom Error Handling

---

## 🧪 Features

✅ Email validation using regex
✅ Strong password validation
✅ Custom error messages below input fields
✅ Disabled default browser validation using `novalidate`
✅ Clean and responsive UI

---

## 🧾 Code Highlights

### 📜 JavaScript Validation Logic

```javascript
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

    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";
    emailError.style.visibility = "hidden";
    passwordError.style.visibility = "hidden";

    if (!emailAns) {
        emailError.textContent = "Email is incorrect";
        emailError.style.visibility = "visible";
    }

    if (!passwordAns) {
        passwordError.textContent = "Password is incorrect";
        passwordError.style.visibility = "visible";
    }
});
```

---

## 🎯 Validation Rules

### 📧 Email

* Must contain `@` and a valid domain
* Example: `example@gmail.com`

### 🔐 Password

* Minimum 8 characters
* At least:

  * 1 uppercase letter
  * 1 lowercase letter
  * 1 number
  * 1 special character

---

## ⚡ Key Learnings

* Difference between **HTML validation vs JavaScript validation**
* How to use **Regex for real-world validation**
* Handling user input efficiently
* Displaying dynamic error messages

---

## 🚀 How to Run

1. Clone the repository
2. Open `index.html` in your browser
3. Fill the form and test validation
4. Check error messages

---

## 📚 Future Improvements

* ✅ Real-time validation while typing
* 🎨 Add red/green border indicators
* 👁️ Show/Hide password toggle
* 🔒 Backend validation integration

---

## 🔥 Conclusion

This project helped me understand how to build **interactive and user-friendly forms** with proper validation logic — a key skill for frontend development.

---

⭐ If you like this project, feel free to star the repo!
