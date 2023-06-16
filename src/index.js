function show(event) {
    const bigPhoto = document.getElementById("bigPhoto");
    bigPhoto.style.backgroundImage = `url(${event.target.src})`;
    event.target.classList.replace("opacity-50", "opacity-100");
}
window.addEventListener("load", () => {
    for (const iterator of document.querySelectorAll("img")) {
        iterator.addEventListener("click", show);
    }
});
