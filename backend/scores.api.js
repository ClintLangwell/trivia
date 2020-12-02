"use strict";

const express = require("express");
const scores = express.Router();
const pool = require("./connection");

scores.get("/scores", (req, res) => {
  let query = `SELECT * FROM scores ORDER BY score desc`;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});

scores.post("/scores", (req, res) => {
  let username = req.body.username;
  let score = req.body.score;
  let query = `INSERT INTO scores (username, score) VALUES ($1, $2)`;
  pool.query(query, [username, score]).then((response) => {
    res.status(201);
    res.json(req.body);
  });
});

module.exports = scores;
