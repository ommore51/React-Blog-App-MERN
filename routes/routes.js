const express = require("express");
const blog = require("../controller/blogController");

const router = express.Router();

router.post("/blog", blog.fetchBlog);
router.get("/allblogs", blog.getfetchBlog);
router.get("/getPostsByCat/:cat", blog.getPostsByCat);
router.get("/getPostsByID/:id", blog.getPostsByID);

module.exports = router;