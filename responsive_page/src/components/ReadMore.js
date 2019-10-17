import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const ReadMore = props => {
  return <Button className="btn--readMore">{props.children}</Button>;
};

ReadMore.propTypes = {
  children: PropTypes.string
};

export default ReadMore;
