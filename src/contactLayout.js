const mainBody = document.querySelector(".main-body")

export function createContact() {
    const div = document.createElement("div")
    div.classList.add("contact")
    mainBody.appendChild(div)

    const menu = document.querySelector(".contact")
    menu.innerText = "Contact Page"
}