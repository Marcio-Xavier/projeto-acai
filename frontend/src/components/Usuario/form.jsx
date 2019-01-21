import React, { Component } from "react";
//import UsuarioTable from "./table";

class UsuarioForm extends Component {
  state = {
    usuarios: [],
    usuario: {
      nome: "",
      nick: "",
      senha: ""
    }
  };

  componentDidMount() {
    this.getUsuarios();
  }

  getUsuarios = _ => {
    fetch("http://localhost:4000/usuarios")
      .then(response => response.json())
      .then(response => this.setState({ usuarios: response.data }))
      .catch(err => console.log(err));
  };

  addUsuario = _ => {
    const { usuario } = this.state;
    fetch(
      `http://localhost:4000/usuarios/add?nome=${usuario.nome}&nick=${
        usuario.nick
      }&senha=${usuario.senha}`
    )
      .then(this.getUsuarios)
      .catch(err => console.log(err));
  };

  deleteUsuario = id => {
    fetch(`http://localhost:4000/usuarios/delete?id=${id}`)
      .then(this.getUsuarios)
      .catch(err => console.log(err));
    console.log("Deleted:" + id);
  };
  renderProduct = ({ id, nome, nick, senha }) => (
    <tr key={id}>
      <td>{nome}</td>
      <td>{nick}</td>
      <td>{senha}</td>
      <td>
        <button
          onClick={() => this.deleteUsuario(id)}
          className="btn btn-danger btn-sm"
        >
          Remover
        </button>
      </td>
    </tr>
  );

  render() {
    const { usuario, usuarios } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <p className="lead">Inserir Usuário</p>
          <hr />
          <div className="col-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
                onChange={e =>
                  this.setState({
                    usuario: { ...usuario, nome: e.target.value }
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Nick</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
                onChange={e =>
                  this.setState({
                    usuario: { ...usuario, nick: e.target.value }
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Senha</label>
              <input
                type="password"
                className="form-control"
                placeholder="Senha"
                onChange={e =>
                  this.setState({
                    usuario: { ...usuario, senha: e.target.value }
                  })
                }
              />
            </div>
            <button className="btn btn-success" onClick={this.addUsuario}>
              Salvar
            </button>
          </div>
          <hr />
          <p className="lead">Lista de Usuários</p>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Nick</th>
                <th scope="col">Senha</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>{usuarios.map(this.renderProduct)}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default UsuarioForm;
