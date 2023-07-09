const express = require("express");
const dbJson = require("./items-db.json");

const app = express();

app.use("/images", express.static("public"));

// allows cross origin access
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    next();
});

app.listen(3000,
    () => {
        console.log("Server started and listening on port 3000...");
    }
);

app.get("/list", (req, res) => {
    console.log("GET: /list received @ " + (new Date(Date.now())).toISOString());
    res.send(dbJson);
});