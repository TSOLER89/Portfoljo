import { createFloatingLogos } from "../ui/FloatingLogos.js";

export function renderHome() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="hero">
            <div class="home-content">
                <img src="Assets/Photos/CvBild.jpg" class="profile-image">
                <h2>Hej! Välkommen till min portfolio!</h2>
                <p>Här kan du läsa mer om mig, bläddra igenom mina projekt och kontakta mig.</p>
            </div>
        </section>
        <div class="floating-logos" id="floatingLogos"></div>
    `;

    createFloatingLogos();
}
