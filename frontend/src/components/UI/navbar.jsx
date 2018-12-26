import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/">
              Home
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
                <NavLink className="nav-item nav-link" to="/inserir-venda">
                  Venda
                </NavLink>
                <NavLink className="nav-item nav-link" to="/inserir-produto">
                  Produtos
                </NavLink>
                <NavLink className="nav-item nav-link" to="/inserir-usuario">
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
                    <NavLink className="dropdown-item" to="/listar-venda">
                      Vendas
                    </NavLink>
                    <NavLink className="dropdown-item" to="/listar-produto">
                      Produtos
                    </NavLink>
                    <div className="dropdown-divider" />
                    <NavLink className="dropdown-item" to="/listar-usuario">
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
