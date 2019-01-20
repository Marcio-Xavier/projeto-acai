//Configuração de conexão com o MySql
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
//Testando a conexão
connection.connect(err => {
  if (err) {
	return err;
  }
});
//Iniciando o serivdor
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is UP");
});

app.listen(4000, () => {
  console.log("Backend listen in port 4000");
});	

//Ver configurações da conexão com o banco
//console.log(connection);

//Api Usuario
const selectUsuario = "select * from usuario";

app.get("/usuarios", (req, res) => {
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

app.get("/usuarios/add", (req, res) => {
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