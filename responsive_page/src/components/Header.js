import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const fontWeight = `header--fw-${props.fontWeight}`;
  const color = props.color ? `header--color-${props.color}` : "inherit";
  const letterSpacing =
    props.letterSpacing && `header--ls-${props.letterSpacing}`;

  const classNameList = `${fontWeight} ${color} ${letterSpacing}`;

  switch (props.variant) {
    case "h1":
      return <h1 className={classNameList}>{props.children}</h1>;
    case "h2":
      return <h2 className={classNameList}>{props.children}</h2>;
    case "h3":
      return <h3 className={classNameList}>{props.children}</h3>;
    case "h4":
      return <h4 className={classNameList}>{props.children}</h4>;
    case "h5":
      return <h5 className={classNameList}>{props.children}</h5>;
    default:
      return <h1 className={classNameList}>{props.children}</h1>;
  }
};

Header.propTypes = {
  children: PropTypes.element.isRequired,
  fontWeight: PropTypes.string,
  color: PropTypes.string
};

Header.defaultProps = {
  children: null,
  fontWeight: "normal",
  color: null
};

export default Header;
