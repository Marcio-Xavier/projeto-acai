import React from "react";
import NavBar from "../../components/UI/NavBar/navbar";
import Root from "../root";
import Footer from "../../components/UI/footer";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Root />
      <hr />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
