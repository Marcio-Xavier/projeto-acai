import Index from '../index.js';

class User extends Index {
	
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

}