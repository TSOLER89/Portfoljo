export function showModal(message) {

    //skapa overlay för modalen

    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");

    //skapat modal box innehål
    const modal = document.createElement("div");
    modal.classList.add("modal-box");

    modal.innerHTML = `
        <p>${message}</p>
        <button class="btn">Stäng</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    //stäng-knapp

    modal.querySelector(".modal-close").addEventListener()("click", () => {
        document.body.removeChild(overlay);
    });

    //stänga modalen när man klickar utanför modal-boxen
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}
