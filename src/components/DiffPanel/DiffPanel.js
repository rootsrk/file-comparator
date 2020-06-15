import React from "react";
import PropTypes from "prop-types";
import "./DiffPanel.scss";

function DiffPanel(props) {
  return (
    <div className="diff-panel-container">
      <div className="col-sm-6 diff-panel diff-panel-1">{props.oldValue}</div>
      <div className="col-sm-6 diff-panel diff-panel-2">{props.newValue}</div>
    </div>
  );
}

DiffPanel.propTypes = {
  activeHeaderClass: PropTypes.bool,
  oldValue: PropTypes.string,
  newValue: PropTypes.string
};

DiffPanel.defaultProps = {
  activeHeaderClass: false,
  oldValue: "",
  newValue: ""
};

export default DiffPanel;
