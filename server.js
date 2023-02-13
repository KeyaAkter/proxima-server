require("dotenv").config();

const express = require("express");
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

app.use("/api/projects", projectsRoutes);

// listening request
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
