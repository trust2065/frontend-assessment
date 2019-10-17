import React from "react";
import PropTypes from "prop-types";

const Text = props => {
  const { fontWeight, letterSpacing } = props;
  const classNameList = `${fontWeight !== "normal" &&
    `p--fw-${fontWeight}`} ${letterSpacing !== "normal" &&
    `p--ls-${letterSpacing}`}`;

  return <p className={classNameList}>{props.children}</p>;
};

Text.propTypes = {
  children: PropTypes.string,
  fontWeight: PropTypes.string,
  letterSpacing: PropTypes.string
};
Text.defaultProps = {
  children: "",
  fontWeight: "normal",
  letterSpacing: "normal"
};

export default Text;
