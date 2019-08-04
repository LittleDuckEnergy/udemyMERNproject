const express = require("express");
const router = express.Router();

// @route GET api/posts
// @desc Test route
// @access Public

router.get("/", (req, res) => res.send("The Posts route be here, matey!"));

module.exports = router;
