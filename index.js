// COMMON JS
// modules.export={science:'experience'} > my-module.js
// const { science } = require('my-module') > index.js
const { readFile } = require("fs");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  readFile("./index.html", "utf8", (err, html) => {
    if (err) {
      response.status(500).send("sorry, out of order");
    }
    response.send(html);
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("App available at http://localhost:3000")
);
