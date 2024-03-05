const express = require("express");
//Building New Routes
const headPhonesRoutes = require("./src/Headphones/routes");
const earBudsRoutes = require("./src/Earbuds/routes");

const app = express();
const port = 8007;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res)=> 
{
    res.send("HeadPhones and Earbuds");
})

//API Route
//http://localhost:8007//
app.use("/api/v1/headphones", headPhonesRoutes);     //Check Here for any Issues
//Adding Earbuds Route
app.use("/api/v1/earbuds", earBudsRoutes);

app.listen(port, () => console.log('running on ${port}'));

