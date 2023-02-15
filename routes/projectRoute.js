const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
} = require("../controllers/projectController");

// router
const router = express.Router();

// routes

// GET all projects
router.get("/", getAllProjects);

// GET a single project
router.get("/:id", getSingleProject);

// POST a new project
router.post("/", postProject);

// DELETE a project
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a project" });
});

// UPDATE a project
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a  project" });
});

module.exports = router;
