const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const stripe = require("stripe")('pk_test_51HQ5E5B1xeOdXcP0tQvhTc1nm8dQrNwBcmc38dzFLPLpfsxr8f5CWeHjGL3S2yQTlZR6EGIP6dLr14yhSBMgtONG00t7wt30YR')
const stripe = require("stripe")('sk_test_51MbNZBBquPorc3CLjZo7E7fjG1x20Z2D8CUj5CeIxNwO6UhNGvftoZswq7c7NLqXuhyemOJejlYx6tX560SLU7Ae00mhshG94l')

/* API */

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true })); //cors security shit & stuff
app.use(express.json());

// API routes (rotas)
app.get("/", (request, response) => response.status(200).send("OK"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; 

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "usd",    
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
// http://127.0.0.1:5001/clone-e9237/us-central1/api