import { initRouter } from "./router.js";
import { initMusic } from "./ui/music.js";

document.addEventListener("DOMContentLoaded", () => {
    initMusic();
    initRouter();
});
