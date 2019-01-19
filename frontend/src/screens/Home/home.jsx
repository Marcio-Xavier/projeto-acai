import React from "react";
import NavBar from "../../components/UI/NavBar/navbar";
import Root from "../root";
import Footer from "../../components/UI/footer";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Root />
      </div>
      <hr />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
