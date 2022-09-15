const singlePlayer = document.getElementById("sp")
const multiPlayer = document.getElementById("mp")

singlePlayer.addEventListener("click", () => {
    window.open("singleplayer.html")
})
multiPlayer.addEventListener("click", () => {
    window.open("multiplayer.html")
})