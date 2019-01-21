import React, { Component } from "react";

class PaginaInicial extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="masthead bg-primary text-white text-center">
          <div className="container">
            <img
              className="img-fluid mb-5 d-block mx-auto"
              src={require("./logo.png")}
              alt=""
            />
            <h1 className="text-uppercase mb-0">Loja do Açaí</h1>
            <hr className="star-light" />
            <h2 className="font-weight-light mb-0">
              Web Developer - Graphic Artist - User Experience Designer
            </h2>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default PaginaInicial;
