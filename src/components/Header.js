import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

//Set default property values
Header.defaultProps = {
  title: "Task Tracker",
};

//Set type of a property
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
//Add style={headingStyle}
//const headingStyle = {
//  color: 'red',
//  backgroundColor: 'black',
//}

export default Header;
