import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Home.scss";
import Panels from "../../components/Panels/Panels";
import ButtonComponent from "../../components/Button/Button";
import DiffPanel from "../../components/DiffPanel/DiffPanel";

function Home(props) {
  const [oldValue, updateOldValue] = useState("");
  const [newValue, updateNewValue] = useState("");

  const updateValue = (type = "", e) => {
    const value = e.target.value || '';
    switch (type) {
      case "new":
        updateNewValue(value);
        break;

      case "old":
        updateOldValue(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="home-container">
      <div className="home-context">
        <div className="difference-show-panel">
          <DiffPanel oldValue={oldValue} newValue={newValue} />
        </div>
        <Panels updateValue={updateValue} />
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
