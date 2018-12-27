import React, { Component } from "react";

class UsuarioList extends Component {
  state = {
    usuarios: []
  };
  componentDidMount() {
    this.getUsuarios();
  }

  getUsuarios = _ => {
    fetch("http://localhost:4000/usuario")
      .then(response => response.json())
      .then(response => this.setState({ usuarios: response.data }))
      .catch(err => console.log(err));
  };

  renderUsuario = ({ id, nome, nick }) => (
    <tr key={id}>
      <td>{nome}</td>
      <td>{nick}</td>
      <td>
        <button type="button" class="btn btn-link">
          <i class="fa fa-info-circle" aria-hidden="true" />
        </button>
        <button type="button" class="btn btn-link">
          <i class="fa fa-trash-o" aria-hidden="true" />
        </button>
      </td>
    </tr>
  );
  render() {
    const { usuarios } = this.state;
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <div className="col-8">
            <h2>Listar Usuários</h2>
            <hr />
            <table className="table table-light">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Nick</th>
                  <th scope="col">Ação</th>
                </tr>
                {usuarios.map(this.renderUsuario)}
              </thead>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UsuarioList;
