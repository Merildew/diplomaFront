import React from "react";
import { useParams } from "react-router-dom";
import { AuthorBody } from "../Components/Authors/AuthorBody";
import { AuthorHeader } from "../Components/Authors/AuthorHeader";

import { Header } from "../Components/Header/Header";
import { AUTHORS } from "../Constants/Authors";

export function AuthorPage() {
  const params = useParams();
  const author = AUTHORS.find((item) => {
    if (item.id === Number(params.id)) return item;
  });

  return (
    <>
      <Header />
      <AuthorHeader fullname={author.fullname} date={author.date} />
      <AuthorBody annotation={author.bio} />
    </>
  );
}
