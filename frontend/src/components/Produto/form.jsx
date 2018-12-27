import React from "react";
import Joi from "joi-browser";
import Form from "../UI/common/form";

class ProdutoForm extends Form {
  state = {
    data: {
      description: "",
      price: ""
    },
    type: ["Teste 3"],
    errors: {}
  };

  schema = {
    description: Joi.string()
      .required()
      .label("Descrição"),
    price: Joi.string()
      .required()
      .label("Preço"),
    type: Joi.string().label("Tipo")
  };

  doSubmit = async () => {
    console.log("Salvar Produto");
    //await saveMovie(this.state.data);
    //this.props.history.push("/movies");
  };
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <div className="col-7">
            <h2>Registrar novo produto</h2>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <div className="row align-items-center">
                <div className="col-1">
                  <i className="fa fa-coffee fa-2x" aria-hidden="true" />
                </div>
                <div className="col">
                  {this.renderInput("description", "Descrição")}
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-1">
                  <i className="fa fa-money fa-2x" aria-hidden="true" />
                </div>
                <div className="col">{this.renderInput("price", "Preço")}</div>
              </div>

              <div className="row align-items-center">
                <div className="col-1">
                  <i
                    className="fa fa-window-restore fa-2x"
                    aria-hidden="true"
                  />
                </div>
                <div className="col">
                  {this.renderSelect("type", "Tipo", this.state.type)}
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

export default ProdutoForm;
