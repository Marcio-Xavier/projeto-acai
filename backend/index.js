const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "db_acai"
});

connection.connect(err => {
  if (err) {
	return err;
  }
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("Ola, aqui fala o servidor");
});

app.listen(4000, () => {
  console.log("Servidor aberto na porta 4000");
});	

//console.log(connection); Ver config da conexão com o banco