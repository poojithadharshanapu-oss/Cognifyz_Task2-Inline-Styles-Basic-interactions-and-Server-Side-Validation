const express = require("express");

const app = express();
const PORT = 3000;

// Temporary storage
let users = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", (req, res) => {

    const { name, email, age } = req.body;

    // Server-side Validation
    if (!name || !email || !age) {
        return res.send("All fields are required.");
    }

    users.push({
        name,
        email,
        age
    });

    res.render("success", {
        user: { name, email, age }
    });

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});