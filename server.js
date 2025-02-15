const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/connect");

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
