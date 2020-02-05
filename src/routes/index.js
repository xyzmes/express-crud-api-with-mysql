const express = require("express");
const router = express.Router();
const db = require("../db");

/**
 * Get all posts
 */
// http://localhost:3000/api/posts
router.get("/posts", async (req, res, next) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


/**
 * Get single post with ID
 */
// http://localhost:3000/api/posts/5
router.get("/posts/:id", async (req, res, next) => {
  try {
    let result = await db.single(req.params.id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


/**
 * Creates new post and responds with new post ID
 */
// http://localhost:3000/api/post/create
router.post("/post/create", async (req, res, next) => {
  try {
    let postId = await db.create(req.body);
    res.json({ message: "success", postId: postId });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
