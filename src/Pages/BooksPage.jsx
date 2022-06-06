import React from "react";
import { useParams } from "react-router-dom";
import { InfoBody } from "../Components/Books/InfoBody";
import { InfoHeader } from "../Components/Books/InfoHeader";
import { Header } from "../Components/Header/Header";
import { BOOKS } from "../Constants/Books";

export function BooksPage() {
  const params = useParams();
  const book = BOOKS.find((item) => {
    if (item.id === Number(params.id)) return item;
  });

  return (
    <>
      <Header />
      <InfoHeader
        cover={book.cover}
        title={book.title}
        author={book.author}
        authorID={book.authorID}
        IDbook={book.id}
        booking={true}
      />
      <InfoBody
        ISBN={book.ISBN}
        pages={book.pages}
        annotation={book.annotation}
        genre={book.genre}
        raiting={book.raiting}
        amount={book.amount}
      />
    </>
  );
}
