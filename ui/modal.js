export function showModal(message) {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.innerHTML = `
        <div class="modal-content">
            <p>${message}</p>
            <button class="btn">Stäng</button>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector("button").onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}
