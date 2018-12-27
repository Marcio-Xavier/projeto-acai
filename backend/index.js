class Index {
	
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

/*/----------------------------------------------------------
const selectUsuario = "select * from usuario";

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

app.get("/usuario/add", (req, res) => {
  const { nome, nick, senha } = req.query;
  const insertProducts = `insert into usuario (nome, nick, senha) values ('${nome}','${nick}','${senha}')`;
  connection.query(insertProducts, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Usuario Adicionado");
    }
  });
});
*/

}
export default Index;
