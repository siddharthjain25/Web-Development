import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "siddharth25op";
const yourPassword = "siddharth25op";
const yourAPIKey = "9d7850e5-4e0d-4b46-b0e1-6aa20cbd3e42";
const yourBearerToken = "22347233-d8af-43e0-80f7-dad078619766";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  const reply = ( await axios.get("https://secrets-api.appbrewery.com/random")).data;
  const JSONdata = JSON.stringify(reply);
  res.render("index.ejs", { content: JSONdata, });
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  const reply = await axios("https://secrets-api.appbrewery.com/all?page=2", {
    auth: {
      username: yourUsername,
      password: yourPassword
    }
  });
  const reply2 = reply.data;
  const JSONdata = JSON.stringify(reply2);
  res.render("index.ejs", { content: JSONdata, });
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  const reply = (await axios(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`)).data;
  const JSONdata = JSON.stringify(reply);
  res.render("index.ejs", { content: JSONdata, });
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 const reply = await axios("https://secrets-api.appbrewery.com/secrets/42", {
  headers: {
    Authorization: `Bearer ${yourBearerToken}`
  },
 });
 const reply2 = reply.data;
 const JSONdata = JSON.stringify(reply2);
 res.render("index.ejs", { content: JSONdata, });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
