import React from "react";
import Joi from "joi-browser";
import Form from "../UI/common/form";

class UsuarioForm extends Form {
  state = {
    data: {
      dateTime: "",
      totalPrice: ""
    },
    errors: {}
  };

  schema = {
    dateTime: Joi.string()
      .required()
      .label("Data/Hora"),
    totalPrice: Joi.string()
      .required()
      .label("Preço Total")
  };

  doSubmit = async () => {
    console.log("Salvar Venda");
    //await saveMovie(this.state.data);
    //this.props.history.push("/movies");
  };

  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <div className="col-7">
            <h2>Registrar venda</h2>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <div className="row align-items-center">
                <div className="col-1">
                  <i className="fa fa-calendar fa-2x" aria-hidden="true" />
                </div>
                <div className="col">
                  {this.renderInput("name", "Data/Hora")}
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-1">
                  <i className="fa fa-cart-plus fa-2x" aria-hidden="true" />
                </div>
                <div className="col">
                  {this.renderInput("username", "Total")}
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
