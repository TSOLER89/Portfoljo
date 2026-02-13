import { showModal } from "../ui/modal.js";

export function renderContact() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="contact-section">
            <h2>Kontakt</h2>
            <form id="contactForm">
                <input type="text" id="name" placeholder="Namn" required>
                <input type="email" id="email" placeholder="E-post" required>
                <textarea id="message" placeholder="Meddelande" required></textarea>
                <button type="submit" class="btn">Skicka</button>
                <p id="formFeedback"></p>
            </form>
        </section>
    `;

    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = name.value.trim();
        const email = email.value.trim();
        const message = message.value.trim();

        const res = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();
        feedback.textContent = data.success;
        showModal("Ditt meddelande har skickats!");
        form.reset();
    });
}
