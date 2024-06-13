const express = require("express");
const productsRouter = require("./apis/products/routes");
const connectDB = require("./database");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHanlder");
const path = require("path");
const path = require("path");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/products", productsRouter);

app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(8000, () => {
  console.log("i am running on port 8000");
});
