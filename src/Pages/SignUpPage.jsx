import React, { useState } from "react";
import { TextInput } from "../Components/Form/TextInput";
import { PassInput } from "../Components/Form/PassInput";
import { SubmitButton } from "../Components/Form/SubmitButton";
import { Form } from "../Components/Form/Form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../ApiCalls/signUpUser.js";
import { Header } from "../Components/Header/Header";

export function SignUpPage() {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const result = await signUpUser(user, setError).catch((e) => {
      console.log(e.message);
    });
    if (result) {
      navigate("/login");
    }
  }

  function changeUser(event) {
    setUser(() => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      <Header />
      <Form
        onSubmitForm={handleSubmit}
        title="Зарегистрироваться"
        render={
          <>
            <label className="form-label">
              {error !== undefined && (
                <div className="errorMessage">{error.emptyFields}</div>
              )}
              Логин
              <TextInput onChangeInput={changeUser} name="login" />
              {error !== undefined && (
                <div className="errorMessage">{error.login}</div>
              )}
            </label>
            <label className="form-label">
              E-mail
              <TextInput onChangeInput={changeUser} name="email" />
            </label>
            <label className="form-label">
              Номер читательского билета
              <TextInput onChangeInput={changeUser} name="idcard" />
              {error !== undefined && (
                <div className="errorMessage">{error.idcard}</div>
              )}
            </label>
            <label className="form-label">
              Пароль
              <PassInput onChangeInput={changeUser} name="password" />
              {error !== undefined && (
                <div className="errorMessage">{error.password}</div>
              )}
            </label>
            <label className="form-label">
              Повторите пароль
              <PassInput onChangeInput={changeUser} name="checkedPass" />
              {error !== undefined && (
                <div className="errorMessage">{error.checkedPass}</div>
              )}
            </label>
            <SubmitButton value="Зарегистрироваться" />
            <div className="form-link-wrapper">
              <NavLink className="form-link" to="/login">
                У вас уже есть аккаунт?
              </NavLink>
            </div>
          </>
        }
      ></Form>
    </>
  );
}
