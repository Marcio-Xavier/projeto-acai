import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="page-footer font-small">
          <div className="footer-copyright text-center py-3">
            © 2018 - Desenvolvido e distribuído por{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100003341607673"
              target="_blank"
              rel="noopener noreferrer"
            >
              Márcio Xavier
            </a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
