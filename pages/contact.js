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

        const namInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = namInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        try{

        const res = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();

        if (res.ok) {
        feedback.textContent = data.success;
        showModal("Ditt meddelande har skickats!");
        form.reset();
        } else {
        feedback.textContent = data.error;
        
        }
        
        } catch (error) {
            feedback.textContent = "Ett fel inträffade. Försök igen.";
            showModal("Ett fel inträffade. Försök igen.");
        }
    });
}
