import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">
              <img
                src={require("./acai-logo.png")}
                className="img-fluid"
                alt="Açaí"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
                <NavLink className="nav-item nav-link" to="/venda/inserir">
                  Venda
                </NavLink>
                <NavLink className="nav-item nav-link" to="/produto/inserir">
                  Produtos
                </NavLink>
                <NavLink className="nav-item nav-link" to="/usuario/inserir">
                  Usuários
                </NavLink>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Consultar
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" to="/venda/listar">
                      Vendas
                    </NavLink>
                    <NavLink className="dropdown-item" to="/produto/listar">
                      Produtos
                    </NavLink>
                    <div className="dropdown-divider" />
                    <NavLink className="dropdown-item" to="/usuario/listar">
                      Usuários
                    </NavLink>
                  </div>
                </li>
                <NavLink className="nav-item nav-link" to="/sobre">
                  Sobre
                </NavLink>
              </ul>
              <div className="form-inline my-2 my-lg-0">
                <NavLink className="nav-item nav-link" to="/">
                  Admin
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
