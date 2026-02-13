import { renderHome } from "./pages/home.js";
import { renderAbout } from "./pages/about.js";
import { renderProjects } from "./pages/projects.js";
import { renderContact } from "./pages/contact.js";

export function initRouter() {
    const navLinks = document.querySelectorAll(".nav-links a");

    const loadPage = (page) => {
        switch (page) {
            case "home":
                renderHome();
                break;
            case "about":
                renderAbout();
                break;
            case "projects":
                renderProjects();
                break;
            case "contact":
                renderContact();
                break;
        }
    };

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage(e.target.dataset.page);
        });
    });

    loadPage("home");
}
