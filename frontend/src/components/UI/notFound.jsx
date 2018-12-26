import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h3>
            Conteúdo não encontrado, verifique o link digitado na barra de
            enderço.
          </h3>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
