import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InfoHeader } from "../Components/Books/InfoHeader";
import { Button } from "../Components/Form/Button";
import { Header } from "../Components/Header/Header";
import { BOOKS } from "../Constants/Books";
import { BOOKING } from "../Constants/Booking";
import "./styles.css";

export function BookingPage() {
  const IDuser = localStorage.getItem("iduser");

  var dateControl = document.querySelector('input[type="date"]');

  const now = new Date();

  const params = useParams();
  const book = BOOKS.find((item) => {
    if (item.id === Number(params.id)) return item;
  });

  const navigate = useNavigate();
  function booking() {
    BOOKING.push({
      IDbooking: BOOKING.length,
      bookingDate: dateControl.value,
      status: false,
      IDcard: IDuser,
      IDbook: Number(params.id),
    });
    navigate(`/books/${params.id}`);
  }

  return (
    <>
      <Header />
      <InfoHeader
        params={Number(params.id)}
        cover={book.cover}
        title={book.title}
        author={book.author}
        authorID={book.authorID}
        booking={false}
      />
      <div className="body-wrapper container">
        <p className="date-label">Выберите дату:</p>
        <form className="form-booking">
          <input
            className="date-booking"
            type="date"
            id="start"
            name="trip-start"
            min={`${now.getFullYear()}-0${now.getMonth() + 1}-0${
              now.getDate() + 1
            }`}
            max="2022-10-31"
          ></input>
          <Button value="Забронировать" onClickButton={booking} />
        </form>
      </div>
    </>
  );
}
