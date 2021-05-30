require("dotenv").config();

module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: process.env.POST_USER,
  password: process.env.POST_PASS,
  database: "capivaralovers",
  define: {
    timestamps: true,
  },
};
