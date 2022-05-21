const Blog = require("../models/blog");

const fetchBlog = async (req, res) => {
    const blog = new Blog({
        blogTitle: req.body.blogTitle,
        blogContent: req.body.blogContent,
        cat: req.body.cat,
        imgUrl: req.body.imgUrl,
        imgUrl2: req.body.imgUrl2,
    });

    const result = await blog.save();
    res.send(result);
};


// get all blogs
const getfetchBlog = async (req, res) => {
    const result = await Blog.find();
    res.send(result);
};


// get post by category
const getPostsByCat = async (req, res) => {
    const result = await Blog.find({ cat: req.params.cat });
    const msg = {
        message: "No Data found",
    };
    if (!result || result.length == 0) {
        res.send(msg);
    } else {
        res.send(result);
    }
};



const getPostsByID = async (req, res) => {
    const result = await Blog.findById({ _id: req.params.id });
    const msg = {
        message: "No Data found",
    };
    if (!result || result.length == 0) {
        res.send(msg);
    } else {
        res.send(result);
    }
};

exports.fetchBlog = fetchBlog;
exports.getfetchBlog = getfetchBlog;
exports.getPostsByCat = getPostsByCat;
exports.getPostsByID = getPostsByID;

