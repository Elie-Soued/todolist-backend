const pool = require("../dbconfig");

module.exports = {
  create: async (req, res) => {
    const { username, password } = req.body;

    try {
      const queryString =
        'INSERT INTO "users" (username, password) VALUES ($1,$2);';
      const dbResponse = await pool.query(queryString, [
        { username, password },
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

  //   getAll: async (_, res) => {
  //     try {
  //       const dbResponse = await pool.query("SELECT * FROM todos");
  //       res.json({
  //         code: 200,
  //         message: "success",
  //         data: dbResponse.rows,
  //       });
  //     } catch (e) {
  //       console.error(Error(e));
  //       res.status(500);
  //     }
  //   },

  //   updateById: async (req, res) => {
  //     const { id } = req.params;
  //     const { todo } = req.body;

  //     try {
  //       const queryString = "UPDATE todos SET todo = $1 WHERE id = $2";

  //       await pool.query(queryString, [todo, id]);
  //       res.json({
  //         code: 200,
  //         message: "updated todo correcty with id" + id,
  //       });
  //     } catch (e) {
  //       res.status(500).json({
  //         code: 500,
  //         message: "Error trying to update todo with id" + id,
  //       });
  //     }
  //   },

  //   deleteById: async (req, res) => {
  //     const { id } = req.params;

  //     try {
  //       const queryString = 'DELETE FROM "todos" WHERE id=$1';
  //       await pool.query(queryString, [id]);
  //       res.json({
  //         code: 200,
  //         message: "deleted todo correctly with id " + id,
  //       });
  //     } catch (e) {
  //       console.error(Error(e));
  //       res.status(500).json({
  //         code: 500,
  //         message: "Error trying to delete a todo with id " + id,
  //       });
  //     }
  //   },

  //   getByID: async (req, res) => {
  //     const { id } = req.params;
  //     try {
  //       const dbResponse = await pool.query("SELECT * FROM todos WHERE id=$1", [
  //         id,
  //       ]);
  //       res.json({
  //         code: 200,
  //         message: "success. Found todo with id " + id,
  //         data: dbResponse.rows[0],
  //       });
  //     } catch (e) {
  //       console.error(Error(e));
  //       res.status(500);
  //     }
  //   },
};
