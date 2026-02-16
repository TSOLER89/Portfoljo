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
                <span class="skill">Agil Utveckling</span>
                <span class="skill">REST API</span>
                <span class="skill">Web Design</span>
            </div>
        </section>

        <section class="about-hobbies"> <p>På fritiden har jag ett stort intresse för <strong>musik</strong>, <strong>dans</strong> och <strong>träning</strong>. Musik hjälper mig att behålla fokus och kreativitet, medan dans ger mig energi och balans vid sidan av studierna.</p> <p>Träning är en viktig del av min vardag och bidrar till både fysisk och mental hälsa. Det hjälper mig att skapa struktur, hålla motivationen uppe och prestera bättre i mina studier. När jag inte studerar eller tränar tycker jag om att umgås med vänner, utforska nya idéer och fortsätta utveckla mina kunskaper inom <strong>programmering</strong>, <strong>webbutveckling</strong> och <strong>design</strong>.</p> </section>
    `;
}
