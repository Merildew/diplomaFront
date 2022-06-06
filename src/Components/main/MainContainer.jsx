import React from "react";
import "./styles.css";
import library from "../../Assets/images/library.jpg";
import { BOOKS } from "../../Constants/Books";
import PropTypes from "prop-types";

function BookItem(props) {
  return (
    <a className="book-item" href={props.link}>
      <img className="book-img" src={props.cover} alt=""></img>
      <div className="book-title">
        <h3>{props.title}</h3>
        <p className="book-author">{props.author}</p>
      </div>
    </a>
  );
}

export function MainContainer() {
  return (
    <div className="main-wrapper">
      <div className="main-container container">
        <p className="main-text">
          Библиотеки — это сокровищницы всех богатств человеческого духа.
          Библиотеки — это храм учёности, а учёность освободила больше людей,
          чем все войны истории. Библиотека для чтения в городе — это
          вечнозелёное дерево дьявольского познания, и кто постоянно забавляется
          его листами, тот и до плода дойдёт.
        </p>

        <div className="img-wrapper">
          <nav>
            <p className="nav-item">Книги</p>
            <p className="nav-item">Авторы</p>
            <a href="/signup">
              <p className="nav-item">Регистрация</p>
            </a>
          </nav>
          <img src={library} className="library-img"></img>
        </div>
        <div className="book-block">
          {BOOKS.map((item) => {
            return (
              <BookItem
                cover={item.cover}
                title={item.title}
                author={item.author}
                link={`/books/${item.id}`}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  link: PropTypes.string,
};
