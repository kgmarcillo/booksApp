const express = require("express");
const router = express.Router();
const bookController = require("../controlador/bookController");

router.get("/books", bookController.getAllBooks);

module.exports = router;