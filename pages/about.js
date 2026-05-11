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
                    <p>Jag pluggar till <strong>systemutvecklare</strong> och tycker det är mycket spännande att lära mig mer om programmering och webbutveckling.</p>
                    <p>Jag är en engagerad och nyfiken systemutvecklarstudent som brinner för att skapa effektiva och användarvänliga digitala lösningar. Jag utvecklar, testar och underhåller kod, deltar i systemdesign och arbetar agilt.</p>
                </div>
            </div>
        </section>

        <section class="lia-section">
            <div class="section-header">
                <p class="section-kicker">LIA-period</p>
            </div>

            <div class="lia-card">
                <div class="lia-card-top">
                    <span class="lia-badge completed">Genomförd</span>
                </div>

                <div class="lia-timeline">
                    <span class="lia-start">2026-03-30</span>
                    <div class="lia-bar">
                        <div class="lia-progress"></div>
                    </div>
                    <span class="lia-end">2026-06-05</span>
                </div>

                <div class="lia-experience">
                    <p>
                        Under min LIA1 på <strong>Consid AB i Linköping</strong> arbetade jag i projektet
                        <strong>STB Driftportalen</strong>, ett webbaserat system för hantering av
                        säkerhetsdokumentation och projektflöden inom byggbranschen.
                    </p>

                    <div class="experience-item">
                        <h4>Arbetsområden och leveranser</h4>
                        <ul>
                            <li>Arbetade i tre delar av lösningen: frontend, backend och PDF-generator.</li>
                            <li>Utvecklade funktion för knapp och uppladdning av bilder/foton till SharePoint med stabil filhantering.</li>
                            <li>Arbetade med formulär för Monteringsanalys: datainsamling, användarflöde, validering och systemintegration.</li>
                            <li>Implementerade mejlhantering och email-verifiering i arbetsflödet.</li>
                            <li>Utvecklade funktionalitet för PDF-autentisering och säkrare dokumenthantering.</li>
                        </ul>
                    </div>

                    <div class="experience-item">
                        <h4>Tekniker och arbetssätt</h4>
                        <p class="lia-tech">
                            React, TypeScript, JavaScript, .NET 8, REST API, SharePoint,
                            Microsoft Graph API, Node.js, SQL Server, Postman, Puppeteer, DevOps, Git och GitHub.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="lia-section">
            <div class="lia-card">
                <div class="lia-card-top">
                    <span class="lia-card-title">LIA 2 – Examensperiod</span>
                    <span class="lia-badge upcoming">Kommande</span>
                </div>

                <div class="lia-timeline">
                    <span class="lia-start">2026-12-14</span>
                    <div class="lia-bar">
                        <div class="lia-progress lia-progress-upcoming"></div>
                    </div>
                    <span class="lia-end">2027-05-28</span>
                </div>
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
                <span class="skill">Puppeteer</span>
                <span class="skill">Git</span>
                <span class="skill">GitHub</span>
                <span class="skill">Agil Utveckling</span>
                <span class="skill">REST API</span>
                <span class="skill">Web Design</span>
            </div>
        </section>

        <section class="about-hobbies">
            <div class="section-header">
                <p class="section-kicker">Fritid &amp; intressen</p>
                <h3>Det som ger mig energi utanför studierna</h3>
            </div>

            <div class="hobbies-grid">
                <div class="hobby-card">
                    <span class="hobby-icon">🎵</span>
                    <div>
                        <h4>Musik</h4>
                        <p>Musik hjälper mig att behålla fokus och kreativitet.</p>
                    </div>
                </div>
                <div class="hobby-card">
                    <span class="hobby-icon">💃</span>
                    <div>
                        <h4>Dans</h4>
                        <p>Dans ger mig energi och balans vid sidan av studierna.</p>
                    </div>
                </div>
                <div class="hobby-card">
                    <span class="hobby-icon">🏋️</span>
                    <div>
                        <h4>Träning</h4>
                        <p>Träning är en viktig del av min vardag och bidrar till hälsa.</p>
                    </div>
                </div>
            </div>

        </section>
    `;
}
