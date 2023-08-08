const content = document.querySelector(".content")

export default function createMenu() {
    const div = document.createElement("div")
    div.classList.add("menu")
    content.appendChild(div)

    const menu = document.querySelector(".menu")
    menu.innerText = "Test Menu"

    console.log("imported from menu!")
}