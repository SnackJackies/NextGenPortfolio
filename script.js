const extend_button1 = document.querySelector(".extend-button1")
const extend_button2 = document.querySelector(".extend-button2")

const return_btns = document.querySelectorAll(".return")

const exist_ul = document.querySelector(".exist-ul")
const mail_btn = document.querySelector("#mail-btn")
const mail_input = document.querySelector("#mail-input")
const mail_preview = document.querySelector("#mail-preview")

const gallery_2026 = document.querySelector("#gallery-2026")
const gallery_2025 = document.querySelector("#gallery-2025")

let extend_button_status1 = false
let extend_button_status2 = false

let img2026 = []
let img2025 = []

const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");

if (card1 && card2) {
    fetch("message.json")
    .then((response) => {
        
        return response.text()
    })
    .then((text) => {
        let messageList = JSON.parse(text)


        card1.textContent = messageList.card1
        card2.textContent = messageList.card2
    })
}



for (let i = 1; i <= 10; i++) {
    img2026.push(`<img src="../resources/2026/${i}.png" alt="2026 img" height="256" class="gallery-img hoverable">`)
}

for (let i = 1; i <= 5; i++) {
    img2025.push(`<img src="../resources/2025/${i}.png" alt="2025 img" height="256" class="gallery-img hoverable">`)
}


if (extend_button1) {
    extend_button1.addEventListener("click", () => {

    extend_button_status1 = !extend_button_status1

    gallery_2026.classList.toggle("gallery-hide")

    if (!extend_button_status1) {
        extend_button1.textContent = ">"
    } else {
        extend_button1.textContent = "∨"
    }
})
}


if (extend_button2) {
    extend_button2.addEventListener("click", () => {

    extend_button_status2 = !extend_button_status2

    gallery_2025.classList.toggle("gallery-hide")

    if (!extend_button_status2) {
        extend_button2.textContent = ">"
    } else {
        extend_button2.textContent = "∨"
    }
})
}

let messenger_counter = 2

if (mail_input) {
    mail_input.addEventListener("input", () => {
    mail_preview.textContent = "Message Preview: " + mail_input.value
})
}

if (mail_btn) {
    mail_btn.addEventListener("click", () => {
    const messageDiv = document.createElement("div")

    const authorli = document.createElement("li")
    const messagep = document.createElement("p")

    messenger_counter += 1

    authorli.textContent = `#${messenger_counter} : Annonymous Messenger`
    messagep.textContent = mail_input.value

    messageDiv.append(authorli)
    messageDiv.append(messagep)

    if (mail_input.value.length > 0) {
        messageDiv.classList.add("existBox")
        exist_ul.append(messageDiv)
    } else {
        alert("Please write some message for me first! ")
    }
})
}



if (gallery_2026 && gallery_2025) {
    for (image of img2026) {
    gallery_2026.innerHTML += image;
}

    for (image of img2025) {
        gallery_2025.innerHTML += image;
    }
}