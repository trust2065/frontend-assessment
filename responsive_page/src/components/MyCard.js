import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

const MyCard = props => {
  return <Card className="card">{props.children}</Card>;
};

Card.propTypes = {
  children: PropTypes.any
};

export default MyCard;
