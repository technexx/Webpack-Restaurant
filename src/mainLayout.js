const content = document.querySelector(".content")

const headerDiv = document.createElement("div")
headerDiv.classList.add("header")

content.appendChild(headerDiv)

const header = document.querySelector(".header")
header.innerText = "Boo"