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
        setInterval(virtualBid, 5000);
        console.log("Server started and listening on port 3000...");
    }
);

app.get("/list", (req, res) => {
    console.log("GET: /list received @ " + (new Date(Date.now())).toISOString());
    res.send(dbJson);
});

// virtual bidder

function virtualBid() {
    dbJson.forEach((item) => {

        // generate a random percentage from 1 to 2
        const increase = Math.random() * 2

        item.lastBid *= Number(1.0 + (increase / 100));
        item.lastBidUser = "anonymous";
    });
}