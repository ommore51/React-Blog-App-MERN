const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const route = require("./routes/routes");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, *");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use(route);

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("connected to MongoDB"))
    .catch((err) => {
        console.log(err);
    });

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.get('/', (req, res) => {
    res.send("hello from node js")
})

app.listen(PORT, () => {
    console.log(`backend running on ${PORT}`);
});



