import { removeFloatingLogos } from "../ui/FloatingLogos.js";

export function renderAbout() {
    const app = document.getElementById("app");

    // Se till att loggor tas bort när vi lämnar Home
    removeFloatingLogos();

    app.innerHTML = `
        <section class="about-intro">
            <div class="about-content">
                <img src="Assets/Photos/CvBild.jpg" alt="Tsoler Hayitian" class="about-image">
                <div class="about-text">
                    <p>Jag pluggar till <strong>systemutvecklare</strong> och tycker det är väldigt spännande att lära mig mer om programmering och webbutveckling.</p>
                    <p>Jag är en engagerad och nyfiken systemutvecklarstudent som brinner för att skapa effektiva och användarvänliga digitala lösningar. Jag utvecklar, testar och underhåller kod, deltar i systemdesign och arbetar agilt.</p>
                </div>
            </div>
        </section>

        <section class="lia-section">
            <h3>LIA-period</h3>
            <div class="lia-timeline">
                <span class="lia-start">2026-03-30</span>
                <div class="lia-bar">
                    <div class="lia-progress"></div>
                </div>
                <span class="lia-end">2026-06-05</span>
            </div>
        </section>

        <section id="skills" class="skills-section">
            <h3>Mina Kompetenser</h3>
            <div class="skills-floating" id="skillsFloating">
                <span class="skill">HTML</span>
                <span class="skill">CSS</span>
                <span class="skill">JavaScript</span>
                <span class="skill">C#</span>
                <span class="skill">.NET</span>
                <span class="skill">React</span>
                <span class="skill">Node.js</span>
                <span class="skill">SQL</span>
                <span class="skill">Git</span>
                <span class="skill">GitHub</span>
            </div>
        </section>
    `;
}
