import React from "react";
import PropTypes from "prop-types";
import Jumbotron from "react-bootstrap/Jumbotron";

const MyJumbotron = props => {
  return (
    <Jumbotron className="jumbotron--bg jumbotron--v-center">
      {props.children}
    </Jumbotron>
  );
};

Jumbotron.propTypes = {
  children: PropTypes.node
};

export default MyJumbotron;
