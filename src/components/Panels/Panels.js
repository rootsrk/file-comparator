import React from "react";
import PropTypes from "prop-types";
import "./Panels.scss";
import { Form } from "react-bootstrap";

function Panels(props) {
  return (
    <div className="panel-container">
      <div className="col-sm-6">
        <Form>
          <Form.Control
            rows="10"
            as="textarea"
            className="text-muted"
            onChange={(e) => props.updateValue("old", e)}
          />
        </Form>
      </div>
      <div className="col-sm-6">
        <Form>
          <Form.Control
            rows="10"
            as="textarea"
            className="text-muted"
            onChange={(e) => props.updateValue("new", e)}
          />
        </Form>
      </div>
    </div>
  );
}

Panels.propTypes = {
  activeHeaderClass: PropTypes.bool,
  updateOldValue: PropTypes.func,
  updateNewValue: PropTypes.func
};

Panels.defaultProps = {
  activeHeaderClass: false,
  updateOldValue: () => {},
  updateNewValue: () => {}
};

export default Panels;
