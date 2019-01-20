import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>
          <i class="fa fa-frown-o fa-3x" aria-hidden="true" />
          <hr />
          Página não encontrada.
        </h3>
      </React.Fragment>
    );
  }
}

export default NotFound;
