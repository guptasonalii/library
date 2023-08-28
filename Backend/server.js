const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/modal/User");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", require("./Routes/userRoutes"));

app.listen(5002);
