const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/home", (request, response, next) => {
    response.sendFile(`${__dirname}/views/home.html`)
});

app.get("/about", (request, response, next) => {
    response.sendFile(`${__dirname}/views/about.html`)
});

app.get("/work", (request, response, next) => {
    response.sendFile(`${__dirname}/views/work.html`)
});

app.listen(port, () => console.log("Server on port 3000!"));