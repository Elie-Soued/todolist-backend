const pool = require("../dbconfig");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const queryString =
        'INSERT INTO "users" (username, password) VALUES ($1,$2);';
      const dbResponse = await pool.query(queryString, [
        username,
        hashedPassword,
      ]);
      res.json({
        code: 200,
        message: "inserted user correctly",
        data: dbResponse.rows[0],
      });
    } catch (e) {
      res.status(500).json({
        code: 500,
        message: "Error trying to insert a new user",
      });
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    const users = await pool.query("SELECT * FROM users");
    const result = users.rows;
    const user = result.find((user) => user.username === username);

    if (user === null) {
      return res.status(400).send("cannot find user");
    }

    try {
      if (bcrypt.compare(password, user.password)) {
        res.send("success");
      } else {
        res.send("Not Allowed");
      }
    } catch (e) {
      res.status(500).send();
    }
  },

  getAll: async (_, res) => {
    try {
      const dbResponse = await pool.query("SELECT * FROM users");
      res.json({
        code: 200,
        message: "success",
        data: dbResponse.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500);
    }
  },

  deleteById: async (req, res) => {
    const { id } = req.params;

    try {
      const queryString = 'DELETE FROM "users" WHERE id=$1';
      await pool.query(queryString, [id]);
      res.json({
        code: 200,
        message: "deleted user correctly with id " + id,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).json({
        code: 500,
        message: "Error trying to delete a user with id " + id,
      });
    }
  },

  getByID: async (req, res) => {
    const { id } = req.params;
    try {
      const dbResponse = await pool.query("SELECT * FROM users WHERE id=$1", [
        id,
      ]);
      res.json({
        code: 200,
        message: "success. Found user with id " + id,
        data: dbResponse.rows[0],
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500);
    }
  },
};
