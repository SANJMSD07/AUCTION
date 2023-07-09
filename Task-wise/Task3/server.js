const express = require("express");

const app = express();

app.listen(3000,
    () => {
        console.log("Server started and listening on port 3000...");
    }
);

app.get("/", (req, res) => {
    res.send("<h1>Hello from Coursera!</h1>");
})