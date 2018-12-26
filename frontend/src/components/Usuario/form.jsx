import React from "react";
import Joi from "joi-browser";
import Form from "../UI/common/form";

class UsuarioForm extends Form {
  state = {
    data: {
      name: "",
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Nome"),
    username: Joi.string()
      .required()
      .label("Nick"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Senha")
  };

  doSubmit = async () => {
    console.log("Salvar Usuario");
    //await saveMovie(this.state.data);
    //this.props.history.push("/movies");
  };

  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <div className="col-7">
            <h2>Registrar novo usuário</h2>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <div className="row align-items-center">
                <div className="col-1">
                  <i className="fa fa-user fa-2x" aria-hidden="true" />
                </div>
                <div className="col">{this.renderInput("name", "Nome")}</div>
              </div>

              <div className="row align-items-center">
                <div className="col-1">
                  <i className="fa fa-at fa-2x" aria-hidden="true" />
                </div>
                <div className="col">
                  {this.renderInput("username", "Nick")}
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-1">
                  <i className="fa fa-key fa-2x" aria-hidden="true" />
                </div>
                <div className="col">
                  {this.renderInput("password", "Senha", "password")}
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
