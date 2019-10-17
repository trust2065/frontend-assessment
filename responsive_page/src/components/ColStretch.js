import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";

const ColStretch = props => {
  return (
    <Col className="col--stretch col--padding-2 col--border">
      {props.children}
    </Col>
  );
};

ColStretch.propTypes = {
  children: PropTypes.any
};

export default ColStretch;
