import React from "react";
import PropTypes from "prop-types";
import "./Home.scss";
import Panels from "../../components/Panels/Panels";
import ButtonComponent from "../../components/Button/Button";

function Home(props) {
  return (
    <div className="home-container">
      <div className="home-context">
        <Panels />
      </div>
      <div className="compare-btn-container">
        <ButtonComponent text="Compare Files" />
      </div>
    </div>
  );
}

Home.propTypes = {
  activeHeaderClass: PropTypes.bool
};

Home.defaultProps = {
  activeHeaderClass: false
};

export default Home;
