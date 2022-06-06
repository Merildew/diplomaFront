import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

export function AuthorHeader(props) {
  return (
    <div className="title-wrapper container">
      <div className="author-header-text">
        <h2 className="book-header-title">{props.fullname}</h2>
        <h3 className="book-header-author">{props.date}</h3>
      </div>
    </div>
  );
}

AuthorHeader.propTypes = {
  fullname: PropTypes.string,
  date: PropTypes.string,
};
