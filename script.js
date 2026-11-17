const extend_button1 = document.querySelector(".extend-button1")
const extend_button2 = document.querySelector(".extend-button2")

const return_btns = document.querySelectorAll(".return")

let extend_button_status1 = false
let extend_button_status2 = false


extend_button1.addEventListener("click", () => {

    extend_button_status1 = !extend_button_status1

    if (!extend_button_status1) {
        extend_button1.textContent = ">"
    } else {
        extend_button1.textContent = "∨"
    }
})

extend_button2.addEventListener("click", () => {

    extend_button_status2 = !extend_button_status2

    if (!extend_button_status2) {
        extend_button2.textContent = ">"
    } else {
        extend_button2.textContent = "∨"
    }
})