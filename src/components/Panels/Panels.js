import React from "react";
import PropTypes from "prop-types";
import "./Panels.scss";
import { Form } from "react-bootstrap";

function Panels(props) {
  return (
    <div className="panel-container">
      <div className="col-sm-6">
        <Form>
          <Form.Control rows="30" as="textarea" className="text-muted" />
        </Form>
      </div>
      <div className="col-sm-6">
        <Form>
          <Form.Control rows="30" as="textarea" className="text-muted" />
        </Form>
      </div>
    </div>
  );
}

Panels.propTypes = {
  activeHeaderClass: PropTypes.bool
};

Panels.defaultProps = {
  activeHeaderClass: false
};

export default Panels;
