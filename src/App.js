import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthorPage } from "./Pages/AuthorPage";
import { BookingPage } from "./Pages/BookingPage";
import { BooksPage } from "./Pages/BooksPage";
import { LogInPage } from "./Pages/LoginPage";
import { MainPage } from "./Pages/MainPage";
import { SignUpPage } from "./Pages/SignUpPage";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/signup" element={<SignUpPage />}></Route>
        <Route exact path="/login" element={<LogInPage />}></Route>
        <Route exact path="/books" element={<BooksPage />}>
          <Route path=":id/" element={<BooksPage />}></Route>
        </Route>
        <Route path="booking" element={<BookingPage />}>
          <Route path=":id" element={<BookingPage />}></Route>
        </Route>
        <Route exact path="/author" element={<AuthorPage />}>
          <Route path=":id" element={<AuthorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
