import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

const CardFooter = props => {
  return <Card.Footer className="cardFooter">{props.children}</Card.Footer>;
};

CardFooter.propTypes = {
  children: PropTypes.any
};

export default CardFooter;
