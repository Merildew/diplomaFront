import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import { Button } from "../Form/Button";
import { useNavigate } from "react-router-dom";

export function InfoHeader(props) {
  const navigate = useNavigate();
  return (
    <div className="title-wrapper container">
      <img src={props.cover} className="book-header-cover"></img>
      <div className="book-header-text">
        <h2 className="book-header-title">{props.title}</h2>
        <a href={`/author/${props.authorID}`}>
          <h3 className="book-header-author">{props.author}</h3>
        </a>
      </div>
      {props.booking && (
        <div className="booking-wrapper">
          <Button
            value="Забронировать"
            onClickButton={() => navigate(`/booking/${props.IDbook}`)}
          />
        </div>
      )}
    </div>
  );
}

InfoHeader.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  authorID: PropTypes.number,
  IDbook: PropTypes.number,
  booking: PropTypes.bool,
};
