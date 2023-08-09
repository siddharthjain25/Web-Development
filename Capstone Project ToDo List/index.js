import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
const MonthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var Today = new Date();
let Day = WeekDays[Today.getDay()];
let Month = MonthNames[Today.getMonth()];
let Tarik = Today.getDate(); 
let Year = Today.getFullYear();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        Day: Day,
        Month: Month,
        Tarik: Tarik,
        Year: Year, 
    });
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
