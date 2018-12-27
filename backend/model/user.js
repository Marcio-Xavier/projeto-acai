import * as Index from "../index";

const selectUsuario = "select * from usuario";

Index.app.get("/usuario", (req, res) => {
Index.connection.query(selectUsuario, (err, results) => {
if (err) {
  return res.json(err);
} else {
  return res.json({
	data: results
  });
}
});
});

Index.app.get("/usuario/add", (req, res) => {
  const { nome, nick, senha } = req.query;
  const insertProducts = `insert into usuario (nome, nick, senha) values ('${nome}','${nick}','${senha}')`;
  Index.connection.query(insertProducts, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Usuario Adicionado");
    }
  });
});