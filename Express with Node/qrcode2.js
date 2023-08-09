import qr from 'qr-image';
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function gen(req, res, next) {
    const url = req.body["password"];
    var jpeg = qr.image(url);
    res.sendFile("hell");
    next();
  }

app.use(gen);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
