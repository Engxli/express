const express = require("express");
const connectDB = require("./database");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHanlder");
const path = require("path");
const authorRouter = require("./api/authors/Routes");
const bookRouter = require("./api/books/routes");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/media", express.static(path.join(__dirname, "media"))); //aws S3
// START HERE
app.use("/api/authors", authorRouter);
app.use("/api/books", bookRouter);
// END HERE
app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(8000, () => {
  console.log("i am running on port 8000");
});
