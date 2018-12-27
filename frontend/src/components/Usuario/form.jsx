import React from "react";
import Joi from "joi-browser";
import Form from "../UI/common/form";
import { saveUsuario } from "../../services/usuario";

class UsuarioForm extends Form {
  state = {
    data: {
      nome: "",
      nick: "",
      senha: ""
    },
    errors: {}
  };

  schema = {
    nome: Joi.string()
      .required()
      .label("Nome"),
    nick: Joi.string()
      .required()
      .label("Nick"),
    senha: Joi.string()
      .required()
      .min(6)
      .label("Senha")
  };

  doSubmit = _ => {
    const { data } = this.state;
    fetch(
      `http://localhost:4000/usuario/add?nome=${data.nome}&nick=${
        data.nick
      }&senha=${data.senha}`
    ).catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <div className="col-8">
            <h2>Registrar usuários</h2>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <div className="row align-items-center">
                <div className="col-1">
                  <i className="fa fa-user fa-2x" aria-hidden="true" />
                </div>
                <div className="col">{this.renderInput("nome", "Nome")}</div>
              </div>

              <div className="row align-items-center">
                <div className="col-1">
                  <i className="fa fa-at fa-2x" aria-hidden="true" />
                </div>
                <div className="col">{this.renderInput("nick", "Nick")}</div>
              </div>

              <div className="row align-items-center">
                <div className="col-1">
                  <i className="fa fa-key fa-2x" aria-hidden="true" />
                </div>
                <div className="col">
                  {this.renderInput("senha", "Senha", "password")}
                </div>
              </div>

              {this.renderButton("Salvar")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UsuarioForm;
