import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const API_URL = "https://fubuki-api.cyclic.app";
const Token = "ODA0Mzk3NjYyNDY3OTE1Nzc3.MTY5MzM5ODE0NA--.7429e3d9c6a";
const config = {
    headers: { Authorization: Token },
};

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/random", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/random");
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error){
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});