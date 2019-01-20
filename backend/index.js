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

//GET Usuario Ok 
app.get("/usuarios", (req, res) => {
const selectUsuario = "select * from usuario";
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
//ADD Usuario Ok
app.get("/usuarios/add", (req, res) => {
  const { nome, nick, senha } = req.query;
  const insertUsuario = `insert into usuario (nome, nick, senha) values ('${nome}','${nick}','${senha}')`;
  connection.query(insertUsuario, (err, results) => {
	if (err) {
	  return res.send(err);
	} else {
	  return res.send("Usuario Adicionado");
	}
  });
});
//DELETE Usuario Ok
app.get("/usuarios/delete", (req,res) =>{
	const { id } = req.query;
	const deleteUsuario = `delete from usuario where id = ${id}`;
	connection.query(deleteUsuario,(err,results) => {
		if(err){
			return res.send(err);
		}else{
			return res.send(`Usuário excluído. Id: ${id}`);
		}
  });
});