export function showModal(message = "Tack för ditt meddelande!") {
    // Ta bort eventuell befintlig modal
    const existing = document.querySelector(".modal-overlay");
    if (existing) existing.remove();

    // Skapa overlay
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    // Skapa modal
    overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="Meddelande">
      <h3>Klart!</h3>
      <p>${message}</p>
      <button type="button" class="modal-close">Stäng</button>
    </div>
  `;

    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector(".modal-close");

    // STÄNG: knapp
    closeBtn.addEventListener("click", () => overlay.remove());

    // STÄNG: klick utanför modalen
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
    });

    // STÄNG: ESC
    const onKeyDown = (e) => {
        if (e.key === "Escape") {
            overlay.remove();
            document.removeEventListener("keydown", onKeyDown);
        }
    };
    document.addEventListener("keydown", onKeyDown);
}
