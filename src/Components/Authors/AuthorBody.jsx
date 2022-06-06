import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

export function AuthorBody(props) {
  return (
    <div className="author-body-wrapper container">
      <p className="bio">{props.annotation}</p>
    </div>
  );
}

AuthorBody.propTypes = {
  annotation: PropTypes.string,
};
