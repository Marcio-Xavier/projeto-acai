import React, { Component } from "react";
class ProdutoTable extends Component {
  render() {
    return (
      <React.Fragment>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Descrição</th>
              <th scope="col">Preço</th>
              <th scope="col">Qtd. Estoque</th>
              <th scope="col">Ativo?</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Açaí 500 ml</td>
              <td>R$ 12,00</td>
              <td>-</td>
              <td>
                <span class="badge badge-success">Sim</span>
              </td>
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

export default ProdutoTable;
