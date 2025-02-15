const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/connect");

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const logger = require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/errorMiddleware");

app.use(logger);
app.use("/api/users", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
