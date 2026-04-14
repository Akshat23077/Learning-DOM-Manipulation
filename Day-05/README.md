# 📅 Day 05 – Event Bubbling & Capturing in JavaScript

## 📌 Overview

On Day 05, I explored **Event Propagation in JavaScript**, focusing on:

* Event Bubbling
* Event Capturing

This project demonstrates how events travel through the DOM and how we can control their flow.

---

## 🧠 Concepts Covered

### 🔹 Event Bubbling

* Default behavior in JavaScript
* Event starts from the **target element** and moves **upward** to its parent elements

### 🔹 Event Capturing

* Opposite of bubbling
* Event starts from the **top (parent)** and moves **downward** to the target element
* Enabled using `true` in `addEventListener`

---

## 🧪 Code Example

### 📄 HTML

```html
<div id="parent">
    <button id="child">Click me</button>
</div>
```

### 📜 JavaScript

```javascript
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

child.addEventListener("click", function () {
    console.log("child clicked");
});

parent.addEventListener("click", function () {
    console.log("parent clicked");
}, true);
```

---

## ▶️ Output Explanation

When you click the button:

```bash
parent clicked
child clicked
```

👉 Why?

* `true` enables **capturing phase**
* So parent runs first
* Then child runs

---

## ⚡ Key Takeaways

* Events in JavaScript have **3 phases**:

  1. Capturing
  2. Target
  3. Bubbling

* Default is **bubbling**

* Use `true` to enable **capturing**

---

## 🚀 Real-World Use Cases

* Event Delegation
* Optimizing event listeners
* Handling nested elements (modals, menus)

---

## 🛠️ How to Run

1. Clone the repository
2. Open `index.html` in your browser
3. Open Developer Console (F12)
4. Click the button and observe logs

---

## 📚 Learning Outcome

By completing this task, I now understand:

* How event propagation works
* Difference between bubbling and capturing
* How to control event flow

---

## 🔥 Next Step

Explore:

* `event.stopPropagation()`
* Event Delegation

---

⭐ If you found this helpful, feel free to star the repo!
