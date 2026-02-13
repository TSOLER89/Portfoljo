export function initMusic() {
    const music = document.getElementById("bgMusic");
    const hamburger = document.getElementById("hamburger");

    hamburger.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            hamburger.classList.add("playing");
        } else {
            music.pause();
            hamburger.classList.remove("playing");
        }
    });
}
