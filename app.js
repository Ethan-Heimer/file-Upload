const express = require("express");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("display", {data: ""});
})

app.post('/upload', upload.single("file"), (req, res) => {
    console.log(req.file);
    res.render("display", {data: req.file.data});
})

app.listen(process.env.PORT || 3000);
