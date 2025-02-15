const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/connect");
const { auth } = require("express-openid-connect");

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

app.use(auth(config));

const logger = require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/errorMiddleware");

app.use(logger);
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
