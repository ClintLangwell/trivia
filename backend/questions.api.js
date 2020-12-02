"use strict";
const express = require("express");
const questions = express.Router();
const pool = require("./connection");
questions.get("/questions", (req, res) => {
  let query = `SELECT * FROM questions ORDER BY RANDOM() LIMIT 10 `;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});
module.exports = questions;
