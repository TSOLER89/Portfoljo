const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");


const app = express();
const PORT = 3000;

// Serve static files (frontend)
app.use(express.static(__dirname));

// Middleware
app.use(cors());
app.use(express.json());

// Sökväg till JSON-filen
const filePath = path.join(__dirname, "messages.json");

// Skapa filen automatiskt om den inte finns
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
}

// ROUTE: Ta emot kontaktformulär
app.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;

    // Validering
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Vänligen fyll i alla fält." });
    }

    const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toISOString()
    };

    try {
        // Läs befintliga meddelanden
        const data = fs.readFileSync(filePath, "utf8");
        const messages = JSON.parse(data);

        messages.push(newMessage);

        // Spara tillbaka till filen
        fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

        res.json({ success: "Meddelandet har sparats!" });

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: "Något gick fel på servern." });
    }
});

// ROUTE: Hämta alla meddelanden (valfri admin-route)
app.get("/messages", (req, res) => {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: "Kunde inte läsa meddelanden." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
