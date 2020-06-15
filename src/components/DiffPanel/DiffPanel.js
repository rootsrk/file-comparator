import React from "react";
import PropTypes from "prop-types";
import "./DiffPanel.scss";

function DiffPanel(props) {
  return (
    <div className="diff-panel-container">
      <div className="col-sm-6 diff-panel diff-panel-1"></div>
      <div className="col-sm-6 diff-panel diff-panel-2"></div>
    </div>
  );
}

DiffPanel.propTypes = {
  activeHeaderClass: PropTypes.bool
};

DiffPanel.defaultProps = {
  activeHeaderClass: false
};

export default DiffPanel;
