require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const projectsRoutes = require("./routes/projectRoute");

// express app
const app = express();

// port
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the express app!" });
// });

// routes
app.use("/api/projects", projectsRoutes);

// mongodb
mongoose.set("strictQuery", false); //optional
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening request
    app.listen(port, () => {
      console.log(`Connected to Mongo & Listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
