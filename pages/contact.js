import { showModal } from "../ui/modal.js";

export function renderContact() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="contact-section">
            <h2>Kontakt</h2>
            <form id="contact-form">
                <input type="text" id="name" placeholder="Namn" required>
                <input type="email" id="email" placeholder="E-post" required>
                <textarea id="message" placeholder="Meddelande" required></textarea>
                <button type="submit" class="btn">Skicka</button>
                <p id="formFeedback"></p>
            </form>
        </section>
    `;
    const form = document.querySelector("#contact-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // <-- viktigast

        const formData = new FormData(form);

        try {
            const res = await fetch("/send-email", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                showModal("Något gick fel. Försök igen.");
                return;
            }

            form.reset();
            showModal("Tack för ditt meddelande! Jag återkommer så snart jag kan.");

        } catch (err) {
            showModal("Kunde inte skicka just nu. Kolla din anslutning och försök igen.");
        }
    });
}
