const express = require("express");

const {
  postProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const requireAuth = require("../middlewares/requireAuth");

// router
const router = express.Router();

router.use(requireAuth); // if the authentication is okay, then the next commands will execute

// routes

// GET all projects
router.get("/", getAllProjects);

// GET a single project
router.get("/:id", getSingleProject);

// POST a new project
router.post("/", postProject);

// DELETE a project
router.delete("/:id", deleteProject);

// UPDATE a project
router.patch("/:id", updateProject);

module.exports = router;
