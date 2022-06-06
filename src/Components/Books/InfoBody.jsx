import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import star from "../../Assets/images/star.svg";

export function InfoBody(props) {
  return (
    <div className="body-wrapper container">
      <div className="raiting">
        <img src={star} className="rate-pic"></img>
        <span className="books-val">{props.raiting}</span>
      </div>
      <div className="books-params">
        <p className="books-params-item">Количество: {props.amount}</p>
        <p className="books-params-item">ISBN: {props.ISBN}</p>
        <p className="books-params-item">Страниц: {props.pages}</p>
        <p className="books-params-item">Жанр: {props.genre}</p>
      </div>
      <p className="annotation">{props.annotation}</p>
      <p className="books-params-item">Рецензии</p>
      <p className="books-review">
        Рецензий пока нет. Прочтите книгу и будьте первым!
      </p>
    </div>
  );
}

InfoBody.propTypes = {
  ISBN: PropTypes.string,
  pages: PropTypes.string,
  annotation: PropTypes.string,
  genre: PropTypes.string,
  raiting: PropTypes.string,
  amount: PropTypes.string,
  authorID: PropTypes.number,
};
