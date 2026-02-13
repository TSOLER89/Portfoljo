let animations = [];

export function createFloatingLogos() {
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

        container.appendChild(img);

        let dx = (Math.random() - 0.5) * 1.5;
        let dy = (Math.random() - 0.5) * 1.5;

        function animate() {
            let top = parseFloat(img.style.top);
            let left = parseFloat(img.style.left);

            top += dy;
            left += dx;

            if (top < 0 || top > window.innerHeight - 40) dy = -dy;
            if (left < 0 || left > window.innerWidth - 40) dx = -dx;

            img.style.top = top + "px";
            img.style.left = left + "px";

            const frame = requestAnimationFrame(animate);
            animations.push(frame);
        }

        animate();
    });
}

export function removeFloatingLogos() {
    const container = document.getElementById("floatingLogos");
    if (container) container.innerHTML = "";

    // Stoppa alla animationer
    animations.forEach(frame => cancelAnimationFrame(frame));
    animations = [];
}
