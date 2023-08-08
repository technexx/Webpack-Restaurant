const mainBody = document.querySelector(".main-body")

export function createMenu() {
    const div = document.createElement("div")
    div.classList.add("menu")
    mainBody.appendChild(div)

    const menu = document.querySelector(".menu")
    menu.innerText = "Menu"

    console.log("imported from menu!")
}