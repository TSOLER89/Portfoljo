export function renderProjects() {
    const app = document.getElementById("app");

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

                card.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.links.github}" target="_blank" class="btn">GitHub</a>
                `;

                container.appendChild(card);
            });
        });
}
