//Modules import
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const pool = require("./dbconfig");

//Files import
const ordersRoute = require("./Routes/orders");
const usersRoute = require("./Routes/users");

//Constants Declaration
const { PORT } = process.env;
const app = express();
const port = PORT;

//Defining the endpoints
app.use("/orders", ordersRoute);
app.use("/users", usersRoute);

//Starting a server and make it listen to a specific port
app.listen(port, () => console.log(`Server running on port${port}`));
