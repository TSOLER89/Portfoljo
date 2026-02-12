document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");
    const navLinks = document.querySelectorAll(".nav-links a");
    const music = document.getElementById("bgMusic");

    // Starta musik efter första klick (browser security)
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

    // Routing funktion
    const loadPage = (page) => {

        switch (page) {

            case "home":
                app.innerHTML = `
                <section class="hero">
                    <div class="home-content">
                        <img src="Assets/Photos/CvBild.jpg" alt="Bild på Tsoler Hayitian" class="profile-image">
                        <h2>Hej! Välkommen till min portfolio!</h2>
                        <p> Här kan du läsa mer om mig, bläddra igenom mina projekt 
                    och kontakta mig.</p>
                    </div>
                </section>

                 <div class="floating-logos" id="floatingLogos"></div> <!-- Här kommer loggor -->
                `;
                createFloatingLogos(); // Skapa loggor när Home laddas
                break;

            case "about":
                removeFloatingLogos(); // Ta bort loggor
                app.innerHTML = `
                    <section>
                  
                <section class="about-intro">
                    <div class="about-content">
            <img src="Assets/Photos/CvBild.jpg" alt="Tsoler Hayitian" class="about-image">
            <div class="about-text">
                <p>Jag pluggar till <strong>systemutvecklare</strong> och tycker det är väldigt spännande att lära mig mer om programmering och webbutveckling.</p>
                <p>Jag är en engagerad och nyfiken systemutvecklarstudent som brinner för att skapa effektiva och användarvänliga digitala lösningar. Jag utvecklar, testar och underhåller kod i relevanta programmeringsspråk, deltar i systemdesign och arkitektur för att underhålla skalbara lösningar, arbetar agilt i sprintplaneringar, säkerställer kodkvalitet genom kodgranskning och automatiserade tester, identifierar buggar samt förbättrar befintliga system, designar och hanterar databaser.</p>
            </div>
        </div>
        </section>


                <!-- LIA-period sektion -->

            <section class="lia-section">
             <h3>LIA-period</h3>
            <p>Jag kommer att genomföra min LIA (Lärande i Arbete) mellan </p>

                    <div class="lia-timeline">
                    <span class="lia-start">2026-03-30</span>
                    <div class="lia-bar">
                 <div class="lia-progress"></div>
                    </div>
                    <span class="lia-end">2026-06-05</span>
                </div>
            </section>

             <!-- Kompetenser med interaktiv floating -->

            <section id="skills" class="skills-section">
        <h3>Mina Kompetenser</h3>
        <p>Rör musen eller fingret över kompetenserna för att interagera med dem</p>
        <div class="skills-floating" id="skillsFloating">
            <span class="skill">HTML</span>
            <span class="skill">CSS</span>
            <span class="skill">JavaScript</span>
            <span class="skill">SQL</span>
            <span class="skill">Git</span>
            <span class="skill">GitHub</span>
            <span class="skill">Testning</span>
            <span class="skill">Systemutveckling</span>
            <span class="skill">Webbutveckling</span>
            <span class="skill">Design</span>
            <span class="skill">Programmering</span>
            <span class="skill">C#</span>
            <span class="skill">.NET</span>
            <span class="skill">React</span>
            <span class="skill">Node.js</span>
            <span class="skill">Databaser</span>
            <span class="skill">API</span>
            <span class="skill">JSON</span>
        </div>
    </section>

    <section class="about-hobbies">
        <p>På fritiden har jag ett stort intresse för <strong>musik</strong>, <strong>dans</strong> och <strong>träning</strong>. Musik hjälper mig att behålla fokus och kreativitet, medan dans ger mig energi och balans vid sidan av studierna.</p>
        <p>Träning är en viktig del av min vardag och bidrar till både fysisk och mental hälsa. Det hjälper mig att skapa struktur, hålla motivationen uppe och prestera bättre i mina studier. När jag inte studerar eller tränar tycker jag om att umgås med vänner, utforska nya idéer och fortsätta utveckla mina kunskaper inom <strong>programmering</strong>, <strong>webbutveckling</strong> och <strong>design</strong>.</p>
   
                    </section>
                `;
                break;

            case "projects":
                removeFloatingLogos();
                app.innerHTML = `
        <section class="projects-section">
            <h2>Mina Projekt</h2>
            <div id="projectsContainer" class="projects-container"></div>
        </section>
    `;

                fetch("Data/db.json")
                    .then(res => res.json())
                    .then(projects => {
                        const container = document.getElementById("projectsContainer");
                        projects.forEach(project => {
                            const card = document.createElement("div");
                            card.classList.add("project-card");

                            const techList = project.tech.map(tech => `<li>${tech}</li>`).join("");
                            const highlightsList = project.highlights.map(h => `<li>${h}</li>`).join("");

                            card.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <strong>Tekniker:</strong>
                    <ul>${techList}</ul>
                    <strong>Höjdpunkter:</strong>
                    <ul>${highlightsList}</ul>
                    <a href="${project.links.github}" class="btn" target="_blank" rel="noopener">GitHub</a>
                `;
                            container.appendChild(card);
                        });
                    });
                break;

            case "contact":
                app.innerHTML = `
        <section class="contact-section">
             <h2>Kontakt</h2>
    <p>Skicka ett meddelande till mig! Jag svarar så snart som möjligt.</p>
        <form id="contactForm" autocomplete="on">
    <input type="text" id="name" name="name" placeholder="Namn" required autocomplete="name">
    <input type="email" id="email" name="email" placeholder="E-post" required autocomplete="email">
    <textarea id="message" name="message" placeholder="Meddelande" required autocomplete="on"></textarea>
    <button type="submit" class="btn">Skicka</button>
    <p id="formFeedback" class="feedback"></p>
 </form>
        </section>
            `;
                // Attach form logic directly after rendering
                const form = document.getElementById("contactForm");
                const feedback = document.getElementById("formFeedback");

                form.addEventListener("submit", async (e) => {
                    e.preventDefault();

                    const name = document.getElementById("name").value.trim();
                    const email = document.getElementById("email").value.trim();
                    const message = document.getElementById("message").value.trim();

                    if (!name || !email || !message) {
                        feedback.textContent = "Vänligen fyll i alla fält.";
                        feedback.style.color = "#cd306e";
                        return;
                    }

                    try {
                        const res = await fetch("http://localhost:3000/send-email", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ name, email, message })
                        });

                        const data = await res.json();

                        if (data.error) {
                            feedback.textContent = data.error;
                            feedback.style.color = "#cd306e";
                        } else {
                            feedback.textContent = data.success;
                            feedback.style.color = "#027a98";
                            form.reset();
                            console.log("Modal should show");
                            showModalFeedback("Ditt meddelande har skickats!");
                        }

                    } catch (err) {
                        feedback.textContent = "Något gick fel. Prova igen.";
                        feedback.style.color = "#cd306e";
                        console.error(err);
                    }
                });
                break;

        }
    };

    // Lägg till event listeners på navigeringslänkarna
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            loadPage(page);
        });
    });

    // Ladda startsidan
    loadPage("home");
});

// Skapa flytande loggor i kontaktsektionen
function createFloatingLogos() {
    const container = document.getElementById("floatingLogos");
    if (!container) return;

    const logos = [
        "Assets/Photos/dotnet.svg",
        "Assets/Photos/javascript.svg",
        "Assets/Photos/html.svg",
        "Assets/Photos/react.svg",
        "Assets/Photos/github.svg"
    ];
    logos.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("floating-logo");
        img.style.position = "absolute";
        img.style.width = "40px";
        img.style.height = "40px";
        img.style.top = Math.random() * window.innerHeight + "px";
        img.style.left = Math.random() * window.innerWidth + "px";
        img.style.transition = "transform 0.3s ease";
        container.appendChild(img);

        // Animera loggan med enkel rörelse
        let dx = (Math.random() - 0.5) * 1.5; // hastighet x
        let dy = (Math.random() - 0.5) * 1.5; // hastighet y

        function animate() {
            let top = parseFloat(img.style.top);
            let left = parseFloat(img.style.left);

            top += dy;
            left += dx;

            // Bounca mot kanterna
            if (top < 0 || top > window.innerHeight - 40) dy = -dy;
            if (left < 0 || left > window.innerWidth - 40) dx = -dx;

            img.style.top = top + "px";
            img.style.left = left + "px";

            requestAnimationFrame(animate);
        }
        animate();
    });
}


// Tar bort loggor när man lämnar Home
function removeFloatingLogos() {
    const container = document.getElementById("floatingLogos");
    if (container) container.innerHTML = "";
}

// Modal feedback function (moved outside DOMContentLoaded)
function showModalFeedback(message) {
    // Remove any existing modal
    const oldModal = document.getElementById("modalFeedback");
    if (oldModal) oldModal.remove();
    // Create modal
    const modal = document.createElement("div");
    modal.id = "modalFeedback";
    modal.className = "modal-overlay";
    modal.innerHTML = `
        <div class="modal-content">
            <p>${message}</p>
            <button id="closeModalBtn" class="btn">Stäng</button>
        </div>
    `;
    document.body.appendChild(modal);
    // Show modal with slight delay for animation
    setTimeout(() => modal.classList.add('show'), 10);
    // Close on button click or background click
    document.getElementById("closeModalBtn").onclick = () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    };
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    };
}




