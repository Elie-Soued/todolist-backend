const pool = require("../dbconfig");

module.exports = {
  getAll: async (req, res) => {
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
