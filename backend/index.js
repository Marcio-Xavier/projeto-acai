const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const selectUsuario = "select * from usuario";

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

//console.log(connection); Ver config da conexão com o banco
app.get("/usuario", (req, res) => {
  connection.query(selectUsuario, (err, results) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});
/*
app.get("/products/add", (req, res) => {
  const { name, price } = req.query;
  const insertProducts = `insert into products (name, price) values ('${name}', ${price})`;
  connection.query(insertProducts, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Produto inserido");
    }
  });
});
*/
app.listen(4000, () => {
  console.log("Servidor aberto na porta 4000");
});
