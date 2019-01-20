import React, { Component } from "react";
import ProdutoTable from "./table";

class ProdutoForm extends Component {
  render() {
    return (
      <React.Fragment>
        <p className="lead">Inserir novos produtos</p>
        <hr />
        <p className="lead">Formulario</p>
        <hr />
        <p className="lead">Tabela de produtos</p>
        <ProdutoTable />
      </React.Fragment>
    );
  }
}

export default ProdutoForm;
