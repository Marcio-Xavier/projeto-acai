import React, { Component } from "react";
class UsuarioTable extends Component {
  render() {
    return (
      <React.Fragment>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Nick</th>
              <th scope="col">Senha</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Administrator</td>
              <td>Admin</td>
              <td>******</td>
              <td>
                <div
                  className="btn-group btn-group-toggle btn-sm"
                  data-toggle="buttons"
                >
                  <label className="btn btn-info">
                    <input type="radio" autocomplete="off" />
                    Editar
                  </label>
                  <label className="btn btn-danger">
                    <input type="radio" autocomplete="off" />
                    Remover
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default UsuarioTable;
