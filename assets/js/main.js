const input = document.getElementById("input")
const search = document.getElementById("search")

search.onclick = () => {
    search.classList.toggle("scale")
    input.classList.toggle("app")
}